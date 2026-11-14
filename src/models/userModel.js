const users = [];
class UserModel {
  static findByEmail(email) { return users.find(u => u.email === email); }
  static create(userData) {
    const newUser = { id: users.length + 1, ...userData, verified: userData.email.endsWith('.edu'), createdAt: new Date() };
    users.push(newUser);
    return newUser;
  }
}
module.exports = UserModel;
