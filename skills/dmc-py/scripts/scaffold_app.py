#!/usr/bin/env python3
"""DMC App Scaffolder - Create Dash Mantine Components app boilerplate

Usage:
    scaffold_app.py <app-name> [options]

Options:
    --type single|multi    App structure (default: single)
    --theme light|dark|auto  Default theme mode (default: auto)
    --shell                Include AppShell layout with navbar
    --output PATH          Output directory (default: current)
"""

import argparse
import sys
from pathlib import Path
from typing import Literal


def create_single_page_app(
    app_name: str,
    theme: Literal["light", "dark", "auto"],
    use_shell: bool,
) -> str:
    """Generate single-page app.py content.

    Args:
        app_name: Application name
        theme: Default theme mode
        use_shell: Whether to include AppShell layout

    Returns:
        String content for app.py
    """
    shell_layout = """
    app.layout = dmc.MantineProvider(
        id="mantine-provider",
        children=[
            dmc.AppShell(
                children=[
                    dmc.AppShellHeader(
                        dmc.Group([
                            dmc.Text(f"{app_name}", size="xl", fw=700),
                            dmc.ActionIcon(
                                DashIconify(icon="tabler:sun", width=20),
                                id="theme-toggle",
                                variant="default",
                                size="lg",
                                ml="auto",
                            ),
                        ], p="md"),
                    ),
                    dmc.AppShellNavbar(
                        dmc.Stack([
                            dmc.NavLink(label="Home", leftSection=DashIconify(icon="tabler:home", width=18)),
                            dmc.NavLink(label="About", leftSection=DashIconify(icon="tabler:info-circle", width=18)),
                        ], p="md"),
                        w=250,
                    ),
                    dmc.AppShellMain(
                        dmc.Container([
                            dmc.Title("Welcome to {app_name}", order=1, mb="md"),
                            dmc.Text("Your Dash Mantine Components app is ready!"),
                        ], p="xl"),
                    ),
                ],
                header={"height": 60},
                navbar={"width": 250, "breakpoint": "sm"},
            )
        ],
    )"""

    simple_layout = """
    app.layout = dmc.MantineProvider(
        id="mantine-provider",
        children=[
            dmc.Container([
                dmc.Group([
                    dmc.Title(f"{app_name}", order=1),
                    dmc.ActionIcon(
                        DashIconify(icon="tabler:sun", width=20),
                        id="theme-toggle",
                        variant="default",
                        size="lg",
                        ml="auto",
                    ),
                ], mb="xl", justify="space-between"),
                dmc.Text("Welcome to your Dash Mantine Components app!", size="lg"),
            ], p="xl", size="lg"),
        ],
    )"""

    layout = shell_layout if use_shell else simple_layout

    return f'''"""
{app_name} - Dash Mantine Components Application
"""

from dash import Dash, Input, Output, clientside_callback

import dash_mantine_components as dmc
from dash_iconify import DashIconify

# Initialize app
app = Dash(__name__, title="{app_name}")

# Layout
{layout}

# Theme toggle callback
clientside_callback(
    """
    function(n_clicks) {{
        const provider = document.getElementById('mantine-provider');
        const currentScheme = provider.getAttribute('data-mantine-color-scheme');
        const newScheme = currentScheme === 'light' ? 'dark' : 'light';
        return newScheme;
    }}
    """,
    Output("mantine-provider", "forceColorScheme"),
    Input("theme-toggle", "n_clicks"),
    prevent_initial_call=True,
)

if __name__ == "__main__":
    app.run(debug=True)
'''


