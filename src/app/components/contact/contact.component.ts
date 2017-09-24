import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // define properties
  public contactHeading: string;
  public contactPhone: string;
  public contactEmail: string;

  constructor() {}

  ngOnInit() {
    // set properties
    this.contactHeading = 'Contact Info';
    this.contactPhone = '(832) 368-4020';
    this.contactEmail = 'brookhutchinson@outlook.com';
  }
}