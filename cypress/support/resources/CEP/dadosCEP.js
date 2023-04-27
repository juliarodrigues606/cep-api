function dadosCEP (dadosCepsMapeados,codigoPostal) {
    return Object.values(dadosCepsMapeados).find(cep => cep.number == codigoPostal);
}

export {dadosCEP}


