#!/bin/sh

echo "⏳ Aguardando banco..."

until nc -z db 3306; do
  sleep 2
done

echo "📦 Instalando dependências..."
composer install --no-interaction --prefer-dist

echo "🗄️ Rodando migrations..."
php artisan migrate --force

echo "🚀 Iniciando servidor..."
php artisan serve --host=0.0.0.0 --port=8000