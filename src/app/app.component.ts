import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DigitalExercise';

  l: number = 0;
  t: number = 0;
  left: string = '0px';
  top: string = '0px';
  container: HTMLElement;
  logo: HTMLElement;


  ngOnInit() {
    this.container = document.getElementById("container");
    this.logo = document.getElementById("logo");



    this.t = this.logo.getBoundingClientRect().top - this.container.getBoundingClientRect().top;
    this.l = this.logo.getBoundingClientRect().left - this.container.getBoundingClientRect().left;
    this.top = this.logo.getBoundingClientRect().top - this.container.getBoundingClientRect().top + "px";
    this.left = this.logo.getBoundingClientRect().left - this.container.getBoundingClientRect().left + "px";
  }

  moveUp() {
    const offsetTopLogo = this.logo.getBoundingClientRect().top - this.container.getBoundingClientRect().top;

    if (offsetTopLogo > 0) {
      this.t -= 20;
      this.top = this.t + 'px';
    }
  }

  moveDown() {
    const offsetBottomLogo = this.logo.getBoundingClientRect().bottom - this.container.getBoundingClientRect().bottom;

    if (-offsetBottomLogo > 0) {
      this.t += 20;
      this.top = this.t + 'px';
    }
  }

  moveRight() {
    const offsetLeftLogo = this.logo.getBoundingClientRect().right - this.container.getBoundingClientRect().right;

    if (-offsetLeftLogo > 0) {
      this.l += 20;
      this.left = this.l + 'px';
    }
  }

  moveLeft() {
    const offsetLeftLogo = this.logo.getBoundingClientRect().left - this.container.getBoundingClientRect().left;

    if (offsetLeftLogo > 0) {
      this.l -= 20;
      this.left = this.l + 'px';
    }
  }
}


