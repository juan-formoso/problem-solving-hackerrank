""" 
Problem Description: 
A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet.
Ignore case. Return either pangram or not pangram as appropriate.

Example:
s = 'The quick brown fox jumped over the lazy dog'
The string contains all letters in the English alphabet, so return pangram.
"""

import math
import os
import random
import re
import sys

def pangrams(s):
  s = set(s)
  s.discard(" ")
  return "pangram" if len(s)==26 else "not pangram"
  print(pangrams(input().lower()))

if __name__ == '__main__':
  fptr = open(os.environ['OUTPUT_PATH'], 'w')
  s = input()
  result = pangrams(s)
  fptr.write(result + '\n')
  fptr.close()