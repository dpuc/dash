export class Person{
    name: string;
    last_name: string;
    curp: string;
    peso: number;
    altura:number;
    sexo:string;
    zona: string;

    constructor ( name:string, last_name: string,curp:string,peso:number,altura:number,sexo:string,zona:string ){
        this.name = name;
        this.last_name = last_name;
        this.curp = curp;
        this.peso = peso;
        this.altura = altura;
        this.sexo = sexo;
        this.zona = zona;
    }

}