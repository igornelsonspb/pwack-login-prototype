@echo off
echo Запускаю локальный сервер для прототипа...
echo Открой в браузере: http://localhost:8080/login.html
echo (чтобы остановить сервер — закрой это окно)
python -m http.server 8080
pause
