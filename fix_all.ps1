# ============================================================
# Script de correction automatique - ExportImporte Angular App
# Exécuter depuis: C:\Users\Client\Desktop\ExportImporte\export-import-app
# Commande: powershell -ExecutionPolicy Bypass -File fix_all.ps1
# ============================================================

Write-Host "=== Correction automatique des fichiers ===" -ForegroundColor Cyan

# ---- 1. Corriger style.css ----
Write-Host "`n[1/3] Correction de style.css..." -ForegroundColor Yellow
$stylePath = "src\assets\css\style.css"

if (Test-Path $stylePath) {
    $content = Get-Content $stylePath -Raw -Encoding UTF8

    # Fix 1: border: none;*/ -> /* border: none; */
    $content = $content -replace '  border: none;\*/', '  /* border: none; */'

    # Fix 2: overflow: hidden;x -> overflow: hidden;
    $content = $content -replace 'overflow: hidden;x', 'overflow: hidden;'

    # Fix 3: .widget_tags li a:hover border-color: #eceff3; (missing braces)
    $content = $content -replace '\.widget_tags li a:hover border-color: #eceff3;', '.widget_tags li a:hover { border-color: #eceff3; }'

    # Fix 4: overflow: visible; !important; -> overflow: visible !important;
    $content = $content -replace 'overflow: visible; !important;', 'overflow: visible !important;'

    # Fix 5: ../images/ -> images/ (chemin relatif depuis assets/css/ vers assets/images/)
    $content = $content -replace 'url\(\.\./images/', 'url(images/'
    $content = $content -replace "url\('\.\./images/", "url('images/"
    $content = $content -replace 'url\("\.\./images/', 'url("images/'

    Set-Content $stylePath $content -Encoding UTF8
    Write-Host "  [OK] style.css corrige" -ForegroundColor Green
} else {
    Write-Host "  [ERREUR] style.css non trouve a $stylePath" -ForegroundColor Red
}

# ---- 2. Corriger plugins.css (commentaire non ferme) ----
Write-Host "`n[2/3] Correction de plugins.css..." -ForegroundColor Yellow
$pluginsPath = "src\assets\css\plugins.css"

if (Test-Path $pluginsPath) {
    $content = Get-Content $pluginsPath -Raw -Encoding UTF8
    # Supprimer le /* non ferme a la fin
    $content = $content.TrimEnd()
    if ($content.EndsWith("/*")) {
        $content = $content.Substring(0, $content.Length - 2) + "/* end */"
    }
    Set-Content $pluginsPath $content -Encoding UTF8
    Write-Host "  [OK] plugins.css corrige" -ForegroundColor Green
} else {
    Write-Host "  [ERREUR] plugins.css non trouve a $pluginsPath" -ForegroundColor Red
}

# ---- 3. Corriger angular.json ----
Write-Host "`n[3/3] Correction de angular.json..." -ForegroundColor Yellow
$angularPath = "angular.json"

if (Test-Path $angularPath) {
    $content = Get-Content $angularPath -Raw -Encoding UTF8

    # Fix tsConfig (lien markdown casse)
    $content = $content -replace '"tsConfig": "\[tsconfig\.app\]\(http://tsconfig\.app\)\.json"', '"tsConfig": "tsconfig.app.json"'

    Set-Content $angularPath $content -Encoding UTF8
    Write-Host "  [OK] angular.json corrige" -ForegroundColor Green
} else {
    Write-Host "  [ERREUR] angular.json non trouve" -ForegroundColor Red
}

Write-Host "`n=== Toutes les corrections appliquees ! ===" -ForegroundColor Cyan
Write-Host "Lancez maintenant: ng serve" -ForegroundColor White
