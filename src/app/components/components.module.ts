import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {NgbPaginationModule, NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { PipesModule } from '../pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CastSlideShowComponent } from './cast-slide-show/cast-slide-show.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SlideShowComponent,
    PeliculasPosterGridComponent,
    CastSlideShowComponent
  ],
  exports: [
    NavbarComponent,
    SlideShowComponent,
    PeliculasPosterGridComponent,
    CastSlideShowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbPaginationModule, 
    NgbRatingModule,
    PipesModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
