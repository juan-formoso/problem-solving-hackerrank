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
