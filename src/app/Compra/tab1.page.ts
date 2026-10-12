import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonItem, IonInput, IonButton, AlertController 
} from '@ionic/angular';
import { Router } from '@angular/router';
import { DatosService } from '../services/datos';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonItem, 
    IonInput, 
    IonButton
  ]
})
export class Tab1Page {
  nombreProducto: string = '';
  cantidad: number = 0;
  precio: number = 0;

  constructor(
    private datosService: DatosService, 
    private router: Router,
    private alertController: AlertController
  ) {}

  async procesarCompra() {
    if (!this.nombreProducto || this.nombreProducto.trim() === '') {
      this.mostrarAlerta('Error', 'El nombre del producto es obligatorio.');
      return;
    }
    if (this.cantidad <= 0 || !Number.isInteger(Number(this.cantidad))) {
      this.mostrarAlerta('Error', 'La cantidad debe ser un número entero mayor que cero.');
      return;
    }
    if (this.precio <= 0) {
      this.mostrarAlerta('Error', 'El precio unitario debe ser mayor que cero.');
      return;
    }

    this.datosService.setCompra(this.nombreProducto, this.cantidad, this.precio);
    this.router.navigateByUrl('/tabs/tab2');
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }
}