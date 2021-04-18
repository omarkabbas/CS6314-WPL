
from flask import Flask, render_template, request, json, redirect, jsonify
from flaskext.mysql import MySQL
from flask import session

app = Flask(__name__)

mysql = MySQL()

# MySQL configurations
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'root'
app.config['MYSQL_DATABASE_DB'] = 'FavoritePlaces'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_PORT'] = 8889
mysql.init_app(app)



app.secret_key = 'secret key can be anything!'


@app.route("/")
def main():
    return render_template('index.html')

@app.route('/getPlaces')
def listItems():
    try:
        
        con = mysql.connect()
        cursor = con.cursor()
    
        cursor.execute("SELECT * FROM restaurants")
        
        rows  = cursor.fetchall()
        #return json.dumps({'message': 'inside If statement'})
        response = jsonify(rows)

        return response
        
    except Exception as e:
        return json.dumps({'message': 'Not working!!'})
    finally:
        cursor.close()
        con.close()

if __name__ == "__main__":
    app.run()   


#ALTER TABLE table_name AUTO_INCREMENT = start_value

