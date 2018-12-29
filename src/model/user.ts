export default class User {
    private userId : number;

    private username : string;

    private email : string;

    private dob : string;

    private age : number;

    private gender : string;

    private password : string;

    public getUserId() : number {
        return this.userId;
    }

    public getUsername() : string {
        return this.username;
    }

    public getEmail() : string {
        return this.email;
    }

    public getDob() : string {
        return this.dob;
    }

    public getGender() : string {
        return this.gender;
    }

    public setUserId(userId : number) {
        this.userId = userId;
    }

    public setUsername(username : string) {
        this.username = username;
    }

    public setEmail(email : string) {
        this.email = email;
    }

    public setDob(dob : string) {
        this.dob = dob;
    }

    public setGender(gender : string) {
        this.gender = gender;
    }

    public setPassword(password : string) {
        this.password = password;
    }
}