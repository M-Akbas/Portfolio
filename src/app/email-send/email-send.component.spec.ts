import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSendComponent } from './email-send.component';

describe('EmailSendComponent', () => {
  let component: EmailSendComponent;
  let fixture: ComponentFixture<EmailSendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailSendComponent]
    });
    fixture = TestBed.createComponent(EmailSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
