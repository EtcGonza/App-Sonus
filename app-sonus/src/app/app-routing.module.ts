import { NgModule } from '@angular/core';
import { Routes, RouterModule, OutletContext } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { MenuBajoComponent } from './components/menu-bajo/menu-bajo.component';
import { MenuGuitarraComponent } from './components/menu-guitarra/menu-guitarra.component';
import { PresentacionMicComponent } from './components/presentacion-mic/presentacion-mic.component';

const routes: Routes = [
  {
  path:'menu',
  component: MainComponent,
  },
  {
    path:'bajo',
    component: MenuBajoComponent
  },
  {
    path:'guitarra',
    component: MenuGuitarraComponent
  },
  {
    path:'presentacion/:modelo',
    component:PresentacionMicComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
