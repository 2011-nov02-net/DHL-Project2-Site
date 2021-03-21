export class User {
    id: number;
    name: string;
	email: string;
    permission: number;

    constructor(name: string, email: string ) {
        this.name = name;
        this.email = email;
        this.permission = 2;
    }
}
