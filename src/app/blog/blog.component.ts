import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  Blog:any[] = ["./assets/images/property-1.jpg", "./assets/images/property-2.jpg", "./assets/images/property-3.jpg", "./assets/images/property-4.jpg", "./assets/images/property-5.jpg", 
  "./assets/images/property-6.jpg"]

  myBlog:string = 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts'

  name:any[] = []
constructor(){}

  ngOnInit() {
  }

}