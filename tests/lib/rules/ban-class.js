/**
 * @fileoverview check if someone added a asMutable from seamless-immutable
 * @author Neil Kalman
 */
"use strict";

const RuleTester = require("eslint").RuleTester;
const rule = require("../../../lib/rules/ban-class");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("ban-class", rule, {
  valid: [
    {
      code: `var value = new NewDate()`,
      options: [{ banned: ["Date"] }],
    },
    {
      code: `var value = NewDate().now()`,
      options: [{ banned: ["Date"] }],
    },
  ],

  invalid: [
    {
      code: `var value = Date.now()`,
      options: [{ banned: ["Date"] }],
      errors: [{ message: "This class is banned.", type: "Identifier" }],
    },
    {
      code: `var value = Date()`,
      options: [{ banned: ["Date"] }],
      errors: [{ message: "This class is banned.", type: "Identifier" }],
    },
    {
      code: `var value = new Date()`,
      options: [{ banned: ["Date"] }],
      errors: [
        { message: "This class is banned.", type: "NewExpression" },
        { message: "This class is banned.", type: "Identifier" },
      ],
    },
  ],
});
