// contact.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      user_name: ['', [Validators.required, Validators.minLength(3)]],
      user_email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  public sendEmail(e: Event): void {
    e.preventDefault();

    if (this.contactForm.valid) {
      emailjs
        .sendForm('service_aebjses', 'template_8ke9fdb', e.target as HTMLFormElement, 'kib9ungwdK7ePpMxY')
        .then(
          (result: EmailJSResponseStatus) => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Thanks for the Mail. We'll Contact you soon.",
              showConfirmButton: false,
              timer: 1500
            });
            console.log('SUCCESS!', result.status, result.text);
            this.contactForm.reset(); // Clear form after successful submission
          },
          (error) => {
            console.log('FAILED...', error.text);
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Something went wrong. Please try again.",
              showConfirmButton: false,
              timer: 1500
            });
          }
        );
    } else {
      this.contactForm.markAllAsTouched(); // Mark all fields to show validation errors
    }
  }
}
