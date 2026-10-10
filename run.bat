@echo off
setlocal
cd /d "%~dp0"
call bundle exec jekyll serve
if errorlevel 1 (
  echo.
  echo Jekyll failed. Review the error above.
  pause
  exit /b 1
)
