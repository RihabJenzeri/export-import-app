import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="services-section section-pad" id="services">
      <div class="container">

        <!-- Header -->
        <div class="row justify-content-center mb-5">
          <div class="col-lg-7 text-center">
            <span class="section-tag">
              <i class="fa-solid fa-layer-group me-2"></i>What We Offer
            </span>
            <h2 class="section-title">OUR <span class="highlight">FREIGHT SERVICES</span></h2>
            <p class="section-desc">Comprehensive logistics solutions tailored to meet your global shipping needs with reliability and efficiency.</p>
          </div>
        </div>

        <!-- Services Grid -->
        <div class="row g-4">
          <div class="col-lg-4 col-md-6" *ngFor="let service of services">
            <div class="service-card">
              <div class="service-icon-wrap">
                <i [class]="'fa-solid ' + service.icon"></i>
              </div>
              <h3 class="service-title">{{ service.title }}</h3>
              <p class="service-desc">{{ service.description }}</p>
              <ul class="service-features">
                <li *ngFor="let feature of service.features">
                  <i class="fa-solid fa-check text-warning me-2"></i>{{ feature }}
                </li>
              </ul>
              <a href="#" class="service-link">
                Learn More <i class="fa-solid fa-arrow-right ms-1"></i>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .services-section {
      background: #f8f9fa;
    }
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
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 900;
      color: #1a1a2e;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .highlight { color: #f5a623; }
    .section-desc {
      color: #666;
      line-height: 1.8;
    }
    .service-card {
      background: #fff;
      border-radius: 8px;
      padding: 36px 30px;
      height: 100%;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
      border-bottom: 4px solid transparent;
      box-shadow: 0 2px 20px rgba(0,0,0,0.06);
    }
    .service-card:hover {
      transform: translateY(-8px);
      border-bottom-color: #f5a623;
      box-shadow: 0 20px 50px rgba(0,0,0,0.12);
    }
    .service-card::before {
      content: '';
      position: absolute;
      top: 0;
      right: -50px;
      width: 120px;
      height: 120px;
      background: rgba(245,166,35,0.05);
      border-radius: 50%;
      transition: all 0.3s;
    }
    .service-card:hover::before {
      width: 200px;
      height: 200px;
      background: rgba(245,166,35,0.08);
    }
    .service-icon-wrap {
      width: 70px;
      height: 70px;
      background: linear-gradient(135deg, #f5a623, #e09510);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
      font-size: 1.8rem;
      color: #fff;
    }
    .service-title {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 1.4rem;
      font-weight: 800;
      color: #1a1a2e;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .service-desc {
      color: #666;
      font-size: 0.9rem;
      line-height: 1.7;
      margin-bottom: 16px;
    }
    .service-features {
      list-style: none;
      padding: 0;
      margin-bottom: 24px;
    }
    .service-features li {
      font-size: 0.85rem;
      color: #555;
      padding: 4px 0;
    }
    .service-link {
      color: #f5a623;
      font-weight: 700;
      font-size: 0.85rem;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: gap 0.3s;
    }
    .service-link:hover {
      color: #e09510;
    }
  `]
})
export class ServicesComponent {
  services = [
    {
      icon: 'fa-ship',
      title: 'Sea Freight',
      description: 'Full container load and less-than-container load shipping to ports worldwide with competitive rates.',
      features: ['FCL & LCL Options', 'Port-to-Port & Door-to-Door', 'Real-time Cargo Tracking', 'Customs Clearance']
    },
    {
      icon: 'fa-plane',
      title: 'Air Freight',
      description: 'Fast and secure air cargo services for time-critical shipments to over 200 destinations.',
      features: ['Express & Standard Options', 'Temperature-Controlled Cargo', 'Door-to-Airport Service', 'Priority Handling']
    },
    {
      icon: 'fa-truck',
      title: 'Road Freight',
      description: 'Reliable ground transportation solutions across domestic and international routes.',
      features: ['FTL & LTL Services', 'GPS Tracking Included', 'Dedicated Fleet', 'Cross-Border Transport']
    },
    {
      icon: 'fa-warehouse',
      title: 'Warehousing',
      description: 'Secure storage and distribution center services with 24/7 monitoring and inventory management.',
      features: ['Climate Controlled', 'Inventory Management', '24/7 Security', 'Pick & Pack Services']
    },
    {
      icon: 'fa-file-contract',
      title: 'Customs Brokerage',
      description: 'Expert customs clearance services to ensure your shipments cross borders without delays.',
      features: ['Import & Export Clearance', 'Tariff Classification', 'Duty Drawback', 'Trade Compliance']
    },
    {
      icon: 'fa-shield-halved',
      title: 'Cargo Insurance',
      description: 'Comprehensive cargo protection plans to safeguard your shipments against loss or damage.',
      features: ['All-Risk Coverage', 'Flexible Policies', 'Fast Claims Process', 'Global Coverage']
    }
  ];
}
