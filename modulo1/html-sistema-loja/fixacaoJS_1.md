```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  let comissaoQuantidadeDeCarros = qtdeCarrosVendidos * 100
  let comissaoValorTotal = valorTotalVendas * 0.05
  let salario = 2000
  let salarioTotal = salario + comissaoValorTotal + comissaoQuantidadeDeCarros
  return salarioTotal
}```