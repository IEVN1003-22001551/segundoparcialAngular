import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-zodiaco',
  styleUrl: './zodiaco.css',
  templateUrl: './zodiaco.html',
})
export class Zodiaco {
  nombre: string = '';
  apaterno: string = '';
  amaterno: string = '';
  dia: number = 0;    
  mes: number = 0;    
  anio: number = 0;
  sexo: string = '';

  mostrarResultado: boolean = false;
  nombreCompleto: string = '';
  edad: number = 0;
  signoZodiacal: string = '';
  emojiSigno: string = '';

  imprimirDatos(){
    this.unirNombres();
    this.calcularEdad();
    this.calcularSigno();
    this.mostrarResultado = true;
  }

  unirNombres() {
    this.nombreCompleto = this.nombre + " " + this.apaterno + " " + this.amaterno;
  }

  calcularEdad() {
    this.edad = 2026 - this.anio;
  }

  calcularSigno() {
    let residuo = this.anio % 12;

    switch (residuo) {
      case 0: this.signoZodiacal = 'Mono'; this.emojiSigno = ''; break;
      case 1: this.signoZodiacal = 'Gallo'; this.emojiSigno = ''; break;
      case 2: this.signoZodiacal = 'Perro'; this.emojiSigno = ''; break;
      case 3: this.signoZodiacal = 'Cerdo'; this.emojiSigno = ''; break;
      case 4: this.signoZodiacal = 'Rata'; this.emojiSigno = ''; break;
      case 5: this.signoZodiacal = 'Buey'; this.emojiSigno = ''; break;
      case 6: this.signoZodiacal = 'Tigre'; this.emojiSigno = ''; break;
      case 7: this.signoZodiacal = 'Conejo'; this.emojiSigno = ''; break;
      case 8: this.signoZodiacal = 'Dragón'; this.emojiSigno = ''; break;
      case 9: this.signoZodiacal = 'Serpiente'; this.emojiSigno = ''; break;
      case 10: this.signoZodiacal = 'Caballo'; this.emojiSigno = ''; break;
      case 11: this.signoZodiacal = 'Cabra'; this.emojiSigno = ''; break;
    }
   }
}
