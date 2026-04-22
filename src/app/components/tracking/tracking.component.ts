import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tracking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="tracking-section">
      <div class="container">
        <div class="tracking-card">
          <div class="row align-items-center">
            <div class="col-lg-5 mb-4 mb-lg-0">
              <span class="section-tag-light">
                <i class="fa-solid fa-location-dot me-2"></i>Track Shipment
              </span>
              <h2 class="tracking-title">TRACK YOUR <span class="highlight">CARGO</span></h2>
              <p class="tracking-desc">
                Get real-time updates on your shipment status. Enter your tracking number below for instant access to your cargo location.
              </p>
              <div class="tracking-features">
                <span><i class="fa-solid fa-check-circle text-warning me-2"></i>Real-time Updates</span>
                <span><i class="fa-solid fa-check-circle text-warning me-2"></i>Global Coverage</span>
                <span><i class="fa-solid fa-check-circle text-warning me-2"></i>Email Notifications</span>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="tracking-form">
                <h3 class="form-title">Enter Tracking Number</h3>
                <div class="input-group-custom">
                  <div class="input-icon">
                    <i class="fa-solid fa-barcode"></i>
                  </div>
                  <input type="text" [(ngModel)]="trackingNumber"
                         placeholder="e.g. LX-2024-00123456"
                         class="tracking-input">
                  <button class="btn-track" (click)="trackShipment()">
                    <i class="fa-solid fa-magnifying-glass me-2"></i>Track Now
                  </button>
                </div>

                <!-- Result -->
                <div class="tracking-result" *ngIf="trackingResult">
                  <div class="result-status" [class]="'status-' + trackingResult.status">
                    <i [class]="'fa-solid ' + trackingResult.icon + ' me-2'"></i>
                    {{ trackingResult.message }}
                  </div>
                  <div class="result-steps">
                    <div class="step" *ngFor="let step of trackingResult.steps" [class.active]="step.active">
                      <div class="step-dot"><i class="fa-solid fa-check"></i></div>
                      <div class="step-info">
                        <strong>{{ step.label }}</strong>
                        <span>{{ step.date }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .tracking-section {
      padding: 80px 0;
      background: #f0f4f8;
    }
    .tracking-card {
      background: #1a1a2e;
      border-radius: 16px;
      padding: 60px 50px;
      position: relative;
      overflow: hidden;
    }
    .tracking-card::before {
      content: '';
      position: absolute;
      top: -100px;
      right: -100px;
      width: 400px;
      height: 400px;
      background: rgba(245,166,35,0.05);
      border-radius: 50%;
    }
    .section-tag-light {
      display: inline-block;
      background: rgba(245,166,35,0.15);
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
    .tracking-title {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 2.8rem;
      font-weight: 900;
      color: #fff;
      text-transform: uppercase;
      margin-bottom: 16px;
      line-height: 1.1;
    }
    .highlight { color: #f5a623; }
    .tracking-desc {
      color: rgba(255,255,255,0.7);
      line-height: 1.8;
      margin-bottom: 20px;
    }
    .tracking-features {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .tracking-features span {
      color: rgba(255,255,255,0.8);
      font-size: 0.9rem;
    }
    .tracking-form {
      background: #fff;
      border-radius: 12px;
      padding: 36px;
    }
    .form-title {
      font-weight: 700;
      color: #1a1a2e;
      margin-bottom: 20px;
      font-size: 1.2rem;
    }
    .input-group-custom {
      display: flex;
      gap: 0;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      overflow: hidden;
      transition: border-color 0.3s;
    }
    .input-group-custom:focus-within {
      border-color: #f5a623;
    }
    .input-icon {
      background: #f8f9fa;
      padding: 0 16px;
      display: flex;
      align-items: center;
      color: #999;
      border-right: 1px solid #e0e0e0;
    }
    .tracking-input {
      flex: 1;
      border: none;
      outline: none;
      padding: 16px;
      font-size: 0.95rem;
      color: #333;
    }
    .btn-track {
      background: #f5a623;
      color: #fff;
      border: none;
      padding: 0 28px;
      font-weight: 700;
      font-size: 0.85rem;
      cursor: pointer;
      transition: background 0.3s;
      white-space: nowrap;
    }
    .btn-track:hover { background: #e09510; }
    .tracking-result { margin-top: 24px; }
    .result-status {
      padding: 14px 20px;
      border-radius: 8px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    .status-success { background: #d4edda; color: #155724; }
    .status-transit { background: #fff3cd; color: #856404; }
    .status-error { background: #f8d7da; color: #721c24; }
    .result-steps { display: flex; flex-direction: column; gap: 12px; }
    .step {
      display: flex;
      gap: 14px;
      align-items: center;
      opacity: 0.4;
      transition: opacity 0.3s;
    }
    .step.active { opacity: 1; }
    .step-dot {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #e0e0e0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
      color: #999;
      flex-shrink: 0;
    }
    .step.active .step-dot {
      background: #f5a623;
      color: #fff;
    }
    .step-info { display: flex; flex-direction: column; }
    .step-info strong { font-size: 0.9rem; color: #333; }
    .step-info span { font-size: 0.8rem; color: #888; }
  `]
})
export class TrackingComponent {
  trackingNumber = '';
  trackingResult: any = null;

  trackShipment() {
    if (!this.trackingNumber.trim()) return;

    // Demo tracking result
    this.trackingResult = {
      status: 'transit',
      icon: 'fa-ship',
      message: `Shipment ${this.trackingNumber} is currently in transit`,
      steps: [
        { label: 'Order Confirmed', date: 'Apr 15, 2026 – 09:00', active: true },
        { label: 'Picked Up from Shipper', date: 'Apr 16, 2026 – 14:30', active: true },
        { label: 'Departed Origin Port', date: 'Apr 17, 2026 – 08:00', active: true },
        { label: 'In Transit – Open Sea', date: 'Apr 20, 2026 – Current', active: true },
        { label: 'Arrived Destination Port', date: 'Estimated Apr 25, 2026', active: false },
        { label: 'Delivered', date: 'Estimated Apr 27, 2026', active: false }
      ]
    };
  }
}
