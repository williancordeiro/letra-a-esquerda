export default class User {
    
    constructor(name, lastName, user, email, password) {
        name(name);
        lastName(lastName);
        user(user);
        email(email);
        password(password);
    }

    set name(name) {
        this.name = name;
    }

    get name() {
        this._name;
    }

    set lastName(lastName) {
        this.lastName = lastName;
    }

    get lastName() {
        this._lastName;
    }

    set user(user) {
        this.user = user;
    }

    get user() {
        this._user;
    }

    set email(email) {
        this.email = email;
    }

    get email() {
        this._email;
    }

    set password(password) {
        this.password = password;
    }

    get password() {
        this._password;
    }
}

