$(document).ready(function () {
    $('.form__body').submit(function (e) {
        e.preventDefault();
//объявление переменных
        $('.form__field').removeClass('error');
        let statusName = false;
        let statusPhone = false;
        let statusEmail = false;
        let message = {
            empty:'Поля не заполненны',
            correct:'Поля введены некорректно',
        };
        let nameField = $('input[name="name"]');
        let phoneField = $('input[name="phone"]');
        let emailField = $('input[name="email"]');
        let name = nameField.val().trim(),
            phone = phoneField.val().trim(),
            email = emailField.val().trim();
//валидация формы запроса начало--------------------------------
//валидация на пустые поля
        let arEmpty = [];
        if (name === '') {
            arEmpty.push(nameField);
        }
        if(phone === '') {
            arEmpty.push(phoneField);
        }
        if (email === '') {
            arEmpty.push(emailField);
        }
        if (arEmpty.length !== 0){
            $('.msg').removeClass('none').text(message.empty);
            arEmpty.forEach(function (item){
                $(item).addClass('error');
            });
        }else {
//валидация ФИО
            let regName = /^[а-яА-Я\s-]+$/;
            if (regName.test(name) === false) {
                $('.msg').removeClass('none').text(message.correct);
                $(nameField).addClass('error')
            }else statusName = true;
//валидация телефона
            let  regPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
            if (regPhone.test(phone) === false){
                $('.msg').removeClass('none').text(message.correct);
                $(phoneField).addClass('error')
            }else statusPhone = true;
//валидация email
            let regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (regEmail.test(email) === false) {
                $('.msg').removeClass('none').text(message.correct);
                $(emailField).addClass('error');

            } else statusEmail = true;
        }
//валидация формы запроса конец--------------------------------
//ajax запрос
        if (statusName === true && statusEmail === true && statusPhone === true) {
            $.ajax({
                type: 'post',
                url: 'https://60376bfd5435040017722533.mockapi.io/form',
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                },
                success: function (data) {
                    console.log(data);
                    $('.msg').removeClass('none').text('Форма успешно отправленна');
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    $('.msg').removeClass('none').text('Ошибка: ' + xhr.status + ' ' + thrownError);
                },

            });
        }
    });
});
