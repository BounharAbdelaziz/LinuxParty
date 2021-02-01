$(document).ready(function(){

    (function($) {
        "use strict";


    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "entrer la bonne réponse !");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Veuillez remplire le champs dedié à votre nom.",
                    minlength: "Votre nom doit être constitué de 2 caractères au minimum !"
                },
                subject: {
                    required: "Veuillez remplire le champs dedié à l'objet.",
                    minlength: "L'objet doit être constitué de 4 caractères au minimum !"
                },
                number: {
                    required: "Veuillez remplire le champs dedié à votre numéro de téléphone.",
                    minlength: "Votre numéro doit être constitué de 5 caractères au minimum !"
                },
                email: {
                    required: "Veuillez remplire le champs dedié à votre adresse email"
                },
                message: {
                    required: "Veuillez écrire un message.",
                    minlength: "Votre message est très court"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })

 })(jQuery)
})
