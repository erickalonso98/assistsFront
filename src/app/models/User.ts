export class User{
    constructor(
        public id:number,
        public name:string,
        public surnames:string,
        public email:string,
        public password:string,
        public image:string,
        public description:string,
        public roles:Array<string>
    ){}
}