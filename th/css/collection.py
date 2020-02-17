n = 3
# to generate css file
print("PLEASE SELECT LANGUAGE (th/en) : ",end="")
lang = input()
file = lang + "/css/collection.css"
f = open(file,"w")
code = ""
for i in range(n):
    code += (".Front" + str(i+1) + " {") + "\n"
    code += ("   background-size: contain;") + "\n"
    code += ("   background-repeat: no-repeat;") + "\n"
    code += ("   background-position: center;") + "\n"
    code += ('   background: url("../images/pattern{}/front.png");'.format(i+1)) + "\n"
    code += ("}") + "\n"

for i in range(n):
    code += (".Back" + str(i+1) + " {") + "\n"
    code += ("   background-size: contain;") + "\n"
    code += ("   background-repeat: no-repeat;") + "\n"
    code += ("   background-position: center;") + "\n"
    code += ('   background: url("../images/pattern{}/back.png");'.format(i+1)) + "\n"
    code += ("}") + "\n"

for i in range(n):
    code += (".CLogo" + str(i+1) + " {") + "\n"
    code += ("   background-size: contain;") + "\n"
    code += ("   background-repeat: no-repeat;") + "\n"
    code += ("   background-position: center;") + "\n"
    code += ('   background: url("../images/pattern{}/logo.png");'.format(i+1)) + "\n"
    code += ("}") + "\n"

f.write(code)
print(code)
print("done")
