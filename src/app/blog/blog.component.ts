import { Component, OnInit } from '@angular/core';
import { Post } from '../Post';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrPostsExistentes: Post[];

  constructor(private servicio: ServicioService) { }

  ngOnInit(): void {
    this.servicio.getAllPosts(); //esta tiene que ser la resolución de la promesa que ponga como response igualar el array post existentes con el array de posts de la función getallposts, asi que getallposts debe devolver promesa
  }

}
