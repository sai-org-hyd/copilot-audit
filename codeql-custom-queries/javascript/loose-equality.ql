/**
 * @name Detect loose equality (== or !=) in JavaScript code
 * @description Finds all uses of '==' or '!=' operators which might lead to subtle bugs.
 * @kind problem
 * @problem.severity warning
 * @id js/loose-equality
 * @tags code-quality
 */

import javascript

from BinaryOperation binOp
where
  (binOp.getOperator() = "==" or binOp.getOperator() = "!=")
select binOp, "Use strict equality '===' or '!==' instead of '" + binOp.getOperator() + "' to avoid bugs."