def create_multi_page_app(
    app_name: str, theme: Literal["light", "dark", "auto"]
) -> str:
    """Generate multi-page app.py content.

    Args:
        app_name: Application name
        theme: Default theme mode

    Returns:
        String content for app.py
    """
    return f'''"""
{app_name} - Multi-page Dash Mantine Components Application
"""

from dash import Dash, Input, Output, clientside_callback, page_container

import dash_mantine_components as dmc
from dash_iconify import DashIconify

# Initialize app with pages
app = Dash(__name__, use_pages=True, title="{app_name}")

# Layout with navigation
app.layout = dmc.MantineProvider(
    id="mantine-provider",
    children=[
        dmc.AppShell(
            children=[
                dmc.AppShellHeader(
                    dmc.Group([
                        dmc.Text("{app_name}", size="xl", fw=700),
                        dmc.ActionIcon(
                            DashIconify(icon="tabler:sun", width=20),
                            id="theme-toggle",
                            variant="default",
                            size="lg",
                            ml="auto",
                        ),
                    ], p="md"),
                ),
                dmc.AppShellNavbar(
                    dmc.Stack([
                        dmc.NavLink(
                            label="Home",
                            leftSection=DashIconify(icon="tabler:home", width=18),
                            href="/",
                        ),
                        dmc.NavLink(
                            label="About",
                            leftSection=DashIconify(icon="tabler:info-circle", width=18),
                            href="/about",
                        ),
                    ], p="md"),
                    w=250,
                ),
                dmc.AppShellMain(page_container),
            ],
            header={{"height": 60}},
            navbar={{"width": 250, "breakpoint": "sm"}},
        )
    ],
)

# Theme toggle callback
clientside_callback(
    """
    function(n_clicks) {{
        const provider = document.getElementById('mantine-provider');
        const currentScheme = provider.getAttribute('data-mantine-color-scheme');
        const newScheme = currentScheme === 'light' ? 'dark' : 'light';
        return newScheme;
    }}
    """,
    Output("mantine-provider", "forceColorScheme"),
    Input("theme-toggle", "n_clicks"),
    prevent_initial_call=True,
)

if __name__ == "__main__":
    app.run(debug=True)
'''


def create_page(page_name: str, route: str, title: str) -> str:
    """Generate page module content.

    Args:
        page_name: Name of the page
        route: URL route
        title: Page title

    Returns:
        String content for page module
    """
    return f'''"""
{title} Page
"""

from dash import register_page

import dash_mantine_components as dmc

register_page(__name__, path="{route}", name="{title}")

layout = dmc.Container([
    dmc.Title("{title}", order=1, mb="md"),
    dmc.Text("This is the {page_name} page content."),
], p="xl")
'''


def scaffold_app(
    app_name: str,
    app_type: Literal["single", "multi"],
    theme: Literal["light", "dark", "auto"],
    use_shell: bool,
    output_dir: Path,
) -> None:
    """Create DMC app scaffolding.

    Args:
        app_name: Application name
        app_type: single or multi-page app
        theme: Default theme mode
        use_shell: Whether to include AppShell layout
        output_dir: Output directory path

    Raises:
        FileExistsError: If output directory already exists
    """
    app_dir = output_dir / app_name

    # Check if directory exists
    if app_dir.exists():
        raise FileExistsError(f"Directory '{app_dir}' already exists")

    # Create directory structure
    app_dir.mkdir(parents=True)
    assets_dir = app_dir / "assets"
    assets_dir.mkdir()

    # Create app.py
    if app_type == "single":
        app_content = create_single_page_app(app_name, theme, use_shell)
    else:
        app_content = create_multi_page_app(app_name, theme)

    (app_dir / "app.py").write_text(app_content)

    # Create multi-page structure
    if app_type == "multi":
        pages_dir = app_dir / "pages"
        pages_dir.mkdir()

        (pages_dir / "__init__.py").write_text('"""Pages module"""')
        (pages_dir / "home.py").write_text(create_page("home", "/", "Home"))
        (pages_dir / "about.py").write_text(create_page("about", "/about", "About"))

    # Create requirements.txt
    requirements = "dash>=2.14.0\ndash-mantine-components>=2.5.0\ndash-iconify>=0.1.2\n"
    (app_dir / "requirements.txt").write_text(requirements)

    # Create .gitignore
    gitignore = "*.pyc\n__pycache__/\n.venv/\nvenv/\n.env\n"
    (app_dir / ".gitignore").write_text(gitignore)

    print(f"✓ Created {app_type}-page app '{app_name}' in {app_dir}")
    print("\nNext steps:")
    print(f"  cd {app_dir}")
    print("  python -m venv .venv")
    print("  source .venv/bin/activate")
    print("  pip install -r requirements.txt")
    print("  python app.py")


def main() -> None:
    """Main entry point."""
    parser = argparse.ArgumentParser(
        description="DMC App Scaffolder - Create Dash Mantine Components app boilerplate",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )

    parser.add_argument("app_name", help="Application name")
    parser.add_argument(
        "--type",
        choices=["single", "multi"],
        default="single",
        help="App structure (default: single)",
    )
    parser.add_argument(
        "--theme",
        choices=["light", "dark", "auto"],
        default="auto",
        help="Default theme mode (default: auto)",
    )
    parser.add_argument(
        "--shell",
        action="store_true",
        help="Include AppShell layout with navbar",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=Path.cwd(),
        help="Output directory (default: current)",
    )

    args = parser.parse_args()

    try:
        scaffold_app(
            args.app_name,
            args.type,
            args.theme,
            args.shell,
            args.output,
        )
    except FileExistsError as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"Unexpected error: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
