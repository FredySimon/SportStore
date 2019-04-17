export class User {
    $Key: string;
    name: string;
    surname: string;
    email: string;
    nit: string;
    cardNumber: number;
    phoneNumber: number;
    direction:string;
    producto: string;
    precioUnitario:number;
    cantidad: number;
    precioTotal: number;
    comentario: string;
}

export interface UserInterface {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    photoUrl?: string;
}