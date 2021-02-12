import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('BaseComponent trabajando y sin problemassss!!!');
  }


  ngOnDestroy() {
    console.log('BaseComponent..en destruccion!!!');
  }

}
