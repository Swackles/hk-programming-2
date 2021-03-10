import AbstractService from './abstractService';

enum Roles {
  Admin,
  User = 999,
  Default = 999
}

class Users extends AbstractService {
  static Columns = ['id', 'email', 'password', 'roleId'];
  static Table = 'rooms';
  static Roles = Roles;

  email: string;
  password: string;
  roleId: number;

  constructor(data: object) {
    super(data);

    if (!this.roleId) this.roleId = Roles.Default;
  }

  static getUserWithEmail(email: string): Users {
    // `SELECT ${this.Columns} FROM ${this.Table} WHERE email = '${email}'`;

    return new Users({
      id: 1,
      email: email,
      password: '$2b$10$UDmXweILhOldbSJDF.Wu.uAvFenrjzD4GQHFPC0ES9gJ56IHzbhYW'
    })
  }
}

export default Users;
