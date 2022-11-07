import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successalert',
  templateUrl: './successalert.component.html',
  //styleUrls: ['./successalert.component.css']
  styles:[`
  h3  {
    color: green
  }`]
})
export class SuccessalertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
