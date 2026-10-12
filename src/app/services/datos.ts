import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private producto: string = '';
  private cantidad: number = 0;
  private precioUnitario: number = 0;

  constructor() { }

  setCompra(prod: string, cant: number, precio: number) {
    this.producto = prod;
    this.cantidad = cant;
    this.precioUnitario = precio;
  }

  getCompra() {
    return {
      producto: this.producto,
      cantidad: this.cantidad,
      precioUnitario: this.precioUnitario,
      subtotal: this.cantidad * this.precioUnitario
    };
  }
}