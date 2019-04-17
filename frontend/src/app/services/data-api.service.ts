import { Injectable } from '@angular/core';
import {  AngularFirestore, 
          AngularFirestoreCollection, 
          AngularFirestoreDocument } from '@angular/fire/firestore';

//Interfaces
import { NinosNikeZapatoInterface } from '../models/products';
import { NinosNikePlayeraInterface } from '../models/products';
import { NinosNikePantsInterface } from '../models/products';
import { NinosNikePantalonetaInterface } from '../models/products';
import { NinosNikeChumpaInterface } from '../models/products';

import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class DataApiService {

  constructor(private afs:AngularFirestore) { 

  //Niños Nike
    this.ninosNikeZapatosCollection = afs.collection< NinosNikeZapatoInterface >( 'niñosNikeZapatos' );
    this.ninosNikeZapatos = this.ninosNikeZapatosCollection.valueChanges();

    this.ninosNikePlayerasCollection = afs.collection< NinosNikePlayeraInterface >( 'niñosNikePlayeras' );
    this.ninosNikePlayeras = this.ninosNikePlayerasCollection.valueChanges();

    this.ninosNikePantsCollection = afs.collection< NinosNikePantsInterface >( 'niñosNikePants' );
    this.ninosNikePants = this.ninosNikePantsCollection.valueChanges();

    this.ninosNikePantalonetasCollection = afs.collection< NinosNikePantalonetaInterface >( 'niñosNikePantalonetas' );
    this.ninosNikePantalonetas = this.ninosNikePantalonetasCollection.valueChanges();

    this.ninosNikeChumpasCollection = afs.collection< NinosNikeChumpaInterface >( 'niñosNikeChumpas' );
    this.ninosNikeChumpas = this.ninosNikeChumpasCollection.valueChanges();

  //Niños adidas
  }

  //Niños Nike
  private ninosNikeZapatosCollection: AngularFirestoreCollection< NinosNikeZapatoInterface >;
  private ninosNikeZapatos: Observable< NinosNikeZapatoInterface []>;
  private ninosNikeZapatoDoc: AngularFirestoreDocument<NinosNikeZapatoInterface>;
  private ninosNikeZapato: Observable<NinosNikeZapatoInterface>;

  private ninosNikePlayerasCollection: AngularFirestoreCollection< NinosNikePlayeraInterface >;
  private ninosNikePlayeras: Observable< NinosNikePlayeraInterface []>;
  private ninosNikePlayeraDoc: AngularFirestoreDocument<NinosNikePlayeraInterface>;
  private ninosNikePlayera: Observable<NinosNikePlayeraInterface>;

  private ninosNikePantsCollection: AngularFirestoreCollection< NinosNikePantsInterface >;
  private ninosNikePants: Observable< NinosNikePantsInterface []>;
  private ninosNikePantDoc: AngularFirestoreDocument<NinosNikePantsInterface>;
  private ninosNikePant: Observable<NinosNikePantsInterface>;

  private ninosNikePantalonetasCollection: AngularFirestoreCollection< NinosNikePantalonetaInterface >;
  private ninosNikePantalonetas: Observable< NinosNikePantalonetaInterface []>;
  private ninosNikePantalonetaDoc: AngularFirestoreDocument<NinosNikePantalonetaInterface>;
  private ninosNikePantaloneta: Observable<NinosNikePantalonetaInterface>;

  private ninosNikeChumpasCollection: AngularFirestoreCollection< NinosNikeChumpaInterface >;
  private ninosNikeChumpas: Observable< NinosNikeChumpaInterface []>;
  private ninosNikeChumpaDoc: AngularFirestoreDocument<NinosNikeChumpaInterface>;
  private ninosNikeChumpa: Observable<NinosNikeChumpaInterface>;

  //Niños adidas

  //Niños Nike
    getAllNinosNikeZapatos(){
      return this.ninosNikeZapatos = this.ninosNikeZapatosCollection.snapshotChanges()
      .pipe(map (changes =>{
        return changes.map( action =>{
          const data = action.payload.doc.data() as NinosNikeZapatoInterface;
          data.id = action.payload.doc.id;
          return data;
    })}))}

    getOneNinosNikeZapato(idNinosNikeZapato: string){
      this.ninosNikeZapatoDoc = this.afs.doc<NinosNikeZapatoInterface>(`niñosNikeZapatos/${idNinosNikeZapato}`);
      return this.ninosNikeZapato = this.ninosNikeZapatoDoc.snapshotChanges().pipe(map(action =>{
        if (action.payload.exists == false){
          return null;
        }else {
          const data = action.payload.data() as NinosNikeZapatoInterface;
          data.id = action.payload.id;
          return data;
        }}));}

    getAllNinosNikePlayeras(){
      return this.ninosNikePlayeras = this.ninosNikePlayerasCollection.snapshotChanges()
      .pipe(map (changes =>{
        return changes.map(action =>{
          const data = action.payload.doc.data() as NinosNikePlayeraInterface;
          data.id = action.payload.doc.id;
          return data;
    })}))}

    getOneNinosNikePlayera(idNinosNikePlayera: string){
      this.ninosNikePlayeraDoc = this.afs.doc<NinosNikePlayeraInterface>(`niñosNikePlayeras/${idNinosNikePlayera}`);
      return this.ninosNikePlayera = this.ninosNikePlayeraDoc.snapshotChanges().pipe(map(action =>{
        if (action.payload.exists == false){
          return null;
        }else{
          const data = action.payload.data() as NinosNikePlayeraInterface;
          data.id = action.payload.id; 
          return data;
        }}));}

    getAllNinosNikePants(){
      return this.ninosNikePants = this.ninosNikePantsCollection.snapshotChanges()
      .pipe(map (changes =>{
        return changes.map( action =>{
          const data = action.payload.doc.data() as NinosNikePantsInterface;
          data.id = action.payload.doc.id;
          return data;
    })}))}

    getOneNinosNikePant(idNinosNikePant: string){
      this.ninosNikePantDoc = this.afs.doc<NinosNikePantsInterface>(`niñosNikePants/${idNinosNikePant}`);
      return this.ninosNikePlayera = this.ninosNikePantDoc.snapshotChanges().pipe(map(action =>{
        if (action.payload.exists == false){
          return null;
        }else {
          const data = action.payload.data() as NinosNikePantsInterface;
          data.id = action.payload.id;
          return data;
        }}));}

    getAllNinosNikePantalonetas(){
      return this.ninosNikePantalonetas = this.ninosNikePantalonetasCollection.snapshotChanges()
      .pipe(map (changes =>{
        return changes.map( action =>{
          const data = action.payload.doc.data() as NinosNikePantalonetaInterface;
          data.id = action.payload.doc.id;
          return data;
    })}))}

    getOneNinosNikePantaloneta(idNinosNikePantaloneta: string){
      this.ninosNikePantalonetaDoc = this.afs.doc<NinosNikePantalonetaInterface>(`niñosNikePantalonetas/${idNinosNikePantaloneta}`);
      return this.ninosNikePantaloneta = this.ninosNikePantalonetaDoc.snapshotChanges().pipe(map(action =>{
        if (action.payload.exists == false){
          return null;
        }else {
          const data = action.payload.data() as NinosNikePantalonetaInterface;
          data.id = action.payload.id;
          return data;
        }
      }));
    }

    getAllNinosNikeChumpas(){
      return this.ninosNikeChumpas = this.ninosNikeChumpasCollection.snapshotChanges()
      .pipe(map (changes =>{
        return changes.map( action =>{
          const data = action.payload.doc.data() as NinosNikeChumpaInterface;
          data.id = action.payload.doc.id;
          return data;
    })}))}

    getOneNinosNikeChumpa(idNinosNikeChumpa: string){
      this.ninosNikeChumpaDoc = this.afs.doc<NinosNikeChumpaInterface>(`niñosNikeChumpas/${idNinosNikeChumpa}`);
      return this.ninosNikeChumpa = this.ninosNikeChumpaDoc.snapshotChanges().pipe(map(action =>{
        if (action.payload.exists == false){
          return null;
        }else {
          const data = action.payload.data() as NinosNikeChumpaInterface;
          data.id = action.payload.id;
          return data;
        }
      }));
    }
  
}
