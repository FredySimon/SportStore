import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService} from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(  private userService: UserService,
                private toastr: ToastrService,) {  
  }

  @ViewChild('btnClose') btnClose: ElementRef;
  
  ngOnInit() {
    this.userService.getUsers();
    this.resetForm();
  }

  onSubmit(userForm: NgForm){
    this.userService.insertUser(userForm.value);
    this.resetForm(userForm);
    this.toastr.success('Exito', 'Compra realizada satisfactoriamente');
    this.btnClose.nativeElement.click();
  }  

  resetForm(userForm?: NgForm){
      if(userForm != null)
        userForm.reset();
        this.userService.selectUser = new User
  }

}
