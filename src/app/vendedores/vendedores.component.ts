import { Component, OnInit } from '@angular/core';
import { Vendedor } from './vendedor';
import { VendedorService } from './vendedor.service';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
})

export class VendedoresComponent implements OnInit {
  p: number = 1;
  vendedores: Vendedor[];

  constructor(private VendedorService: VendedorService) { }

  ngOnInit(): void {
    this.VendedorService.getVendedores().subscribe(
      vendedores => this.vendedores = vendedores
    );
  }
}