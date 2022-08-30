import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Movie } from 'src/app/interfaces/peliculas.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  movies:Movie[] = [];
  moviesSlideShow:Movie[] = [];
  @HostListener('window:scroll',['$event'])
  onScroll(){
    //console.log('hola')

    const pos = (document.documentElement.scrollTop || document.body.scrollTop)*1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
    
    if (pos > max) {
      if (this.peliculasSvc.cargando) {return;}
      this.peliculasSvc.getPeliculas().subscribe(movies=>{

        this.movies.push(...movies);


      })
    }
    
    //console.log({pos, max})

  }

  constructor(private peliculasSvc:PeliculasService){




  }


  ngOnInit(): void {
    
    this.peliculasSvc.getPeliculas().subscribe(movies=>{
        
      this.movies = movies;
      this.moviesSlideShow = movies;
    })
  }

  ngOnDestroy(){
    this.peliculasSvc.resetPeliculaPage();
  }

}
