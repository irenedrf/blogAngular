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

  }

}
