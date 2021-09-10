import { Unsplash } from './../interfaces/unsplash';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UnsplashService {

  public url = `https://api.unsplash.com/search/photos?client_id=${environment.unsplashClientID}&query=`;​

  constructor(private http: HttpClient) { }

  searchImage(term: any) : Observable<Unsplash> {
    return this.http.get<Unsplash>(this.url + term);​
  }
  
}
