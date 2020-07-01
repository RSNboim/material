import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { SService } from 'src/app/services/s.service';


@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  // @Output()
  // change: EventEmitter<MatSliderChange>
  
  //  slider = document.querySelector("mat-slider[aria-valuenow]");
  
   
  constructor(public srv:SService) {
   
   }
 
  ngOnInit(): void {
  }
  onInputChange(event: MatSliderChange) {
    console.log("This is emitted as the thumb slides");
    console.log(event.value);
    this.srv.sliderValue=event.value;
    
  
  }
}
