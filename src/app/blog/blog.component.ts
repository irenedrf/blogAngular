import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../Post';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  categoria: string;

  @Input() arrPostsExistentes: Post[];

  constructor(private servicio: ServicioService) { }

  ngOnInit() {

  }

  async onChange(pCategoria) {
    if (pCategoria === 'todos') {
      return this.arrPostsExistentes = await this.servicio.getAllPosts();
    } else {
      return this.arrPostsExistentes = await this.servicio.getByCategory(pCategoria); //problema: aquí mee los está cogiendo todos, no filtrados, a pesar de que le paso categoría
    }

  }

}
