import { Component, OnInit } from '@angular/core';

declare var DotPay;
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
    // Desired executed code (in objective-C)
    // [DotPay sharedInstance].debugMode = YES;
    DotPay.sharedInstance().debug = true;
  }
}
