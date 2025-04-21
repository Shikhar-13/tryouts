function User(name,email){
    this.name = name;
    this.email = email;
}
User.prototype.login = function(){
    console.log(`${this.email} has logged in`);
    return this;
}
User.prototype.logout = function(){
    console.log(`${this.email} has logged out`);
    return this;
}
const currentUser = new User()
currentUser.login().logout();