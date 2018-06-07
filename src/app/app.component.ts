import { Component } from '@angular/core';
import { noUndefined } from '@angular/compiler/src/util';

class Person {
  name: string;
  gender: string;
  rating: number;

  constructor(name: string, gender: string, rating: number) {
    this.name = name;
    this.gender = gender;
    this.rating = rating;
  }
  
}

let male = new Person('adam', 'male', 0);
let female = new Person('eve', 'female', 0);
let jonBoy = new Person('jonny', 'apache helicopter', -75);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  person = this.naturalSelection();

  naturalSelection() {
    let fate = Math.floor(Math.random() * 3);
    if(fate === 0){
      return male;
    } else if(fate === 1){
      return female;
    } else if(fate === 2){
      return jonBoy;
    }
    console.log(this.person);
  }

  toggle() {
    if(this.person === male){
      this.person = female;
    } else if(this.person === female){
      this.person = male;
    }
  }
}
