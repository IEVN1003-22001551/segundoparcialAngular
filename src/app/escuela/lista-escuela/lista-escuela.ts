import { Component } from '@angular/core';
import {FormsModule, ReactiveFormModule} from '@angular/core';
import {IAlumno} from '../alumno',

@Component({
  imports: [FormsModule, ReactiveFormModle],
  selector: 'app-lista-escuela',
  styleUrl: './lista-escuela.css',
  templateUrl: './lista-escuela.html',
})
export class ListaEscuela {
  formulario:FormGroup
  nuevoAlumno:IAlumno={
    matricula:'xxx',
    nombre:'xxx',
    correo:'xxx',
    materia:'xxx'

  }



  ngOnInit(): void{
    this.formulario=new FormGroup{
      matricula:new FormGroup(''),
      nombre:new FormGroup(''),
      correo:new FormGroup(''),
      materia:new FormGroup('')
    }
  }

  muestraAlumno(): void{
    this.nuevoAlumno.matricula=this.formulario.value.matricula
  }
}
