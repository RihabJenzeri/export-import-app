# FIX_SSR.ps1

Write-Host "=== FIX SSR + ANGULAR.JSON ===" -ForegroundColor Cyan

$angularJson = '{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "cli": { "packageManager": "npm" },
  "newProjectRoot": "projects",
  "projects": {
    "export-import-app": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular/build:application",
          "options": {
            "outputPath": "dist/export-import-app",
            "index": "src/index.html",
            "browser": "src/main.ts",
            "polyfills": ["zone.js"],
            "tsConfig": "tsconfig.app.json",
            "assets": [
              { "glob": "**/*", "input": "public" },
              { "glob": "**/*", "input": "src/assets", "output": "assets" }
            ],
            "styles": ["src/styles.css"],
            "scripts": [
              "src/assets/js/plugins.js",
              "src/assets/js/designesia.js",
              "src/assets/js/swiper.js",
              "src/assets/js/custom-swiper-1.js",
              "src/assets/js/custom-marquee.js"
            ]
          },
          "configurations": {
            "production": {
              "budgets": [
                { "type": "initial", "maximumWarning": "2MB", "maximumError": "5MB" },
                { "type": "anyComponentStyle", "maximumWarning": "10kB", "maximumError": "20kB" }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular/build:dev-server",
          "configurations": {
            "production": { "buildTarget": "export-import-app:build:production" },
            "development": { "buildTarget": "export-import-app:build:development" }
          },
          "defaultConfiguration": "development"
        },
        "test": { "builder": "@angular/build:unit-test" }
      }
    }
  }
}'
Set-Content "angular.json" $angularJson -Encoding UTF8
Write-Host "[OK] angular.json" -ForegroundColor Green

$appConfigTs = 'import { ApplicationConfig, provideZoneChangeDetection } from ' + "'@angular/core';" + '
import { provideRouter } from ' + "'@angular/router';" + '
import { routes } from ' + "'./app.routes';" + '

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};'
Set-Content "src\app\app.config.ts" $appConfigTs -Encoding UTF8
Write-Host "[OK] app.config.ts" -ForegroundColor Green

$mainTs = "import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';

bootstrapApplication(App, appConfig)
  .catch(err => console.error(err));"
Set-Content "src\main.ts" $mainTs -Encoding UTF8
Write-Host "[OK] main.ts" -ForegroundColor Green

Write-Host "=== DONE - Lancez: ng serve ===" -ForegroundColor Cyan
