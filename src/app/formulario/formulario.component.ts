import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formPost: FormGroup;
  constructor(private servicio: ServicioService) {
    this.formPost = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      texto: new FormControl('', [Validators.required]),
      autor: new FormControl('', [Validators.required]),
      imagen: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),

    });
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    await this.servicio.addPost(this.formPost.value);
  }

}
