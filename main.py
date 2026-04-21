from flask import Flask, redirect, request, render_template, url_for, session
import sqlite3
from hash import User
import csv
import io
from flask import Response


app = Flask(__name__)


@app.route('/', methods=["GET", "POST"])
def login():
    return render_template("login.html")


@app.route('/login/success', methods=["GET","POST"])
def login_user():
        if request.method == "POST":
            email = request.form.get("email")
            password = request.form.get("password")
            if password:
                
                return render_template("add-member.html")
            else:
                return render_template("fail.html")


@app.route('/create', methods=["GET","POST"])
def create_user():
    if request.method == "POST":
        email = request.form.get("email")
        email = email.strip().lower()
        password = request.form.get("password")

        if password:
            u = User()
            u.password = password.strip("scrypt:")

            conn = sqlite3.connect('sql.db')
            c = conn.cursor()
            c.execute("INSERT INTO employees(email,password) VALUES(?, ?)", (email, u.password_hash))
            conn.commit()
            conn.close()
            return render_template("add-member.html")
        
    return render_template("create.html")



@app.route('/add/member/list', methods=["GET","POST"])
def add_member():
    
    if request.method == "POST":
        first_name = request.form.get("first-name")
        last_name = request.form.get("last-name")
        digits = request.form.get("digits")
        if first_name and last_name and digits is not None:
            conn = sqlite3.connect('sql.db')
            c = conn.cursor()
            c.execute("INSERT INTO members(first_name,last_name,four_digits) VALUES(?, ?, ?)", (first_name, last_name, digits))
            conn.commit()
        else:
            return render_template("fail.html")

    c.execute("SELECT first_name, last_name, four_digits FROM members")
    members = c.fetchall()
    conn.close()
        
        
    return render_template("add-member.html", members=members)





@app.route('/download', methods=["GET", "POST"])
def download_csv():
    conn = sqlite3.connect('sql.db')
    c = conn.cursor()

    output = io.StringIO()
    writer = csv.writer(output)

    writer.writerow(['--- EMPLOYEES ---'])
    writer.writerow(['id', 'email', 'password'])
    c.execute("SELECT * FROM employees")
    writer.writerows(c.fetchall())

    writer.writerow([])

    writer.writerow(['--- MEMBERS ---'])
    writer.writerow(['id', 'first_name', 'last_name', 'four_digits'])
    c.execute("SELECT * FROM members")
    writer.writerows(c.fetchall())

    conn.close()

    output.seek(0)
    return Response(
        output,
        mimetype='text/csv',
        headers={"Content-Disposition": "attachment; filename=sql_project.csv"}
    )
    

if __name__ == "__main__":
    app.run(debug=True)