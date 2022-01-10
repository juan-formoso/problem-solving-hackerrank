"""Problem Description:
A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. They always turn pages one at a time. When they open the book, page 1 is always on the right side:

When they flip page 1, they see pages 2 and 3. Each page except the last page will always be printed on both sides. The last page may only be printed on the front, given the length of the book. If the book is n pages long, and a student wants to turn to page , what is the minimum number of pages to turn? They can start at the beginning or the end of the book.

Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page p.

Example:
n = 5
p = 3

Using the diagram above, if the student wants to get to page 3, they open the book to page 1, flip 1 page and they are on the correct page. If they open the book to the last page, page 5, they turn 1 page and are at the correct page. Return 1.
"""
import math
import os
import random
import re
import sys

def pageCount(n, p):
  if p == 1:
    return 0
  if p == n:
    return 0
  if (n % 2) == 0 and n - 1 == p:
    return 1
  pages_turned = 0
  output = []
  for i in range(1,n+1,2):
    if i >= p:
      output.append(pages_turned)
    else:
      pages_turned += 1
  pages_turned = 0
  for i in range(n, 0, -2):
    if i - 1 <= p:
      output.append(pages_turned)
    else:
      pages_turned += 1
  return min(output)


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    p = int(input().strip())

    result = pageCount(n, p)

    fptr.write(str(result) + '\n')

    fptr.close()
