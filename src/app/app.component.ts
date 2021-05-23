import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './projects.css'],
})
export class AppComponent {
  title = 'portfolio';
  links = ['Home', 'About', 'Projects', 'Experience', 'Contact'];
  linksHref = ['#home', '#about', '#projects', '#experience', '#contact'];
  website: string = 'https://phoenixsaket.github.io/profile/';
  websites: any[] = [
    {
      url: 'https://phoenixsaket.github.io/profile/',
      name: 'Notes Keeper',
      isSelected: true,
    },
    {
      url: 'https://phoenixsaket.github.io/analog-clock/',
      name: 'Analog Clock',
      isSelected: false,
    },
    {
      url: 'https://phoenixsaket.github.io/card-trick/',
      name: 'Card Arranger',
      isSelected: false,
    },
    {
      url: 'https://phoenixsaket.github.io/saketVerma/',
      name: 'Another Portfolio',
      isSelected: false,
    },
  ];
  companies: any[] = [
    {
      url: 'www.plexusmd.com',
      image: 'https://raw.githubusercontent.com/phoenixSaket/saketVerma/master/saketverma/src/Images/PlexusMD.png',
      name: 'PlexusMD',
      desc: 'PlexusMD is an online professional network exclusively for medical professionals and healthcare organisations.',
      from: 'January 2020',
      to: 'July 2020',
      position: 'Intern - Frontend Developer',
    },
    {
      url: 'www.scrollright.com',
      image: 'https://raw.githubusercontent.com/phoenixSaket/saketVerma/master/saketverma/src/Images/sr_mukul.png',
      name: 'ScrollRight',
      desc: 'ScrollRight is a online freelance service provider and product building company where you can ask to create your own app, website, software. Think Big. Think Innovative. Think ScrollRight!',
      from: 'May 2020',
      to: '',
      position: 'Freelance - Software Developer',
    },
    {
      url: 'www.scrollright.com',
      image: 'assets/citiustech.jpg',
      name: 'CitiusTech',
      desc: 'CitiusTech is a healthcare IT company providing specialized healthcare technology & business services, consulting, and medical IT solutions.',
      from: 'October 2020',
      to: '',
      position: 'Software Developer',
    },
  ];

  onClickProject(project) {
    let act = this.websites.indexOf(project);
    for (let i = 0; i < this.websites.length; i++) {
      this.websites[i].isSelected = false;
    }
    this.websites[act].isSelected = true;
  }
}
