import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UserService} from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { DataApiService } from '../../services/data-api.service';
import { Observable } from 'rxjs/internal/Observable';

//Interfaces
import { NinosNikeZapatoInterface } from '../../models/products';
import { NinosNikePlayeraInterface } from '../../models/products';
import { NinosNikePantsInterface } from '../../models/products';
import { NinosNikePantalonetaInterface } from '../../models/products';
import { NinosNikeChumpaInterface } from '../../models/products';

@Component({
  selector: 'app-buy-car',
  templateUrl: './buy-car.component.html',
  styleUrls: ['./buy-car.component.css']
})
export class BuyCarComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private toastr: ToastrService,
    private dataApi: DataApiService,
    private route: ActivatedRoute,
  ) { }

  public ninosNikeZapato: NinosNikeZapatoInterface = {};
  public ninosNikePlayera: NinosNikePlayeraInterface = {};
  public ninosNikePant: NinosNikePantsInterface = {};
  public ninosNikePantaloneta: NinosNikePantalonetaInterface = {};
  public ninosNikeChumpa: NinosNikeChumpaInterface = {};

  ngOnInit() {
    const idNinosNikeZapato = this.route.snapshot.params['id'];
    const idNinosNikePlayera = this.route.snapshot.params['id'];
    const idNinosNikePant = this.route.snapshot.params['id'];
    const idNinosNikePantaloneta = this.route.snapshot.params['id'];
    const idNinosNikeChumpa = this.route.snapshot.params['id'];
    this.getNinosNikeZapato(idNinosNikeZapato);
    this.getNinosNikePlayera(idNinosNikePlayera);
    this.getNinosNikePant(idNinosNikePant);
    this.getNinosNikePantaloneta(idNinosNikePantaloneta);
    this.getNinosNikeChumpa(idNinosNikeChumpa);
    this.userService.getUsers();
    this.resetForm();
  }

  getNinosNikeZapato(idNinosNikeZapato: string):void{
    this.dataApi.getOneNinosNikeZapato(idNinosNikeZapato).subscribe(ninosNikeZapato =>{
      this.ninosNikeZapato = ninosNikeZapato;
    })
  }

  getNinosNikePlayera(idNinosNikePlayera: string):void{
    this.dataApi.getOneNinosNikePlayera(idNinosNikePlayera).subscribe(ninosNikePlayera =>{
      this.ninosNikePlayera = ninosNikePlayera;
    })
  }

  getNinosNikePant(idNinosNikePant: string):void{
    this.dataApi.getOneNinosNikePant(idNinosNikePant).subscribe(ninosNikePant =>{
      this.ninosNikePant = ninosNikePant;
    })
  }

  getNinosNikePantaloneta(idNinosNikePantaloneta: string):void{
    this.dataApi.getOneNinosNikePantaloneta(idNinosNikePantaloneta).subscribe(ninosNikePantaloneta =>{
      this.ninosNikePantaloneta = ninosNikePantaloneta;
    })
  }

  getNinosNikeChumpa(idNinosNikeChumpa: string):void{
    this.dataApi.getOneNinosNikeChumpa(idNinosNikeChumpa).subscribe(ninosNikeChumpa =>{
      this.ninosNikeChumpa = ninosNikeChumpa;
    })
  }

  onSubmit(userForm: NgForm){
    this.userService.insertUser(userForm.value);
    this.resetForm(userForm);
    this.toastr.success('Compra realizada satisfactoriamente');
  }  

  resetForm(userForm?: NgForm){
      if(userForm != null)
      
        userForm.reset();
        this.userService.selectUser = new User
  }

  onLoginRedirect(): void{
    this.router.navigate(['']);
  }

  

}
