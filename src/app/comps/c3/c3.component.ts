import { Component, OnInit } from '@angular/core';
import { SService } from 'src/app/services/s.service';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {

  constructor(public srv:SService) { 
    console.log(this.srv.sliderValue);
  }

  ngOnInit(): void {
  }


}
