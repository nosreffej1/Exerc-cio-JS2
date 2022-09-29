// Minha resolução :)
let saldo = parseFloat(prompt("Qual é o seu saldo inicial disponível?"))
let operation = 0
let quantidade = 0
quantidade = parseFloat(quantidade)

do{
        operation = parseFloat(prompt(
        "O seu saldo é de: R$" + saldo + 
        "\nQual operação você deseja fazer?" +
        "\n\n1-Depositar\n2-Sacar\n3-Sair"
        ))
    
switch(operation){
    case 1:
        quantidade = parseFloat(prompt("Quanto deseja depositar?"))
        saldo += quantidade
        alert("Seu saldo atual é: R$" + saldo)
    break
    case 2:
        quantidade = parseFloat(prompt("Quanto deseja sacar?"))
        saldo -= quantidade
        alert("Seu saldo atual é: R$" + saldo)
    break
    case 3:
        alert("Saldo final: R$" + saldo)
        alert("Encerrando programa...")
    break
    default:
        alert("Operação inválida, digite novamente.")
    break
}    

}while(operation != 3)

// Professor

/*
let saldo = prompt("Informe a quantidade de dinheiro inicial:")
saldo = parseFloat(saldo)
let opcao = ""

do {
    opcao = prompt(
        "Saldo disponível: R$" + saldo +
        "\n1. Adicionar dinheiro." +
        "\n2. Remover dinheiro." +
        "\n3. Sair."
    )

    switch(opcao){
    case "1":
        saldo += parseFloat(prompt("Informe o valor a ser adicionado:"))
        break
    case "2":
        saldo -= prompt("Informe o valor a ser removido:")
        break
    case "3":
        alert("Saindo...")
        break
    default:
        alert("Entrada inválida.")
        break
    }

}while(opcao !== "3")

*/