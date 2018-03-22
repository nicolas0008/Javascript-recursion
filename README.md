Question:
Sample Dataset:
CategoryId ParentCategoryId Name Keywords
100 -1 Business Money
200 -1 Tutoring Teaching
101 100 Accounting Taxes
102 100 Taxation
201 200 Computer
103 101 Corporate Tax
202 201 Operating System
109 101 Small business Tax

Write a working program which should do the following:
a. Given a category id return category name, parentCategoryId and key-word. Ensure that if
key-word is not present for the category, then the data from its parent should be
returned.
Sample Input/Output:
i. Input: 201; Output: ParentCategoryID=200, Name=Computer,
Keywords=Teaching
ii. Input: 202; Output: ParentCategoryID=201, Name=Operating System,
Keywords=Teaching
b. Given category level as parameter (say N) return the names of the categories which are
of N’th level in the hierarchy (categories with parentId -1 are at 1st level).
Sample Input/Output:
i. Input: 2; Output: 101, 102, 201
ii. Input: 3; Output: 103, 109, 202
