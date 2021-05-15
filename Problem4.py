# -*- coding: utf-8 -*-
"""
Created on Fri May 14 19:11:02 2021

@author: amit.pochinapeddi
"""



path = input("Enter the path you want to use")
inputdata = input("Enter the cd path absolute or relative")
print(path)
print(inputdata)
def cd(data,path):
   
    alphabet = None
    data = data.split("/")
   
    for i in range(len(data)):
        if data[i] not in path and data[i]!="..":
            alphabet = data[i-1]
            break
    if alphabet is None:
        
        pathindex = path.index(data[-1])
        return path[:pathindex+1]
    else:
        
        try:
            beforeindex = path.index(alphabet)
            afterindex = inputdata.index(alphabet)
        except Exception:
            path = path[:-1]
            data = data[-1]
            path+=data
            return path
       
    beforepath=""
    beforepath+=path[:beforeindex]
    beforepath+=inputdata[afterindex:]
   
    return beforepath

result = cd(inputdata,path)
print("The path is changed to ",result)