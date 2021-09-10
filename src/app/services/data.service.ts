import { Post } from 'src/app/interfaces/post';
// import { Post } from '../interfaces/post';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http : HttpClient) { }

  readonly ENDPOINT = "https://jsonplaceholder.typicode.com";

  
  
  newPost!: Observable<ArrayBuffer>

  getAllPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.ENDPOINT + '/posts');
  }

  getPosts(): Observable<Post[]>{
    let params = new HttpParams().set('userId' , '1');
    return this.http.get<Post[]>(this.ENDPOINT + '/posts', { params });
  }

  createPost(){
    let data: Post = {
      id: 1,
      userId: 23,
      title: "Trial Title",
      body: "We are the people"
    }

    this.newPost = this.http.post<ArrayBuffer>(this.ENDPOINT, '/posts');
    return this.newPost;
  }
  courses = ["Course1","Course2","Course3"];
  getCourses() {
    return this.courses;
  }
  addCourse(info : string) {
      this.courses.push(info);
    }
  deleteCourse(info: any){
    this.courses.shift();
  }
}