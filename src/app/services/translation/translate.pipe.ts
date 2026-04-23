import { Pipe, PipeTransform, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from './translation.service';

/**
 * Usage dans le template : {{ 'nav.home' | translate }}
 */
@Pipe({
  name: 'translate',
  standalone: true,
  pure: false   // impure pour détecter les changements de langue
})
export class TranslatePipe implements PipeTransform, OnDestroy {
  private sub: Subscription;
  private lastKey = '';
  private lastValue = '';

  constructor(
    private ts: TranslationService,
    private cdr: ChangeDetectorRef
  ) {
    // Re-évalue quand la langue change
    this.sub = this.ts.lang$.subscribe(() => {
      this.lastKey = '';
      this.cdr.markForCheck();
    });
  }

  transform(key: string): string {
    if (key !== this.lastKey) {
      this.lastKey = key;
      this.lastValue = this.ts.t(key);
    }
    return this.lastValue;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
