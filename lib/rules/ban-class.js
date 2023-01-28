/**
 * @fileoverview Disallow new Date().
 * @author ShinSpiegel
 */
"use strict";

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Define classes to be banned from the project",
      recommended: false,
    },
    fixable: null,
    schema: [
      {
        type: "object",
        properties: {
          banned: {
            type: "array",
            items: { type: "string" },
          },
        },
      },
    ],
    messages: {
      banClass: "This class is banned.",
    },
  },

  /**
   * @type {import('eslint').Rule.RuleContext}
   */
  create(context) {
    const options = context.options[0];

    if (!options.banned || !Array.isArray(options.banned) || options.banned.length <= 0) {
      return {};
    }

    return {
      Identifier(node) {
        if (options.banned.includes(node.name)) {
          context.report({
            node: node,
            messageId: "banClass",
          });
        }
      },

      NewExpression(node) {
        if (options.banned.includes(node.callee.name)) {
          context.report({
            node: node,
            messageId: "banClass",
          });
        }
      },
    };
  },
};
