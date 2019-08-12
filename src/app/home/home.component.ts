import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'nativescript-dotpay-ios-sdk-showcase';

  constructor() { }

  ngOnInit() {
  }

  callDotpaySdk() {
    console.log("Hello!");
  }
}
