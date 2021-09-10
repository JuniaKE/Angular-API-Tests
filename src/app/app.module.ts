import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { DataService } from './services/data.service';
import { LogoComponent } from './components/logo/logo.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './components/posts/posts.component';
import { UnsplashComponent } from './components/unsplash/unsplash.component';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    LogoComponent,
    LoginComponent,
    PostsComponent,
    UnsplashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
