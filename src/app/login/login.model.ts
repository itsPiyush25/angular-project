export interface LoginRequest {
    username : string;
    password : string;
    // email : string
}

export class LoginUser{
    public username : string;
    private password : string;
    // private email : string;

    // constructor - 1 primitive parameters

    // constructor(username:string, password:string){
    //     this.username = username;
    //     this.password = password;
    // }

    // constructor - 2 object/interface based

    constructor(data : LoginRequest){
        const {username,password } = data;
        this.username = username;
        this.password = password;
    
    }

    validateLogin = (inputPassword: string): boolean => {
        return this.password===inputPassword;
    }

    validatePassword(input : string):boolean{
        return this.password ===input;
    }

    getWelcomeFromLogin() : string{
        return `Welcome ${this.username}`; //literal
    }

    // multiple exports from a single file
}



