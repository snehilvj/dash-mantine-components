#!/usr/bin/env python3
"""DMC Component Search - Search local skill references and official documentation

Searches the local skill reference files and optionally the cached official
llms.txt documentation for Dash Mantine Components information.

Usage:
    component_search.py <query> [options]

Options:
    --category CATEGORY    Filter by component category
    --props               Search prop definitions only
    --limit N             Max results (default: 10)
    --online              Also search cached llms.txt (via fetch_docs.py)
    --docs-dir PATH       Custom documentation directory path

Examples:
    python component_search.py "Button"
    python component_search.py "Select" --props --limit 20
    python component_search.py "TableOfContents" --online
"""

from __future__ import annotations

import argparse
import re
import subprocess
import sys
from pathlib import Path


def find_docs_directory() -> Path | None:
    """Find DMC skill references directory.

    Searches in known locations for the skill references.

    Returns:
        Path to references directory if found, None otherwise
    """
    possible_paths = [
        # Primary locations for the skill
        Path.home() / ".codex" / "skills" / "dmc-py" / "references",
        Path.home() / ".claude" / "skills" / "dmc-py" / "references",
        # Fallback to current directory structure
        Path(__file__).parent.parent / "references",
        Path.cwd() / "references",
    ]

    for path in possible_paths:
        if path.exists() and path.is_dir():
            return path

    return None


def search_files(
    query: str,
    docs_dir: Path,
    category: str | None = None,
    props_only: bool = False,
    limit: int = 10,
) -> list[tuple[Path, int, str]]:
    """Search documentation files for query.

    Args:
        query: Search query string
        docs_dir: Documentation directory path
        category: Optional category filter
        props_only: Search only prop definitions
        limit: Maximum number of results

    Returns:
        List of tuples (file_path, line_number, line_content)
    """
    results = []
    pattern = re.compile(re.escape(query), re.IGNORECASE)

    # Search markdown files
    for file_path in docs_dir.glob("**/*.md"):
        if not file_path.is_file():
            continue

        # Category filter - match filename
        if category and category.lower() not in file_path.stem.lower():
            continue

        try:
            with open(file_path, encoding="utf-8") as f:
                in_props_section = False

                for line_num, line in enumerate(f, 1):
                    # Track if we're in a props section
                    if props_only:
                        if re.match(r"#+\s*(Props|Properties)", line, re.IGNORECASE):
                            in_props_section = True
                        elif line.startswith("#"):
                            in_props_section = False

                        # Skip if not in props section
                        if not in_props_section:
                            continue

                    # Search for pattern
                    if pattern.search(line):
                        results.append((file_path, line_num, line.strip()))

                        # Stop if we've reached the limit
                        if len(results) >= limit:
                            return results

        except (OSError, UnicodeDecodeError) as e:
            print(f"Warning: Could not read {file_path}: {e}", file=sys.stderr)
            continue

    return results


def format_result(
    file_path: Path,
    line_num: int,
    line_content: str,
    docs_dir: Path,
    query: str,
) -> str:
    """Format a search result for display.

    Args:
        file_path: Path to the file
        line_num: Line number
        line_content: Line content
        docs_dir: Documentation directory (for relative path)
        query: Original search query (for highlighting)

    Returns:
        Formatted result string
    """
    # Get relative path
    try:
        rel_path = file_path.relative_to(docs_dir)
    except ValueError:
        rel_path = file_path.name

    # Highlight query in content (simple approach)
    highlighted = re.sub(
        f"({re.escape(query)})",
        r"[\1]",
        line_content,
        flags=re.IGNORECASE,
    )

    return f"{rel_path}:{line_num}\n  {highlighted}"


def search_online(query: str, limit: int = 5) -> None:
    """Search cached llms.txt via fetch_docs.py.

    Args:
        query: Search query
        limit: Maximum results
    """
    fetch_docs = Path(__file__).parent / "fetch_docs.py"

    if not fetch_docs.exists():
        print(
            "\nOnline search unavailable: fetch_docs.py not found",
            file=sys.stderr,
        )
        return

    print(f"\n{'=' * 40}")
    print("Online docs (via fetch_docs.py):")
    print("=" * 40)

    try:
        subprocess.run(
            [sys.executable, str(fetch_docs), query, "--limit", str(limit)],
            check=False,
        )
    except Exception as e:
        print(f"Error running fetch_docs.py: {e}", file=sys.stderr)


def main() -> None:
    """Main entry point."""
    parser = argparse.ArgumentParser(
        description="DMC Component Search - Search skill references and online docs",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  %(prog)s "Button"                   Search for Button
  %(prog)s "Select" --props           Search only prop definitions
  %(prog)s "TableOfContents" --online Include online docs search
""",
    )

    parser.add_argument("query", help="Search query string")
    parser.add_argument(
        "--category",
        "-c",
        help="Filter by category (matches filename)",
    )
    parser.add_argument(
        "--props",
        "-p",
        action="store_true",
        help="Search prop definitions only",
    )
    parser.add_argument(
        "--limit",
        "-n",
        type=int,
        default=10,
        help="Maximum results (default: 10)",
    )
    parser.add_argument(
        "--online",
        "-o",
        action="store_true",
        help="Also search cached llms.txt via fetch_docs.py",
    )
    parser.add_argument(
        "--docs-dir",
        type=Path,
        help="Custom documentation directory path",
    )

    args = parser.parse_args()

    # Find docs directory
    docs_dir = args.docs_dir or find_docs_directory()

    if not docs_dir:
        print(
            "Warning: Could not find skill references directory.\n"
            "Searched in:\n"
            "  - ~/.codex/skills/dmc-py/references\n"
            "  - ~/.claude/skills/dmc-py/references\n\n"
            "Use --docs-dir to specify a custom path, or --online for web docs.",
            file=sys.stderr,
        )
        if args.online:
            search_online(args.query, args.limit)
            return
        sys.exit(1)

    # Perform local search
    results = search_files(
        args.query,
        docs_dir,
        args.category,
        args.props,
        args.limit,
    )

    # Display local results
    if not results:
        print(f"No local results found for '{args.query}' in {docs_dir}")
    else:
        print(f"Found {len(results)} local result(s) for '{args.query}':\n")
        for file_path, line_num, line_content in results:
            print(
                format_result(file_path, line_num, line_content, docs_dir, args.query)
            )
            print()

    # Optionally search online docs
    if args.online:
        search_online(args.query, args.limit)


if __name__ == "__main__":
    main()
