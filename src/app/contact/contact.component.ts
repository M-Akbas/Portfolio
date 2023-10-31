import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router) {


    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
      privacy: [false, [Validators.requiredTrue]]
    })
  }

  sendMail(event: any) {
    if (this.form.valid === false) {
      this.submitted = true;
    } else {

      event.preventDefault();

      const data = new FormData(event.target);

      fetch("https://formspree.io/f/mqkvnvkj", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
          'Accept': 'application/json'
        }
      }).then(() => {
        this.router.navigate(['/sent']);
      }).catch((error) => {
        console.log(error);
      });
    }



  }
}
