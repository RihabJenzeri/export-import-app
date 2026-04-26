# fix_fonts.ps1
# Exécuter depuis: C:\Users\Client\Desktop\ExportImporte\export-import-app
# Commande: .\fix_fonts.ps1

Write-Host "=== Correction des fichiers de fonts ===" -ForegroundColor Cyan

# ---- 1. elegant_font/HTML_CSS/style.css ----
Write-Host "`n[1/5] elegant_font..." -ForegroundColor Yellow
$path = "src\assets\fonts\elegant_font\HTML_CSS\style.css"
if (Test-Path $path) {
    $content = Get-Content $path -Raw -Encoding UTF8
    $content = $content -replace "url\('fonts/ElegantIcons\.eot'\)", "url('/assets/fonts/elegant_font/HTML_CSS/fonts/ElegantIcons.eot')"
    $content = $content -replace "url\('fonts/ElegantIcons\.eot\?#iefix'\)", "url('/assets/fonts/elegant_font/HTML_CSS/fonts/ElegantIcons.eot?#iefix')"
    $content = $content -replace "url\('fonts/ElegantIcons\.woff'\)", "url('/assets/fonts/elegant_font/HTML_CSS/fonts/ElegantIcons.woff')"
    $content = $content -replace "url\('fonts/ElegantIcons\.ttf'\)", "url('/assets/fonts/elegant_font/HTML_CSS/fonts/ElegantIcons.ttf')"
    $content = $content -replace "url\('fonts/ElegantIcons\.svg#ElegantIcons'\)", "url('/assets/fonts/elegant_font/HTML_CSS/fonts/ElegantIcons.svg#ElegantIcons')"
    Set-Content $path $content -Encoding UTF8
    Write-Host "  [OK] elegant_font corrige" -ForegroundColor Green
} else { Write-Host "  [SKIP] $path non trouve" -ForegroundColor DarkGray }

# ---- 2. et-line-font/style.css ----
Write-Host "`n[2/5] et-line-font..." -ForegroundColor Yellow
$path = "src\assets\fonts\et-line-font\style.css"
if (Test-Path $path) {
    $content = Get-Content $path -Raw -Encoding UTF8
    $content = $content -replace "url\('fonts/et-line\.eot'\)", "url('/assets/fonts/et-line-font/fonts/et-line.eot')"
    $content = $content -replace "url\('fonts/et-line\.eot\?#iefix'\)", "url('/assets/fonts/et-line-font/fonts/et-line.eot?#iefix')"
    $content = $content -replace "url\('fonts/et-line\.woff'\)", "url('/assets/fonts/et-line-font/fonts/et-line.woff')"
    $content = $content -replace "url\('fonts/et-line\.ttf'\)", "url('/assets/fonts/et-line-font/fonts/et-line.ttf')"
    $content = $content -replace "url\('fonts/et-line\.svg#et-line'\)", "url('/assets/fonts/et-line-font/fonts/et-line.svg#et-line')"
    Set-Content $path $content -Encoding UTF8
    Write-Host "  [OK] et-line-font corrige" -ForegroundColor Green
} else { Write-Host "  [SKIP] $path non trouve" -ForegroundColor DarkGray }

# ---- 3. fontawesome4/css/font-awesome.css ----
Write-Host "`n[3/5] fontawesome4..." -ForegroundColor Yellow
$path = "src\assets\fonts\fontawesome4\css\font-awesome.css"
if (Test-Path $path) {
    $content = Get-Content $path -Raw -Encoding UTF8
    $content = $content -replace "\.\./fonts/fontawesome-webfont", "/assets/fonts/fontawesome4/fonts/fontawesome-webfont"
    Set-Content $path $content -Encoding UTF8
    Write-Host "  [OK] fontawesome4 corrige" -ForegroundColor Green
} else { Write-Host "  [SKIP] $path non trouve" -ForegroundColor DarkGray }

# ---- 4. fontawesome6/css/brands.css ----
Write-Host "`n[4/5] fontawesome6 brands..." -ForegroundColor Yellow
$path = "src\assets\fonts\fontawesome6\css\brands.css"
if (Test-Path $path) {
    $content = Get-Content $path -Raw -Encoding UTF8
    $content = $content -replace '"\.\./webfonts/', '"/assets/fonts/fontawesome6/webfonts/'
    $content = $content -replace "'\.\./webfonts/", "'/assets/fonts/fontawesome6/webfonts/"
    Set-Content $path $content -Encoding UTF8
    Write-Host "  [OK] fontawesome6 brands corrige" -ForegroundColor Green
} else { Write-Host "  [SKIP] $path non trouve" -ForegroundColor DarkGray }

# ---- 5. fontawesome6/css/solid.css ----
Write-Host "`n[5/5] fontawesome6 solid + icofont..." -ForegroundColor Yellow
$path = "src\assets\fonts\fontawesome6\css\solid.css"
if (Test-Path $path) {
    $content = Get-Content $path -Raw -Encoding UTF8
    $content = $content -replace '"\.\./webfonts/', '"/assets/fonts/fontawesome6/webfonts/'
    $content = $content -replace "'\.\./webfonts/", "'/assets/fonts/fontawesome6/webfonts/"
    Set-Content $path $content -Encoding UTF8
    Write-Host "  [OK] fontawesome6 solid corrige" -ForegroundColor Green
} else { Write-Host "  [SKIP] $path non trouve" -ForegroundColor DarkGray }

# ---- Bonus: icofont ----
$path = "src\assets\fonts\icofont\icofont.min.css"
if (Test-Path $path) {
    $content = Get-Content $path -Raw -Encoding UTF8
    $content = $content -replace "url\(fonts/icofont\.woff2\)", "url(/assets/fonts/icofont/fonts/icofont.woff2)"
    $content = $content -replace "url\(fonts/icofont\.woff\)", "url(/assets/fonts/icofont/fonts/icofont.woff)"
    Set-Content $path $content -Encoding UTF8
    Write-Host "  [OK] icofont corrige" -ForegroundColor Green
} else { Write-Host "  [SKIP] icofont non trouve" -ForegroundColor DarkGray }

Write-Host "`n=== Toutes les fonts corrigees ! ===" -ForegroundColor Cyan
Write-Host "Lancez maintenant: ng serve" -ForegroundColor White
