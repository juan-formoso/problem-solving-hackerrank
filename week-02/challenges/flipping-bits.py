""" 
Problem Description:
You will be given a list of 32 bit unsigned integers. Flip all the bits (1 => 0 and 0 => 1) and return the result as an unsigned integer.

Input Format:
The first line of the input contains q, the number of queries.
Each of the next q lines contain an integer, n, to process.

Sample Input:
3 
2147483647 
1 
0

Sample Output:
2147483648 
4294967294 
4294967295
"""

import math
import os
import random
import re
import sys

def flippingBits(n):
    s = bin(n)[2:]
    t = s.maketrans("01", "10")
    s = s.translate(t)
    s = (32-len(s))*"1"+s
    return int(s,2)

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    q = int(input().strip())

    for q_itr in range(q):
        n = int(input().strip())

        result = flippingBits(n)

        fptr.write(str(result) + '\n')

    fptr.close()
