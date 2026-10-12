import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonItem, IonInput, IonButton, IonCard, 
  IonCardHeader, IonCardTitle, IonCardContent, 
  AlertController 
} from '@ionic/angular';
import { DatosService } from '../services/datos';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
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
    IonButton, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent
  ]
})
export class Tab2Page implements OnInit {
  datosCompra: any;
  descuento: number = 0;
  dineroEntregado: number = 0;
  
  totalFinal: number = 0;
  cambio: number = 0;
  calculado: boolean = false;
  Math = Math;

  constructor(
    private datosService: DatosService,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.datosCompra = this.datosService.getCompra();
    this.calculado = false;
    this.descuento = 0;
    this.dineroEntregado = 0;
  }

  async calcularPago() {
    // Verificamos que existan los datos de la compra (usando 'nombre' o 'cantidad' que vienen de tab1)
    if (!this.datosCompra || (!this.datosCompra.nombre && !this.datosCompra.producto)) {
      this.mostrarAlerta('Advertencia', 'Primero debes registrar una compra en la pestaña anterior.');
      return;
    }

    if (this.descuento < 0 || this.descuento > 100) {
      this.mostrarAlerta('Error', 'El descuento debe estar entre 0 y 100.');
      return;
    }

    if (this.dineroEntregado < 0) {
      this.mostrarAlerta('Error', 'El dinero recibido debe ser mayor o igual a cero.');
      return;
    }

    // Calculamos el subtotal asegurándonos de usar las propiedades correctas
    const cantidad = this.datosCompra.cantidad || 0;
    const precio = this.datosCompra.precio || 0;
    const subtotal = this.datosCompra.subtotal ? this.datosCompra.subtotal : (cantidad * precio);

    const valorDescuento = subtotal * (this.descuento / 100);
    this.totalFinal = subtotal - valorDescuento;
    this.cambio = this.dineroEntregado - this.totalFinal;
    this.calculado = true;
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