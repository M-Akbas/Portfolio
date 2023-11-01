import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeTitleComponent } from './home-title/home-title.component';
import { CtaComponent } from './cta/cta.component';
import { EmailSendComponent } from './email-send/email-send.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'sent', component: EmailSendComponent}, // test 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
