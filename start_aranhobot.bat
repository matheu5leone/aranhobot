@echo off
REM Verifica se o Node.js está instalado
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js não encontrado. Por favor, instale o Node.js antes de prosseguir.
    pause
    exit /b
)

REM Se o Node.js estiver instalado, execute os comandos para ligar o bot
node deploy-commands.js
node index.js
pause
