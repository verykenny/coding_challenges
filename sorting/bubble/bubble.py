"""
In Place Bubble Sort

Set flag to indicate whether the array is sorted or not -- initialize to true;

Iterate through the array:
    Check current element and adjacent element
      If adjacent element is greater than current element, swap them and set flag to false
      If adjacent element is less than or equal to current element, do nothing
After iterating through the array, check the flag -- if true, the array is sorted and can be returned
if false, repeate the process with a while loop checking the flag
"""


mylist = [5, 3, 1, 2, 4]

def bubble_sort(mylist):
  """
  In place bubble sort
  """
  sorted = False
  while not sorted:
    sorted = True
    for i in range(1, len(mylist)):
      if mylist[i - 1] > mylist[i]:
        sorted = False
        mylist[i - 1], mylist[i] = mylist[i], mylist[i - 1]
  return mylist

print(bubble_sort(mylist))
