import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-de-pacientes',
  templateUrl: './lista-de-pacientes.component.html',
  styleUrls: ['./lista-de-pacientes.component.scss']
})
export class ListaDePacientesComponent{

  @Input() linkName: string;
  @Input() linkHref: string;

  constructor() { }

}
