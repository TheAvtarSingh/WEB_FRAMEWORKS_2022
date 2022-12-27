import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
    name = 'Angular';
    fullName:string="Rahul";
    isCollapsed = true;
  title = 'to_do_list';
  /* constructor(){
    setTimeout(()=>{
this.title = "new_title";
    },2000)
  } */
}
