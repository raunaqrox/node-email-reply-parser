/**
 * This file is part of node-email-reply-parser.
 * For the full license information, please see the LICENSE file distributed with this package.
 */

var Parser = require("./lib/Parser");

/**
 * Parses the given text into an email
 * @param {string} text the email text to parse
 * @param {boolean} [visibleTextOnly] if true, the visible text will be returned instead of an Email
 * @returns {Email|string} the parsed Email or visible text, depending on the second argument
 */
function parse(text, visibleTextOnly) {
    var parser = new Parser();
    var email = parser.parse(text);

    if (visibleTextOnly) {
        if (!email) return '';
        else return email.getVisibleText();
    } else return email;
}

module.exports = parse;
