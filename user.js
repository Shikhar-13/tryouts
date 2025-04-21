class User{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`Hello ${this.name}`);
    }


}
class Admin extends User{
    constructor(name, role){
        super(name);
        this.role = role;
    }
    greet(){
        super.greet();
        console.log(`Hello ${this.role} (Admin)`);
    }
}
const admin = new Admin('John Doe', 'Administrator');
admin.greet();
