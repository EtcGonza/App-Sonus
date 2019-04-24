import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulos
import { HttpClientModule } from "@angular/common/http";

// Componentes.
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ButtonMenuComponent } from './components/button-menu/button-menu.component';
import { PresentacionMicComponent } from './components/presentacion-mic/presentacion-mic.component';

//Rutas
import { RouterModule } from "@angular/router";
import { MenuMicrofonosComponent } from './components/menu-microfonos/menu-microfonos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ButtonMenuComponent,
    PresentacionMicComponent,
    MenuMicrofonosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
