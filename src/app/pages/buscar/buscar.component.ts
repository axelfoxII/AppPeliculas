import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/peliculas.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  texto:string='';
  movies:Movie[]=[];

  constructor(private activatedRoute: ActivatedRoute, private peliculasSvc:PeliculasService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{

      //console.log(params['texto']);
      this.texto=params['texto'];

      
      this.peliculasSvc.buscarPeliculas(params['texto']).subscribe(movies=>{
        this.movies=movies;
      })
       
    });
  }

}
