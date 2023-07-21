"use strict";
class Users {
    constructor() {
        this.name = '';
    }
    setName(name) {
        this.name = name;
    }
    displayName() {
        console.log(this.name);
    }
    getNameLength() {
        console.log(this.name.length);
    }
}
const u1 = new Users;
u1.setName("anuj");
//u1.name ="SASU";
u1.displayName();
u1.getNameLength();
