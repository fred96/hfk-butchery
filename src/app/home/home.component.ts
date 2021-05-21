import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
     public  title = "Home";
  /*   public mySlideImages: object;
     public myCarouselImages : object;
     public mySlideOptions: object;
     public myCarouselOptions: object;*/

mySlideImages = ['assets/img/slider2.png','assets/img/slider.png','assets/img/slider1.png'];

myCarouselImages =['assets/img/slider3.png','assets/img/slider.png','assets/img/slider1.png'];

mySlideOptions={items: 1, dots: true, nav: true};
myCarouselOptions={items: 3, dots: true, nav: true};

	
  constructor() { }

  ngOnInit(): void {

/*	 mySlideImages = ['../assets/img/slider2.png','../assets/img/slider.png','../assets/img/slider1.png'];

myCarouselImages =['../assets/img/slider3.png','../assets/img/slider.png','../assets/img/slider1.png'];

mySlideOptions={items: 1, dots: true, nav: true};
myCarouselOptions={items: 3, dots: true, nav: true};*/


  }

}
