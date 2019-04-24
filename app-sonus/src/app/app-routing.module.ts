import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PresentacionMicComponent } from './components/presentacion-mic/presentacion-mic.component';
import { MenuMicrofonosComponent } from './components/menu-microfonos/menu-microfonos.component';

const routes: Routes = [
  {
  path:'menu',
  component: MainComponent,
  },
  {
    path:'presentacion/:modelo/:clasificacion/:nombre',
    component:PresentacionMicComponent
  },
  {
    path:'menuMicrofonos/:tipo',
    component: MenuMicrofonosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
