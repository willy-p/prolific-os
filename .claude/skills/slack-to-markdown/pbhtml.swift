#!/usr/bin/env swift
import Cocoa

let pasteboard = NSPasteboard.general

// Try to get HTML from clipboard
if let html = pasteboard.string(forType: .html) {
    print(html)
} else if let rtf = pasteboard.data(forType: .rtf) {
    // Try RTF and convert to HTML
    if let attrString = NSAttributedString(rtf: rtf, documentAttributes: nil) {
        let htmlData = try? attrString.data(
            from: NSRange(location: 0, length: attrString.length),
            documentAttributes: [.documentType: NSAttributedString.DocumentType.html]
        )
        if let data = htmlData, let html = String(data: data, encoding: .utf8) {
            print(html)
        }
    }
} else {
    // Fall back to plain text
    if let text = pasteboard.string(forType: .string) {
        print(text)
    }
}
