import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  isSendingMail: boolean = false;
  isMailSent: boolean = false;
  isSendingTried: boolean = false;

  constructor() { }

  sendMail(name, email, subject, message) {
    this.isSendingMail = true;
    this.isMailSent = false;

    let templateParams = {
      name: name,
      from_email: email,
      to_name: email,
      subject: subject,
      message: message,
    }

    emailjs.send(
      'service_hyg0hkb',
      'template_8fvylwn',
      templateParams,
      'user_WgooPhzQ9qwK3mob5BE1A'
    ).then((response) => {
      console.log("response", response);
      if (response.status == 200) {
        this.isSendingMail = false;
        this.isMailSent = true;
        this.isSendingTried = true;

      }
    }, (error) => {
      console.log("Email Error in service", error);
      this.isSendingTried = true;
      this.isSendingMail = false;
      this.isMailSent = false;
    })

  }
}
