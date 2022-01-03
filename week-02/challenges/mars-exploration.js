/* Problem Description:
A space explorer's ship crashed on Mars! They send a series of SOS messages to Earth for help.
Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, s, determine how many letters of the SOS message have been changed by radiation.

Example
s = 'SOSTOT'
The original message was SOSSOS. Two of the message's characters were changed in transit.

Explanation Sample
S = SOSSPSSQSSOR, and signal length S = 12. Sami sent 4 SOS messages (i.e.: 12/3 = 4).

Expected signal: SOSSOSSOSSOS
Recieved signal: SOSSPSSQSSOR

We print the number of changed letters, which is 3. */

function marsExploration(s) {
  let sosCount = s.length / 3;
  let original = "SOS".repeat(sosCount);
  let errorCount = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] != original[i]) {
      errorCount += 1;
    }
  }
  return errorCount;
}
