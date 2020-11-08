import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../Post';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  @Input() arrPostsExistentes: Post[];

  constructor(private servicio: ServicioService) { }

  ngOnInit() {
    const arrPostsExistentes = this.servicio.getAllPosts();
    console.log(arrPostsExistentes);
    return arrPostsExistentes;
  }

}
