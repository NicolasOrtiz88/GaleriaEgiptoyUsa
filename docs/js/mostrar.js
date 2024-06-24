document.addEventListener('DOMContentLoaded', function() {
    $('#initialModal').modal('show');

    $('#initialModal').on('click', function(event) {
        if (!$(event.target).closest('.modal-content').length) {
            $('#initialModal').modal('hide');
        }
    });

    $('#registrationForm').on('submit', function(event) {
        event.preventDefault();
        alert('Formulario enviado. ¡Muchas gracias!');
    });
});
