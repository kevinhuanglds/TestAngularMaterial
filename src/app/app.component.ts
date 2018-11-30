import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected = 2;
  title = 'testTabs2';

  navLinks = [
    {path: 'aaa', label: 'First'},
    {path: 'bbb', label: 'Second'},
    {path: 'ccc', label: 'Third'},
  ];

  setValue(evt) {
    // console.log(evt);
  }
  assignValue(evt) {
    console.log(evt.target.value);
    this.selected = evt.target.value ;
  }
}
