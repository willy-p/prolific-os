#!/bin/bash
# Extract HTML from macOS clipboard and convert to Markdown

# Get HTML from clipboard using AppleScript
html=$(osascript -e '
try
    set htmlData to the clipboard as «class HTML»
    set htmlText to do shell script "echo " & quoted form of (htmlData as text) & " | xxd -r -p"
    return htmlText
on error
    return ""
end try
')

if [ -z "$html" ]; then
    # No HTML in clipboard, fall back to plain text
    echo "No HTML found in clipboard. Using plain text." >&2
    pbpaste
else
    # Convert HTML to Markdown
    echo "$html" | node "$(dirname "$0")/convert.js"
fi
