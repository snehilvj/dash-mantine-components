#!/usr/bin/env python3
"""DMC Documentation Fetcher - Fetch and search official llms.txt

Fetches the official Dash Mantine Components documentation from
https://www.dash-mantine-components.com/assets/llms.txt and provides
search functionality with local caching.

Usage:
    fetch_docs.py [query] [options]

Options:
    --update            Force refresh of cached docs
    --section SECTION   Filter by section (components, theming, etc.)
    --limit N           Max results (default: 10)
    --raw               Print raw docs without search
    --list-sections     List available sections

Examples:
    python fetch_docs.py "Select"
    python fetch_docs.py "TableOfContents" --limit 5
    python fetch_docs.py --section "Button" --limit 20
    python fetch_docs.py --update
    python fetch_docs.py --raw > dmc_docs.txt
"""

from __future__ import annotations

import argparse
import re
import subprocess
import sys
from datetime import datetime, timedelta
from pathlib import Path

# Lazy import httpx
httpx = None

DOCS_URL = "https://www.dash-mantine-components.com/assets/llms.txt"
CACHE_DIR = Path.home() / ".cache" / "dmc-py"
CACHE_FILE = CACHE_DIR / "llms.txt"
CACHE_META = CACHE_DIR / "cache_meta.txt"
CACHE_TTL_HOURS = 24


def ensure_httpx() -> None:
    """Ensure httpx is installed, install if missing."""
    global httpx
    if httpx is not None:
        return

    try:
        import httpx as _httpx

        httpx = _httpx
    except ImportError:
        print("Installing httpx...", file=sys.stderr)
        subprocess.check_call(
            [sys.executable, "-m", "pip", "install", "-q", "httpx"],
            stdout=subprocess.DEVNULL,
        )
        import httpx as _httpx

        httpx = _httpx


def get_cached_docs() -> str | None:
    """Get docs from cache if valid.

    Returns:
        Cached documentation text if valid, None otherwise
    """
    if not CACHE_FILE.exists() or not CACHE_META.exists():
        return None

    try:
        meta = CACHE_META.read_text().strip()
        cached_time = datetime.fromisoformat(meta)
        if datetime.now() - cached_time > timedelta(hours=CACHE_TTL_HOURS):
            return None
        return CACHE_FILE.read_text(encoding="utf-8")
    except (ValueError, OSError):
        return None


def fetch_docs(force_update: bool = False) -> str:
    """Fetch docs from URL or cache.

    Args:
        force_update: Force refresh even if cache is valid

    Returns:
        Documentation text

    Raises:
        httpx.HTTPError: If fetch fails
    """
    if not force_update:
        cached = get_cached_docs()
        if cached:
            print("Using cached docs (use --update to refresh)", file=sys.stderr)
            return cached

    ensure_httpx()

    print(f"Fetching docs from {DOCS_URL}...", file=sys.stderr)
    with httpx.Client(timeout=60.0, follow_redirects=True) as client:
        response = client.get(DOCS_URL)
        response.raise_for_status()
        content = response.text

    # Cache the result
    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    CACHE_FILE.write_text(content, encoding="utf-8")
    CACHE_META.write_text(datetime.now().isoformat())
    print(f"Cached {len(content):,} bytes to {CACHE_FILE}", file=sys.stderr)

    return content


def extract_sections(docs: str) -> list[str]:
    """Extract section headings from docs.

    Args:
        docs: Documentation text

    Returns:
        List of section headings
    """
    headings = re.findall(r"^#{1,3}\s+(.+)$", docs, re.MULTILINE)
    return sorted(set(headings))


def search_docs(
    docs: str,
    query: str,
    section: str | None = None,
    limit: int = 10,
) -> list[tuple[str, str]]:
    """Search docs for query.

    Args:
        docs: Documentation text
        query: Search query
        section: Optional section filter
        limit: Maximum results

    Returns:
        List of (heading, context) tuples
    """
    results = []
    pattern = re.compile(re.escape(query), re.IGNORECASE)

    # Split into sections by ## or ### headings
    sections = re.split(r"\n(?=#{1,3}\s)", docs)

    for sec in sections:
        if not sec.strip():
            continue

        lines = sec.split("\n")
        heading = lines[0].lstrip("#").strip() if lines else "Unknown"

        # Filter by section if specified
        if section and section.lower() not in heading.lower():
            continue

        # Search content
        if pattern.search(sec):
            # Get lines around matches
            for i, line in enumerate(lines):
                if pattern.search(line):
                    start = max(0, i - 2)
                    end = min(len(lines), i + 8)
                    context = "\n".join(lines[start:end])

                    # Avoid duplicate contexts
                    if not any(context in existing for _, existing in results):
                        results.append((heading, context))

                    if len(results) >= limit:
                        return results

    return results


def highlight_query(text: str, query: str) -> str:
    """Highlight query matches in text.

    Args:
        text: Text to highlight
        query: Query to highlight

    Returns:
        Text with query highlighted using brackets
    """
    return re.sub(
        f"({re.escape(query)})",
        r"[\1]",
        text,
        flags=re.IGNORECASE,
    )


def main() -> None:
    """Main entry point."""
    parser = argparse.ArgumentParser(
        description="DMC Documentation Fetcher - Fetch and search official llms.txt",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  %(prog)s "Select"                    Search for Select component
  %(prog)s "TableOfContents"           Find new v2.5 component
  %(prog)s --section "Button"          Search within Button section
  %(prog)s --update                    Force refresh cache
  %(prog)s --list-sections             Show available sections
  %(prog)s --raw                       Output full docs (for piping)
""",
    )

    parser.add_argument("query", nargs="?", help="Search query")
    parser.add_argument(
        "--update", "-u", action="store_true", help="Force refresh of cached docs"
    )
    parser.add_argument("--section", "-s", help="Filter by section heading")
    parser.add_argument(
        "--limit", "-n", type=int, default=10, help="Max results (default: 10)"
    )
    parser.add_argument(
        "--raw", "-r", action="store_true", help="Print raw docs without search"
    )
    parser.add_argument(
        "--list-sections", "-l", action="store_true", help="List available sections"
    )

    args = parser.parse_args()

    try:
        docs = fetch_docs(args.update)
    except Exception as e:
        print(f"Error fetching docs: {e}", file=sys.stderr)
        sys.exit(1)

    # Raw output mode
    if args.raw:
        print(docs)
        return

    # List sections mode
    if args.list_sections:
        sections = extract_sections(docs)
        print(f"Found {len(sections)} sections:\n")
        for s in sections[:50]:  # Limit to first 50
            print(f"  - {s}")
        if len(sections) > 50:
            print(f"\n  ... and {len(sections) - 50} more")
        return

    # Search mode (default)
    if not args.query:
        parser.print_help()
        print("\n\nQuick usage: fetch_docs.py <query>")
        print("Example: fetch_docs.py 'Select'")
        return

    results = search_docs(docs, args.query, args.section, args.limit)

    if not results:
        print(f"No results found for '{args.query}'")
        if args.section:
            print(f"  (filtered by section: {args.section})")
        print("\nTry:")
        print("  - A different query term")
        print("  - Remove the --section filter")
        print("  - Use --list-sections to see available sections")
        return

    print(f"Found {len(results)} result(s) for '{args.query}':\n")
    print("=" * 60)

    for heading, context in results:
        print(f"\n## {heading}\n")
        print(highlight_query(context.strip(), args.query))
        print("\n" + "-" * 60)


if __name__ == "__main__":
    main()
