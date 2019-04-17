import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../../services/data-api.service'
import { AuthService } from '../../../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-nike',
  templateUrl: './nike.component.html',
  styleUrls: ['./nike.component.css']})

export class NikeComponentNiños implements OnInit {

  constructor(  private dataApi: DataApiService,
                private authService: AuthService,
                 private afsAuth: AngularFireAuth) { }

     public isLogged: boolean = false;

    public ninosNikeZapatos = [];
    public ninosNikeZapato = '';

    public ninosNikePlayeras = [];
    public ninosNikePlayera = '';

    public ninosNikePants = [];
    public ninosNikePant = '';

    public ninosNikePantalonetas = [];
    public ninosNikePantaloneta = '';

    public ninosNikeChumpas = [];
    public ninosNikeChumpa = '';

  ngOnInit() {
    this.getCurrentUser();

    this.dataApi.getAllNinosNikeZapatos().subscribe(ninosNikeZapatos =>{
      console.log('NIÑOSNIKEZAPATOS', ninosNikeZapatos);
      this.ninosNikeZapatos = ninosNikeZapatos;})

    this.dataApi.getAllNinosNikePlayeras().subscribe(ninosNikePlayeras =>{
      console.log('NIÑOSNIKEPLAYERAS', ninosNikePlayeras);
      this.ninosNikePlayeras = ninosNikePlayeras;})
  
    this.dataApi.getAllNinosNikePants().subscribe(ninosNikePants =>{
      console.log('NIÑOSNIKEPANTS', ninosNikePants);
      this.ninosNikePants = ninosNikePants;})

    this.dataApi.getAllNinosNikePantalonetas().subscribe(ninosNikePantalonetas =>{
      console.log('NIÑOSNIKEPANTALONETAS', ninosNikePantalonetas);
      this.ninosNikePantalonetas = ninosNikePantalonetas;})

    this.dataApi.getAllNinosNikeChumpas().subscribe(ninosNikeChumpas =>{
      console.log('NIÑOSNIKEPANTALONETAS', ninosNikeChumpas);
      this.ninosNikeChumpas = ninosNikeChumpas;})
}

getCurrentUser(){
  this.authService.isAuth().subscribe( auth =>{
    if(auth){
      console.log('user logged');
      this.isLogged = true;
    }else{
      console.log('Not user logged');
      this.isLogged = false;
    }
  })
}

onLogout(){
  this.afsAuth.auth.signOut();
}
}
