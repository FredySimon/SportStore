import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes
import { UserComponent } from './components/users/user/user.component'
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component'; 
import { Page404Component } from './components/page404/page404.component';
import { BuyCarComponent } from './components/buy-car/buy-car.component'
import { ContactanosComponent} from './components/contactanos/contactanos.component'

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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user/registrar', component: UserComponent },
  { path: 'user/ingresar', component: LoginComponent },
  { path: 'user/perfil', component: ProfileComponent },
  { path: 'carrito/:id', component: BuyCarComponent },
  { path: 'contactanos', component: ContactanosComponent},

  { path: 'niños/nike', component: NikeComponentNiños },
  { path: 'niños/adidas', component: AdidasComponentNiños },
  { path: 'niños/under', component: UnderComponentNiños },
  { path: 'niños/everlast', component: EverlastComponentNiños },
  { path: 'niños/puma', component: PumaComponentNiños },
  { path: 'niños/supra', component: SupraComponentNiños },
  { path: 'niños/umbro', component: UmbroComponentNiños },

  { path: 'niñas/vans', component: VansComponentNiñas },
  { path: 'niñas/adidas', component: AdidasComponentNiñas },
  { path: 'niñas/under', component: UnderComponentNiñas },
  { path: 'niñas/everlast', component: EverlastComponentNiñas },
  { path: 'niñas/nike', component: NikeComponentNiñas },
  { path: 'niñas/champions', component: ChampionsComponentNiñas },
  { path: 'niñas/puma', component: PumaComponentNiñas },

  { path: 'hombres/nike', component: NikeComponentHombres },
  { path: 'hombres/adidas', component: AdidasComponentHombres },
  { path: 'hombres/under', component: UnderComponentHombres },
  { path: 'hombres/everlast', component: EverlastComponentHombres },
  { path: 'hombres/puma', component: PumaComponentHombres },
  { path: 'hombres/supra', component: SupraComponentHombres },
  { path: 'hombres/umbro', component: UmbroComponentHombres },

  { path: 'mujeres/vans', component: VansComponentMujeres },
  { path: 'mujeres/adidas', component: AdidasComponentMujeres },
  { path: 'mujeres/under', component: UnderComponentMujeres },
  { path: 'mujeres/everlast', component: EverlastComponentMujeres },
  { path: 'mujeres/nike', component: NikeComponentMujeres },
  { path: 'mujeres/champions', component: ChampionsComponentMujeres },
  { path: 'mujeres/puma', component: PumaComponentMujeres },

  { path: 'deportes/futbol', component: FutbolComponent },
  { path: 'deportes/basketbol', component: BasketbolComponent },
  { path: 'deportes/beisbol', component: BeisbolComponent },
  { path: 'deportes/futA', component: FutAmComponent },
  { path: 'deportes/otros', component: OtrosComponent },

  { path: '**', component: Page404Component },
  
];

export const APP_ROUTING = RouterModule.forRoot(routes);


