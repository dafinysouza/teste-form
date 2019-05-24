// Validate Bootstrap
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {        
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          alert('Cadastro efetuado com sucesso!');
        }
        form.classList.add('was-validated');
      }, false);
    });    
  }, false);  
})();

//Mask
$('#cpf').mask('000.000.000-00');
$('#telefone').mask('(00) 00000-0000');
$('#cep').mask('00000-000');
$('#inputData').mask('00/00/0000');