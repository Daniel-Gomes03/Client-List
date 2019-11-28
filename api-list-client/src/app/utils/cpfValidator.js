const cpfValidator = strCPF => {
  let soma
  let resto
  soma = 0

  if (
    strCPF.length !== 11 ||
    strCPF === '00000000000' ||
    strCPF === '11111111111' ||
    strCPF === '22222222222' ||
    strCPF === '33333333333' ||
    strCPF === '44444444444' ||
    strCPF === '55555555555' ||
    strCPF === '66666666666' ||
    strCPF === '77777777777' ||
    strCPF === '88888888888' ||
    strCPF === '99999999999'
  ) {
    return false
  }

  // Pega os 9 primeiros digitos do cpf(da esquerda para direita) e os multiplica por valores entre 10 e 2(decrescente).
  for (let i = 1; i <= 9; i++) {
    // Soma todos os resultados obtidos da multiplicação.
    soma = soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i)
  }

  // Resto da divisão por 11 é responsavel por verificar o primeiro dígito verificador
  resto = (soma * 10) % 11

  if (resto === 10 || resto === 11) {
    resto = 0
  }

  // Verifica se o resto obtido é diferente do primeiro digito verificador
  if (resto !== parseInt(strCPF.substring(9, 10))) {
    return false
  }

  soma = 0

  // Pega os 10(incluindo o primeiro digito verificador) primeiros digitos do cpf(da esquerda para direita) e os multiplica por valores entre 11 e 2(decrescente).
  for (let i = 1; i <= 10; i++) {
    soma = soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i)
  }

  // Resto da divisão por 11 é responsavel por verificar o segundo dígito verificador
  resto = (soma * 10) % 11

  if (resto === 10 || resto === 11) {
    resto = 0
  }

  // Verifica se o resto obtido é diferente do segundo digito verificador
  if (resto !== parseInt(strCPF.substring(10, 11))) {
    return false
  }
  return true
}

module.exports = cpfValidator
