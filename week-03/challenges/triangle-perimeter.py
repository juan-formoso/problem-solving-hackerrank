"""
Problem Description:

Given an array of stick lengths, use 3 of them to construct a non-degenerate triangle with the maximum possible perimeter. Return an array of the lengths of its sides as 3 integers in non-decreasing order.

If there are several valid triangles having the maximum perimeter:

Choose the one with the longest maximum side.
If more than one has that maximum, choose from them the one with the longest minimum side.
If more than one has that maximum as well, print any one them.
If no non-degenerate triangle exists, return [-1].
"""

#!/bin/python3

import math
import os
import random
import re
import sys

def is_valid(a, b, c):
  if a < b+c and b < c+a and c < a+b:
    return True
  else:
    return False

def maximumPerimeterTriangle(sticks):
  res = [-1]
  sticks = sorted(sticks, reverse=True)
    
  print(sticks)
    
  for ind in range(2, len(sticks)):
    for jnd in range(1, ind):
      for knd in range(0, jnd):
        print("checking {} {} {}".format(sticks[ind], sticks[jnd], sticks[knd]))
        if is_valid(sticks[ind], sticks[jnd], sticks[knd]):
          print("valid")
          res = (sticks[ind], sticks[jnd], sticks[knd])
          return res
                    
  return res

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    sticks = list(map(int, input().rstrip().split()))

    result = maximumPerimeterTriangle(sticks)

    fptr.write(' '.join(map(str, result)))
    fptr.write('\n')

    fptr.close()
