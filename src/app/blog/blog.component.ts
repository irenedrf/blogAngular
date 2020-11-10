import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../Post';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrCategoriesBlog: string[];
  categoria: string;

  @Input() arrPostsExistentes: Post[];

  constructor(private servicio: ServicioService) { }

  async ngOnInit() {
    this.arrCategoriesBlog = await this.servicio.getCategories();
    return this.arrPostsExistentes = await this.servicio.getAllPosts();
  }

  async onChange(pCategory) {
    return this.arrPostsExistentes = await this.servicio.getByCategory(pCategory)
  }

}
