# -*- coding: utf-8 -*-
"""
Created on Fri May 14 17:55:13 2021

@author: amit.pochinapeddi
"""


input_dict = {'abc.txt':'Amit','abc.pdf':'Amit','ami.yml':'Rahul','jvjj':'Amit'}


def group_by_owners(input_dict):
    result = {}
    for key,value in input_dict.items():
       
        if value not in result:
            result[value] = [key]
        else:
            result[value].append(key)
    return result
group_by_owners_dict = group_by_owners(input_dict)