import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app-routing.module';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';

//FireBase
import { AngularFireModule }  from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

//Barra de navegacion Materialize
import { MyNavComponent } from './components/my-nav/my-nav.component';

//Menu de navegacion Material
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes
import { UserComponent } from './components/users/user/user.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { BuyCarComponent } from './components/buy-car/buy-car.component';

import { NikeComponentNiños } from './components/productos/niños/nike/nike.component';
import { AdidasComponentNiños } from './components/productos/niños/adidas/adidas.component';
import { UnderComponentNiños } from './components/productos/niños/under/under.component';
import { EverlastComponentNiños } from './components/productos/niños/everlast/everlast.component';
import { PumaComponentNiños } from './components/productos/niños/puma/puma.component';
import { SupraComponentNiños } from './components/productos/niños/supra/supra.component';
import { UmbroComponentNiños } from './components/productos/niños/umbro/umbro.component';

import { VansComponentNiñas } from './components/productos/niñas/vans/vans.component';
import { AdidasComponentNiñas } from './components/productos/niñas/adidas/adidas.component';
import { UnderComponentNiñas } from './components/productos/niñas/under/under.component';
import { EverlastComponentNiñas } from './components/productos/niñas/everlast/everlast.component';
import { NikeComponentNiñas } from './components/productos/niñas/nike/nike.component';
import { ChampionsComponentNiñas } from './components/productos/niñas/champions/champions.component';
import { PumaComponentNiñas } from './components/productos/niñas/puma/puma.component';

import { NikeComponentHombres } from './components/productos/hombres/nike/nike.component';
import { AdidasComponentHombres } from './components/productos/hombres/adidas/adidas.component';
import { UnderComponentHombres } from './components/productos/hombres/under/under.component';
import { EverlastComponentHombres } from './components/productos/hombres/everlast/everlast.component';
import { PumaComponentHombres } from './components/productos/hombres/puma/puma.component';
import { SupraComponentHombres } from './components/productos/hombres/supra/supra.component';
import { UmbroComponentHombres } from './components/productos/hombres/umbro/umbro.component';

import { VansComponentMujeres } from './components/productos/mujeres/vans/vans.component';
import { AdidasComponentMujeres } from './components/productos/mujeres/adidas/adidas.component';
import { UnderComponentMujeres } from './components/productos/mujeres/under/under.component';
import { EverlastComponentMujeres } from './components/productos/mujeres/everlast/everlast.component';
import { NikeComponentMujeres } from './components/productos/mujeres/nike/nike.component';
import { ChampionsComponentMujeres } from './components/productos/mujeres/champions/champions.component';
import { PumaComponentMujeres } from './components/productos/mujeres/puma/puma.component';

import { FutbolComponent } from './components/productos/deportes/futbol/futbol.component';
import { BasketbolComponent } from './components/productos/deportes/basketbol/basketbol.component';
import { BeisbolComponent } from './components/productos/deportes/beisbol/beisbol.component';
import { FutAmComponent } from './components/productos/deportes/fut-am/fut-am.component';
import { OtrosComponent } from './components/productos/deportes/otros/otros.component';

//Servicios
import { UserService } from './services/user.service';
import { TestComponentRenderer } from '@angular/core/testing';
import { NavbarComponent } from './components/navbar/navbar.component';

//Imagen
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { ModalComponent } from './components/modal/modal.component';



const appRoutes: Routes = [
  {
    path:'dashboard',
    component: UserComponent
  },
  {
    path:'',
    component: AppComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    UserComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    Page404Component,
    BuyCarComponent,
    NavbarComponent,

    NikeComponentNiños,
    AdidasComponentNiños,
    UnderComponentNiños,
    EverlastComponentNiños,
    PumaComponentNiños,
    SupraComponentNiños,
    UmbroComponentNiños,

    VansComponentNiñas,
    AdidasComponentNiñas,
    UnderComponentNiñas,
    EverlastComponentNiñas,
    NikeComponentNiñas,
    ChampionsComponentNiñas,
    PumaComponentNiñas,

    NikeComponentHombres,
    AdidasComponentHombres,
    UnderComponentHombres,
    EverlastComponentHombres,
    PumaComponentHombres,
    SupraComponentHombres,
    UmbroComponentHombres,

    VansComponentMujeres,
    AdidasComponentMujeres,
    UnderComponentMujeres,
    EverlastComponentMujeres,
    NikeComponentMujeres,
    ChampionsComponentMujeres,
    PumaComponentMujeres,

    FutbolComponent,
    BasketbolComponent,
    BeisbolComponent,
    FutAmComponent,
    OtrosComponent,
    ContactanosComponent,
    ModalComponent,


  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot(),
    AngularFireStorageModule
  ],
  providers: [
    UserService,
    AngularFireAuth,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
