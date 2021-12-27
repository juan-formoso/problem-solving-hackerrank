"""
Problem Description:

Camel Case is a naming style common in many programming languages. 
In Java, method and variable names typically start with a lowercase letter, with all subsequent words starting with a capital letter 
(example: startThread). Names of classes follow the same pattern, except that they start with a capital letter (example: BlueCar).

Your task is to write a program that creates or splits Camel Case variable, method, and class names.
"""

import re
while True:
  try:
    s = input().rstrip()
    sc, mcv, op = s.split(";")
    if sc == "S":
      if mcv == "M":
        cap = re.finditer('.+?(?:(?<=[a-z])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])|$)', op[:-2])
        ans = " ".join(m.group(0).lower() for m in cap)
        print(ans.rstrip())
      
      if mcv == "C":
        cap = re.findall(r'[A-Z](?:[a-z]+|[A-Z]*(?=[A-Z]|$))', op)
        ans = " ".join(i.lower() for i in cap)
        print(ans.rstrip())
      
      if mcv == "V":
        cap = re.finditer('.+?(?:(?<=[a-z])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])|$)', op)
        ans = " ".join(m.group(0).lower() for m in cap)
        print(ans.rstrip())
      
    if sc == "C":
      if mcv == "M":
        lst = op.split(" ")
        res = []
        for i in range(len(lst)):
          if i == 0:
            res.append(lst[i].lower())
          else:
            res.append(lst[i].capitalize())
        ans = "".join(i for i in res)
        ans = ans.rstrip() + "()"
        print(ans.rstrip())
      if mcv == "C":
        lst = op.split(" ")
        ans = "".join(i.capitalize() for i in lst)
        print(ans.rstrip())
      if mcv == "V":
        lst = op.split(" ")
        res = []
        for i in range(len(lst)):
          if i == 0:
            res.append(lst[i].lower())
          else:
            res.append(lst[i].capitalize())
        ans = "".join(i for i in res)
        print(ans.rstrip())

  except EOFError:
    break