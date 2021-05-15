# -*- coding: utf-8 -*-
"""
Created on Fri May 14 17:50:36 2021

@author: amit.pochinapeddi
"""

word = input("Enter a word").lower()
if word[::-1] == word:
    print("Palindrome")
else:
    print("Not a palindrome")