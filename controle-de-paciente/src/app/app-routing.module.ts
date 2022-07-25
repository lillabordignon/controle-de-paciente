import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NovoPacienteComponent } from './pages/novo-paciente/novo-paciente.component';
import { ListaDePacientesComponent } from './pages/lista-de-pacientes/lista-de-pacientes.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'novo-paciente', component: NovoPacienteComponent },
  { path: 'lista-de-pacientes', component: ListaDePacientesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
