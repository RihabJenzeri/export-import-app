# Correction des chemins Font Awesome
$indexHtml = Get-Content "src\index.html" -Raw

# Remplacer les chemins inexistants par les bons
$indexHtml = $indexHtml -replace 'assets/fonts/fontawesome6/css/all.css', 'assets/fonts/fontawesome6/css/fontawesome.css'
$indexHtml = $indexHtml -replace 'assets/fonts/fontawesome6/css/regular.css', 'assets/fonts/fontawesome6/css/solid.css'

# Ajouter les liens manquants si nécessaire
if ($indexHtml -notmatch 'brands.css') {
    $indexHtml = $indexHtml -replace '<!-- Polices locales.*?-->', "<!-- Polices locales -->`n  <link rel=`"stylesheet`" href=`"assets/fonts/fontawesome6/css/fontawesome.css`">`n  <link rel=`"stylesheet`" href=`"assets/fonts/fontawesome6/css/brands.css`">`n  <link rel=`"stylesheet`" href=`"assets/fonts/fontawesome6/css/solid.css`">"
}

Set-Content "src\index.html" $indexHtml -Encoding UTF8
Write-Host "Chemins Font Awesome corrigés !" -ForegroundColor Green
Write-Host "Redémarrez ng serve pour voir les changements" -ForegroundColor Yellow