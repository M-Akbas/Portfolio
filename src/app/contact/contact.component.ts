import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { style } from '@angular/animations';


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
    if (!this.form.valid) {
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
        this.noString();
        this.animation();

      }).catch((error) => {
        console.log(error);
      });

      this.submitted = false;
    }



  }

 animation(){
  const notificationElement = document.querySelector(".notification") as HTMLElement; 
  notificationElement.style.opacity = "1";
  notificationElement.style.bottom = "350px";
  setTimeout(()=>{
    notificationElement.style.opacity = "0";
  }, 2000);
 }

  noString(){
    const nameValue = this.form.get("name").value;
    const emailValue = this.form.get("email").value;
    const messageValue = this.form.get("message").value;
    const privacyValue = this.form.get("privacy").value;

    // Leeren der Werte
    this.form.get("name").setValue('');
    this.form.get("email").setValue('');
    this.form.get("message").setValue('');
    this.form.get("privacy").setValue(false);
}

}
