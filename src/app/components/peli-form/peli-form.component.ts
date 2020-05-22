import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { PeliService } from '../../services/peli.service';

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-peli-form',
  templateUrl: './peli-form.component.html',
  styleUrls: ['./peli-form.component.css']
})
export class PeliFormComponent implements OnInit {
  file: File;
  peliSeleted: string | ArrayBuffer;

  constructor(private peliService: PeliService, private router: Router) { }

  ngOnInit(): void {
  }

  onPeliSelected(event: HtmlInputEvent): void{
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];

      // vista previa de la imagen
      const reader = new FileReader();
      reader.onload = e=> this.peliSeleted = reader.result;
      reader.readAsDataURL(this.file);

    }
  }

  uploadPeli(titulo: HTMLInputElement, descripcion: HTMLTextAreaElement): boolean{
    this.peliService.crearImagen(titulo.value,descripcion.value,this.file)
    .subscribe(res => {
      this.router.navigate(['/photos']);
    }, err => console.log(err))
    return false;
  }

}
