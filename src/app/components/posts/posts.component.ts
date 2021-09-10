import { Post } from 'src/app/interfaces/post';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  results?: Observable<Post[]>;
  search: FormControl = new FormControl("");
  posts: any;
  newPost: any;
  constructor(private dataService: DataService) { 
   
  }
  ngOnInit(): void {
    this.posts = this.dataService.getAllPosts()
    // .subscribe(posts => this.posts = posts);
    console.log(this.posts);
    
  }

  
  getAllPosts() {
    return this.dataService.getAllPosts().subscribe(data => this.posts = data); 
  }
  getPosts(){
    this.posts = this.dataService.getPosts();
    console.log(this.posts);
  }

  addPost(){
    this.newPost = this.dataService.createPost();
    console.log(this.newPost)
  }

}
