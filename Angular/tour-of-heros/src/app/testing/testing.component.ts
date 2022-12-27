import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  imgUrl : "https://i.stack.imgur.com/QpJLJ.png";
  title = 'tour-of-heros';
 onsave(){
  alert("Saved");
 }

 fullName = "";

  constructor() { }

  ngOnInit(): void {
  }

}
