# -*- coding: utf-8 -*-
"""
Created on Fri May 14 17:55:13 2021

@author: amit.pochinapeddi
"""
try:
    input_dict={}
    N = int(input("Enter the number of key value pairs to be entered"))
except Exception as e:
    print(e)
for i in range(N):
    key,value = input().split()
    input_dict[key] = value

def group_by_owners(input_dict):
    result = {}
    for key,value in input_dict.items():
       
        if value not in result:
            result[value] = [key]
        else:
            result[value].append(key)
    return result
group_by_owners_dict = group_by_owners(input_dict)

print(group_by_owners_dict)
