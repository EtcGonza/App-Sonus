import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulos
import { HttpClientModule } from "@angular/common/http";
import { NavbarModule, WavesModule } from 'angular-bootstrap-md'
// Componentes.
import { HeaderComponent } from './components/header/header.component';
import { PresentacionMicComponent } from './components/presentacion-mic/presentacion-mic.component';

//Rutas
import { RouterModule } from "@angular/router";
import { BotonDesplegableComponent } from './components/boton-desplegable/boton-desplegable.component';
import { BotonRedondoComponent } from './components/boton-redondo/boton-redondo.component';
import { FooterComponent } from './components/footer/footer.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { TituloComponent } from './components/titulo/titulo.component';

// Pipes
import { PipeCloudPipe} from './pipe/pipe-cloud.pipe';
import { ReproductorComponent } from './components/reproductor/reproductor.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { ListaMicrofonosComponent } from './components/lista-microfonos/lista-microfonos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentacionMicComponent,
    BotonDesplegableComponent,
    BotonRedondoComponent,
    FooterComponent,
    GaleriaComponent,
    TituloComponent,
    PipeCloudPipe,
    ReproductorComponent,
    MenuPrincipalComponent,
    ListaMicrofonosComponent
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
