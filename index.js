// Minha resolução :)
let option = 0

do{
    option = parseFloat(prompt(
        "Opções disponíveis:\n" +
         "\n1-Opção 1" + "\n2-Opção 2" +
          "\n3-Opção 3" + "\n4-Opção 4" +
          "\n5-Encerrar"
        ))

    switch(option){
        case 1:
            alert("Opção 1 escolhida!")
        break
        case 2:
            alert("Opção 2 escolhida!")
        break
        case 3:
            alert("Opção 3 escolhida!")
        break
        case 4:
            alert("Opção 4 escolhida!")
        break
        case 5:
            alert("Você escolheu encerrar o programa!")
            break   
        default:
            alert("Opção inválida! Escolha uma das cinco opções.")
    }   
}while(option != 5)
alert("Encerrando o programa...")

// Professor 
/*
let opcao = ""

do{
    opcao = prompt(
        "Seja bem vindo(a)\n" +
        "\nEscolha uma das opções abaixo:" +
        "\n1 - Opção Um" +
        "\n2 - Opção Dois" +
        "\n3 - Opção Três" +
        "\n4 - Opção Quatro" +
        "\n5 - Encerrar"
    )

    switch(opcao){
        case "1"
            alert("Você escolheu a opção 1")
            break
        case "2":
            alert("Você escolheu a opção 2.")
            break
        case "3":
            alert("Você escolheu a opção 3.")
            break
        case "4":
            alert("Você escolheu a opção 4.")
            break
        case "5":
            alert("Encerrando o programa...")
            break
        default:
            alert("Entrada inválida! Escolha uma das cinco opções.")
    }


}while(opcao !== "5")

*/