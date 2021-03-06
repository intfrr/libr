export default class User {
    private userId : number;

    private username : string;

    private email : string;

    private dob : string;

    private displayAge : boolean;

    private nsfw : boolean;

    private gender : string;

    private password : string;

    private sexuality : string;

    private relationshipStyle : string;

    private relationshipStatus : string;

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

    public getDisplayAge() : boolean {
        return this.displayAge;
    }

    public getNsfw() : boolean {
        return this.nsfw;
    }

    public getGender() : string {
        return this.gender;
    }

    public getSexuality() : string {
        return this.sexuality;
    }

    public getRelationshipStyle() : string {
        return this.relationshipStyle;
    }

    public getRelationshipStatus() : string {
        return this.relationshipStatus;
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

    public setDisplayAge(displayAge : boolean) {
        this.displayAge = displayAge;
    }

    public setNsfw(nsfw : boolean) {
        this.nsfw = nsfw;
    }

    public setGender(gender : string) {
        this.gender = gender;
    }

    public setPassword(password : string) {
        this.password = password;
    }

    public setSexuality(sexuality : string) {
        this.sexuality = sexuality;
    }

    public setRelationshipStyle(relationshipStyle: string) {
        this.relationshipStyle = relationshipStyle;
    }

    public setRelationshipStatus(relationshipStatus: string) {
        this.relationshipStatus = relationshipStatus;
    }

    public setAll(data : any) {
        for(var key in data) {
            //@ts-ignore
            this[key] = data[key];
        }
    }
}