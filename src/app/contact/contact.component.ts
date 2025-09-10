import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

import { SnackBarService } from '../services/snackbar.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  @ViewChild('contactForm', { static: false }) form!: NgForm;
  loading = false

  constructor(private snackBarService: SnackBarService) { }

  onSubmit(e: Event) {
    this.loading = true;
    e.preventDefault();
    if (this.form.invalid) {
      this.loading = false
      this.snackBarService.showError('Please enter valid details')
      return;
    }

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
          this.loading = false
          this.snackBarService.showSuccess('Thank you! Your message has been successfully sent. We’ll get back to you as soon as possible.')
          this.form.reset();
        },
        (error) => {
          this.loading = false
          this.snackBarService.showError('Oops! Something went wrong while sending your message. Please try again later or contact us directly at edrickasper66@gmail.com.');
        }
      );
  }
}
