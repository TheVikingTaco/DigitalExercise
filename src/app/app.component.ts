import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DigitalExercise';

  moveUp() {
    console.log(document.getElementById("logo").style);
    document.getElementById("logo").style.top = document.getElementById("logo").style.top + 10;
  }

  moveDown() {

  }

  moveRight() {

  }

  moveLeft() {

  }
}


