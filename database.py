import sqlite3

def create_database():
    conn = sqlite3.connect("sql.db")
    c = conn.cursor()
    c.execute('''
    CREATE TABLE IF NOT EXISTS employees(
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL)
    ''')
    
    c.execute('''
    CREATE TABLE IF NOT EXISTS members(
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        four_digits TEXT NOT NULL)
    ''')

    try:
        c.execute("INSERT INTO sqlite_sequence (name, seq) VALUES ('members', 1999)")
        c.execute("INSERT INTO sqlite_sequence (name, seq) VALUES ('employees', 999)")
    except:
        pass
    conn.commit()
    conn.close()


create_database()