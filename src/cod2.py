import sqlite3

def unsafe_query(user_id):
    conn = sqlite3.connect('example.db')
    cursor = conn.cursor()
    query = f"SELECT * FROM users WHERE id = {user_id}"
    cursor.execute(query)
    results = cursor.fetchall()
    conn.close()
    return results