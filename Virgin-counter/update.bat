@echo off
echo ===================================
echo  Virgin Counter - GitHub Updater
echo ===================================
echo.

:: Go to project folder
cd /d "%~dp0"

echo Adding all changes to be tracked...
git add .
echo.

set /p commit_message="Enter a brief description of your changes: "
echo.

echo Saving changes with message: "%commit_message%"
git commit -m "%commit_message%"
echo.

echo Uploading changes to GitHub...
git push origin main
echo.

echo ===================================
echo  Update complete! The website will be updated on render.com in a minute.
echo  Note: If asked for credentials:
echo  - Username: Venta07
echo  - Password: Use your GitHub Personal Access Token
echo ===================================
echo.
pause
