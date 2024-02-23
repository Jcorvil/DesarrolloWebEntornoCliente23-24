import { Component, OnInit } from '@angular/core';

import { ClientesService } from './../clientes.service';
import { Cliente, Grupo } from './../cliente.model';


@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrl: './alta-cliente.component.css'
})
export class AltaClienteComponent implements OnInit {


  cliente: Cliente;
  grupos: Grupo[];


  constructor(private clientesService: ClientesService) {
    this.cliente = this.clientesService.nuevoCliente();
    this.grupos = this.clientesService.getGrupos();


  }
  ngOnInit() {
  }

  nuevoCliente(): void {
    this.clientesService.agregarCliente(this.cliente);
    this.cliente = this.clientesService.nuevoCliente();
  }
}


