import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database'

import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: AngularFireList<any>;
  selectUser: User = new User();

  constructor(private firebase: AngularFireDatabase) { }

  getUsers(){
    return this.userList = this.firebase.list('compra');
  }

  insertUser(user: User){
    this.userList.push({
      name: user.name,
      surname: user.surname,
      email: user.email,
      nit: user.nit,
      cardNumber: user.cardNumber,
      phoneNumber: user.phoneNumber,
      direction: user.direction,
      producto: user.producto,
      precioUnitario: user.precioUnitario,
      cantidad: user.cantidad,
      precioTotal: user.precioTotal,
      comentario: user.comentario,
    })
  }

}
