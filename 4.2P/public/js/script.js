$(document).ready(function() {
    var modals = document.querySelectorAll('.modal');
    var instances = M.Modal.init(modals);
    var newsletterModal = M.Modal.getInstance(document.getElementById('modal1'));

    loadFrogs();

    function loadFrogs() {
        $.ajax({
            url: '/api/frogs',
            method: 'GET',
            dataType: 'json'
        })
        .done(function(response) {
            renderFrogCards(response.data);
        })
        .fail(function(err) {
            console.error('Failed to load frogs:', err);
            $('#frog-cards').html('<p class="center-align">Could not load frogs.</p>');
        })
    }

    function renderFrogCards(frogs) {
        var $container = $('#frog-cards');
        $container.empty();

        frogs.forEach(function(frog) {
            var cardHTML = `
                <div class="col s12 m6 l3">
                    <div class="card">
                        <div class="card-image">
                            <img src="${frog.image_path}" alt="${frog.frog_name}">
                            <span class="card-title">${frog.frog_name}</span>
                        </div>
                        <div class="card-action light-green darken-3">
                            <a href="${frog.link}" target="_blank">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            `;
            $container.append(cardHTML);
        });
    }

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

        $.ajax({
            url: '/api/users',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                favouriteFrog: favouriteFrog
            })
        })
        .done(function(response) {
            M.toast({html: `Thank you for signing up to our newsletter ${firstName}!`});

            form.reset();
            M.updateTextFields();
            newsletterModal.close();
        })
        .fail(function(err) {
            M.toast({html: 'Something went wrong, please try again.'});
        })
    });

    $('#cancel-newsletter').on('click', function(e) {
        $('#newsletter-form')[0].reset();
    });
});
