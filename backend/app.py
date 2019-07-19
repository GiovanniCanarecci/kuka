from flask import Flask,redirect,url_for,request
import json

app = Flask(__name__)
portNumber = 5000

#users array to be replaced with users table in DB.
#Obviously all data stored here will disappear every time server starts
users = []

@app.route('/login',methods=['POST'])
def login():
    userid = request.values["userid"]
    password = request.values["password"]

    #Change this if statement to compare request data to users table in DB
    if userid == "admin" and password == "abc123":
        return json.dumps({'guid':"a1b2-c3d4-e5f6-g7h8",'role':"admin"})
    else:
        return json.dumps({'guid':None,'role':None})

@app.route('/register',methods=['POST'])
def register():
    userid = request.values["userid"]
    password = request.values["password"]
    fullname = request.values["fullname"]
    role = request.values["role"]

    #Add code to INSERT user data into users table. If successful return "PASS" else "FAIL
    users.append({'userid':userid,'password':password,'fullname':fullname,'role':role})
    return "PASS"

@app.route('/list',methods=['GET'])
def listAll():
    return json.dumps(users)

@app.route('/remove',methods=['GET','DELETE'])
def remove():
    userid = request.values["userid"]

    #Replace code below with delete sql statement. 
    #If successful return "PASS" otherwise "FAIL"
    for user in users:
        if user['userid'] == userid:
            users.remove(user)
            return "PASS"
    return "FAIL"

@app.route('/')
def index():
    return redirect("http://localhost:"+str(portNumber)+"/static/index.html")

if __name__ == '__main__':
    app.run(port=portNumber,debug=True)