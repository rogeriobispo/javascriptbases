const cpfField = document.getElementById('cpf')


const formatCPF = function(e) {
  const cpf = e.target.value;
  e.target.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
}

cpfField.addEventListener('change', formatCPF)
