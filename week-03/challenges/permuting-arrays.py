""" 
Problem Description:
There are two n-element arrays of integers, A and B. Permute them into some A' and B' such that the relation A'[i] + B'[i] >= k holds for all i where 0 <= i < n.

There will be q queries consisting of A, B, and k. For each query, return YES if some permutation A', B' satisfying the relation exists. Otherwise, return NO.

Example
A = [0, 1]
B = [0, 2]
k = 1
A valid A', B' is A' = [1, 0] and B' = [0, 2]: 1 + 0 >= 1 and 0 + 2 >= 1. Return YES.
"""

import math
import os
import random
import re
import sys

def twoArrays(k, A, B):
  A.sort()
  B.sort(reverse=True)
  for i in range(len(A)):
    if A[i] + B[i] < k:
      return "NO"
  return "YES"

if __name__ == '__main__':
  fptr = open(os.environ['OUTPUT_PATH'], 'w')
  q = int(input().strip())
  for q_itr in range(q):
    first_multiple_input = input().rstrip().split()
    n = int(first_multiple_input[0])
    k = int(first_multiple_input[1])
    A = list(map(int, input().rstrip().split()))
    B = list(map(int, input().rstrip().split()))
    result = twoArrays(k, A, B)
    fptr.write(result + '\n')
  fptr.close()
