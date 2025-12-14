import { marked } from "marked";
import sanitizeHtmlLibrary from "sanitize-html";

import TurndownService from "turndown";

export function sanitizeMarkdownContent(markdownContent) {
  const turndownService = new TurndownService();
  // convert markdown html
  const convertedHtml = marked.parse(markdownContent);
  console.log("converted HTML", convertedHtml);

  // sanitize html
  const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
    allowedTags: sanitizeHtmlLibrary.defaults.allowedTags,
  });

  console.log("sanitized HTML", sanitizedHtml);

  const sanitizeMarkdown = turndownService.turndown(sanitizedHtml);
  
  console.log("sanitize markdown", sanitizeMarkdown);
  return sanitizeMarkdown;
}
