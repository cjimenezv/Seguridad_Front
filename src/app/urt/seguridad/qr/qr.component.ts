import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit {

  public myAngularxQrCode: string = null;

  constructor() { 
    this.myAngularxQrCode = 'Voy a  alimentar este QR con la semilla';
  }

  ngOnInit(): void {
  }

}
