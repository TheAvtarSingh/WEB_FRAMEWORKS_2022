import { Component, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { todo } from 'src/app/todo';



@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})


export class TodolistComponent implements OnInit {
  isCollapsed = true;
  // define array of todotype
  todos:todo[];
  constructor() { 
    this.todos = [
      {
sno:1,
title:"Hello",
desc:"Descritibe",
active:true
      },
      {
sno:2,
title:"Hello 2",
desc:"Descritibe 2",
active:true
      },
      {
sno:3,
title:"Hello 3",
desc:"Descritibe 3",
active:true
      },
      {
sno:15,
title:"Hello 4",
desc:"Descritibe 4",
active:true
      }
    ]
  }

  // Proerty Binding

imgUrl = "https://source.unsplash.com/user/erondu/1222x400";

// Event Binding

onSave(){
  
alert("Hello");
}

Items = "laptop";

  ngOnInit(): void {
  }

  show = false;

  onCreate(){
    this.show = true;
  }


}
