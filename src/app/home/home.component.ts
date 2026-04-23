import { Component, AfterViewInit, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { TranslationService, LANGUAGES, Language, LangCode } from '../services/translation/translation.service';
import { TranslatePipe } from '../services/translation/translate.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <div id="wrapper">
      <a href="#" id="back-to-top"></a>
      <div id="de-loader"></div>

      <!-- ═══════════ HEADER ═══════════ -->
      <header class="transparent scroll-light">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="de-flex sm-pt10">

                <!-- LOGO -->
                <div class="de-flex-col">
                  <div id="logo">
                    <a href="/">
                      <img class="logo-main"   src="assets/images/logo.png" alt="LogiXpress">
                      <img class="logo-scroll" src="assets/images/logo.png" alt="LogiXpress">
                      <img class="logo-mobile" src="assets/images/logo.png" alt="LogiXpress">
                    </a>
                  </div>
                </div>

                <!-- MENU PRINCIPAL -->
                <div class="de-flex-col header-col-mid">
                  <ul id="mainmenu">
                    <li><a class="menu-item" href="/">{{ 'nav.home' | translate }}</a>
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

                    <li><a class="menu-item" href="/services">{{ 'nav.services' | translate }}</a>
                      <ul>
                        <li><a href="/services">{{ 'nav.services' | translate }}</a></li>
                        <li><a href="/service-single">{{ 'nav.serviceSingle' | translate }}</a></li>
                      </ul>
                    </li>

                    <li><a class="menu-item" href="#">{{ 'nav.company' | translate }}</a>
                      <ul>
                        <li><a href="/about">{{ 'nav.about' | translate }}</a></li>
                        <li><a href="/team">{{ 'nav.team' | translate }}</a></li>
                        <li><a href="/careers">{{ 'nav.careers' | translate }}</a></li>
                      </ul>
                    </li>

                    <li><a class="menu-item" href="#">{{ 'nav.pages' | translate }}</a>
                      <ul>
                        <li><a href="/track">{{ 'nav.track' | translate }}</a></li>
                        <li><a href="/booking">{{ 'nav.booking' | translate }}</a></li>
                        <li><a href="/faq">{{ 'nav.faq' | translate }}</a></li>
                        <li><a href="/testimonials">{{ 'nav.testimonials' | translate }}</a></li>
                      </ul>
                    </li>

                    <li><a class="menu-item" href="/blog">{{ 'nav.blog' | translate }}</a></li>
                    <li><a class="menu-item" href="/contact">{{ 'nav.contact' | translate }}</a></li>
                  </ul>
                </div>

                <!-- DROITE : Book Shipment + SÉLECTEUR LANGUE -->
                <div class="de-flex-col">
                  <div class="menu_side_area d-flex align-items-center gap-3">

                    <!-- ▼ ICÔNE SÉLECTEUR DE LANGUE ▼ -->
                    <div class="lp-lang-selector" [class.open]="langMenuOpen">
                      <button class="lp-lang-btn" (click)="toggleLangMenu($event)" aria-label="Select language">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                          <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"/>
                        </svg>
                        <span class="lp-lang-current">{{ currentLang.flag }} {{ currentLang.code.toUpperCase() }}</span>
                        <svg class="lp-lang-chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
                          <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"/>
                        </svg>
                      </button>

                      <!-- Dropdown liste des langues -->
                      <div class="lp-lang-dropdown" *ngIf="langMenuOpen">
                        <div class="lp-lang-list">
                          <button
                            *ngFor="let lang of languages"
                            class="lp-lang-item"
                            [class.active]="lang.code === currentLang.code"
                            (click)="selectLanguage(lang.code)">
                            <span class="lp-lang-flag">{{ lang.flag }}</span>
                            <span class="lp-lang-label">{{ lang.label }}</span>
                            <span class="lp-lang-label-en">{{ lang.labelEn }}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <!-- ▲ FIN SÉLECTEUR LANGUE ▲ -->

                    <a href="/booking" class="btn-main fx-slide"><span>{{ 'nav.bookShipment' | translate }}</span></a>
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

        <!-- ===== HERO SLIDER ===== -->
        <section class="text-light no-top no-bottom relative overflow-hidden">
          <div class="mh-800">
            <div class="swiper">
              <div class="swiper-wrapper">

                <!-- Slide 1 -->
                <div class="swiper-slide">
                  <div class="swiper-inner" data-bgimage="url(assets/images/slider/b1.webp)">
                    <div class="sw-caption">
                      <div class="container">
                        <div class="row gx-5 align-items-center justify-content-center text-center">
                          <div class="col-lg-10">
                            <div class="sw-text-wrapper">
                              <h1 class="animated text-uppercase anim-order-1">{{ 'hero.slide1.title' | translate }}</h1>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="animated anim-order-2">
                              <p>{{ 'hero.slide1.desc' | translate }}</p>
                              <div class="spacer-half"></div>
                              <a class="btn-main fx-slide animated fadeInUp anim-order-3" href="/booking">
                                <span>{{ 'hero.slide1.cta' | translate }}</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="abs w-100 bottom-0 z-2 pb-5 sm-hide">
                      <div class="container">
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="d-flex justify-content-between text-center">
                              <div class="relative"><h6 class="mb-0">{{ 'hero.tag1' | translate }}</h6></div>
                              <div class="relative"><h6 class="mb-0">{{ 'hero.tag2' | translate }}</h6></div>
                              <div class="relative"><h6 class="mb-0">{{ 'hero.tag3' | translate }}</h6></div>
                              <div class="relative"><h6 class="mb-0">{{ 'hero.tag4' | translate }}</h6></div>
                            </div>
                          </div>
                        </div>
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
                          <div class="col-lg-10">
                            <div class="sw-text-wrapper">
                              <h1 class="animated text-uppercase anim-order-1">{{ 'hero.slide2.title' | translate }}</h1>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="animated anim-order-2">
                              <p>{{ 'hero.slide2.desc' | translate }}</p>
                              <div class="spacer-half"></div>
                              <a class="btn-main fx-slide animated fadeInUp anim-order-3" href="/booking">
                                <span>{{ 'hero.slide2.cta' | translate }}</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sw-overlay op-4"></div>
                  </div>
                </div>

                <!-- Slide 3 -->
                <div class="swiper-slide">
                  <div class="swiper-inner" data-bgimage="url(assets/images/slider/b3.webp)">
                    <div class="sw-caption">
                      <div class="container">
                        <div class="row gx-5 align-items-center justify-content-center text-center">
                          <div class="col-lg-10">
                            <div class="sw-text-wrapper">
                              <h1 class="animated text-uppercase anim-order-1">{{ 'hero.slide3.title' | translate }}</h1>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="animated anim-order-2">
                              <p>{{ 'hero.slide3.desc' | translate }}</p>
                              <div class="spacer-half"></div>
                              <a class="btn-main fx-slide animated fadeInUp anim-order-3" href="/booking">
                                <span>{{ 'hero.slide3.cta' | translate }}</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sw-overlay op-4"></div>
                  </div>
                </div>

              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </section>

        <!-- ===== SERVICES SECTION ===== -->
        <section class="pt-80 pb-80">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center mb-50">
                <div class="subtitle">{{ 'services.subtitle' | translate }}</div>
                <h2>{{ 'services.title' | translate }}</h2>
              </div>
            </div>
            <div class="row g-4">
              <div class="col-lg-3 col-md-6" *ngFor="let svc of servicesData()">
                <div class="f-box f-icon-left">
                  <i class="icofont-truck-alt"></i>
                  <div class="fb-text">
                    <h4>{{ svc.titleKey | translate }}</h4>
                    <p>{{ svc.descKey | translate }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ===== WHY US ===== -->
        <section class="bg-grey pt-80 pb-80">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center mb-50">
                <div class="subtitle">{{ 'whyUs.subtitle' | translate }}</div>
                <h2>{{ 'whyUs.title' | translate }}</h2>
              </div>
            </div>
            <div class="row g-4">
              <div class="col-lg-4 col-md-6" *ngFor="let item of whyUsData()">
                <div class="de-step">
                  <h4>{{ item.titleKey | translate }}</h4>
                  <p>{{ item.descKey | translate }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ===== BOTTOM CTA ===== -->
        <section class="bg-color text-light pt-50 pb-50">
          <div class="container">
            <div class="row g-4">
              <div class="col-md-9">
                <h3 class="mb-0 fs-32 split">{{ 'cta.title' | translate }}</h3>
              </div>
              <div class="col-lg-3 text-lg-end">
                <a class="btn-main fx-slide btn-line wow fadeInRight" href="/booking">
                  <span>{{ 'cta.btn' | translate }}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
      <!-- content end -->

      <!-- ═══════════ FOOTER ═══════════ -->
      <footer class="text-light section-dark">
        <div class="container">
          <div class="row g-4 justify-content-between">
            <div class="col-md-6">
              <img src="assets/images/logo.png" class="w-170px mb-2" alt="">
              <div class="spacer-single"></div>
              <div class="row g-4">
                <div class="col-md-6">
                  <div class="widget">
                    <h5>{{ 'footer.services' | translate }}</h5>
                    <ul>
                      <li><a href="/service-single">{{ 'services.trucking' | translate }}</a></li>
                      <li><a href="/service-single">{{ 'services.airFreight' | translate }}</a></li>
                      <li><a href="/service-single">{{ 'services.shipFreight' | translate }}</a></li>
                      <li><a href="/service-single">{{ 'services.railFreight' | translate }}</a></li>
                      <li><a href="/service-single">{{ 'services.warehousing' | translate }}</a></li>
                      <li><a href="/service-single">{{ 'services.customs' | translate }}</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="widget">
                    <h5>{{ 'footer.company' | translate }}</h5>
                    <ul>
                      <li><a href="/">{{ 'nav.home' | translate }}</a></li>
                      <li><a href="/about">{{ 'nav.about' | translate }}</a></li>
                      <li><a href="/team">{{ 'nav.team' | translate }}</a></li>
                      <li><a href="/careers">{{ 'nav.careers' | translate }}</a></li>
                      <li><a href="/blog">{{ 'nav.blog' | translate }}</a></li>
                      <li><a href="/contact">{{ 'nav.contact' | translate }}</a></li>
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
              <div class="col-md-12 text-center">
                {{ 'footer.copyright' | translate }} {{ year }} LogiXpress
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
        <h5>{{ 'offcanvas.ourServices' | translate }}</h5>
        <ul class="ul-check">
          <li>{{ 'services.trucking' | translate }}</li>
          <li>{{ 'services.airFreight' | translate }}</li>
          <li>{{ 'services.shipFreight' | translate }}</li>
          <li>{{ 'services.railFreight' | translate }}</li>
          <li>{{ 'services.warehousing' | translate }}</li>
          <li>{{ 'services.customs' | translate }}</li>
          <li>{{ 'services.lastMile' | translate }}</li>
          <li>{{ 'services.projectCargo' | translate }}</li>
        </ul>
        <div class="spacer-30-line"></div>
        <h5>{{ 'offcanvas.contact' | translate }}</h5>
        <div><i class="icofont-phone me-2 op-5"></i>+929 333 9296</div>
        <div><i class="icofont-location-pin me-2 op-5"></i>100 S Main St, New York, NY</div>
        <div><i class="icofont-envelope me-2 op-5"></i>contact&#64;logixpress.com</div>
        <div class="spacer-30-line"></div>
        <h5>{{ 'offcanvas.about' | translate }}</h5>
        <p>{{ 'offcanvas.aboutDesc' | translate }}</p>
        <div class="social-icons">
          <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-youtube"></i></a>
          <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>
    </div>

    <!-- CSS du sélecteur de langue (injecté dans le composant) -->
    <style>
      .lp-lang-selector { position: relative; }

      .lp-lang-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        background: transparent;
        border: 1px solid rgba(255,255,255,0.3);
        border-radius: 6px;
        color: #fff;
        padding: 6px 10px;
        font-size: 0.82rem;
        font-weight: 600;
        cursor: pointer;
        transition: border-color 0.2s, background 0.2s;
        white-space: nowrap;
      }
      .lp-lang-btn:hover,
      .lp-lang-selector.open .lp-lang-btn {
        border-color: #f85c00;
        background: rgba(248,92,0,0.1);
      }
      .lp-lang-chevron {
        transition: transform 0.2s;
      }
      .lp-lang-selector.open .lp-lang-chevron {
        transform: rotate(180deg);
      }

      .lp-lang-dropdown {
        position: absolute;
        top: calc(100% + 8px);
        right: 0;
        min-width: 200px;
        background: #1a2332;
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 8px;
        box-shadow: 0 12px 40px rgba(0,0,0,0.4);
        z-index: 9999;
        overflow: hidden;
        animation: langDropIn 0.2s ease;
      }
      @keyframes langDropIn {
        from { opacity: 0; transform: translateY(-8px); }
        to   { opacity: 1; transform: translateY(0); }
      }

      .lp-lang-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 6px;
        gap: 2px;
      }

      .lp-lang-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        background: transparent;
        border: none;
        border-radius: 6px;
        color: rgba(255,255,255,0.75);
        font-size: 0.82rem;
        cursor: pointer;
        text-align: left;
        transition: background 0.15s, color 0.15s;
      }
      .lp-lang-item:hover {
        background: rgba(248,92,0,0.12);
        color: #fff;
      }
      .lp-lang-item.active {
        background: #f85c00;
        color: #fff;
      }

      .lp-lang-flag { font-size: 1.1rem; }
      .lp-lang-label { font-weight: 600; }
      .lp-lang-label-en {
        font-size: 0.72rem;
        opacity: 0.6;
        margin-left: auto;
      }

      /* Scroll header : adapter couleur du bouton langue */
      header.sticky .lp-lang-btn {
        border-color: rgba(0,0,0,0.2);
        color: #111;
      }
      header.sticky .lp-lang-dropdown {
        background: #fff;
        border-color: #e5e7eb;
      }
      header.sticky .lp-lang-item { color: #333; }
      header.sticky .lp-lang-item:hover { background: #f5f5f5; color: #111; }

    </style>
  `
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  year = new Date().getFullYear();
  languages = LANGUAGES;
  currentLang!: Language;
  langMenuOpen = false;

  private sub!: Subscription;

  constructor(
    private ts: TranslationService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.sub = this.ts.lang$.subscribe(() => {
      this.currentLang = this.ts.currentLanguage;
      this.cdr.markForCheck();
    });
    this.currentLang = this.ts.currentLanguage;
  }

  ngAfterViewInit(): void {
    // Ferme le menu langue si on clique ailleurs
    document.addEventListener('click', this.closeOnOutside);

    setTimeout(() => {
      if (typeof (window as any).designesiaInit === 'function') {
        (window as any).designesiaInit();
      }
    }, 100);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    document.removeEventListener('click', this.closeOnOutside);
  }

  toggleLangMenu(e: Event): void {
    e.stopPropagation();
    this.langMenuOpen = !this.langMenuOpen;
  }

  selectLanguage(code: LangCode): void {
    this.ts.loadLanguage(code);
    this.langMenuOpen = false;
  }

  private closeOnOutside = (): void => {
    this.langMenuOpen = false;
    this.cdr.detectChanges();
  };

  /** Données services (clés i18n) */
  servicesData() {
    return [
      { titleKey: 'services.trucking',     descKey: 'services.truckingDesc'     },
      { titleKey: 'services.airFreight',   descKey: 'services.airFreightDesc'   },
      { titleKey: 'services.shipFreight',  descKey: 'services.shipFreightDesc'  },
      { titleKey: 'services.railFreight',  descKey: 'services.railFreightDesc'  },
      { titleKey: 'services.warehousing',  descKey: 'services.warehousingDesc'  },
      { titleKey: 'services.customs',      descKey: 'services.customsDesc'      },
      { titleKey: 'services.lastMile',     descKey: 'services.lastMileDesc'     },
      { titleKey: 'services.projectCargo', descKey: 'services.projectCargoDesc' },
    ];
  }

  /** Données why us (clés i18n) */
  whyUsData() {
    return [
      { titleKey: 'whyUs.item1Title', descKey: 'whyUs.item1Desc' },
      { titleKey: 'whyUs.item2Title', descKey: 'whyUs.item2Desc' },
      { titleKey: 'whyUs.item3Title', descKey: 'whyUs.item3Desc' },
      { titleKey: 'whyUs.item4Title', descKey: 'whyUs.item4Desc' },
      { titleKey: 'whyUs.item5Title', descKey: 'whyUs.item5Desc' },
      { titleKey: 'whyUs.item6Title', descKey: 'whyUs.item6Desc' },
    ];
  }
}
