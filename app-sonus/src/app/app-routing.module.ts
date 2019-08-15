import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { PresentacionMicComponent } from './components/presentacion-mic/presentacion-mic.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { ListaMicrofonosComponent } from './components/lista-microfonos/lista-microfonos.component';

const routes: Routes = [
  {
  path:'menu',
  component: MenuPrincipalComponent,
  },
  {
    path:'presentacion',
    component:PresentacionMicComponent
  },
  {
    path:'menuMicrofonos/:tipo',
    component: ListaMicrofonosComponent
  },
  {
    path: '**', 
    pathMatch: 'full', 
    redirectTo: 'menu' 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
