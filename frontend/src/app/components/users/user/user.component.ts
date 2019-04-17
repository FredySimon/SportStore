import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UserService} from '../../../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../../../models/user'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private toastr: ToastrService,
    private storage: AngularFireStorage,
    ) { }
    
    @ViewChild('imageUser') inputImageUser: ElementRef

  public email: string = '';
  public password: string = '';
  
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;

  ngOnInit() {
    this.userService.getUsers();
    this.resetForm();
    this.err();
  }

  onUpload(e){
    //console.log('subir', e.target.files[0])
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/profile_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
  }

  onSubmit(userForm: NgForm){
    this.userService.insertUser(userForm.value);
    this.resetForm(userForm);
    this.toastr.success('Usuario guardado exitosamente');
    this.router.navigate(['user/ingresar']);
  }  

  resetForm(userForm?: NgForm){
      if(userForm != null)
        userForm.reset();
        this.userService.selectUser = new User
  }

  onAddUser(){
    this.authService.registerUser(this.email, this.password)
    .then((res)=>{
      this.authService.isAuth().subscribe( user => {
        if (user){
          user.updateProfile({
            displayName: '',
            photoURL: this.inputImageUser.nativeElement.value
          }).then(() => {
            this.toastr.success('Usuario guardado exitosamente');
            this.router.navigate(['']);
          }).catch((error) => this.toastr.error('Error'));
        }
      })
    }).catch(err => console.log('err', err.message));
  }

  onLoginGoogle(): void {
    this.authService.loginGoogleUser()
    .then( (res) => {
      this.onLoginRedirect();
    }).catch (err => console.log('err', err.message));
   }

  onLoginFacebook(): void {
    this.authService.loginFacebookUser()
    .then( (res) => {
      this.onLoginRedirect();
    }).catch (err => console.log('err', err.message));
   }

   onLoginRedirect(): void{
    this.router.navigate(['']);
  }

err(){
  this.toastr.error('Error');
}
}
