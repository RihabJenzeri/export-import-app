# fix_style_urls.ps1
# Exécuter depuis: C:\Users\Client\Desktop\ExportImporte\export-import-app
# Commande: .\fix_style_urls.ps1

Write-Host "Correction des URLs dans style.css..." -ForegroundColor Cyan

$stylePath = "src\assets\css\style.css"

if (-not (Test-Path $stylePath)) {
    Write-Host "ERREUR: style.css non trouve!" -ForegroundColor Red
    exit
}

$content = Get-Content $stylePath -Raw -Encoding UTF8

# Les images sont dans assets/images/ui/
# Angular sert assets/ a la racine donc dans le CSS on met juste /assets/images/
$content = $content -replace 'url\(images/ui/', 'url(/assets/images/ui/'
$content = $content -replace "url\('images/ui/", "url('/assets/images/ui/"
$content = $content -replace 'url\("images/ui/', 'url("/assets/images/ui/'

# Au cas ou les anciennes versions ../images/ existent encore
$content = $content -replace 'url\(\.\./images/', 'url(/assets/images/'
$content = $content -replace "url\('\.\./images/", "url('/assets/images/"
$content = $content -replace 'url\("\.\./images/', 'url("/assets/images/'

Set-Content $stylePath $content -Encoding UTF8
Write-Host "style.css corrige!" -ForegroundColor Green
Write-Host "Lancez: ng serve" -ForegroundColor White
