import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  @ViewChild('contactForm', { static: false }) form!: NgForm;

  onSubmit(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_msg1u79',
        'template_8j6tqs4',
        e.target as HTMLFormElement,
        {
          publicKey: 'E50MhA3eeFNF24o_q',
        }
      )
      .then(
        () => {
          // console.log('SUCCESS!');
          alert('Mail sent successfully!');
          this.form.reset();
        },
        (error) => {
          alert('Error while sending mail. TRY AGAIN!');
          // console.log('FAILED...', (error as EmailJSResponseStatus).text);
          console.log(e);
        }
      );
  }
}
