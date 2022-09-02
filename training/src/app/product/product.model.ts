export class Product{
    public id:string
    public identity: string;
    public name: string;
    public quantity: string;
    public description:string;
    public file:File;
   
    

    constructor(id:string,identity:string,name:string,quantity:string,description:string,file:File){
        this.id=id;
        this.identity= identity;
        this.name = name;
        this.quantity = quantity ;
        this.description = description;
        this.file = file;
       
    }
}