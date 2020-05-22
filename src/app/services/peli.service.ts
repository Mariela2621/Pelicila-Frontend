import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { DepFlags } from '@angular/compiler/src/core';
import { Peli } from '../interfaces/Peli';


@Injectable({
  providedIn: 'root'
})
export class PeliService {

  URI = 'http://localhost:3000/api/photos'

  constructor(private http: HttpClient) { }

  crearImagen(titulo: string, descripcion: string, imagenes: File){
    const fd = new FormData();
    fd.append('titulo', titulo);
    fd.append('descripcion', descripcion);
    fd.append('image', imagenes);
    return this.http.post(this.URI, fd);
  }

  getPhotos(){
    return this.http.get<Peli[]>(this.URI)
  }

  getPelicula(id: string){
    return this.http.get<Peli>(`${this.URI}/${id}`);
  }

  deletePelicula(id: string){
    return this.http.delete(`${this.URI}/${id}`)
  }

  updatePelicula(id: string, titulo: string, descripcion:string){
   return this.http.put(`${this.URI}/${id}`,{titulo, descripcion});
  }

}
