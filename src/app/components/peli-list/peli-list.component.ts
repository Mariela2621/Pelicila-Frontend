import { Component, OnInit } from '@angular/core';
import { Peli } from '../../interfaces/Peli';
import { Router } from '@angular/router'

import { PeliService } from '../../services/peli.service';

@Component({
  selector: 'app-peli-list',
  templateUrl: './peli-list.component.html',
  styleUrls: ['./peli-list.component.css']
})
export class PeliListComponent implements OnInit {

  pelis = [];

  constructor(private peliService: PeliService, private router: Router) { }

  ngOnInit(): void {
    this.peliService.getPhotos()
    .subscribe(
      res => {
        this.pelis = res;
      },
      err => console.log(err)   
    )
  }

  selectedCard(id: string){
    this.router.navigate(['/photos', id]);
  }

}
