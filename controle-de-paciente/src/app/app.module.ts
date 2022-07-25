import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonComponent } from './components/button/button.component';
import { NovoPacienteComponent } from './pages/novo-paciente/novo-paciente.component';
import { HeaderComponent } from './shared/header/header.component';
import { ListaDePacientesComponent } from './pages/lista-de-pacientes/lista-de-pacientes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonComponent,
    NovoPacienteComponent,
    HeaderComponent,
    ListaDePacientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
