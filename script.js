document.addEventListener("DOMContentLoaded", function() {
  // Обработчик события отправки формы
  var form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Отменить отправку формы

    // Получение значений полей формы
    var email = document.querySelector("#email").value;
    var phone = document.querySelector("#phone").value;
    var age = document.querySelector("#age").value;
    var message = document.querySelector("#message").value;

    // Валидация данных (пример простой проверки email и номера телефона)
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^\d{10}$/;

    if (!emailPattern.test(email) || !phonePattern.test(phone)) {
      // Если данные некорректны, показать модальное окно с сообщением об ошибке
      showAlert("Ошибка", "Пожалуйста, введите корректный email и номер телефона.");
    } else {
      // Если данные корректны, вывести их в консоль разработчика
      console.log("Email:", email);
      console.log("Телефон:", phone);
      console.log("Возраст:", age);
      console.log("Пожелания:", message);

      // Показать модальное окно с сообщением об успешной обработке данных
      showAlert("Успешно", "Ваши данные успешно обработаны и отправлены.");
    }
  });

  // Функция для отображения модального окна
  function showAlert(title, message) {
    var modal = document.getElementById("myModal");
    var modalTitle = modal.querySelector(".modal-title");
    var modalBody = modal.querySelector(".modal-body");

    modalTitle.textContent = title;
    modalBody.textContent = message;

    // Открыть модальное окно
    $(modal).modal("show");
	function displayModal() {
  var email = $('#email').val();
  var phone = $('#phone').val();
  var age = $('#age').val();
  console.log('Email: ' + email);
  console.log('Phone: ' + phone);
  console.log('Age: ' + age);
  $('#successModal').modal('show');
}
$('form').on('submit', function (e) {
  e.preventDefault();
  displayModal();
  // Дополнительная обработка данных формы
});

  }
});
