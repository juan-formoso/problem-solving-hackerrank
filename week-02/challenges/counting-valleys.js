/* Problem Description: 

Submissions	Leaderboard	Discussions	Editorial
An avid hiker keeps meticulous records of their hikes. 
During the last hike that took exactly steps steps, for every step it was noted if it was an uphill, U, or a downhill, D step. 
Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

Example:

Sample Input
steps = 8
path = [UDDDUDUU]

Sample Output
1
*/

function countingValleys(steps, path) {
  let valleyStatus = 0;
  let seaLevel = 0;
  for (let i = 0; i < steps; i += 1) {
    if (path[i] == "D") {
      seaLevel -= 1;
    } else {
      if (seaLevel == -1) {
        valleyStatus += 1;
      }
      seaLevel += 1;
    }
  }
  return valleyStatus;
}
