import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="wrapper">
      <a href="#" id="back-to-top"></a>

      <!-- page preloader -->
      <div id="de-loader"></div>

      <!-- header begin -->
      <header class="transparent scroll-light">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="de-flex sm-pt10">
                <div class="de-flex-col">
                  <div id="logo">
                    <a href="/">
                      <img class="logo-main"   src="assets/images/logo.png" alt="">
                      <img class="logo-scroll" src="assets/images/logo.png" alt="">
                      <img class="logo-mobile" src="assets/images/logo.png" alt="">
                    </a>
                  </div>
                </div>
                <div class="de-flex-col header-col-mid">
                  <ul id="mainmenu">
                    <li><a class="menu-item" href="/">Home</a>
                      <ul class="mega">
                        <li>
                          <div class="container">
                            <div class="sb-menu p-4">
                              <div class="row g-3">
                                <div class="col-lg-4 col-md-6 text-center">
                                  <div class="relative hover text-center overflow-hidden rounded-1">
                                    <img src="assets/images/demo/homepage-1.webp" class="w-100 relative hover-scale-1-1" alt="">
                                    <div class="abs abs-centered w-70 z-2 hover-op-1">
                                      <a class="btn-main mb-2" href="/">Multipage</a>
                                    </div>
                                    <div class="hover-op-05 abs abs-centered bg-dark w-100 h-100 z-1"></div>
                                  </div>
                                  <h5 class="mt-2 mb-0">Logistic</h5>
                                </div>
                                <div class="col-lg-4 col-md-6 text-center">
                                  <div class="relative hover text-center overflow-hidden rounded-1">
                                    <img src="assets/images/demo/homepage-2.webp" class="w-100 relative hover-scale-1-1" alt="">
                                    <div class="abs abs-centered w-70 z-2 hover-op-1">
                                      <a class="btn-main mb-2" href="/">Ship Freight</a>
                                    </div>
                                    <div class="hover-op-05 abs abs-centered bg-dark w-100 h-100 z-1"></div>
                                  </div>
                                  <h5 class="mt-2 mb-0">Ship Freight</h5>
                                </div>
                                <div class="col-lg-4 col-md-6 text-center">
                                  <div class="relative hover text-center overflow-hidden rounded-1">
                                    <img src="assets/images/demo/homepage-3.webp" class="w-100 relative hover-scale-1-1" alt="">
                                    <div class="abs abs-centered w-70 z-2 hover-op-1">
                                      <a class="btn-main mb-2" href="/">Air Freight</a>
                                    </div>
                                    <div class="hover-op-05 abs abs-centered bg-dark w-100 h-100 z-1"></div>
                                  </div>
                                  <h5 class="mt-2 mb-0">Air Freight</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li><a class="menu-item" href="/services">Services</a>
                      <ul>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/service-single">Service Single</a></li>
                      </ul>
                    </li>
                    <li><a class="menu-item" href="#">Company</a>
                      <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/team">Our Team</a></li>
                        <li><a href="/careers">Careers</a></li>
                      </ul>
                    </li>
                    <li><a class="menu-item" href="#">Pages</a>
                      <ul>
                        <li><a href="/track">Track Your Package</a></li>
                        <li><a href="/booking">Book Shipment</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/testimonials">Testimonials</a></li>
                      </ul>
                    </li>
                    <li><a class="menu-item" href="/blog">Blog</a></li>
                    <li><a class="menu-item" href="/contact">Contact</a></li>
                  </ul>
                </div>
                <div class="de-flex-col">
                  <div class="menu_side_area">
                    <a href="/booking" class="btn-main fx-slide"><span>Book Shipment</span></a>
                    <span id="menu-btn"></span>
                  </div>
                  <div id="btn-extra">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <!-- header end -->

      <!-- content begin -->
      <div class="no-bottom no-top" id="content">
        <div id="top"></div>

        <!-- ===== PAGE HERO / BREADCRUMB ===== -->
        <section class="no-top no-bottom text-light page-hero-services">
          <div class="hero-overlay"></div>
          <div class="container hero-content">
            <div class="row">
              <div class="col-md-12 text-center">
                <h1 class="wow fadeInUp hero-title">Our Services</h1>
                <nav class="wow fadeInUp" data-wow-delay=".2s">
                  <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li class="breadcrumb-item active">Our Services</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <!-- hero end -->

        <!-- ===== SERVICES GRID ===== -->
        <section class="services-section">
          <div class="container">
            <div class="row g-4">
              <div class="col-lg-6 wow fadeInLeft"
                   *ngFor="let s of services; let i = index"
                   [attr.data-wow-delay]="(i * 0.1) + 's'">
                <div class="srv-card d-flex overflow-hidden">
                  <!-- Image side -->
                  <div class="srv-img-wrap">
                    <span class="srv-num">{{ s.num }}</span>
                    <img [src]="s.img" [alt]="s.title" class="srv-img">
                    <div class="srv-img-overlay"></div>
                  </div>
                  <!-- Text side -->
                  <div class="srv-text-wrap">
                    <h5 class="srv-title">
                      <a [href]="s.link">{{ s.title }}</a>
                    </h5>
                    <p class="srv-desc">{{ s.desc }}</p>
                    <a [href]="s.link" class="srv-link">
                      Learn More <i class="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- services grid end -->

        <!-- ===== BOTTOM CTA BANNER ===== -->
        <section class="bg-color text-light pt-50 pb-50">
          <div class="container">
            <div class="row g-4 align-items-center">
              <div class="col-md-9">
                <h3 class="mb-0 fs-32 split">Ready to ship your cargo Worldwide?</h3>
              </div>
              <div class="col-lg-3 text-lg-end">
                <a class="btn-main fx-slide btn-line wow fadeInRight"
                   data-wow-delay=".2s" href="/booking">
                  <span>Book Shipment</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
      <!-- content end -->

      <!-- footer begin -->
      <footer class="text-light section-dark">
        <div class="container">
          <div class="row g-4 justify-content-between">
            <div class="col-md-6">
              <img src="assets/images/logo.png" class="w-170px mb-2" alt="">
              <div class="spacer-single"></div>
              <div class="row g-4">
                <div class="col-md-6">
                  <div class="widget">
                    <h5>Services</h5>
                    <ul>
                      <li><a href="/service-single">Trucking</a></li>
                      <li><a href="/service-single">Air Freight</a></li>
                      <li><a href="/service-single">Ship Freight</a></li>
                      <li><a href="/service-single">Rail Freight</a></li>
                      <li><a href="/service-single">Warehousing</a></li>
                      <li><a href="/service-single">Customs Brokerage</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="widget">
                    <h5>Company</h5>
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/about">About Us</a></li>
                      <li><a href="/team">Our Team</a></li>
                      <li><a href="/careers">Careers</a></li>
                      <li><a href="/blog">Blog</a></li>
                      <li><a href="/contact">Contact</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="social-icons mb-sm-30">
                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-youtube"></i></a>
                <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="d-flex align-items-center justify-content-between">
                <h2>Get in Touch</h2>
                <img src="assets/images/ui/up-right-arrow.webp" class="w-60px op-5" alt="">
              </div>
              <div class="widget">
                <div class="op-5 fs-15">Email</div>
                <h3>contact&#64;logixpress.com</h3>
                <div class="spacer-20"></div>
                <div class="op-5 fs-15">Phone</div>
                <h3>+929 333 9296</h3>
                <div class="spacer-20"></div>
                <div class="op-5 fs-15">Office Location</div>
                <h3>100 S Main St, New York, NY</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="subfooter">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                Copyright {{ year }} LogiXpress by Designesia
              </div>
            </div>
          </div>
        </div>
      </footer>
      <!-- footer end -->

    </div>
    <!-- wrapper end -->

    <!-- overlay content -->
    <div id="extra-wrap" class="text-light">
      <div id="btn-close"><span></span><span></span></div>
      <div id="extra-content">
        <img src="assets/images/logo-white.webp" class="w-200px" alt="">
        <div class="spacer-30-line"></div>
        <h5>Our Services</h5>
        <ul class="ul-check">
          <li>Trucking</li>
          <li>Air Freight</li>
          <li>Ship Freight</li>
          <li>Rail Freight</li>
          <li>Warehousing</li>
          <li>Customs Brokerage</li>
          <li>Last-Mile Delivery</li>
          <li>Project Cargo</li>
        </ul>
        <div class="spacer-30-line"></div>
        <h5>Contact Us</h5>
        <div><i class="icofont-phone me-2 op-5"></i>+929 333 9296</div>
        <div><i class="icofont-location-pin me-2 op-5"></i>100 S Main St, New York, NY</div>
        <div><i class="icofont-envelope me-2 op-5"></i>contact&#64;logixpress.com</div>
        <div class="spacer-30-line"></div>
        <h5>About Us</h5>
        <p>We are a trusted logistics and cargo solutions provider committed to delivering your goods safely, efficiently, and on time.</p>
        <div class="social-icons">
          <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-youtube"></i></a>
          <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>
    </div>
    <!-- overlay content end -->
  `,
  styles: [`
    /* ── PAGE HERO ── */
    .page-hero-services {
      position: relative;
      min-height: 350px;
      display: flex;
      align-items: center;
       background-size: cover;
      background-position: center;
    }
    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg,
        rgba(248,92,0,0.80) 0%,
        rgba(20,20,20,0.65) 100%);
    }
    .hero-content {
      position: relative;
      z-index: 2;
    }
    .hero-title {
      font-size: 52px;
      font-weight: 800;
      margin-bottom: 16px;
      color: #fff;
    }
    .breadcrumb {
      background: transparent;
      padding: 0;
      margin: 0;
    }
    .breadcrumb-item a { color: rgba(255,255,255,0.8); text-decoration: none; }
    .breadcrumb-item a:hover { color: #fff; }
    .breadcrumb-item.active { color: #f85c00; }
    .breadcrumb-item + .breadcrumb-item::before {
      content: "›";
      color: rgba(255,255,255,0.5);
      font-size: 18px;
      line-height: 1;
    }

    /* ── SERVICES SECTION ── */
    .services-section { padding: 80px 0; }

    /* ── SERVICE CARD ── */
    .srv-card {
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 4px 24px rgba(0,0,0,0.10);
      min-height: 220px;
      transition: transform .3s ease, box-shadow .3s ease;
    }
    .srv-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 16px 48px rgba(0,0,0,0.18);
    }

    /* Image side */
    .srv-img-wrap {
      position: relative;
      width: 45%;
      flex-shrink: 0;
      overflow: hidden;
    }
    .srv-num {
      position: absolute;
      top: 14px;
      left: 16px;
      z-index: 2;
      font-size: 38px;
      font-weight: 800;
      color: rgba(255,255,255,0.30);
      line-height: 1;
      font-family: 'Manrope', sans-serif;
    }
    .srv-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.65s cubic-bezier(.4,0,.2,1);
      display: block;
    }
    .srv-card:hover .srv-img { transform: scale(1.08); }
    .srv-img-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.20);
    }

    /* Text side */
    .srv-text-wrap {
      width: 55%;
      background: #1a1a1a;
      color: #fff;
      padding: 28px 24px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .srv-title {
      font-weight: 700;
      margin-bottom: 10px;
      font-size: 18px;
    }
    .srv-title a {
      color: #fff;
      text-decoration: none;
      transition: color .2s;
    }
    .srv-title a:hover { color: #f85c00; }
    .srv-desc {
      color: rgba(255,255,255,0.68);
      font-size: 14px;
      line-height: 1.75;
      margin: 0 0 14px;
    }
    .srv-link {
      color: #f85c00;
      font-size: 13px;
      font-weight: 600;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: gap .2s;
    }
    .srv-link:hover { gap: 10px; }
    .srv-link i { font-size: 11px; }

    /* Responsive */
    @media (max-width: 576px) {
      .srv-card { flex-direction: column; }
      .srv-img-wrap, .srv-text-wrap { width: 100%; }
      .srv-img-wrap { min-height: 180px; }
      .hero-title { font-size: 34px; }
    }
  `]
})
export class ServicesPageComponent implements AfterViewInit {
  year = new Date().getFullYear();

  services = [
    {
      num: '01',
      title: 'Trucking',
      desc: 'Reliable ground transportation for shipments across the United States with flexible fleet options.',
      img: 'assets/images/services/service-1.webp',
      link: '/service-single'
    },
    {
      num: '02',
      title: 'Air Freight',
      desc: 'Fast delivery of time-sensitive cargo using global air routes with real-time tracking.',
      img: 'assets/images/services/service-2.webp',
      link: '/service-single'
    },
    {
      num: '03',
      title: 'Ship Freight',
      desc: 'Cost-effective shipping solution for bulk cargo with dependable international sea freight services.',
      img: 'assets/images/services/service-3.webp',
      link: '/service-single'
    },
    {
      num: '04',
      title: 'Rail Freight',
      desc: 'Efficient and eco-friendly rail transport option ideal for long-distance heavy shipments.',
      img: 'assets/images/services/service-4.webp',
      link: '/service-single'
    },
    {
      num: '05',
      title: 'Warehousing',
      desc: 'Secure storage with inventory management, order fulfillment, and nationwide distribution.',
      img: 'assets/images/services/service-5.webp',
      link: '/service-single'
    },
    {
      num: '06',
      title: 'Customs Brokerage',
      desc: 'Expert assistance in navigating import/export regulations to ensure smooth customs clearance.',
      img: 'assets/images/services/service-6.webp',
      link: '/service-single'
    },
    {
      num: '07',
      title: 'Last-Mile Delivery',
      desc: 'Reliable end-to-end delivery service ensuring shipments reach customers\'s doors quickly and safely.',
      img: 'assets/images/services/service-7.webp',
      link: '/service-single'
    },
    {
      num: '08',
      title: 'Project Cargo',
      desc: 'Specialized transport for oversized, heavy, or complex cargo requiring tailored logistics planning.',
      img: 'assets/images/services/service-8.webp',
      link: '/service-single'
    }
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      if (typeof (window as any).designesiaInit === 'function') {
        (window as any).designesiaInit();
      }
    }, 100);
  }
}
