$(function () {
  $('form[name="form"]').validate({
    rules: {
      name: 'required',
      email: {
        required: true,
        email: true,
        RegExp: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      },
    },
    messages: {
      name: '',
      email: '',
    },
    errorElement: 'em',
    errorPlacement: function (error, element) {
      error.addClass("error");
      if (element.prop('type') === 'text') {
        error.insertAfter(element);
      } if (element.prop('type') === 'email') {
        error.insertAfter(element);
      }
    },
  });
});