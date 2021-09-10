import { Unsplash, IntPictures } from './../../interfaces/unsplash';
import { UnsplashService } from './../../services/unsplash.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-unsplash',
  templateUrl: './unsplash.component.html',
  styleUrls: ['./unsplash.component.css']
})
export class UnsplashComponent implements OnInit {
  public searchKeyword = '';​

  public data: IntPictures[] = [];
  ​
  constructor(​private unsplashService : UnsplashService){}
  ngOnInit() :void {}

  searchImage() {
    this.unsplashService.searchImage(this.searchKeyword).subscribe(
      (photos : Unsplash) => {
        console.log(photos.results);
        this.data = photos.results;
      }
    );   
    console.log(this.data);
  }
}
