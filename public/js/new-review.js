let stars = document.querySelectorAll('.rating label');
    for (let star of stars){
        star.addEventListener("click", function(){
            for (let starCheck of stars){
                starCheck.classList.remove("clicked");
            }
            this.classList.add("clicked");
        });
    }

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms)
        .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
        })
    })()