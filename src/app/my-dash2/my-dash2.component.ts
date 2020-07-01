import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { url } from 'inspector';

@Component({
  selector: 'app-my-dash2',
  templateUrl: './my-dash2.component.html',
  styleUrls: ['./my-dash2.component.css']
})
export class MyDash2Component {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmxquR1gUYbiszLHv42N4wiVKt2e7QxQ_lLA&usqp=CAU" },
          { title: 'Card 2', cols: 1, rows: 1, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1wez9THURIh0_hjCQIxvbO555Nyf4H0cNEQ&usqp=CAU" },
          { title: 'Card 3', cols: 1, rows: 1, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6JYhqVue-cyVgoQkn68shJYP_zVV_1Z4Nxg&usqp=CAU" },
          { title: 'Card 4', cols: 1, rows: 1, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxDWrAXsuHjiq06tCPoleuf7nOogKdjiQumQ&usqp=CAU" }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmxquR1gUYbiszLHv42N4wiVKt2e7QxQ_lLA&usqp=CAU" },
        { title: 'Card 2', cols: 1, rows: 1, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1wez9THURIh0_hjCQIxvbO555Nyf4H0cNEQ&usqp=CAU" },
        { title: 'Card 3', cols: 1, rows: 1, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6JYhqVue-cyVgoQkn68shJYP_zVV_1Z4Nxg&usqp=CAU" },
        { title: 'Card 4', cols: 1, rows: 1, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxDWrAXsuHjiq06tCPoleuf7nOogKdjiQumQ&usqp=CAU" }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }
}
