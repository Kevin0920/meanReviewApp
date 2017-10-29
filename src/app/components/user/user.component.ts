import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address: Address;
  hobbies:string[];
  go:any;

  // below are running automatically
  constructor() {
    console.log('constructor running...');
  }

  ngOnInit() {
    console.log('ngOnInit running...');

    this.name = "Kevin Ke";
    this.age = 18;
    this.address = {
      street:"2020 main st",
      city:"San Francisco",
      state:"CA"
    }
    this.hobbies=["running ", " music", " playing basketball"];
    this.go = 22;
  }
  onClick() {
    console.log("button function running");
    this.name = "Jin Chen";
    this.hobbies.push("drinking water");
  }

  addHobby(h){
    console.log("hobby");
    this.hobbies.unshift(h);
    return false;
  }

  deleteHobby(h) {
    console.log("hobby delete");
    for(let i = 0; i < this.hobbies.length; i++) {
      if(this.hobbies[i] == h) {
        this.hobbies.splice(i, 1);
      }
    }
  }
}

interface Address{
  street:string;
  city:string;
  state:string;
}
