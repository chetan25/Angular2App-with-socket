import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-component',
  templateUrl: './carousel-component.component.html',
  styleUrls: ['./carousel-component.component.css']
})
export class CarouselComponentComponent implements OnInit {
  @Input() slideCount:number;
  @Input() slideData:Array<any>;
  slides:Array<any>;

  constructor() { }

  ngOnInit() {
  	this.slides = Array(this.slideCount).fill(1);
  }
}
