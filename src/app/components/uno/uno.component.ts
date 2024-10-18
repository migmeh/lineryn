import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent implements OnInit {

  constructor() { }


  aceptCookie(){
    let mycookie = localStorage.setItem("mycookie", "yes");
  }

  ngOnInit(): void {
    if(localStorage.getItem("mycookie") === "yes"){
      $("#mycookie").hide();
    }

  }

}
