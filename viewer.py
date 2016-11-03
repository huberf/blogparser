import requests as r
import json
import sys

response = r.get("http://net.noahcodes.com/api/v1/article?url=" + sys.argv[1])
contents = json.loads(response.text)
print contents["title"]
lines = []
curr = ""
for i in contents["text"]:
    curr += i
    if len(curr) > 100 and (i == " " or i == "."):
        lines += [curr]
        curr = ""

lines += [curr]
for i in lines:
    print i
