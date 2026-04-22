import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about-section section-pad">
      <div class="container">
        <div class="row align-items-center g-5">

          <!-- Left: Image -->
          <div class="col-lg-6">
            <div class="about-img-wrap">
              <div class="about-img-main">
                <img src="assets/images/about-ship.jpg" alt="About LogiXpress"
                     onerror="this.src='https://images.unsplash.com/photo-1516733968668-dbdce39c4651?w=600&q=80'">
              </div>
              <div class="experience-badge">
                <span class="exp-number">15+</span>
                <span class="exp-text">Years of<br>Excellence</span>
              </div>
              <div class="about-img-secondary">
                <img src="assets/images/about-port.jpg" alt="Port Operations"
                     onerror="this.src='https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=300&q=80'">
              </div>
            </div>
          </div>

          <!-- Right: Content -->
          <div class="col-lg-6">
            <span class="section-tag">
              <i class="fa-solid fa-circle-info me-2"></i>About Us
            </span>
            <h2 class="section-title">WE DELIVER YOUR <span class="highlight">CARGO WORLDWIDE</span></h2>
            <p class="about-desc">
              LogiXpress has been a leading force in global logistics since 2009. We combine cutting-edge technology with decades of industry expertise to deliver seamless shipping solutions across sea, air, and land.
            </p>

            <div class="about-features">
              <div class="about-feature" *ngFor="let feature of features">
                <div class="feature-icon">
                  <i [class]="'fa-solid ' + feature.icon"></i>
                </div>
                <div class="feature-content">
                  <h4>{{ feature.title }}</h4>
                  <p>{{ feature.desc }}</p>
                </div>
              </div>
            </div>

            <a href="#contact" class="btn-primary-custom">
              <i class="fa-solid fa-phone me-2"></i>Talk to an Expert
            </a>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      background: #fff;
      overflow: hidden;
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
      margin-bottom: 20px;
      line-height: 1.1;
    }
    .highlight { color: #f5a623; }
    .about-desc {
      color: #666;
      line-height: 1.9;
      margin-bottom: 32px;
    }
    .about-img-wrap {
      position: relative;
      padding: 20px 20px 60px 0;
    }
    .about-img-main {
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0,0,0,0.15);
    }
    .about-img-main img {
      width: 100%;
      height: 400px;
      object-fit: cover;
    }
    .about-img-secondary {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 45%;
      border-radius: 10px;
      overflow: hidden;
      border: 5px solid #fff;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }
    .about-img-secondary img {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }
    .experience-badge {
      position: absolute;
      top: 40px;
      right: -10px;
      background: #f5a623;
      color: #fff;
      border-radius: 12px;
      padding: 20px 24px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(245,166,35,0.4);
    }
    .exp-number {
      display: block;
      font-size: 2.2rem;
      font-weight: 900;
      font-family: 'Barlow Condensed', sans-serif;
      line-height: 1;
    }
    .exp-text {
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      opacity: 0.9;
    }
    .about-features { margin-bottom: 36px; }
    .about-feature {
      display: flex;
      gap: 18px;
      margin-bottom: 24px;
      align-items: flex-start;
    }
    .feature-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #f5a623, #e09510);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 1.2rem;
      flex-shrink: 0;
    }
    .feature-content h4 {
      font-weight: 700;
      color: #1a1a2e;
      margin-bottom: 4px;
      font-size: 1rem;
    }
    .feature-content p {
      color: #777;
      font-size: 0.88rem;
      margin: 0;
      line-height: 1.6;
    }
    .btn-primary-custom {
      display: inline-block;
      background: #1a1a2e;
      color: #fff;
      font-weight: 700;
      font-size: 0.9rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      padding: 16px 36px;
      border-radius: 4px;
      text-decoration: none;
      transition: all 0.3s;
    }
    .btn-primary-custom:hover {
      background: #f5a623;
      color: #fff;
      transform: translateY(-2px);
    }
  `]
})
export class AboutComponent {
  features = [
    {
      icon: 'fa-earth-americas',
      title: 'Global Network',
      desc: 'Connected to 150+ countries with trusted local agents in every major port and logistics hub worldwide.'
    },
    {
      icon: 'fa-clock',
      title: 'On-Time Delivery',
      desc: '98.7% on-time delivery rate backed by real-time tracking and proactive communication at every step.'
    },
    {
      icon: 'fa-headset',
      title: '24/7 Support',
      desc: 'Dedicated account managers and round-the-clock customer support to handle any shipping challenge.'
    }
  ];
}
