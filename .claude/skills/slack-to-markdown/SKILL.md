# Slack to Markdown Converter

Convert Slack-pasted HTML content to clean Markdown format.

## When to Use

Use this skill when:
- The user pastes content from Slack that appears as HTML or has HTML artifacts
- The user asks to "clean up" or "convert" Slack messages
- Content contains HTML tags like `<p>`, `<br>`, `<a>`, `<strong>`, `<em>`, `<code>`, etc.

## How to Use

### Option 1: Quick Conversion (No Dependencies)

For simple Slack content, apply these transformations manually:

1. `<br>` or `<br/>` → newline
2. `<p>...</p>` → content + double newline
3. `<strong>...</strong>` or `<b>...</b>` → `**...**`
4. `<em>...</em>` or `<i>...</i>` → `*...*`
5. `<code>...</code>` → `` `...` ``
6. `<pre>...</pre>` → fenced code block
7. `<a href="url">text</a>` → `[text](url)`
8. `<ul><li>...</li></ul>` → `- ...`
9. `<ol><li>...</li></ol>` → `1. ...`
10. `<blockquote>...</blockquote>` → `> ...`
11. `<s>...</s>` or `<del>...</del>` → `~~...~~`
12. Remove `<span>` tags, keep content
13. Decode HTML entities: `&amp;` → `&`, `&lt;` → `<`, `&gt;` → `>`, `&nbsp;` → space

### Option 2: Using the Converter Script

For complex HTML, use the included Node.js script:

```bash
# Install dependencies (one-time)
cd .claude/skills/slack-to-markdown
npm install

# Convert from clipboard (macOS)
pbpaste | node convert.js

# Convert from file
cat input.html | node convert.js

# Convert inline
echo '<p>Hello <strong>world</strong></p>' | node convert.js
```

### Option 3: Programmatic Use

```javascript
const { convertSlackToMarkdown } = require('./.claude/skills/slack-to-markdown/convert.js');

const html = '<p>Hello <strong>world</strong></p>';
const markdown = convertSlackToMarkdown(html);
console.log(markdown); // Hello **world**
```

## Slack-Specific Patterns

Slack HTML often includes these patterns:

| Slack Element | HTML Pattern | Markdown Output |
|---------------|--------------|-----------------|
| Bold | `<b>text</b>` | `**text**` |
| Italic | `<i>text</i>` | `*text*` |
| Strike | `<s>text</s>` | `~~text~~` |
| Code | `<code>text</code>` | `` `text` `` |
| Code block | `<pre>text</pre>` | ``` ```text``` ``` |
| Link | `<a href="url">text</a>` | `[text](url)` |
| Mention | `<span class="mention">@user</span>` | `@user` |
| Emoji | `<img alt=":emoji:">` | `:emoji:` |
| Quote | `<blockquote>text</blockquote>` | `> text` |

## Example

**Input (Slack HTML):**
```html
<p>Hey team! <b>Important update</b>: we need to <a href="https://example.com">review the doc</a> before <i>Friday</i>.</p>
<ul>
<li>Item one</li>
<li>Item two</li>
</ul>
```

**Output (Markdown):**
```markdown
Hey team! **Important update**: we need to [review the doc](https://example.com) before *Friday*.

- Item one
- Item two
```
