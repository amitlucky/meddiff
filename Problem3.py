# -*- coding: utf-8 -*-
"""
Created on Fri May 14 18:45:42 2021

@author: amit.pochinapeddi
"""

file = open("log1.txt")

data = file.read()

file.close()

file = open("log2.txt",'w')

file.write(data)

file.close()