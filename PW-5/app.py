
from flask import Flask, render_template, request, json, redirect
from flaskext.mysql import MySQL
from flask import session

app = Flask(__name__)

mysql = MySQL()

# MySQL configurations
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'root'
app.config['MYSQL_DATABASE_DB'] = 'TodoList'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_PORT'] = 3307
mysql.init_app(app)



app.secret_key = 'secret key can be anything!'


@app.route("/")
def main():
    return render_template('index.html')

@app.route('/showSignUp')
def showSignUp():
    return render_template('signup.html')

@app.route('/showSignin')
def showSignin():
    return render_template('signin.html')

@app.route('/userHome')
def userHome():
    if session.get('user'):
        return render_template('userHome.html')
    else:
        return render_template('error.html',error = 'Unauthorized Access')

@app.route('/logout')
def logout():
    session.pop('user',None)
    return redirect('/')


@app.route('/showAddItem')
def showAddItem():
    return render_template('addItem.html')

@app.route('/validateLogin', methods=['POST'])
def validateLogin():
    try:
        _email = request.form['inputEmail']
        _password = request.form['inputPassword']

        con = mysql.connect()
        cursor = con.cursor()
        

        cursor.execute("SELECT * FROM tbl_user WHERE email = %s", (_email))

        data = cursor.fetchall()


        if len(data) > 0:
            if str(data[0][3]) == _password:
                session['user'] = data[0][0]
                return redirect('/userHome')
            else:
                return render_template('error.html',error = 'Wrong Email address or Password.')
        else:
            return render_template('error.html',error = 'Wrong Email address or Password.')


    except Exception as e:
        return render_template('error.html',error = str(e))
    finally:
        cursor.close()
        con.close()

    
@app.route('/signUp',methods=['POST'])
def signUp():
 
    # read the posted values from the UI
    _name = request.form['inputName']
    _email = request.form['inputEmail']
    _password = request.form['inputPassword']
 
    # validate the received values
    if _name and _email and _password:

        conn = mysql.connect()
        cursor = conn.cursor()

        cursor.execute("INSERT INTO tbl_user(name, email, password) VALUES (%s, %s, %s)", (_name, _email, _password))
        

        data = cursor.fetchall()

        if len(data) == 0:
            conn.commit()
            return json.dumps({'message':'User created successfully !'})
        else:
            return json.dumps({'error':str(data[0])})


    else:
        return json.dumps({'html':'<span>Enter the required fields!</span>'})


@app.route('/addItem', methods=['POST'])
def addItem():  
    try:
        if session.get('user'):
            _title = request.form['inputTitle']
            _description = request.form['inputDescription']
            _user = session.get('user')

            conn = mysql.connect()
            cursor = conn.cursor()

            cursor.execute("INSERT INTO tbl_todo(title, description, userid) VALUES (%s, %s, %s)", (_title, _description, _user))
            
            data = cursor.fetchall()

            if len(data) == 0:
                conn.commit()
                #return json.dumps({'message': 'Todo item created successfully !'})
                return redirect('/userHome')
            else:
                return render_template('error.html', error = 'An error occurred!')
        else:
            return render_template('error.html', error = 'Unauthorized Access')
    except Exception as e:
        return render_template('error.html', error = str(e))

#@app.route('/listItems', methods=['GET'])
@app.route('/listItems')
def listItems():
    try:
        if session.get('user'):
            _user = session.get('user')
            con = mysql.connect()
            cursor = con.cursor()
        
            cursor.execute("SELECT * FROM tbl_todo WHERE userid = %s", (_user))
            #cursor.execute("SELECT * FROM tbl_todo WHERE userid = 1")
            todoitems = cursor.fetchall()
            #return json.dumps({'message': 'inside If statement'})
            todoitems_dict = []

            for item in todoitems:
                todo_dict = {
                    'id': item[0],
                    'title': item[1],
                    'description': item[2]
                }
                todoitems_dict.append(todo_dict)

            return json.dumps(todoitems_dict)
        else:
            #return render_template('error.html', error = 'Unauthorized Access')
            return json.dumps({'message': 'Not working!'})
    except Exception as e:
        return json.dumps({'message': 'Not working!!'})
    finally:
        cursor.close()
        con.close()




if __name__ == "__main__":
    app.run()   




