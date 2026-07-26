$(document).ready(function() {
    var modals = document.querySelectorAll('.modal');
    var instances = M.Modal.init(modals);
    var newsletterModal = M.Modal.getInstance(document.getElementById('modal1'));

    $('#submit-newsletter').on('click', function(e) {
        e.preventDefault();

        var firstName = $('#first-name').val();
        var lastName = $('#last-name').val();
        var email = $('#email').val();
        var favouriteFrog = $('#favourite-frog').val();

        var form = $('#newsletter-form')[0];

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        M.toast({html: `Thank you for signing up to our newsletter ${firstName}!`});
        form.reset();
        M.updateTextFields();
        newsletterModal.close();
    });

    $('#cancel-newsletter').on('click', function(e) {
        $('#newsletter-form')[0].reset();
    });
});

