@echo off
echo ===================================
echo  STC Counter - GitHub Updater
echo ===================================
echo.

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
echo  Update complete! The website will be updated in a minute.
echo ===================================
echo.
pause
