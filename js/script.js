$(function() {
  jQuery.validator.addMethod("lettersonly", function(value, element) {
return this.optional(element) || /^[a-z\s]+$/i.test(value);
}, "Only alphabetical characters");
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
        email: true
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
      form.submit();
    }
  });
});