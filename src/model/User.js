class User {
  connection(id, name, email, password) {
    this.id = id;
    this.name = name;
    // this.email = email;
    this.password = password;
  }

  getId() {
    return this.id;
  }

  setId(id) {
    this.id = id;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  // getEmail() {
  //   return this.email;
  // }

  // setEmail(email) {
  //   this.email = email;
  // }

  getPassword() {
    return this.password;
  }

  setPassword(password) {
    this.password = password;
  }
}

module.exports = User;
