<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="icon" href="favicon.svg">

    <title>MySnags</title>

    @viteReactRefresh
    @vite('resources/js/app.tsx')
</head>

<body>
    <div id="root"></div>
</body>

</html>