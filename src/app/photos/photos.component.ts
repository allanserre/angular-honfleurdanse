import { Component, OnInit } from '@angular/core';

const IMAGES = [
  "carousel-01.JPG",
  "carousel-02.JPG",
  "carousel-03.JPG",
  "carousel-04.JPG",
  "carousel-05.JPG",
  "carousel-06.JPG",
  "carousel-07.JPG",
  "carousel-08.JPG",
  "carousel-09.JPG",
  "carousel-10.JPG",
  "carousel-11.JPG",
  "carousel-12.JPG",
  "carousel-13.JPG",
  "carousel-14.JPG",
  "carousel-15.JPG",
]

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})

export class PhotosComponent implements OnInit {

  images = IMAGES
  selectedImage : number = 0

  constructor() { }

  ngOnInit(): void {
  }

  next(){
    if ( this.selectedImage < this.images.length-1)
      this.selectedImage++
    else
      this.selectedImage = 0
  }

  prev() {
    if (this.selectedImage > 0)
      this.selectedImage --
    else
      this.selectedImage = this.images.length-1
  }
}
