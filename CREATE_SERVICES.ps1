# CREATE_SERVICES.ps1
# Lance depuis : export-import-app\

Write-Host "=== CREATION COMPOSANT SERVICES + LOGO RESPONSIVE ===" -ForegroundColor Cyan

# 1. Creer le dossier services si pas existant
if (-not (Test-Path "src\app\services-page")) {
    New-Item -ItemType Directory -Path "src\app\services-page" | Out-Null
}
Write-Host "[OK] Dossier services-page cree" -ForegroundColor Green

# 2. Creer services-page.component.ts
$servicesComponent = 'import { Component } from ' + "'@angular/core';" + '
import { CommonModule } from ' + "'@angular/common';" + '

@Component({
  selector: ' + "'app-services-page'," + '
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- HERO SECTION -->
    <section class="services-hero text-light text-center" style="background: linear-gradient(135deg, #0a1628 0%, #1a3a6b 100%); padding: 120px 0 80px;">
      <div class="container">
        <div class="subtitle s2 mb-3">Alliance France International</div>
        <h1 class="fw-bold mb-3" style="font-size: clamp(2rem,5vw,3.5rem);">Nos Produits Import / Export</h1>
        <p class="lead opacity-75 mx-auto" style="max-width:650px;">
          Fruits frais, produits de la mer, huiles, boissons et bien plus.
          Nous connectons les producteurs tunisiens aux marches europeens.
        </p>
      </div>
    </section>

    <!-- FILTER TABS -->
    <section style="background:#f8f9fa; padding: 40px 0 0;">
      <div class="container">
        <div class="d-flex flex-wrap justify-content-center gap-2 pb-3">
          <button *ngFor="let cat of categories"
                  class="filter-btn"
                  [class.active]="activeCategory === cat.key"
                  (click)="filterProducts(cat.key)">
            {{ cat.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- PRODUCTS GRID -->
    <section style="background:#f8f9fa; padding: 40px 0 80px;">
      <div class="container">
        <div class="row g-4">
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6"
               *ngFor="let product of filteredProducts; let i = index"
               [style.animation-delay]="(i * 0.05) + ' + s'">
            <div class="product-card" (mouseenter)="hovered=product.id" (mouseleave)="hovered=null">
              <div class="product-img-wrap">
                <img [src]="product.image" [alt]="product.name" class="product-img"
                     onerror="this.src=' + "'assets/images/misc/c3.webp'" + '">
                <div class="product-overlay">
                  <span class="product-badge">{{ product.category }}</span>
                  <a href="/contact" class="product-cta">Demander un devis</a>
                </div>
              </div>
              <div class="product-body">
                <h5 class="product-name">{{ product.name }}</h5>
                <p class="product-desc">{{ product.desc }}</p>
                <div class="product-tags">
                  <span *ngFor="let tag of product.tags" class="tag">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty state -->
        <div *ngIf="filteredProducts.length === 0" class="text-center py-5">
          <i class="fa-solid fa-box-open fa-3x opacity-25 mb-3"></i>
          <p class="text-muted">Aucun produit dans cette categorie</p>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="text-light text-center py-5" style="background: linear-gradient(135deg,#c8a84b,#a07830);">
      <div class="container">
        <h2 class="fw-bold mb-3">Interessé par nos produits ?</h2>
        <p class="mb-4 opacity-90">Contactez-nous pour un devis personnalise et des conditions de livraison adaptees a vos besoins.</p>
        <a href="/contact" class="btn-main btn-line" style="border-color:#fff;color:#fff;">
          <span>Nous contacter</span>
        </a>
      </div>
    </section>
  `,
  styles: [`
    .filter-btn {
      background: #fff;
      border: 2px solid #dee2e6;
      color: #555;
      padding: 8px 20px;
      border-radius: 25px;
      font-weight: 600;
      font-size: 0.85rem;
      cursor: pointer;
      transition: all 0.25s;
    }
    .filter-btn:hover, .filter-btn.active {
      background: #c8a84b;
      border-color: #c8a84b;
      color: #fff;
    }
    .product-card {
      background: #fff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 15px rgba(0,0,0,0.07);
      transition: transform 0.3s, box-shadow 0.3s;
      height: 100%;
    }
    .product-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 15px 40px rgba(0,0,0,0.13);
    }
    .product-img-wrap {
      position: relative;
      overflow: hidden;
      height: 220px;
    }
    .product-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s;
    }
    .product-card:hover .product-img {
      transform: scale(1.08);
    }
    .product-overlay {
      position: absolute;
      inset: 0;
      background: rgba(10,22,40,0.6);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      opacity: 0;
      transition: opacity 0.3s;
    }
    .product-card:hover .product-overlay { opacity: 1; }
    .product-badge {
      background: #c8a84b;
      color: #fff;
      font-size: 0.75rem;
      font-weight: 700;
      padding: 4px 14px;
      border-radius: 20px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .product-cta {
      background: #fff;
      color: #0a1628;
      font-weight: 700;
      font-size: 0.82rem;
      padding: 10px 22px;
      border-radius: 6px;
      text-decoration: none;
      transition: background 0.2s;
    }
    .product-cta:hover { background: #c8a84b; color: #fff; }
    .product-body { padding: 18px; }
    .product-name {
      font-weight: 700;
      color: #0a1628;
      margin-bottom: 6px;
      font-size: 1rem;
    }
    .product-desc {
      color: #777;
      font-size: 0.83rem;
      line-height: 1.55;
      margin-bottom: 10px;
    }
    .product-tags { display: flex; flex-wrap: wrap; gap: 5px; }
    .tag {
      background: #f0f0f0;
      color: #555;
      font-size: 0.72rem;
      padding: 3px 10px;
      border-radius: 12px;
      font-weight: 500;
    }
    @media (max-width: 576px) {
      .product-img-wrap { height: 180px; }
    }
  `]
})
export class ServicesPageComponent {
  hovered: number | null = null;
  activeCategory = ' + "'all';" + '

  categories = [
    { key: ' + "'all', label: 'Tous les produits' }," + '
    { key: ' + "'fruits', label: 'Fruits & Légumes' }," + '
    { key: ' + "'mer', label: 'Produits de la Mer' }," + '
    { key: ' + "'huiles', label: 'Huiles' }," + '
    { key: ' + "'epices', label: 'Épices & Boissons' }," + '
  ];

  allProducts = [
    {
      id: 1, category: ' + "'Fruits'," + ' name: ' + "'Dattes Deglet Nour'," + '
      image: ' + "'assets/images/products/deglet-nour.png'," + '
      desc: ' + "'Dattes premium de qualité supérieure, cultivées en Tunisie. Idéales pour l\\'export vers l\\'Europe.'," + '
      tags: [' + "'Bio', 'Export', 'Tunisie'" + '], cat: ' + "'fruits'" + '
    },
    {
      id: 2, category: ' + "'Mer'," + ' name: ' + "'Calamar Frais'," + '
      image: ' + "'assets/images/products/calamar.png'," + '
      desc: ' + "'Calamar frais pêché en Méditerranée. Disponible frais ou congelé selon commande.'," + '
      tags: [' + "'Frais', 'Méditerranée', 'Congelé'" + '], cat: ' + "'mer'" + '
    },
    {
      id: 3, category: ' + "'Mer'," + ' name: ' + "'Thon Rouge'," + '
      image: ' + "'assets/images/products/thon.png'," + '
      desc: ' + "'Thon rouge de haute qualité, pêche durable. Idéal pour les marchés européens premium.'," + '
      tags: [' + "'Premium', 'Durable', 'Frais'" + '], cat: ' + "'mer'" + '
    },
    {
      id: 4, category: ' + "'Boissons'," + ' name: ' + "'Thé Authentique'," + '
      image: ' + "'assets/images/products/the.png'," + '
      desc: ' + "'Sélection de thés aromatiques aux saveurs authentiques. Conditionnement en vrac ou sachets.'," + '
      tags: [' + "'Aromatique', 'Vrac', 'Premium'" + '], cat: ' + "'epices'" + '
    },
    {
      id: 5, category: ' + "'Boissons'," + ' name: ' + "'Café de Qualité'," + '
      image: ' + "'assets/images/products/cafe.png'," + '
      desc: ' + "'Café d\\'exception sélectionné parmi les meilleures origines. Torréfaction artisanale disponible.'," + '
      tags: [' + "'Artisanal', 'Import', 'Exception'" + '], cat: ' + "'epices'" + '
    },
    {
      id: 6, category: ' + "'Fruits'," + ' name: ' + "'Figue de Barbarie'," + '
      image: ' + "'assets/images/products/figue-barbarie.png'," + '
      desc: ' + "'Figue de Barbarie de Tunisie, fraîche et sucrée. Produit saisonnier très demandé en Europe.'," + '
      tags: [' + "'Saisonnier', 'Frais', 'Tunisie'" + '], cat: ' + "'fruits'" + '
    },
    {
      id: 7, category: ' + "'Fruits'," + ' name: ' + "'Cerise'," + '
      image: ' + "'assets/images/products/cerise.png'," + '
      desc: ' + "'Cerises fraîches de premier choix. Calibrage et conditionnement selon les normes européennes.'," + '
      tags: [' + "'Frais', 'Export', 'Calibré'" + '], cat: ' + "'fruits'" + '
    },
    {
      id: 8, category: ' + "'Fruits'," + ' name: ' + "'Kiwi'," + '
      image: ' + "'assets/images/products/kiwi.png'," + '
      desc: ' + "'Kiwi de qualité supérieure, riche en vitamine C. Disponible toute l\\'année en grande quantité.'," + '
      tags: [' + "'Vitamine C', 'Import', 'Frais'" + '], cat: ' + "'fruits'" + '
    },
    {
      id: 9, category: ' + "'Fruits'," + ' name: ' + "'Grenade'," + '
      image: ' + "'assets/images/products/grenade.png'," + '
      desc: ' + "'Grenades juteuses aux grains rouges rubis. Très prisées sur le marché européen haut de gamme.'," + '
      tags: [' + "'Antioxydant', 'Premium', 'Export'" + '], cat: ' + "'fruits'" + '
    },
    {
      id: 10, category: ' + "'Fruits'," + ' name: ' + "'Mangue'," + '
      image: ' + "'assets/images/products/mangue.png'," + '
      desc: ' + "'Mangues tropicales sucrées et parfumées. Importation directe depuis les meilleures régions productrices.'," + '
      tags: [' + "'Tropical', 'Import', 'Sucré'" + '], cat: ' + "'fruits'" + '
    },
    {
      id: 11, category: ' + "'Fruits'," + ' name: ' + "'Avocat'," + '
      image: ' + "'assets/images/products/avocat.png'," + '
      desc: ' + "'Avocats Hass et Fuerte de qualité premium. Conditionnement en palettes selon commande.'," + '
      tags: [' + "'Hass', 'Premium', 'Palettes'" + '], cat: ' + "'fruits'" + '
    },
    {
      id: 12, category: ' + "'Fruits'," + ' name: ' + "'Raisin'," + '
      image: ' + "'assets/images/products/raisin.png'," + '
      desc: ' + "'Raisins frais et secs de différentes variétés. Export vers toute l\\'Europe avec documentation complète.'," + '
      tags: [' + "'Frais', 'Sec', 'Varié'" + '], cat: ' + "'fruits'" + '
    },
    {
      id: 13, category: ' + "'Fruits'," + ' name: ' + "'Ananas'," + '
      image: ' + "'assets/images/products/ananas.png'," + '
      desc: ' + "'Ananas tropicaux de grande taille, sucrés et juteux. Importation directe pour grande distribution.'," + '
      tags: [' + "'Tropical', 'Import', 'GMS'" + '], cat: ' + "'fruits'" + '
    },
    {
      id: 14, category: ' + "'Fruits'," + ' name: ' + "'Pomme'," + '
      image: ' + "'assets/images/products/pomme.png'," + '
      desc: ' + "'Pommes crispy de différentes variétés. Disponibles en calibres multiples pour export et grande surface.'," + '
      tags: [' + "'Varié', 'Export', 'GMS'" + '], cat: ' + "'fruits'" + '
    },
    {
      id: 15, category: ' + "'Fruits'," + ' name: ' + "'Agrumes'," + '
      image: ' + "'assets/images/products/agrumes.png'," + '
      desc: ' + "'Oranges, citrons, mandarines et pamplemousses de Tunisie. Exportation en vrac ou en filets.'," + '
      tags: [' + "'Tunisie', 'Citrus', 'Export'" + '], cat: ' + "'fruits'" + '
    },
    {
      id: 16, category: ' + "'Huiles'," + ' name: ' + "'Huile de Tournesol'," + '
      image: ' + "'assets/images/products/huile-tournesol.png'," + '
      desc: ' + "'Huile de tournesol raffinée de qualité alimentaire. Disponible en bidon de 1L, 5L et conteneur.'," + '
      tags: [' + "'Raffinée', 'Alimentaire', 'Vrac'" + '], cat: ' + "'huiles'" + '
    },
    {
      id: 17, category: ' + "'Huiles'," + ' name: " + "\"Huile d\\'Olive Vierge Extra\"," + '
      image: ' + "'assets/images/products/huile-olive.png'," + '
      desc: ' + "\"Huile d\\'olive vierge extra tunisienne, première pression à froid. Label IGP disponible.\"," + '
      tags: [' + "'IGP', 'Tunisie', 'AOC'" + '], cat: ' + "'huiles'" + '
    },
  ];

  get filteredProducts() {
    if (this.activeCategory === ' + "'all')" + ' return this.allProducts;
    return this.allProducts.filter(p => p.cat === this.activeCategory);
  }

  filterProducts(cat: string) {
    this.activeCategory = cat;
  }
}
'
Set-Content "src\app\services-page\services-page.component.ts" $servicesComponent -Encoding UTF8
Write-Host "[OK] services-page.component.ts cree" -ForegroundColor Green

# 3. Mettre a jour app.routes.ts pour inclure ServicesPageComponent
$appRoutes = "import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ServicesPageComponent } from './services-page/services-page.component';

export const routes: Routes = [
  { path: '',               component: HomeComponent },
  { path: 'services',       component: ServicesPageComponent },
  { path: 'service-single', component: ServicesPageComponent },
  { path: 'about',          component: HomeComponent },
  { path: 'booking',        component: HomeComponent },
  { path: 'track',          component: HomeComponent },
  { path: 'contact',        component: HomeComponent },
  { path: 'blog',           component: HomeComponent },
  { path: 'faq',            component: HomeComponent },
  { path: 'testimonials',   component: HomeComponent },
  { path: 'team',           component: HomeComponent },
  { path: 'careers',        component: HomeComponent },
  { path: '**',             redirectTo: '' }
];"
Set-Content "src\app\app.routes.ts" $appRoutes -Encoding UTF8
Write-Host "[OK] app.routes.ts mis a jour" -ForegroundColor Green

# 4. Ajouter CSS logo responsive dans styles.css
$stylesCss = "/* LogiXpress / Alliance France International
   styles.css - CSS global Angular */

*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; overflow-x: hidden; }

/* ============================================
   LOGO RESPONSIVE
   ============================================ */

/* Desktop : taille normale */
#logo img {
  height: 70px;
  width: auto;
  transition: height 0.3s;
}

/* Tablette */
@media (max-width: 991px) {
  #logo img {
    height: 55px;
  }
}

/* Mobile */
@media (max-width: 767px) {
  #logo img {
    height: 42px;
  }
  /* Evite que le logo deborde sur mobile */
  #logo {
    max-width: 180px;
  }
}

/* Tres petit mobile */
@media (max-width: 400px) {
  #logo img {
    height: 35px;
  }
  #logo {
    max-width: 140px;
  }
}

/* ============================================
   HEADER STICKY - logo encore plus petit
   ============================================ */
header.sticky #logo img,
header.header-sticky #logo img {
  height: 50px;
}
@media (max-width: 767px) {
  header.sticky #logo img,
  header.header-sticky #logo img {
    height: 36px;
  }
}
"
Set-Content "src\styles.css" $stylesCss -Encoding UTF8
Write-Host "[OK] styles.css (logo responsive) mis a jour" -ForegroundColor Green

# 5. Creer le dossier products dans assets si pas existant
if (-not (Test-Path "src\assets\images\products")) {
    New-Item -ItemType Directory -Path "src\assets\images\products" | Out-Null
    Write-Host "[OK] Dossier src/assets/images/products cree" -ForegroundColor Green
} else {
    Write-Host "[OK] Dossier products existe deja" -ForegroundColor Green
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "ETAPE MANUELLE : Copiez vos images produits" -ForegroundColor Yellow
Write-Host "dans : src\assets\images\products\" -ForegroundColor Yellow
Write-Host ""
Write-Host "Noms attendus :" -ForegroundColor Yellow
Write-Host "  deglet-nour.png  calamar.png  thon.png" -ForegroundColor White
Write-Host "  the.png  cafe.png  figue-barbarie.png" -ForegroundColor White
Write-Host "  cerise.png  kiwi.png  grenade.png" -ForegroundColor White
Write-Host "  mangue.png  avocat.png  raisin.png" -ForegroundColor White
Write-Host "  ananas.png  pomme.png  agrumes.png" -ForegroundColor White
Write-Host "  huile-tournesol.png  huile-olive.png" -ForegroundColor White
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "=== DONE - Lancez: ng serve --configuration development ===" -ForegroundColor Green
