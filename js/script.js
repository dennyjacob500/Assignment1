$(function() {
  jQuery.validator.addMethod("lettersonly", function(value, element) {
return this.optional(element) || /^[a-z\s]+$/i.test(value);
}, "Only alphabetical characters");
    jQuery.validator.addMethod("validmail", function(value, element) {
return this.optional(element) ||  /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(value);
}, "Invalid E-Mail");
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"

  $("form[name='registration']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      firstname: {
        required: true,
        maxlength: 50,
        lettersonly: true
      },
      userName: {
        required: true,
        maxlength: 56,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true,
        validmail: true
      },
      inputPassword: {
        required: true,
        minlength: 6
      },
      confPassword: {
            required: true,
            equalTo: "#inputPassword"
      },
      dob:{
        required: true
      }
    },
    // Specify validation error messages
    messages: {
      firstname: {
        required: "Please enter your firstname",
        maxlength: "First Name cannot be more than 50 characters"
      },
      inputPassword: {
        required: "Please provide a password",
        minlength: "Your password must be at least 6 characters long"
      },
      confPassword: {
        required: "Please confirm your password",
        equalTo: "Your password do not match"
      },
      userName: {
        required: "Please enter a valid email address",
        maxlength: "Your e-mail cannot be more than 56 characters"
      },
      dob:"Please enter a valid date of birth"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      alert('Detail Submitted');
      form.submit();
    }
  });
});