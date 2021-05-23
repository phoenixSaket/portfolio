import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  @Input() companies: any[];
  images: string[] = [];
  bgColor: string;
  color: string;
  count: number = 0;

  constructor() {}

  ngOnInit(): void {
    console.log(this.companies);
    let images = [];
    this.companies &&
      this.companies.forEach((element) => {
        // console.log(element);
        images.push({ path: element.image });
      });

    this.images = images;

    this.getColors(this);
  }

  getColors(that) {
    this.count = this.count >= this.companies.length ? 0 : this.count;

    switch (this.count) {
      case 0:
        this.bgColor = '#E64D11';
        this.color = '#fff';
        break;
      case 1:
        this.bgColor = '#EAEAEA';
        this.color = '#FF985E';
        break;
      case 2:
        this.bgColor = '#001837';
        this.color = '#fff';
        break;
      default:
        this.bgColor = '#E64D11';
        this.color = '#000';
        break;
    }

    this.count++;
    setTimeout(() => {
      this.getColors(that);
    }, 5000);
  }
}
