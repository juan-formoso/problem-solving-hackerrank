/* Problem Description

Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
She tabulates the number of times she breaks her season record for most points and least points in a game. 
Points scored in the first game establish her record for the season, and she begins counting from there.

Example:
arr = [12, 24, 10, 24]
Scores are in the same order as the games played. She tabulates her results as follows:

                                  Count
    Game  Score  Minimum  Maximum   Min Max
     0      12     12       12       0   0
     1      24     12       24       0   1
     2      10     10       24       1   1
     3      24     10       24       1   1

Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.
*/

function breakingRecords(scores) {
  let games = scores;
  let min = scores[0];
  let max = scores[0];
  let minRecord = 0;
  let maxRecord = 0;

  for (const score of games) {
    if (max < score) {
      max = score;
      maxRecord += 1;
    } else if (score < min) {
      min = score;
      minRecord += 1;
    }
  }
  return [maxRecord, minRecord];
}
