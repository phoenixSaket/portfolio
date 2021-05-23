import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string = "";
  email: string = "";
  subject: string = "";
  message: string = "";

  nameError: string = "";
  emailError: string = "";
  subjectError: string = "";
  messageError: string = "";
  error: string = "";

  constructor(public service: ApiService) { }

  ngOnInit(): void {
  }

  getValue(event, index) {
    console.log(event);
    console.log(index);

    switch (index) {
      case 1:
        this.name = event;
        break;
      case 2:
        this.email = event;
        break;
      case 3:
        this.subject = event;
        break;
      case 4:
        this.message = event;
        break;
      default:
        break;
    }

  }

  sendMail() {
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.email))) {
      this.emailError = "Invalid Email Address !";
    } else {
      this.emailError = "";
    }

    if (this.name.length === 0) {
      this.nameError = "Invalid Name !";
    } else {
      this.nameError = "";
    }

    if (this.subject.length === 0) {
      this.subjectError = "Invalid Subject !";
    } else {
      this.subjectError = "";
    }

    if (this.message.length === 0) {
      this.messageError = "Invalid Message !";
    } else {
      this.messageError = "";
    }

    if (this.nameError == "" && this.emailError == "" && this.subjectError == "" && this.messageError == "") {


      this.service.sendMail(this.name, this.email, this.subject, this.message);

      this.name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
      this.error = "";

    } else {
      this.error = "Please correct your inputs and try again !";
    }
  }
}
