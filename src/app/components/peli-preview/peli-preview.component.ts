import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { PeliService } from '../../services/peli.service';

import { Peli } from '../../interfaces/Peli';

@Component({
  selector: 'app-peli-preview',
  templateUrl: './peli-preview.component.html',
  styleUrls: ['./peli-preview.component.css']
})
export class PeliPreviewComponent implements OnInit {

  id:string;
  peli: Peli;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private peliService: PeliService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.id = params['id'];
      this.peliService.getPelicula(this.id)
      .subscribe(
        res => {
          this.peli = res;
        },
        err => console.log(err)
      )
    })
  }

  deletePelicula(id: string){
    this.peliService.deletePelicula(id)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/photos'])
      },
      err => console.log(err)
    )
  }

  updatePelicula(titulo: HTMLInputElement, descripcion: HTMLTextAreaElement): boolean{
    console.log(titulo,descripcion)
    this.peliService.updatePelicula(this.id,titulo.value,descripcion.value)
    .subscribe(
      res =>{
        this.router.navigate(['/photos'])
      },
      error => console.log(error)
    )
    return false;
  }

}
