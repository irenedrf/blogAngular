import { Injectable } from '@angular/core';
import { Post } from '../Post';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private arrPosts: Post[];

  constructor() {
    this.arrPosts = [];
  }

  getAllPosts(): Post[] {
    return this.arrPosts;
  }

  addPost(pPost: Post): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      this.arrPosts.push(pPost);
      console.log(this.arrPosts);
      resolve(this.arrPosts)
    })
  }
}
