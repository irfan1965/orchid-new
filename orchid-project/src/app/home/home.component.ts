import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title) { }


  ngOnInit(): void {
    this.titleService.setTitle('Home Page');
  }



  @ViewChild('scrollRef', { static: false }) scrollRef!: ElementRef;

  images = [
    { url: 'image1.jpg' },
    { url: 'image2.jpg' },
    { url: 'image3.jpg' },
    // Add more images as needed
  ];

  selectedImage: any; // Variable to store the selected image

  scrollLeft() {
    this.scrollRef.nativeElement.scrollLeft -= 100;
  }

  scrollRight() {
    this.scrollRef.nativeElement.scrollLeft += 100;
  }

  showImage(image: any) {
    this.selectedImage = image;
  }
}
