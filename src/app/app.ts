import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { ViewportScroller, isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class App implements AfterViewInit {
  title = 'export-import-app';

  constructor(
    private router: Router,
    private scroller: ViewportScroller,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.pipe(
        filter(e => e instanceof NavigationEnd)
      ).subscribe(() => {
        this.scroller.scrollToPosition([0, 0]);
        setTimeout(() => this.reinitAfterNavigation(), 500);
      });
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Attacher le menu mobile une seule fois au niveau app
      // en utilisant la délégation d'événements sur document
      document.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLElement;
        const menuBtn = document.getElementById('menu-btn');
        const extraWrap = document.getElementById('extra-wrap');
        const btnClose = document.getElementById('btn-close');

        // Clic sur #menu-btn → toggle extra-wrap
        if (menuBtn && (target === menuBtn || menuBtn.contains(target))) {
          e.preventDefault();
          e.stopPropagation();
          menuBtn.classList.toggle('active');
          if (extraWrap) extraWrap.classList.toggle('active');
          return;
        }

        // Clic sur #btn-close → fermer extra-wrap
        if (btnClose && (target === btnClose || btnClose.contains(target))) {
          e.preventDefault();
          if (menuBtn) menuBtn.classList.remove('active');
          if (extraWrap) extraWrap.classList.remove('active');
          return;
        }
      });
    }
  }

  private reinitAfterNavigation(): void {
    // Cacher le preloader
    const loader = document.getElementById('de-loader');
    if (loader) {
      loader.style.opacity = '0';
      loader.style.display = 'none';
    }

    // Reset menu mobile
    const menuBtn = document.getElementById('menu-btn');
    const extraWrap = document.getElementById('extra-wrap');
    if (menuBtn) menuBtn.classList.remove('active');
    if (extraWrap) extraWrap.classList.remove('active');

    // Relancer designesiaInit pour WOW animations, scroll, etc.
    // MAIS bloquer sa réattache sur #menu-btn
    const origAddEventListener = HTMLElement.prototype.addEventListener;
    const menuBtnEl = document.getElementById('menu-btn');

    if (typeof (window as any).designesiaInit === 'function') {
      (window as any).designesiaInit();
    }

    // Re-cacher le loader que designesiaInit réaffiche
    setTimeout(() => {
      const l = document.getElementById('de-loader');
      if (l) { l.style.opacity = '0'; l.style.display = 'none'; }
    }, 150);
  }
}
