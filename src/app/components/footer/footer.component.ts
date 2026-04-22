import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-main">
        <div class="container">
          <div class="row g-5">

            <!-- Brand -->
            <div class="col-lg-4">
              <div class="footer-brand">
                <div class="footer-logo">
                  <i class="fa-solid fa-truck-fast text-warning me-2 fs-4"></i>
                  <span class="fw-bold fs-3">Logi<span class="text-warning">Xpress</span></span>
                </div>
                <p class="footer-desc">
                  Your trusted partner for global logistics. We move your cargo safely across sea, air, and land — connecting businesses to the world.
                </p>
                <div class="social-links">
                  <a href="#" class="social-link"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="#" class="social-link"><i class="fa-brands fa-twitter"></i></a>
                  <a href="#" class="social-link"><i class="fa-brands fa-linkedin-in"></i></a>
                  <a href="#" class="social-link"><i class="fa-brands fa-instagram"></i></a>
                  <a href="#" class="social-link"><i class="fa-brands fa-youtube"></i></a>
                </div>
              </div>
            </div>

            <!-- Services -->
            <div class="col-lg-2 col-md-4">
              <h4 class="footer-heading">Services</h4>
              <ul class="footer-links">
                <li *ngFor="let link of serviceLinks">
                  <a href="#"><i class="fa-solid fa-chevron-right me-1"></i>{{ link }}</a>
                </li>
              </ul>
            </div>

            <!-- Company -->
            <div class="col-lg-2 col-md-4">
              <h4 class="footer-heading">Company</h4>
              <ul class="footer-links">
                <li *ngFor="let link of companyLinks">
                  <a href="#"><i class="fa-solid fa-chevron-right me-1"></i>{{ link }}</a>
                </li>
              </ul>
            </div>

            <!-- Newsletter -->
            <div class="col-lg-4 col-md-4">
              <h4 class="footer-heading">Stay Updated</h4>
              <p class="footer-desc">Subscribe to our newsletter for shipping tips and industry news.</p>
              <div class="newsletter-form">
                <input type="email" placeholder="Your email address" class="newsletter-input">
                <button class="newsletter-btn">
                  <i class="fa-solid fa-paper-plane"></i>
                </button>
              </div>
              <div class="certifications">
                <span class="cert-badge"><i class="fa-solid fa-shield-halved me-1"></i>ISO Certified</span>
                <span class="cert-badge"><i class="fa-solid fa-award me-1"></i>IATA Member</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <p class="copyright">
                &copy; {{ currentYear }} LogiXpress. All rights reserved.
              </p>
            </div>
            <div class="col-md-6 text-md-end">
              <div class="footer-bottom-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer { background: #0d0d1a; }
    .footer-main { padding: 80px 0 50px; }
    .footer-logo {
      display: flex;
      align-items: center;
      color: #fff;
      margin-bottom: 20px;
    }
    .footer-desc {
      color: rgba(255,255,255,0.5);
      font-size: 0.9rem;
      line-height: 1.8;
      margin-bottom: 24px;
    }
    .social-links { display: flex; gap: 10px; }
    .social-link {
      width: 38px;
      height: 38px;
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(255,255,255,0.5);
      font-size: 0.85rem;
      text-decoration: none;
      transition: all 0.3s;
    }
    .social-link:hover {
      background: #f5a623;
      border-color: #f5a623;
      color: #fff;
    }
    .footer-heading {
      color: #fff;
      font-weight: 700;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-bottom: 20px;
      padding-bottom: 12px;
      border-bottom: 2px solid #f5a623;
      display: inline-block;
    }
    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .footer-links li { margin-bottom: 10px; }
    .footer-links a {
      color: rgba(255,255,255,0.5);
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s;
    }
    .footer-links a:hover { color: #f5a623; }
    .newsletter-form {
      display: flex;
      margin-bottom: 20px;
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 8px;
      overflow: hidden;
    }
    .newsletter-input {
      flex: 1;
      background: rgba(255,255,255,0.05);
      border: none;
      padding: 12px 16px;
      color: #fff;
      font-size: 0.88rem;
      outline: none;
    }
    .newsletter-input::placeholder { color: rgba(255,255,255,0.3); }
    .newsletter-btn {
      background: #f5a623;
      border: none;
      padding: 0 18px;
      color: #fff;
      cursor: pointer;
      font-size: 0.9rem;
      transition: background 0.3s;
    }
    .newsletter-btn:hover { background: #e09510; }
    .certifications { display: flex; gap: 10px; flex-wrap: wrap; }
    .cert-badge {
      background: rgba(255,255,255,0.07);
      color: rgba(255,255,255,0.6);
      font-size: 0.78rem;
      padding: 6px 12px;
      border-radius: 4px;
      border: 1px solid rgba(255,255,255,0.1);
    }
    .footer-bottom {
      border-top: 1px solid rgba(255,255,255,0.08);
      padding: 20px 0;
    }
    .copyright {
      color: rgba(255,255,255,0.4);
      font-size: 0.85rem;
      margin: 0;
    }
    .footer-bottom-links {
      display: flex;
      gap: 20px;
      justify-content: flex-end;
    }
    .footer-bottom-links a {
      color: rgba(255,255,255,0.4);
      text-decoration: none;
      font-size: 0.82rem;
      transition: color 0.3s;
    }
    .footer-bottom-links a:hover { color: #f5a623; }
    @media (max-width: 767px) {
      .footer-bottom-links { justify-content: flex-start; margin-top: 10px; }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  serviceLinks = ['Sea Freight', 'Air Freight', 'Road Freight', 'Warehousing', 'Customs Clearance', 'Cargo Insurance'];
  companyLinks = ['About Us', 'Our Team', 'Careers', 'Testimonials', 'Blog', 'Contact'];
}
