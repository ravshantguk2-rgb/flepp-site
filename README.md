# FLEPP Advanced Server Version

Полная серверная версия сайта с:
- каталогом теста уровня
- каталогом отзывов с серверным сохранением и модерацией
- исправленным каталогом программ
- серверной формой заявок
- админ-панелью

## Запуск
```bash
npm install
npm start
```

Откройте:
```bash
http://localhost:3000
```

## Render / Railway
- Build Command: `npm install`
- Start Command: `npm start`

## Важно
Отзывы в этой версии сохраняются с выбранным провайдером Google/Yandex и требуют модерации.
Реальный OAuth Google/Yandex в эту сборку не встроен — для продакшна нужно подключить OAuth отдельно.

## Стартовый PIN
`1234`


# FLEPP Render Ready

Этот архив уже подготовлен под Render.

## Что уже добавлено
- render.yaml
- package.json
- server.js
- public/
- data/

## Как развернуть
1. Загрузите содержимое в GitHub репозиторий.
2. На Render выберите New -> Blueprint.
3. Подключите этот репозиторий.
4. Render сам прочитает render.yaml и создаст сервис.

## Важно
Сайт использует файловое хранение:
- data/applications.json
- data/reviews.json

Для долгосрочного продакшна лучше позже перейти на базу данных.
