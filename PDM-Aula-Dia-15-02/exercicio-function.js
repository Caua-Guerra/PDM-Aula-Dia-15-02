const listaCEPs = [
    '12321116',
    '12355356',
    '12312456',
    '12333456'
]

async function consultaCEP(cep) {
    let response = await fetch('https://viacep.com.br/ws/${cep}/json/')
    return await response.json()
}

listaCEPs.forEach(cep => {
    console.log(cep)
    console.log('----------------')
    console.log(consultaCEP(cep))
    console.log('----------------')
})