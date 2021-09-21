<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Форма регистрации</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <div class="form">
        <form class="form__body">
            <h1 class="form__title">Задать вопрос</h1>
            <div class="form__fields">
                <div class="div_form">
                    <input class="form__field" name="name" placeholder="Фамилия Имя Отчество *">
                </div>
                <div class="div_form">
                    <input class="form__field" name="phone" placeholder="Телефон *">
                </div>
                <div class="div_form">
                    <input class="form__field" name="email" placeholder="Email">
                </div>
            </div>
                <div class="div_button">
                    <button class="form__button" type="submit">ОТПРАВИТЬ ЗАПРОС</button>
                </div>
        </form>
    </div>
    <p class="msg none"></p>
    <script type="text/javascript" src="assets/js/jquery-3.4.1.min.js"></script>
    <script src="assets/js/script.js"></script>
</body>
</html>
