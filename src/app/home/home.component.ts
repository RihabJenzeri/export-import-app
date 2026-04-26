import { Component, AfterViewInit, Inject, PLATFORM_ID, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { TranslationService, LANGUAGES, Language, LangCode } from '../services/translation/translation.service';
import { TranslatePipe } from '../services/translation/translate.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  styles: [`
    /* ═══════════════════════════════════════
       SLIDER — Background image responsive
    ═══════════════════════════════════════ */
    .swiper-inner {
      width: 100%;
      min-height: 800px;
      background-size: cover !important;
      background-position: center center !important;
      background-repeat: no-repeat !important;
      position: relative;
    }

    /* Tablette */
    @media (max-width: 991px) {
      .swiper-inner { min-height: 600px; }
      .mh-800       { min-height: 600px !important; }
    }

    /* Mobile */
    @media (max-width: 767px) {
      .swiper-inner {
        min-height: 500px;
        background-position: center center !important;
      }
      .mh-800 { min-height: 500px !important; }

      /* Texte du slider centré et lisible */
      .sw-caption .container { padding: 0 16px; }
      .sw-caption h1          { font-size: 1.6rem !important; line-height: 1.2; }
      .sw-caption p           { font-size: .9rem; }
    }

    /* Très petit mobile */
    @media (max-width: 480px) {
      .swiper-inner { min-height: 420px; }
      .mh-800       { min-height: 420px !important; }
      .sw-caption h1 { font-size: 1.3rem !important; }
    }

    /* ═══════════════════════════════════════
       LANG SWITCHER — Desktop + Mobile
    ═══════════════════════════════════════ */
    .lang-switcher {
      position: relative;
      display: inline-flex;
      align-items: center;
      z-index: 10000;
    }
    .lang-btn {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background: rgba(255,255,255,0.18);
      border: 1.5px solid rgba(255,255,255,0.35);
      color: #fff;
      border-radius: 6px;
      padding: 5px 10px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 600;
      transition: background 0.2s;
      white-space: nowrap;
      line-height: 1;
    }
    .lang-btn:hover, .lang-btn:focus { background: rgba(255,255,255,0.28); outline: none; }
    .lang-btn .flag  { font-size: 17px; line-height: 1; }
    .lang-btn .code  { font-size: 12px; letter-spacing: .5px; text-transform: uppercase; }
    .lang-btn .arrow { font-size: 9px; margin-left: 1px; opacity: .8; }

    header.scroll-active .lang-btn {
      background: rgba(0,0,0,0.07);
      border-color: rgba(0,0,0,0.18);
      color: #333;
    }

    .lang-dropdown {
      display: none;
      position: fixed;
      top: 70px;
      right: 12px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.18);
      min-width: 160px;
      max-height: 320px;
      overflow-y: auto;
      z-index: 99999;
    }
    .lang-switcher.open .lang-dropdown { display: block; }

    .lang-option {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 14px;
      cursor: pointer;
      font-size: 13px;
      color: #333;
      transition: background .15s;
      border-bottom: 1px solid #f0f0f0;
    }
    .lang-option:last-child { border-bottom: none; }
    .lang-option:hover      { background: #f7f7f7; }
    .lang-option.active     { background: #fff4ec; font-weight: 700; color: #e87c24; }
    .lang-option .flag      { font-size: 20px; }

    @media (max-width: 767px) {
      .lang-btn .lang-label { display: none; }
      .lang-btn { padding: 5px 8px; gap: 3px; }
      .lang-dropdown { top: 60px; right: 8px; min-width: 150px; }
    }
    @media (max-width: 400px) {
      .lang-dropdown { top: 56px; right: 4px; min-width: 140px; }
    }
  `],
  template: `
    <div id="wrapper">
        <a href="#" id="back-to-top"></a>
        <div id="de-loader"></div>

        <!-- header begin -->
        <header class="transparent scroll-light">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="de-flex sm-pt10">

                            <div class="de-flex-col">
                                <div id="logo">
                                    <a href="#">
                                        <img class="logo-main"   src="assets/images/logo.png" alt="LogiXpress" style="max-height:48px;width:auto;">
                                        <img class="logo-scroll" src="assets/images/logo.png" alt="LogiXpress" style="max-height:48px;width:auto;">
                                        <img class="logo-mobile" src="assets/images/logo.png" alt="LogiXpress" style="max-height:38px;width:auto;">
                                    </a>
                                </div>
                            </div>

                            <div class="de-flex-col header-col-mid">
                                <ul id="mainmenu">
                                    <li><a class="menu-item" href="#">{{ 'nav.home' | translate }}</a></li>
                                    <li><a class="menu-item" href="#">{{ 'nav.services' | translate }}</a>
                                        <ul>
                                            <li><a href="#">Services 1</a></li>
                                            <li><a href="#">Services 2</a></li>
                                            <li><a href="#">Service Single</a></li>
                                        </ul>
                                    </li>
                                    <li><a class="menu-item" href="#">{{ 'nav.company' | translate }}</a>
                                        <ul>
                                            <li><a href="#">{{ 'nav.aboutUs' | translate }}</a></li>
                                            <li><a href="#">{{ 'nav.ourTeam' | translate }}</a></li>
                                            <li><a href="#">{{ 'nav.certifications' | translate }}</a></li>
                                            <li><a href="#">{{ 'nav.careers' | translate }}</a></li>
                                        </ul>
                                    </li>
                                    <li><a class="menu-item" href="#">{{ 'nav.pages' | translate }}</a>
                                        <ul>
                                            <li><a href="#">{{ 'nav.trackPackage' | translate }}</a></li>
                                            <li><a href="#">{{ 'nav.bookShipment' | translate }}</a></li>
                                            <li><a href="#">{{ 'nav.faq' | translate }}</a></li>
                                            <li><a href="#">{{ 'nav.testimonials' | translate }}</a></li>
                                        </ul>
                                    </li>
                                    <li><a class="menu-item" href="#">{{ 'nav.blog' | translate }}</a></li>
                                    <li><a class="menu-item" href="#">{{ 'nav.contact' | translate }}</a></li>
                                </ul>
                            </div>

                            <div class="de-flex-col">
                                <div class="menu_side_area" style="display:flex;align-items:center;gap:8px;flex-wrap:nowrap;">
                                    <a href="#" class="btn-main fx-slide sm-hide">
                                        <span>{{ 'nav.bookShipment' | translate }}</span>
                                    </a>
                                    <div class="lang-switcher" [class.open]="langOpen" (click)="$event.stopPropagation()">
                                        <button class="lang-btn" (click)="toggleLang()">
                                            <span class="flag">{{ currentLang?.flag }}</span>
                                            <span class="code lang-label">{{ currentLang?.code?.toUpperCase() }}</span>
                                            <span class="arrow">▾</span>
                                        </button>
                                        <div class="lang-dropdown">
                                            <div *ngFor="let lang of languages"
                                                 class="lang-option"
                                                 [class.active]="lang.code === currentLang?.code"
                                                 (click)="selectLang(lang.code)">
                                                <span class="flag">{{ lang.flag }}</span>
                                                <span>{{ lang.label }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span id="menu-btn"></span>
                                </div>
                                <div id="btn-extra"><span></span><span></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div class="no-bottom no-top" id="content">
            <div id="top"></div>

            <!-- SLIDER -->
            <section class="text-light no-top no-bottom relative overflow-hidden">
                <div class="mh-800">
                    <div class="swiper" id="main-slider">
                      <div class="swiper-wrapper">

                        <!-- Slide 1 -->
                        <div class="swiper-slide">
                            <div class="swiper-inner" data-bgimage="url(assets/images/slider/b1.webp)">
                                <div class="sw-caption">
                                    <div class="container">
                                        <div class="row gx-5 align-items-center justify-content-center text-center">
                                            <div class="col-lg-10 col-12">
                                                <div class="sw-text-wrapper">
                                                    <h1 class="animated text-uppercase anim-order-1">{{ 'slider.slide1Title' | translate }}</h1>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-10">
                                                <div class="animated anim-order-2">
                                                    <p>{{ 'slider.slide1Desc' | translate }}</p>
                                                    <div class="spacer-half"></div>
                                                    <a class="btn-main fx-slide animated fadeInUp anim-order-3" href="#"><span>{{ 'slider.bookShipment' | translate }}</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="abs w-100 bottom-0 z-2 pb-5 sm-hide">
                                    <div class="container">
                                        <div class="row"><div class="col-lg-12">
                                            <div class="d-flex justify-content-between text-center">
                                                <div class="relative"><h6 class="mb-0">Reliable Global Coverage</h6></div>
                                                <div class="relative"><h6 class="mb-0">Flexible Cargo Options</h6></div>
                                                <div class="relative"><h6 class="mb-0">On-Time Delivery</h6></div>
                                                <div class="relative"><h6 class="mb-0">Cost-Effective Solutions</h6></div>
                                            </div>
                                        </div></div>
                                    </div>
                                </div>
                                <div class="sw-overlay op-4"></div>
                            </div>
                        </div>

                        <!-- Slide 2 -->
                        <div class="swiper-slide">
                            <div class="swiper-inner" data-bgimage="url(assets/images/slider/b2.webp)">
                                <div class="sw-caption">
                                    <div class="container">
                                        <div class="row gx-5 align-items-center justify-content-center text-center">
                                            <div class="col-lg-10 col-12">
                                                <div class="sw-text-wrapper">
                                                    <h1 class="animated text-uppercase anim-order-1">{{ 'slider.slide2Title' | translate }}</h1>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-10">
                                                <div class="animated anim-order-2">
                                                    <p>{{ 'slider.slide2Desc' | translate }}</p>
                                                    <div class="spacer-half"></div>
                                                    <a class="btn-main fx-slide animated fadeInUp anim-order-3" href="#"><span>{{ 'slider.bookShipment' | translate }}</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="abs w-100 bottom-0 z-2 pb-5 sm-hide">
                                    <div class="container">
                                        <div class="row"><div class="col-lg-12">
                                            <div class="d-flex justify-content-between text-center">
                                                <div class="relative"><h6 class="mb-0">Secure Cargo Handling</h6></div>
                                                <div class="relative"><h6 class="mb-0">Worldwide Port Access</h6></div>
                                                <div class="relative"><h6 class="mb-0">Specialized Equipment</h6></div>
                                                <div class="relative"><h6 class="mb-0">Trusted Documentation</h6></div>
                                            </div>
                                        </div></div>
                                    </div>
                                </div>
                                <div class="sw-overlay op-4"></div>
                            </div>
                        </div>

                      </div>
                      <div class="swiper-pagination"></div>
                      <div class="swiper-button-prev"></div>
                      <div class="swiper-button-next"></div>
                    </div>
                </div>
            </section>

            <!-- ABOUT -->
            <section class="relative">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="subtitle s2 mb-3 wow fadeInUp">About Us</div>
                            <h2 class="split">Global Sea Cargo Logistics You Can Trust</h2>
                            <p class="wow fadeInUp">
                                OceanLink Logistics delivers reliable, cost-effective, and timely sea freight solutions
                                for businesses of all sizes. From full container loads to consolidated shipments,
                                we connect U.S. ports like Long Beach, Houston, and Miami to international trade hubs
                                across Asia, Europe, and the Middle East.
                            </p>
                            <div class="row g-4">
                                <div class="col-md-5 wow fadeInUp">
                                    <ul class="ul-check text-dark">
                                        <li>Full Container Load</li>
                                        <li>Less than Container Load</li>
                                        <li>Breakbulk &amp; Project Cargo</li>
                                    </ul>
                                </div>
                                <div class="col-md-5 wow fadeInUp">
                                    <ul class="ul-check text-dark">
                                        <li>Customs Brokerage</li>
                                        <li>Port-to-Door Delivery</li>
                                        <li>Real-Time Cargo Tracking</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <img src="assets/images/misc/c3.webp" class="w-100" alt="Sea Cargo Logistics">
                        </div>
                    </div>
                </div>
            </section>

            <!-- STATS -->
            <section class="pt-0">
                <div class="container">
                    <div class="row g-4">
                        <div class="col-md-3 col-sm-6 text-center">
                            <div class="de_count wow fadeInRight">
                                <h3 class="fs-40 mb-0"><span class="timer" data-to="65250" data-speed="3000">0</span>+</h3>
                                Containers Shipped
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 text-center">
                            <div class="de_count wow fadeInRight" data-wow-delay=".2s">
                                <h3 class="fs-40 mb-0"><span class="timer" data-to="23160" data-speed="3000">0</span>+</h3>
                                Satisfied Clients
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 text-center">
                            <div class="de_count wow fadeInRight" data-wow-delay=".4s">
                                <h3 class="fs-40 mb-0"><span class="timer" data-to="150" data-speed="3000">0</span>+</h3>
                                Global Shipping Partners
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 text-center">
                            <div class="de_count wow fadeInRight" data-wow-delay=".6s">
                                <h3 class="fs-40 mb-0"><span class="timer" data-to="20" data-speed="3000">0</span>+</h3>
                                Years of Experience
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- TRACKING -->
            <section class="p-0">
                <div class="container-fluid relative z-1">
                    <div class="row g-0">
                        <div class="col-lg-6">
                            <div class="relative overflow-hidden">
                                <img src="assets/images/misc/s5.webp" class="w-100 wow scaleIn" alt="">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="h-100 relative bg-dark p-5 text-light">
                                <div class="subtitle wow fadeInUp">Track Your Package</div>
                                <h2 class="split">Quick Tracking</h2>
                                <div class="row align-items-center justify-content-end">
                                    <div class="col-md-9 col-sm-8">
                                        <div class="hover-underline">
                                            <input class="form-underline mb-0 no-border fs-18" id="order_id" name="order_id" placeholder="enter your order number here..." type="text">
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-4">
                                        <a class="btn-main bg-white text-dark fx-slide w-100" href="#"><span>Track It</span></a>
                                    </div>
                                </div>
                                <img src="assets/images/misc/c2.webp" class="w-50 abs bottom-0 end-0 wow scaleIn" data-wow-duration="2s" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- SERVICES -->
            <section class="overflow-hidden">
                <div class="container">
                    <div class="row mb-3 g-4 align-items-center justify-content-between">
                        <div class="col-lg-6">
                            <div class="uptitle id-color wow fadeInUp">Our Services</div>
                            <h2 class="split">Services Tailored to You</h2>
                            <p>Offering expert project management, innovative design, renovations, and sustainable building services, we deliver quality solutions worldwide.</p>
                        </div>
                        <div class="col-lg-6">
                            <div class="relative">
                                <div class="de-custom-nav d-flex flex-end" data-target="#services-carousel">
                                    <div class="d-prev circle"></div>
                                    <div class="d-next circle"></div>
                                </div>
                            </div>
                        </div>
                        <div id="services-carousel" class="owl-4-cols owl-carousel owl-theme">
                            <div class="item">
                                <a href="#" class="d-block hover relative">
                                    <img src="assets/images/icons-color/1.png" class="w-70px mb-3 hover-jello infinite" alt="">
                                    <h4>Trucking</h4>
                                    <p>Reliable ground transportation for shipments across the United States with flexible fleet options.</p>
                                </a>
                            </div>
                            <div class="item">
                                <a href="#" class="d-block hover relative">
                                    <img src="assets/images/icons-color/2.png" class="w-70px mb-3 hover-jello infinite" alt="">
                                    <h4>Air Freight</h4>
                                    <p>Fast delivery of time-sensitive cargo using global air routes with real-time tracking.</p>
                                </a>
                            </div>
                            <div class="item">
                                <a href="#" class="d-block hover relative">
                                    <img src="assets/images/icons-color/3.png" class="w-70px mb-3 hover-jello infinite" alt="">
                                    <h4>Ship Freight</h4>
                                    <p>Cost-effective shipping solution for bulk cargo with dependable international sea freight services.</p>
                                </a>
                            </div>
                            <div class="item">
                                <a href="#" class="d-block hover relative">
                                    <img src="assets/images/icons-color/4.png" class="w-70px mb-3 hover-jello infinite" alt="">
                                    <h4>Rail Freight</h4>
                                    <p>Efficient and eco-friendly rail transport option ideal for long-distance heavy shipments.</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- VIDEO -->
            <section aria-label="section" class="relative p-0 overflow-hidden">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <a class="d-block hover popup-youtube" href="https://www.youtube.com/watch?v=FikkQTfbaOs">
                                <div class="relative overflow-hidden">
                                    <div class="absolute start-0 w-100 abs-middle fs-36 text-white text-center z-2">
                                        <div class="player bg-dark border-0 circle wow scaleIn"><span></span></div>
                                    </div>
                                    <div class="absolute w-100 h-100 top-0 bg-dark hover-op-05"></div>
                                    <img src="assets/images/background/2.webp" class="w-100 hover-scale-1-1" alt="">
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- WHY CHOOSE US -->
            <section class="bg-dark text-light">
                <div class="container">
                    <div class="row g-4 justify-content-center">
                        <div class="col-lg-7 text-center">
                            <div class="subtitle wow fadeInUp">Why Choose Us</div>
                            <h2 class="split">Trusted Logistics Partner for Worldwide Shipping</h2>
                        </div>
                    </div>
                    <div class="row g-4">
                        <div class="col-lg-4 col-md-6 wow fadeInUp">
                            <div class="relative"><i class="abs fs-24 p-4 bg-color icon_check rounded-1 text-light"></i>
                            <div class="ps-100"><h4>Experienced Logistics</h4><p>Our specialists bring decades of experience in freight forwarding and customs clearance, ensuring smooth and efficient supply chain solutions worldwide.</p></div></div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp">
                            <div class="relative"><i class="abs fs-24 p-4 bg-color icon_check rounded-1 text-light"></i>
                            <div class="ps-100"><h4>Fast Delivery Commitment</h4><p>We understand the urgency of every shipment and act quickly. Optimized routes and tracking technology ensure timely deliveries without unnecessary delays.</p></div></div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp">
                            <div class="relative"><i class="abs fs-24 p-4 bg-color icon_check rounded-1 text-light"></i>
                            <div class="ps-100"><h4>Transparent Pricing Policy</h4><p>Our pricing is clear, competitive, and easy to understand for all clients. We guarantee no hidden charges and complete financial transparency every time.</p></div></div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp">
                            <div class="relative"><i class="abs fs-24 p-4 bg-color icon_check rounded-1 text-light"></i>
                            <div class="ps-100"><h4>Reliable Cargo Handling</h4><p>Every shipment is managed with precision and care to avoid risks. From packing to loading, we guarantee your cargo arrives safely and intact.</p></div></div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp">
                            <div class="relative"><i class="abs fs-24 p-4 bg-color icon_check rounded-1 text-light"></i>
                            <div class="ps-100"><h4>Comprehensive Solutions</h4><p>We cover every step of logistics including warehousing, distribution, and freight. Our integrated services make supply chain management simple and efficient.</p></div></div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp">
                            <div class="relative"><i class="abs fs-24 p-4 bg-color icon_check rounded-1 text-light"></i>
                            <div class="ps-100"><h4>Satisfaction Guarantee</h4><p>Your trust is our highest priority across all shipments. We back our services with responsive support and a strong customer satisfaction guarantee.</p></div></div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- EXPERT -->
            <section>
                <div class="container relative z-1">
                    <div class="row g-4 gx-5">
                        <div class="col-lg-6">
                            <div class="h-100 relative">
                                <div class="subtitle id-color wow fadeInUp">Your Trusted Shipping Partner</div>
                                <h1 class="split">Expert Ship Freight Services, Deliver Worldwide with Ease</h1>
                                <div class="abs ol-lg-12 pos-sm-relative bottom-0">
                                    <div class="d-flex align-items-center justify-content-between border-bottom pb-4 mb-4 wow fadeInUp">
                                        <a class="btn-main fx-slide me-5" href="#"><span>Get Started Now</span></a>
                                        <div class="d-flex align-items-center">
                                            <div class="me-4">
                                                <img src="assets/images/testimonial/1.webp" class="w-50px circle ms-min-10" alt="">
                                                <img src="assets/images/testimonial/2.webp" class="w-50px circle ms-min-10" alt="">
                                                <img src="assets/images/testimonial/3.webp" class="w-50px circle ms-min-10" alt="">
                                            </div>
                                            <div class="fw-600 fs-14 lh-1-5"><span class="fs-16 fw-bold text-dark">23k</span><br>successful shipments</div>
                                        </div>
                                    </div>
                                    <p>We specialize in global ocean freight solutions, offering full container load, less than container load, and bulk cargo shipping. With our trusted carrier network and years of expertise, we guarantee smooth operations, reliable schedules, and cost-effective delivery for businesses of all sizes.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="relative">
                                <div class="abs bottom-0 end-0 m-5">
                                    <div class="p-4 mb-4 bg-color text-light rounded-1 text-center wow fadeInUp">
                                        <h1 class="fs-84 mb-1">15</h1>
                                        <div class="fs-16 lh-1-5">Years of Excellence</div>
                                    </div>
                                </div>
                                <img src="assets/images/misc/s3.webp" class="w-100 rounded-1" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA -->
            <section class="bg-color text-light pt-50 pb-50">
                <div class="container">
                    <div class="row g-4">
                        <div class="col-md-9">
                            <h3 class="mb-0 fs-32 split">Ready to Ship Your Cargo Worldwide?</h3>
                        </div>
                        <div class="col-lg-3 text-lg-end">
                            <a class="btn-main fx-slide btn-line wow fadeInRight" href="#"><span>{{ 'nav.bookShipment' | translate }}</span></a>
                        </div>
                    </div>
                </div>
            </section>

        </div>

        <!-- footer -->
        <footer class="text-light section-dark">
            <div class="container">
                <div class="row g-4 justify-content-between">
                    <div class="col-md-6">
                        <img src="assets/images/logo.png" class="mb-2" style="max-height:50px;width:auto;" alt="LogiXpress">
                        <div class="spacer-single"></div>
                        <div class="row g-4">
                            <div class="col-md-6">
                                <div class="widget"><h5>Services</h5>
                                    <ul>
                                        <li><a href="#">Trucking</a></li><li><a href="#">Air Freight</a></li>
                                        <li><a href="#">Ship Freight</a></li><li><a href="#">Rail Freight</a></li>
                                        <li><a href="#">Warehousing</a></li><li><a href="#">Customs Brokerage</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="widget"><h5>Company</h5>
                                    <ul>
                                        <li><a href="#">Home</a></li><li><a href="#">About Us</a></li>
                                        <li><a href="#">Our Team</a></li><li><a href="#">Careers</a></li>
                                        <li><a href="#">Blog</a></li><li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="social-icons mb-sm-30 text-center">
                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-youtube"></i></a>
                            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex align-items-center justify-content-between">
                            <h2>{{ 'footer.getInTouch' | translate }}</h2>
                            <img src="assets/images/ui/up-right-arrow.webp" class="w-60px op-5" alt="">
                        </div>
                        <div class="widget">
                            <div class="op-5 fs-15">{{ 'footer.email' | translate }}</div>
                            <h3>contact&#64;logixpress.com</h3>
                            <div class="spacer-20"></div>
                            <div class="op-5 fs-15">{{ 'footer.phone' | translate }}</div>
                            <h3>+929 333 9296</h3>
                            <div class="spacer-20"></div>
                            <div class="op-5 fs-15">{{ 'footer.office' | translate }}</div>
                            <h3>100 S Main St, New York, NY</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="subfooter">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">Copyright 2025 LogiXpress by Designesia</div>
                    </div>
                </div>
            </div>
        </footer>

        <div id="extra-wrap" class="text-light">
            <div id="btn-close"><span></span><span></span></div>
            <div id="extra-content">
                <img src="assets/images/logo.png" style="max-height:55px;width:auto;" alt="LogiXpress">
                <div class="spacer-30-line"></div>
                <h5>Our Services</h5>
                <ul class="ul-check">
                    <li>Trucking</li><li>Air Freight</li><li>Ship Freight</li>
                    <li>Rail Freight</li><li>Warehousing</li><li>Customs Brokerage</li>
                    <li>Last-Mile Delivery</li><li>Project Cargo</li>
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
    </div>
  `
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  year = new Date().getFullYear();
  languages = LANGUAGES;
  currentLang: Language | undefined;
  langOpen = false;
  private sub!: Subscription;
  private clickHandler!: () => void;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.currentLang = this.translationService.currentLanguage;
    this.sub = this.translationService.lang$.subscribe(code => {
      this.currentLang = this.languages.find(l => l.code === code);
    });
    if (isPlatformBrowser(this.platformId)) {
      this.clickHandler = () => { this.langOpen = false; };
      document.addEventListener('click', this.clickHandler);
    }
  }

  toggleLang(): void { this.langOpen = !this.langOpen; }

  selectLang(code: LangCode): void {
    this.translationService.loadLanguage(code);
    this.langOpen = false;
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        // Appliquer les bg-images du slider manuellement (responsive)
        document.querySelectorAll('.swiper-inner[data-bgimage]').forEach((el: any) => {
          const bg = el.getAttribute('data-bgimage');
          if (bg) {
            el.style.backgroundImage = bg;
            el.style.backgroundSize = 'cover';
            el.style.backgroundPosition = 'center center';
            el.style.backgroundRepeat = 'no-repeat';
          }
        });

        if (typeof (window as any).designesiaInit === 'function') {
          (window as any).designesiaInit();
        }
        if (typeof (window as any).Swiper !== 'undefined') {
          const sliderEl = document.querySelector('#main-slider');
          if (sliderEl && !(sliderEl as any).swiper) {
            new (window as any).Swiper('#main-slider', {
              loop: true,
              autoplay: { delay: 5000, disableOnInteraction: false },
              pagination: { el: '.swiper-pagination', clickable: true },
              navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            });
          }
        }
        const $ = (window as any).$;
        if ($ && $.fn && $.fn.owlCarousel) {
          $('#services-carousel').owlCarousel({
            loop: true, margin: 20, nav: false, dots: false,
            responsive: { 0:{items:1}, 576:{items:2}, 992:{items:3}, 1200:{items:4} }
          });
        }
      }, 400);
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    if (isPlatformBrowser(this.platformId) && this.clickHandler) {
      document.removeEventListener('click', this.clickHandler);
    }
  }
}
