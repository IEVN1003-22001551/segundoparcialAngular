import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [FormsModule, CommonModule, RouterLink],
  selector: 'app-cinepolis',
  styleUrl: './cinepolis.css',
  templateUrl: './cinepolis.html',
})
export class Cinepolis {
  nombre: string = '';
  cantidadCompradores: number = 0;
  cantidadBoletas: number = 0;
  tarjetaCineco: boolean = false;
  valorPagar: string = '';
  PRECIO_BOLETA: number = 12.000;

  procesar(): void {
    // 1. Validar que el nombre no esté vacío
    if (this.nombre === '' || this.cantidadCompradores <= 0 || this.cantidadBoletas <= 0) {
      alert('Por favor, llena todos los datos correctamente.');
      return;
    }

    if (this.cantidadBoletas > this.cantidadCompradores * 7) {
      alert(`No se pueden comprar más de 7 boletos por persona. Límite: ${this.cantidadCompradores * 7} boletos.`);
      this.valorPagar = 'Error';
      return;
    }

    let total = this.cantidadBoletas * 12000; // Costo base
    let descuento = 0;

    if (this.cantidadBoletas > 5) {
      descuento = total * 0.15;
    } else if (this.cantidadBoletas >= 3 && this.cantidadBoletas <= 5) {
      descuento = total * 0.10;
    }

    let totalConDescuento = total - descuento;

    if (this.tarjetaCineco) {
      const descuentoAdicional = totalConDescuento * 0.10;
      totalConDescuento = totalConDescuento - descuentoAdicional;
    }

    this.valorPagar = '$ ' + totalConDescuento;

    // 2. GUARDAR EN LOCALSTORAGE (Estilo lista-escuela)
    const nuevaVenta = {
      nombre: this.nombre,
      compradores: this.cantidadCompradores,
      boletas: this.cantidadBoletas,
      total: this.valorPagar
    };

    let ventasGuardadas: any[] = [];
    const datos = localStorage.getItem('ventasCinepolis');
    if (datos) {
      ventasGuardadas = JSON.parse(datos);
    }
    
    ventasGuardadas.push(nuevaVenta);
    localStorage.setItem('ventasCinepolis', JSON.stringify(ventasGuardadas));
    
    alert('Venta procesada y guardada correctamente.');
  }

  salir(): void {
    this.nombre = '';
    this.cantidadCompradores = 0;
    this.cantidadBoletas = 0;
    this.tarjetaCineco = false;
    this.valorPagar = '';
  }
}
 