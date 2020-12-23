export class User {
    id: number;
    fullName: string;
	email: string;
    permission: number;
    
    constructor(fullName: string, email: string ) {
        this.fullName = fullName;
        this.email = email;
        this.permission = 2;
    }
}
