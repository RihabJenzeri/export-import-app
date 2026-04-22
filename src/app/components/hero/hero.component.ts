import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  btnText: string;
  bgImage: string;
  bgColor: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero-section">
      <!-- Slides -->
      <div class="hero-slides">
        <div class="hero-slide" *ngFor="let slide of slides; let i = index"
             [class.active]="i === currentSlide"
             [style.background]="slide.bgColor">
          <!-- Background image -->
          <div class="slide-bg"
               [style.backgroundImage]="'url(assets/images/' + slide.bgImage + ')'">
          </div>
          <div class="slide-overlay"></div>

          <div class="container h-100">
            <div class="row h-100 align-items-center justify-content-center text-center">
              <div class="col-lg-9">
                <div class="slide-content" [class.animate]="i === currentSlide">
                  <p class="slide-subtitle">
                    <i class="fa-solid fa-ship me-2"></i>{{ slide.subtitle }}
                  </p>
                  <h1 class="slide-title">{{ slide.title }}</h1>
                  <p class="slide-desc">{{ slide.description }}</p>
                  <a href="#services" class="btn-hero">
                    {{ slide.btnText }}
                    <i class="fa-solid fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button class="hero-arrow hero-arrow-prev" (click)="prevSlide()">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button class="hero-arrow hero-arrow-next" (click)="nextSlide()">
        <i class="fa-solid fa-chevron-right"></i>
      </button>

      <!-- Dots -->
      <div class="hero-dots">
        <span *ngFor="let slide of slides; let i = index"
              class="hero-dot" [class.active]="i === currentSlide"
              (click)="goToSlide(i)"></span>
      </div>

      <!-- Stats Bar -->
      <div class="stats-bar">
        <div class="container">
          <div class="row">
            <div class="col-6 col-md-3" *ngFor="let stat of stats">
              <div class="stat-item">
                <i [class]="'fa-solid ' + stat.icon + ' stat-icon'"></i>
                <div class="stat-info">
                  <span class="stat-number">{{ stat.number }}</span>
                  <span class="stat-label">{{ stat.label }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      position: relative;
      height: 100vh;
      min-height: 700px;
      overflow: hidden;
    }
    .hero-slides {
      height: 100%;
      position: relative;
    }
    .hero-slide {
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: opacity 0.8s ease;
    }
    .hero-slide.active {
      opacity: 1;
    }
    .slide-bg {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      background-color: #1a3055;
    }
    .slide-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(10,20,40,0.75) 0%, rgba(20,40,80,0.5) 100%);
    }
    .container.h-100 {
      position: relative;
      z-index: 2;
    }
    .slide-content {
      color: #fff;
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s ease 0.3s;
    }
    .slide-content.animate {
      opacity: 1;
      transform: translateY(0);
    }
    .slide-subtitle {
      font-size: 0.9rem;
      font-weight: 600;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #f5a623;
      margin-bottom: 20px;
    }
    .slide-title {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: clamp(2.5rem, 6vw, 5rem);
      font-weight: 900;
      line-height: 1.1;
      text-transform: uppercase;
      margin-bottom: 24px;
      letter-spacing: -1px;
    }
    .slide-desc {
      font-size: 1.05rem;
      line-height: 1.8;
      max-width: 650px;
      margin: 0 auto 36px;
      color: rgba(255,255,255,0.85);
    }
    .btn-hero {
      display: inline-block;
      background: #f5a623;
      color: #fff;
      font-weight: 700;
      font-size: 0.9rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      padding: 16px 40px;
      border-radius: 4px;
      text-decoration: none;
      transition: all 0.3s;
    }
    .btn-hero:hover {
      background: #e09510;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(245,166,35,0.4);
      color: #fff;
    }
    .hero-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10;
      background: rgba(255,255,255,0.1);
      border: 2px solid rgba(255,255,255,0.3);
      color: #fff;
      width: 52px;
      height: 52px;
      border-radius: 50%;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.3s;
      backdrop-filter: blur(4px);
    }
    .hero-arrow:hover {
      background: #f5a623;
      border-color: #f5a623;
    }
    .hero-arrow-prev { left: 30px; }
    .hero-arrow-next { right: 30px; }
    .hero-dots {
      position: absolute;
      bottom: 120px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
      display: flex;
      gap: 8px;
    }
    .hero-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(255,255,255,0.4);
      cursor: pointer;
      transition: all 0.3s;
    }
    .hero-dot.active {
      background: #f5a623;
      width: 28px;
      border-radius: 5px;
    }
    /* Stats Bar */
    .stats-bar {
      position: absolute;
      bottom: 0;
      width: 100%;
      background: rgba(15,25,50,0.92);
      backdrop-filter: blur(8px);
      border-top: 3px solid #f5a623;
      z-index: 10;
      padding: 20px 0;
    }
    .stat-item {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 10px 20px;
      border-right: 1px solid rgba(255,255,255,0.1);
    }
    .stat-icon {
      font-size: 2rem;
      color: #f5a623;
    }
    .stat-info {
      display: flex;
      flex-direction: column;
    }
    .stat-number {
      font-size: 1.6rem;
      font-weight: 800;
      color: #fff;
      font-family: 'Barlow Condensed', sans-serif;
      line-height: 1;
    }
    .stat-label {
      font-size: 0.75rem;
      color: rgba(255,255,255,0.6);
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    @media (max-width: 768px) {
      .stat-item { border-right: none; }
      .hero-arrow { width: 40px; height: 40px; font-size: 0.9rem; }
      .hero-arrow-prev { left: 15px; }
      .hero-arrow-next { right: 15px; }
    }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  private timer: any;

  slides: Slide[] = [
    {
      title: 'GLOBAL SHIP FREIGHT WITH TRUSTED SHIPPING',
      subtitle: 'Sea Freight Services',
      description: 'We work with reliable international carriers to ensure smooth cargo movement across major ports. Whether you need FCL, LCL, or fast transit service, we secure the best route.',
      btnText: 'Book Shipment',
      bgImage: 'hero-ship.jpg',
      bgColor: 'linear-gradient(135deg, #0a1628, #1a3a6b)'
    },
    {
      title: 'FAST AIR FREIGHT WORLDWIDE DELIVERY',
      subtitle: 'Air Freight Services',
      description: 'Express air cargo solutions connecting you to over 200 destinations worldwide. Time-sensitive shipments handled with precision and care.',
      btnText: 'Get Air Quote',
      bgImage: 'hero-air.jpg',
      bgColor: 'linear-gradient(135deg, #0d1f3c, #1d4068)'
    },
    {
      title: 'RELIABLE ROAD TRANSPORT SOLUTIONS',
      subtitle: 'Road Freight Services',
      description: 'Full truckload and less-than-truckload services across the continent. Real-time tracking and dedicated support for all your land transport needs.',
      btnText: 'Plan Your Route',
      bgImage: 'hero-road.jpg',
      bgColor: 'linear-gradient(135deg, #1a2a1a, #2d5a2d)'
    }
  ];

  stats = [
    { icon: 'fa-globe', number: '150+', label: 'Countries Served' },
    { icon: 'fa-ship', number: '5,000+', label: 'Shipments Monthly' },
    { icon: 'fa-users', number: '2,000+', label: 'Happy Clients' },
    { icon: 'fa-award', number: '15+', label: 'Years Experience' }
  ];

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  startAutoPlay() {
    this.timer = setInterval(() => this.nextSlide(), 5000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
