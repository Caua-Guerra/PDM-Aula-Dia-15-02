//Lista de nomesAlunos
const nomesAlunos = ["João", "Hayashida", "Debroi"]
console.log(nomesAlunos[0]) // Imprime o primeiro elemento do array nomesAlunos
nomesAlunos[0] = 15 // Alterando o valor da posição 0 do array nomesAlunos (ponteiros)
console.log(nomesAlunos[0])
nomesAlunos[0] = null // Alterando o valor da posição 0 do array nomesAlunos (ponteiros)
console.log(nomesAlunos[0])
nomesAlunos[0] = "João" // Alterando o valor da posição 0 do array nomesAlunos (ponteiros)
console.log(nomesAlunos[0])

// Organizando o array nomesAlunos em ordem alfabética
nomesAlunos.sort() // Ordena o array nomesAlunos em ordem alfabética
console.log(nomesAlunos)

// Adicionando um elemento ao array nomesAlunos
nomesAlunos.push("Ana") // Adiciona um elemento ao final do array nomesAlunos
console.log(nomesAlunos)

// Removendo um elemento do array nomesAlunos
nomesAlunos.pop() // Remove o último elemento do array nomesAlunos

for (let o = 0; o < nomesAlunos.length; o++) {
    console.log(nomesAlunos[o])
}

// Procurando um elemento no array nomesAlunos
const nome = "Hayashida"
console.log(nomesAlunos.includes(nome)) // Retorna true se encontrar o elemento "Ana" no array nomesAlunos, ou false se não encontrar
console.log(nomesAlunos.indexOf(nome)) // Retorna a posição do elemento "Ana" no array nomesAlunos, ou -1 se não encontrar

// Percorrendo um array
for (let i = 0; i < nomesAlunos.length; i++) {
    console.log(nomesAlunos[i])
}


console.log(nomesAlunos.includes(nome))
console.log(nomesAlunos.indexOf(nome))

for(let i = 0; i < nomesAlunos.length; ++i)
{
    if(nomesAlunos[i] === nome){
        console.log(`Encontrei ${nome} na posição ${i}`)
    }
}

const position = nomesAlunos.indexOf(nome)
console.log(`${nomesAlunos[position]} esta na posição ${position}`)

nomesAlunos.forEach(aluno => console.log(aluno));

for(let i = 0; i < nomesAlunos.length; ++i)
{
    if(nomesAlunos[i] === nome){
        console.log(`${nome} é viado`)
    }
}