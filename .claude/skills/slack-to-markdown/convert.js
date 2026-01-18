#!/usr/bin/env node

/**
 * Slack HTML to Markdown Converter
 * Uses Turndown (https://github.com/mixmark-io/turndown) with GFM plugin
 */

const TurndownService = require('turndown');
const turndownPluginGfm = require('turndown-plugin-gfm');

/**
 * Convert Slack HTML to Markdown
 * @param {string} html - HTML content from Slack
 * @returns {string} - Clean Markdown
 */
function convertSlackToMarkdown(html) {
  const turndownService = new TurndownService({
    headingStyle: 'atx',
    bulletListMarker: '-',
    codeBlockStyle: 'fenced',
    linkStyle: 'inlined',
    emDelimiter: '*',
    strongDelimiter: '**',
  });

  // Add GFM support (tables, strikethrough, task lists)
  turndownService.use(turndownPluginGfm.gfm);

  // Custom rule: Slack mentions (spans with mention class)
  turndownService.addRule('slackMention', {
    filter: (node) => {
      return (
        node.nodeName === 'SPAN' &&
        (node.classList?.contains('mention') ||
          node.classList?.contains('c-member_slug') ||
          node.getAttribute('data-member-id'))
      );
    },
    replacement: (content) => content,
  });

  // Custom rule: Slack emoji images
  turndownService.addRule('slackEmoji', {
    filter: (node) => {
      return (
        node.nodeName === 'IMG' &&
        (node.classList?.contains('emoji') ||
          node.getAttribute('data-emoji-name') ||
          node.getAttribute('alt')?.startsWith(':'))
      );
    },
    replacement: (content, node) => {
      const alt = node.getAttribute('alt');
      if (alt) return alt;
      const emojiName = node.getAttribute('data-emoji-name');
      if (emojiName) return `:${emojiName}:`;
      return '';
    },
  });

  // Custom rule: Remove empty spans
  turndownService.addRule('emptySpan', {
    filter: (node) => {
      return node.nodeName === 'SPAN' && !node.textContent?.trim();
    },
    replacement: () => '',
  });

  // Clean up common Slack HTML artifacts before conversion
  let cleanedHtml = html
    // Normalize line breaks
    .replace(/<br\s*\/?>/gi, '<br>')
    // Remove Slack-specific wrapper divs
    .replace(/<div class="p-rich_text_section">/gi, '<p>')
    .replace(/<\/div>/gi, '</p>')
    // Clean up multiple spaces
    .replace(/&nbsp;/g, ' ')
    // Remove zero-width characters
    .replace(/[\u200B-\u200D\uFEFF]/g, '');

  const markdown = turndownService.turndown(cleanedHtml);

  // Post-process: clean up extra whitespace
  return markdown
    .replace(/\n{3,}/g, '\n\n') // Max 2 newlines
    .replace(/^\s+|\s+$/g, ''); // Trim
}

// CLI mode: read from stdin
if (require.main === module) {
  let input = '';

  process.stdin.setEncoding('utf8');

  process.stdin.on('readable', () => {
    let chunk;
    while ((chunk = process.stdin.read()) !== null) {
      input += chunk;
    }
  });

  process.stdin.on('end', () => {
    if (input.trim()) {
      const result = convertSlackToMarkdown(input);
      console.log(result);
    } else {
      console.error('Usage: echo "<html>" | node convert.js');
      console.error('   or: pbpaste | node convert.js');
      process.exit(1);
    }
  });
}

module.exports = { convertSlackToMarkdown };
