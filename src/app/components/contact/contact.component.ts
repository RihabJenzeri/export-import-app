import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="contact-section section-pad" id="contact">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-lg-6 text-center">
            <span class="section-tag"><i class="fa-solid fa-envelope me-2"></i>Get In Touch</span>
            <h2 class="section-title">REQUEST A <span class="highlight">FREE QUOTE</span></h2>
            <p class="section-desc">Tell us about your shipment and we'll get back to you within 24 hours.</p>
          </div>
        </div>

        <div class="row g-5">
          <!-- Contact Info -->
          <div class="col-lg-4">
            <div class="contact-info">
              <div class="contact-item" *ngFor="let info of contactInfo">
                <div class="contact-icon">
                  <i [class]="'fa-solid ' + info.icon"></i>
                </div>
                <div class="contact-details">
                  <h4>{{ info.label }}</h4>
                  <p>{{ info.value }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="col-lg-8">
            <div class="contact-form">
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label">Full Name *</label>
                  <div class="input-wrap">
                    <i class="fa-solid fa-user input-pre-icon"></i>
                    <input type="text" [(ngModel)]="form.name" placeholder="John Doe" class="form-control-custom">
                  </div>
                </div>
                <div class="col-md-6">
                  <label class="form-label">Email Address *</label>
                  <div class="input-wrap">
                    <i class="fa-solid fa-envelope input-pre-icon"></i>
                    <input type="email" [(ngModel)]="form.email" placeholder="john@company.com" class="form-control-custom">
                  </div>
                </div>
                <div class="col-md-6">
                  <label class="form-label">Freight Type</label>
                  <div class="input-wrap">
                    <i class="fa-solid fa-ship input-pre-icon"></i>
                    <select [(ngModel)]="form.type" class="form-control-custom">
                      <option value="">Select Service</option>
                      <option>Sea Freight</option>
                      <option>Air Freight</option>
                      <option>Road Freight</option>
                      <option>Warehousing</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6">
                  <label class="form-label">Cargo Weight</label>
                  <div class="input-wrap">
                    <i class="fa-solid fa-weight-hanging input-pre-icon"></i>
                    <input type="text" [(ngModel)]="form.weight" placeholder="e.g. 500 kg" class="form-control-custom">
                  </div>
                </div>
                <div class="col-12">
                  <label class="form-label">Message</label>
                  <textarea [(ngModel)]="form.message" rows="4" placeholder="Describe your shipping needs..." class="form-control-custom"></textarea>
                </div>
                <div class="col-12">
                  <button class="btn-submit" (click)="submitForm()">
                    <i class="fa-solid fa-paper-plane me-2"></i>Send Request
                  </button>
                </div>
              </div>

              <div class="success-msg" *ngIf="submitted">
                <i class="fa-solid fa-circle-check me-2"></i>
                Thank you! We'll contact you within 24 hours.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section { background: #fff; }
    .section-pad { padding: 100px 0; }
    .section-tag {
      display: inline-block;
      background: rgba(245,166,35,0.1);
      color: #f5a623;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 8px 20px;
      border-radius: 20px;
      margin-bottom: 16px;
      border: 1px solid rgba(245,166,35,0.3);
    }
    .section-title {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 2.5rem;
      font-weight: 900;
      color: #1a1a2e;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .highlight { color: #f5a623; }
    .section-desc { color: #666; }
    .contact-info { display: flex; flex-direction: column; gap: 24px; }
    .contact-item {
      display: flex;
      gap: 18px;
      align-items: flex-start;
      padding: 24px;
      background: #f8f9fa;
      border-radius: 10px;
      border-left: 4px solid #f5a623;
    }
    .contact-icon {
      width: 46px;
      height: 46px;
      background: #f5a623;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 1.1rem;
      flex-shrink: 0;
    }
    .contact-details h4 {
      font-weight: 700;
      color: #1a1a2e;
      font-size: 0.9rem;
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .contact-details p { color: #666; font-size: 0.9rem; margin: 0; }
    .contact-form { background: #f8f9fa; padding: 40px; border-radius: 12px; }
    .form-label { font-weight: 600; color: #333; font-size: 0.85rem; margin-bottom: 8px; display: block; }
    .input-wrap { position: relative; }
    .input-pre-icon {
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      color: #999;
      font-size: 0.9rem;
      z-index: 1;
    }
    textarea + .input-pre-icon { top: 18px; transform: none; }
    .form-control-custom {
      width: 100%;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      padding: 14px 14px 14px 42px;
      font-size: 0.9rem;
      color: #333;
      background: #fff;
      outline: none;
      transition: border-color 0.3s;
      appearance: none;
    }
    textarea.form-control-custom { padding-left: 42px; resize: vertical; }
    .form-control-custom:focus { border-color: #f5a623; }
    .btn-submit {
      background: #f5a623;
      color: #fff;
      border: none;
      padding: 16px 40px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 0.95rem;
      cursor: pointer;
      transition: all 0.3s;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .btn-submit:hover {
      background: #1a1a2e;
      transform: translateY(-2px);
    }
    .success-msg {
      margin-top: 20px;
      padding: 16px 20px;
      background: #d4edda;
      color: #155724;
      border-radius: 8px;
      font-weight: 600;
    }
  `]
})
export class ContactComponent {
  submitted = false;
  form = { name: '', email: '', type: '', weight: '', message: '' };

  contactInfo = [
    { icon: 'fa-location-dot', label: 'Our Office', value: '123 Harbor Drive, Port District, NY 10001' },
    { icon: 'fa-phone', label: 'Phone Number', value: '+1 (800) 555-CARGO' },
    { icon: 'fa-envelope', label: 'Email Address', value: 'info@logixpress.com' }
  ];

  submitForm() {
    if (this.form.name && this.form.email) {
      this.submitted = true;
      setTimeout(() => this.submitted = false, 5000);
      this.form = { name: '', email: '', type: '', weight: '', message: '' };
    }
  }
}
