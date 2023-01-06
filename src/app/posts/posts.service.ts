import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from './posts';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<Posts []>("https://jsonplaceholder.typicode.com/posts")
  }

  create(payload:Posts){
    return this.http.post<Posts>("https://jsonplaceholder.typicode.com/posts", payload);
  }

  getById(id:number){
    return this.http.get<Posts>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }


  delete(id:number){
    return this.http.delete<Posts>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

  update(payload:Posts){
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${payload.id}`, payload);
  }
}
