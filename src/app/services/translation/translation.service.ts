import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export type LangCode = 'en' | 'zh' | 'es' | 'fr' | 'ar' | 'de' | 'pt' | 'ru' | 'hi' | 'tr';

export interface Language {
  code: LangCode;
  label: string;
  labelEn: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

export const LANGUAGES: Language[] = [
  { code: 'fr', label: 'Français',   labelEn: 'French',     flag: '🇫🇷', dir: 'ltr' },
  { code: 'en', label: 'English',    labelEn: 'English',    flag: '🇺🇸', dir: 'ltr' },
  { code: 'ar', label: 'العربية',    labelEn: 'Arabic',     flag: '🇸🇦', dir: 'rtl' },
  { code: 'es', label: 'Español',    labelEn: 'Spanish',    flag: '🇪🇸', dir: 'ltr' },
  { code: 'de', label: 'Deutsch',    labelEn: 'German',     flag: '🇩🇪', dir: 'ltr' },
  { code: 'zh', label: '中文',        labelEn: 'Chinese',    flag: '🇨🇳', dir: 'ltr' },
  { code: 'pt', label: 'Português',  labelEn: 'Portuguese', flag: '🇧🇷', dir: 'ltr' },
  { code: 'ru', label: 'Русский',    labelEn: 'Russian',    flag: '🇷🇺', dir: 'ltr' },
  { code: 'hi', label: 'हिंदी',       labelEn: 'Hindi',      flag: '🇮🇳', dir: 'ltr' },
  { code: 'tr', label: 'Türkçe',     labelEn: 'Turkish',    flag: '🇹🇷', dir: 'ltr' },
];

@Injectable({ providedIn: 'root' })
export class TranslationService {

  private translations: Record<string, any> = {};
  private currentLang$ = new BehaviorSubject<LangCode>('fr');

  readonly languages = LANGUAGES;

  constructor(private http: HttpClient) {
    const saved = localStorage.getItem('lp_lang') as LangCode | null;
    const initial: LangCode = saved && LANGUAGES.some(l => l.code === saved) ? saved : 'fr';
    this.loadLanguage(initial);
  }

  get lang$(): Observable<LangCode> {
    return this.currentLang$.asObservable();
  }

  get currentLang(): LangCode {
    return this.currentLang$.getValue();
  }

  get currentLanguage(): Language {
    return LANGUAGES.find(l => l.code === this.currentLang)!;
  }

  loadLanguage(code: LangCode): void {
    if (this.translations[code]) {
      this.applyLanguage(code);
      return;
    }
    this.http.get<Record<string, any>>(`assets/i18n/${code}.json`).subscribe({
      next: (data) => {
        this.translations[code] = data;
        this.applyLanguage(code);
      },
      error: () => console.warn(`[i18n] Failed to load: ${code}.json`)
    });
  }

  private applyLanguage(code: LangCode): void {
    this.currentLang$.next(code);
    localStorage.setItem('lp_lang', code);
    const lang = LANGUAGES.find(l => l.code === code);
    document.documentElement.setAttribute('dir', lang?.dir ?? 'ltr');
    document.documentElement.setAttribute('lang', code);
  }

  t(key: string): string {
    const data = this.translations[this.currentLang] ?? {};
    const parts = key.split('.');
    let val: any = data;
    for (const p of parts) {
      val = val?.[p];
      if (val === undefined) return key;
    }
    return typeof val === 'string' ? val : key;
  }
}
