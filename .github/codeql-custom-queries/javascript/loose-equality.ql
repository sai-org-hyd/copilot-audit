/**
 * @name Potential console.log in production
 * @description Finds calls to console.log. These are often unwanted in production code.
 * @kind problem
 * @id javascript/potential-console-log
 */

import javascript

from Call call, Function consoleLog, Variable consoleVariable
where
  call.getTarget() = consoleLog.resolve() and
  consoleVariable.getName() = "console" and
  consoleLog.getName() = "log" and
  consoleLog.getDeclaringType().(GlobalObjectType).hasGlobalName("console") and
  call.getReceiver() = consoleVariable.read().getDefinition()
select call, "This call to console.log might be unwanted in production."