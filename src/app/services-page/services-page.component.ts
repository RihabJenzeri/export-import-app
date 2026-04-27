import { Component, AfterViewInit, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
// Ajouter les imports manquants
import { TranslationService, LANGUAGES, Language, LangCode } from '../services/translation/translation.service';
import { TranslatePipe } from '../services/translation/translate.pipe';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
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
                    <a routerLink="/">
                      <img class="logo-main" src="assets/images/logo.png" alt="LogiXpress">
                      <img class="logo-scroll" src="assets/images/logo.png" alt="LogiXpress">
                      <img class="logo-mobile" src="assets/images/logo.png" alt="LogiXpress">
                    </a>
                  </div>
                </div>
                <div class="de-flex-col header-col-mid">
                  <ul id="mainmenu">
                    <li><a routerLink="/" routerLinkActive="active">Home</a></li>
                    <li><a routerLink="/services" routerLinkActive="active">Services</a>

                    </li>

                  </ul>
                </div>
                <div class="de-flex-col">
<!-- Dans le header de services-page.component.ts -->
<div class="menu_side_area" style="display:flex;align-items:center;gap:8px;flex-wrap:nowrap;">
  <a routerLink="/booking" class="btn-main fx-slide sm-hide">
    <span>{{ 'nav.bookShipment' | translate }}</span>
  </a>

  <!-- Lang switcher — même code que HomeComponent -->
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
                      <a routerLink="/">Home</a>
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
                   [attr.data-wow-delay]="(i * 0.05) + 's'">
                <div class="srv-card d-flex overflow-hidden">
                  <div class="srv-img-wrap">
                    <span class="srv-num">{{ s.num }}</span>
                    <img [src]="s.img" [alt]="s.title" class="srv-img" loading="lazy">
                    <div class="srv-img-overlay"></div>
                  </div>
                  <div class="srv-text-wrap">
                    <h5 class="srv-title">
                      <a routerLink="/service-single">{{ s.title }}</a>
                    </h5>
                    <p class="srv-desc">{{ s.desc }}</p>
                    <a routerLink="/service-single" class="srv-link">
                      Learn More <i class="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ===== BOTTOM CTA BANNER ===== -->
        <section class="bg-color text-light pt-50 pb-50">
          <div class="container">
            <div class="row g-4 align-items-center">
              <div class="col-md-9">
                <h3 class="mb-0 fs-32 split">Ready to ship your cargo Worldwide?</h3>
              </div>
              <div class="col-lg-3 text-lg-end">
                <a class="btn-main fx-slide btn-line wow fadeInRight"
                   data-wow-delay=".2s"
                   routerLink="/booking">
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
              <img src="assets/images/logo.png" style="max-height:50px;width:auto;" alt="LogiXpress">
              <div class="spacer-single"></div>
              <div class="row g-4">
                <div class="col-md-6">
                  <div class="widget">
                    <h5>Services</h5>
                    <ul>
                      <li><a routerLink="/service-single">Trucking</a></li>
                      <li><a routerLink="/service-single">Air Freight</a></li>
                      <li><a routerLink="/service-single">Ship Freight</a></li>
                      <li><a routerLink="/service-single">Rail Freight</a></li>
                      <li><a routerLink="/service-single">Warehousing</a></li>
                      <li><a routerLink="/service-single">Customs Brokerage</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="widget">
                    <h5>Company</h5>
                    <ul>
                      <li><a routerLink="/">Home</a></li>
                      <li><a routerLink="/about">About Us</a></li>
                      <li><a routerLink="/team">Our Team</a></li>
                      <li><a routerLink="/careers">Careers</a></li>
                      <li><a routerLink="/blog">Blog</a></li>
                      <li><a routerLink="/contact">Contact</a></li>
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

    <div id="extra-wrap" class="text-light">
      <div id="btn-close"><span></span><span></span></div>
      <div id="extra-content">
        <img src="assets/images/logo.png" style="max-height:55px;width:auto;" alt="LogiXpress">
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
  `,
  styles: [`
    /* ═══════════════════════════════════════
       LANG SWITCHER
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
    .page-hero-services {
      position: relative;
      min-height: 450px;
      display: flex;
      align-items: center;
      background: url(/assets/images/background/breadcrumb.webp) center/cover no-repeat;
      border-radius: 30px;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.3);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
      margin: 20px;
    }
    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(248, 92, 0, 0.88) 0%, rgba(0, 0, 0, 0.75) 100%);
    }
    .hero-content {
      position: relative;
      z-index: 2;
      width: 100%;
      padding: 60px 0;
    }
    .hero-title {
      font-size: 56px;
      font-weight: 800;
      margin-bottom: 16px;
      color: #fff;
      letter-spacing: -0.02em;
    }
    .breadcrumb {
      background: transparent;
      padding: 0;
      justify-content: center;
    }
    .breadcrumb-item a {
      color: rgba(255,255,255,0.8);
      text-decoration: none;
      font-size: 16px;
    }
    .breadcrumb-item a:hover { color: #fff; }
    .breadcrumb-item.active { color: #f85c00; font-weight: 600; }
    .breadcrumb-item + .breadcrumb-item::before {
      content: "/";
      color: rgba(255,255,255,0.5);
      font-size: 16px;
      padding: 0 8px;
    }
    .services-section {
      padding: 100px 0;
      background: #f8f9fa;
    }
    .srv-card {
      display: flex;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
      transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      background: #fff;
      height: 100%;
    }
    .srv-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }
    .srv-img-wrap {
      position: relative;
      width: 45%;
      overflow: hidden;
      background: #0a0f18;
    }
    .srv-num {
      position: absolute;
      top: 20px;
      left: 20px;
      font-size: 42px;
      font-weight: 800;
      color: rgba(255, 255, 255, 0.2);
      z-index: 2;
      font-family: 'Barlow', sans-serif;
      letter-spacing: -0.03em;
    }
    .srv-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .srv-card:hover .srv-img {
      transform: scale(1.1);
    }
    .srv-img-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, transparent 30%, rgba(0, 0, 0, 0.5) 100%);
    }
    .srv-text-wrap {
      width: 55%;
      background: #1a2332;
      padding: 32px 28px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .srv-title {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 14px;
      letter-spacing: -0.3px;
    }
    .srv-title a {
      color: #ffffff;
      text-decoration: none;
      transition: color 0.25s ease;
    }
    .srv-title a:hover {
      color: #f85c00;
    }
    .srv-desc {
      color: rgba(255, 255, 255, 0.7);
      font-size: 14px;
      line-height: 1.7;
      margin-bottom: 20px;
    }
    .srv-link {
      color: #f85c00;
      font-size: 13px;
      font-weight: 600;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: all 0.25s ease;
    }
    .srv-link:hover {
      gap: 12px;
      color: #ff8c42;
    }
    @media (max-width: 992px) {
      .services-section { padding: 70px 0; }
      .hero-title { font-size: 44px; }
    }
    @media (max-width: 768px) {
      .page-hero-services {
        border-radius: 20px;
        min-height: 300px;
        margin: 15px;
      }
      .hero-title { font-size: 34px; }
      .services-section { padding: 50px 0; }
      .srv-title { font-size: 20px; }
      .srv-text-wrap { padding: 24px 20px; }
    }
    @media (max-width: 576px) {
      .page-hero-services {
        border-radius: 16px;
        min-height: 240px;
        margin: 10px;
      }
      .hero-title { font-size: 28px; }
      .srv-card { flex-direction: column; }
      .srv-img-wrap, .srv-text-wrap { width: 100%; }
      .srv-img-wrap { min-height: 200px; }
      .srv-text-wrap { padding: 20px; }
      .srv-title { font-size: 18px; }
      .srv-desc { font-size: 13px; }
      .srv-num { font-size: 32px; top: 12px; left: 12px; }
    }
  `]
})
export class ServicesPageComponent implements OnInit, AfterViewInit, OnDestroy {
  year = new Date().getFullYear();
  private navSubscription!: Subscription;
  languages = LANGUAGES;
  currentLang: Language | undefined;
  langOpen = false;
  private sub!: Subscription;

  private clickHandler!: () => void;
  services = [
    { num: '01', title: 'Transport Routier de Qualité', desc: 'Solutions de transport fiables pour vos marchandises à travers le monde avec une flotte flexible et moderne.', img: 'assets/images/services/img.png' },
    { num: '02', title: 'Fret Aérien Express', desc: 'Livraison rapide de marchandises urgentes utilisant les routes aériennes mondiales avec suivi en temps réel.', img: 'assets/images/services/img_1.png' },
    { num: '03', title: 'Fret Maritime International', desc: 'Solutions économiques pour le transport de marchandises en vrac avec des services maritimes internationaux fiables.', img: 'assets/images/services/img_2.png' },
    { num: '04', title: 'Transport Ferroviaire Écologique', desc: 'Option de transport ferroviaire efficace et écologique idéale pour les expéditions longue distance.', img: 'assets/images/services/img_3.png' },
    { num: '05', title: 'Entreposage Sécurisé', desc: 'Stockage sécurisé avec gestion des stocks, exécution des commandes et distribution nationale.', img: 'assets/images/services/img_4.png' },
    { num: '06', title: 'Courtage en Douane', desc: 'Assistance experte pour naviguer dans les réglementations d\'import/export pour un dédouanement sans heurts.', img: 'assets/images/services/img_5.png' },
    { num: '07', title: 'Livraison Dernier Kilomètre', desc: 'Service de livraison fiable de bout en bout garantissant que les colis arrivent rapidement et en sécurité.', img: 'assets/images/services/img_6.png' },
    { num: '08', title: 'Projets de Transport Spécial', desc: 'Solutions de transport spécialisées pour les marchandises surdimensionnées, lourdes ou complexes.', img: 'assets/images/services/img_7.png' },
    { num: '09', title: 'Livraison Express Urgente', desc: 'Service de livraison express rapide et fiable pour les expéditions urgentes avec suivi en temps réel.', img: 'assets/images/services/img_8.png' },
    { num: '10', title: 'Chaîne du Froid', desc: 'Logistique à température contrôlée pour les denrées périssables, produits pharmaceutiques et articles sensibles.', img: 'assets/images/services/img_9.png' },
    { num: '11', title: 'Logistique E-commerce', desc: 'Solution complète de traitement pour les entreprises en ligne incluant stockage, emballage et expédition.', img: 'assets/images/services/img_10.png' },
    { num: '12', title: 'Transport de Charges Lourdes', desc: 'Transport spécialisé pour les équipements surdimensionnés et lourds avec permis et escortes.', img: 'assets/images/services/img_11.png' },
    { num: '13', title: 'Transport Intermodal', desc: 'Solutions combinées rail et camion pour un coût et une efficacité optimaux.', img: 'assets/images/services/img_12.png' },
    { num: '14', title: 'Transport Transfrontalier', desc: 'Services experts de dédouanement et d\'expédition transfrontalière entre pays.', img: 'assets/images/services/img_13.png' },
    { num: '15', title: 'Emballage Professionnel', desc: 'Services d\'emballage et de caisse professionnels pour garantir l\'arrivée sécurisée de votre cargaison.', img: 'assets/images/services/img_14.png' },
    { num: '16', title: 'Assurance Cargo', desc: 'Options complètes d\'assurance cargo pour protéger vos envois contre les dommages ou la perte.', img: 'assets/images/services/img_15.png' },
    { num: '17', title: 'Gestion de Chaîne Logistique', desc: 'Services de gestion et d\'optimisation de chaîne logistique de bout en bout pour les entreprises.', img: 'assets/images/services/img_16.png' },
    { num: '18', title: 'Logistique Inverse', desc: 'Gestion efficace des retours et solutions logistiques inversées pour le e-commerce et la vente au détail.', img: 'assets/images/services/img_17.png' },
    { num: '19', title: 'Affrètement Maritime', desc: 'Services d\'affrètement professionnels avec un réseau de transporteurs mondiaux.', img: 'assets/images/services/img_18.png' },
    { num: '20', title: 'Conseil en Logistique', desc: 'Conseil expert en logistique pour optimiser votre chaîne d\'approvisionnement et réduire les coûts.', img: 'assets/images/services/img_19.png' },
    { num: '21', title: 'Onions - Export Premium', desc: 'Exportation d\'oignons de qualité supérieure vers les marchés internationaux avec normes strictes.', img: 'assets/images/services/img_20.png' },
    { num: '22', title: 'Garlic - Ail de Qualité', desc: 'Exportation d\'ail blanc et violet de haute qualité pour les marchés européens et mondiaux.', img: 'assets/images/services/img_21.png' },
    { num: '23', title: 'Riz Basmati Premium', desc: 'Exportation de riz Basmati de qualité supérieure avec certification et traçabilité.', img: 'assets/images/services/img_22.png' },
    { num: '24', title: 'Huiles Végétales', desc: 'Exportation d\'huile de maïs, d\'olive et de tournesol de qualité premium.', img: 'assets/images/services/img_23.png' },
    { num: '25', title: 'Fruits Secs & Dattes', desc: 'Exportation de dattes Medjool, figues et fruits secs de première qualité.', img: 'assets/images/services/img_24.png' },
    { num: '26', title: 'Épices & Aromates', desc: 'Exportation d\'épices sélectionnées : cumin, coriandre, curcuma, poivre et paprika.', img: 'assets/images/services/img_25.png' },
    { num: '27', title: 'Agrumes & Fruits Frais', desc: 'Exportation d\'oranges, citrons, clémentines et fruits frais vers les marchés internationaux.', img: 'assets/images/services/img_26.png' }
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private translationService: TranslationService  // ← Ajouter
  ) {}

  ngOnInit(): void {
    // Ajouter init traduction
    this.currentLang = this.translationService.currentLanguage;
    this.sub = this.translationService.lang$.subscribe(code => {
      this.currentLang = this.languages.find(l => l.code === code);
    });
    if (isPlatformBrowser(this.platformId)) {
      this.clickHandler = () => { this.langOpen = false; };
      document.addEventListener('click', this.clickHandler);

      this.navSubscription = this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        this.reinitMobileMenu();
      });
    }
  }
  toggleLang(): void { this.langOpen = !this.langOpen; }
  selectLang(code: LangCode): void {
    this.translationService.loadLanguage(code);
    this.langOpen = false;
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    if (this.navSubscription) this.navSubscription.unsubscribe();
    if (isPlatformBrowser(this.platformId) && this.clickHandler) {
      document.removeEventListener('click', this.clickHandler);
    }
  }


  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Scroll to top on navigation
      window.scrollTo(0, 0);

      setTimeout(() => {
        if (typeof (window as any).designesiaInit === 'function') {
          (window as any).designesiaInit();
        }
        this.reinitMobileMenu();
      }, 300); // augmenter le délai
    }
  }


  private reinitMobileMenu(): void {
    // Ne PAS toucher menu-btn ici — géré dans app.component.ts
    const extraWrap = document.getElementById('extra-wrap');
    if (extraWrap) extraWrap.classList.remove('active');
  }

}
