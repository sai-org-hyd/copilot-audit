



import javascript

/**
 * @name Detect loose equality (== or !=) in JavaScript code
 * @description Finds all uses of '==' or '!=' operators which might lead to subtle bugs.
 * @kind problem
 * @problem.severity warning
 * @id js/loose-equality
 * @tags code-quality
 */

from BinaryEqualityTest eq
where eq.getOperator() = "==" or eq.getOperator() = "!="
select eq, "Use strict equality '===' or '!==' instead of '" + eq.getOperator() + "' to avoid bugs."

