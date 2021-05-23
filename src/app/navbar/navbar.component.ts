import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() brand: string;
  @Input() brandImage: string;
  @Input() brandColor: string;
  @Input() backgroundColor: string;
  @Input() textColor: string;
  @Input() links: string[];
  @Input() linksHref: string[];
  @Input() linkColor: string;
  @Input() linkBGColor: string;
  @Input() linkActiveColor: string;
  backup: string;

  constructor() {}

  ngOnInit(): void {
    this.brand = this.brand ? this.brand : '';
    this.brandImage = this.brandImage ? this.brandImage : '';
    this.brandColor = this.brandColor ? this.brandColor : '';
    this.backgroundColor = this.backgroundColor ? this.backgroundColor : '';
    this.textColor = this.textColor ? this.textColor : '';
    this.links = this.links ? this.links : [];
    this.linksHref = this.linksHref ? this.linksHref : [];
    this.linkColor = this.linkColor ? this.linkColor : '';
    this.linkBGColor = this.linkBGColor ? this.linkBGColor : '';
    this.linkActiveColor = this.linkActiveColor ? this.linkActiveColor : '';
    this.getScrollValue(this);
    this.backup = this.linkColor;
  }

  getScrollValue(that) {
    let html = document.getElementById('page-main');
    let home = document.getElementById('home');
    let about = document.getElementById('about');
    let projects = document.getElementById('projects');
    let experience = document.getElementById('experience');
    let contact = document.getElementById('contact');
    let triangle = 135;
    // console.log(html.scrollTop);
    let scroll = html.scrollTop;
    // let length = home.offsetHeight;
    // console.log("Projects",projects.offsetHeight);
    // console.log("Scroll",scroll);
    // console.log("Experience",experience.offsetHeight);
    

    if (scroll <= 10) {
      this.backgroundColor = 'transparent';
      this.textColor = this.backup;
      this.linkColor = this.backup;
    }
    if (scroll > 10 && scroll < home.offsetHeight) {
      this.backgroundColor = '#36A8BE';
      this.textColor = this.backup;
      this.linkColor = this.backup;
    }

    if (scroll >= about.offsetHeight) {
      this.backgroundColor = '#F68375';
      this.textColor = this.backup;
      this.linkColor = this.backup;
    }

    if (scroll >= projects.offsetHeight + (triangle* 1.5)) {
      this.backgroundColor = '#8F2D56';
      this.textColor = 'white';
      this.linkColor = 'white';
    }

    if (scroll >= experience.offsetHeight + (triangle * 7)) {
      this.backgroundColor = document.getElementById(
        'experience-container'
      ).style.backgroundColor;
      this.textColor = document.getElementById(
        'experience-container'
      ).style.color;
      this.linkColor = document.getElementById(
        'experience-container'
      ).style.color;
    }

    setTimeout(() => {
      this.getScrollValue(this);
    }, 1);
  }
}
