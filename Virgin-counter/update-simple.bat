@echo off
echo ====================================
echo    Virgin Counter Update Tool
echo ====================================

:: Go to project folder
cd /d "%~dp0"

:: Check git status
echo.
echo Checking files status...
git status

:: Add all files
echo.
echo Adding new and modified files...
git add .

:: Create commit
echo.
echo Saving changes...
git commit -m "Auto update: %date% %time%"

:: Push to GitHub
echo.
echo Uploading to GitHub...
git push origin main

:: Show success message
echo.
echo ====================================
echo    Website updated successfully!
echo    Updating render.com...
echo    (Please wait about 1 minute)
echo ====================================
echo.
echo Note: If asked for login:
- Username: Venta07
- Password: Use your GitHub Personal Access Token
  (not your GitHub password)
echo.
pause
