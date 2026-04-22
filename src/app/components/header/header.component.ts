import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header" [class.sticky]="isSticky">
      <nav class="navbar navbar-expand-lg">
        <div class="container">

          <!-- Logo -->
          <a class="navbar-brand" href="#">
            <img src="assets/images/logo.png" alt="LogiXpress" class="logo-img"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
            <span class="logo-text" style="display:none">
              <i class="fa-solid fa-truck-fast text-warning me-2"></i>
              <span class="fw-bold fs-4">Logi<span class="text-warning">Xpress</span></span>
            </span>
          </a>

          <!-- Mobile Toggle -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Nav Links -->
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">HOME</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Home Air Freight</a></li>
                  <li><a class="dropdown-item" href="#">Home Ship Freight</a></li>
                  <li><a class="dropdown-item" href="#">Home Road Freight</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">SERVICES</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Air Freight</a></li>
                  <li><a class="dropdown-item" href="#">Ship Freight</a></li>
                  <li><a class="dropdown-item" href="#">Road Freight</a></li>
                  <li><a class="dropdown-item" href="#">Warehousing</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">COMPANY</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">About Us</a></li>
                  <li><a class="dropdown-item" href="#">Our Team</a></li>
                  <li><a class="dropdown-item" href="#">Testimonials</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">PAGES</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">FAQ</a></li>
                  <li><a class="dropdown-item" href="#">Pricing</a></li>
                  <li><a class="dropdown-item" href="#">Track Shipment</a></li>
                </ul>
              </li>
              <li class="nav-item"><a class="nav-link" href="#">BLOG</a></li>
              <li class="nav-item"><a class="nav-link" href="#">CONTACT</a></li>
            </ul>

            <!-- CTA Button -->
            <a href="#contact" class="btn btn-warning fw-bold px-4">
              GET A QUOTE
            </a>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1000;
      transition: all 0.3s ease;
      background: transparent;
    }
    .header.sticky {
      background: #1a1a2e;
      box-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .navbar {
      padding: 15px 0;
    }
    .nav-link {
      color: #fff !important;
      font-weight: 600;
      font-size: 0.85rem;
      letter-spacing: 0.5px;
      padding: 8px 16px !important;
      transition: color 0.3s;
    }
    .nav-link:hover, .nav-link.active {
      color: #f5a623 !important;
    }
    .dropdown-menu {
      background: #1a1a2e;
      border: none;
      border-top: 3px solid #f5a623;
    }
    .dropdown-item {
      color: #ccc;
      font-size: 0.9rem;
    }
    .dropdown-item:hover {
      background: #f5a623;
      color: #fff;
    }
    .logo-text {
      display: flex;
      align-items: center;
      color: #fff;
    }
  `]
})
export class HeaderComponent {
  isSticky = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 50;
  }
}
