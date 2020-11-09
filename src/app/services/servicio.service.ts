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

  getByCategory(pCategory): Promise<Post[]> {
    if (pCategory === "") {
      return Promise.resolve(this.arrPosts);
    } else {
      return Promise.resolve(this.arrPosts.filter(post => post.categoria === pCategory));
    }

  }

  addPost(pPost: Post): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      this.arrPosts.push(pPost);
      console.log(this.arrPosts)
      resolve(this.arrPosts)
    })
  }


}
