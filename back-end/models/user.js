import connection from "../database";

export default class User {
  constructor(id, name, password, email) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.email = email;
  }

  static async findOne({ email, password }, callback) {
    const rows = await (
      await connection
    ).execute("SELECT * FROM users WHERE email = ? and password = ?", [
      email,
      password,
    ]);

    if (rows.length == 0) {
      callback("User not found", null);
    } else {
      return new User(
        rows[0].insertId,
        rows[0].name,
        rows[0].password,
        rows[0].email
      );
    }
  }
}
