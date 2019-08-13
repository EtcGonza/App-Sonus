import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulos
import { HttpClientModule } from "@angular/common/http";
import { NavbarModule, WavesModule } from 'angular-bootstrap-md'
// Componentes.
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ButtonMenuComponent } from './components/button-menu/button-menu.component';
import { PresentacionMicComponent } from './components/presentacion-mic/presentacion-mic.component';

//Rutas
import { RouterModule } from "@angular/router";
import { MenuMicrofonosComponent } from './components/menu-microfonos/menu-microfonos.component';
import { CuadroMicComponent } from './components/cuadro-mic/cuadro-mic.component';
import { WaveAnimationComponent } from './components/wave-animation/wave-animation.component';
import { BotonDesplegableComponent } from './components/boton-desplegable/boton-desplegable.component';
import { BotonRedondoComponent } from './components/boton-redondo/boton-redondo.component';
import { FooterComponent } from './components/footer/footer.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { TituloComponent } from './components/titulo/titulo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ButtonMenuComponent,
    PresentacionMicComponent,
    MenuMicrofonosComponent,
    CuadroMicComponent,
    WaveAnimationComponent,
    BotonDesplegableComponent,
    BotonRedondoComponent,
    FooterComponent,
    GaleriaComponent,
    TituloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    NavbarModule,
    WavesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
