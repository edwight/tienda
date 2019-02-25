<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="author" content="Edwight Delgado">
<meta name="csrf-token" content="{{ csrf_token() }}">
<title>Authentication jwt/Auth</title>
<link href="{{asset('css/app.css')}}" rel="stylesheet">
<link href="{{asset('css/style.css')}}" rel="stylesheet">
<link href="{{asset('css/fontawesome-all.css')}}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <app/>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>