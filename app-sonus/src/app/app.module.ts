import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulos
import { HttpClientModule } from "@angular/common/http";
// import { HttpModule } from "@angular/http";

// Componentes.
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { MenuBajoComponent } from './components/menu-bajo/menu-bajo.component';
import { ButtonMenuComponent } from './components/button-menu/button-menu.component';
import { MenuGuitarraComponent } from './components/menu-guitarra/menu-guitarra.component';
import { PresentacionMicComponent } from './components/presentacion-mic/presentacion-mic.component';

//Rutas
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MenuBajoComponent,
    ButtonMenuComponent,
    MenuGuitarraComponent,
    PresentacionMicComponent
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
