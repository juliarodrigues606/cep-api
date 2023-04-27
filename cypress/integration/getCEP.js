/// <reference types="cypress" />
import 'cypress-plugin-api'
import env from '../../cypress.json'
//import * as gerarCep from '../support/resources/CEP/gerarCEPCapital' ---import gerador de cep
import * as geradorCep from '../support/resources/CEP/escolherCEPCapital'
import * as getDadosCep from '../support/resources/CEP/dadosCEP'
import * as cidade from '../fixtures/mapCepCidades'
import * as rioBranco from '../fixtures/capitais/dadosRioBranco.json'
import * as maceio from '../fixtures/capitais/dadosMaceio.json'
import * as macapa from '../fixtures/capitais/dadosMacapa.json'
import * as manaus from '../fixtures/capitais/dadosManaus.json'
import * as salvador from '../fixtures/capitais/dadosSalvador.json'
import * as fortaleza from '../fixtures/capitais/dadosFortaleza.json'
import * as brasilia from '../fixtures/capitais/dadosBrasilia.json'
import * as vitoria from '../fixtures/capitais/dadosVitoria.json'
import * as goiania from '../fixtures/capitais/dadosGoiania.json'
import * as saoLuiz from '../fixtures/capitais/dadosSaoLuiz.json'
import * as cuiaba from '../fixtures/capitais/dadosCuiaba.json'
import * as campoGrande from '../fixtures/capitais/dadosCampoGrande.json'
import * as beloHorizonte from '../fixtures/capitais/dadosBeloHorizonte.json'
import * as belem from '../fixtures/capitais/dadosBelem.json'
import * as joaoPessoa from '../fixtures/capitais/dadosJoaoPessoa.json'
import * as curitiba from '../fixtures/capitais/dadosCuritiba.json'
import * as recife from '../fixtures/capitais/dadosRecife.json'
import * as teresina from '../fixtures/capitais/dadosTeresina.json'
import * as rioDeJaneiro from '../fixtures/capitais/dadosRioDeJaneiro.json'
import * as portoAlegre from '../fixtures/capitais/dadosPortoAlegre.json'
import * as boaVista from '../fixtures/capitais/dadosBoaVista.json'
import * as florianopolis from '../fixtures/capitais/dadosFlorianopolis.json'
import * as saoPaulo from '../fixtures/capitais/dadosSaoPaulo.json'
import * as aracaju from '../fixtures/capitais/dadosAracaju.json'
import * as palmas from '../fixtures/capitais/dadosPalmas.json'



describe('Realizar testes de consulta de CPFs',()=>{
    it('Deve realizar consulta de CEP de Rio Branco ao enviar o valor ',()=>{
        //let cep = gerarCep.gerarCEPRioBranco() - Se usasse essa variavel ele geraria um cep aleatorio dentro do range da cidade , mas nem todos são validos 
        let cep = geradorCep.pickCEP(cidade.rioBranco) //escolhe o cep que vou usar
        let dadosCep = getDadosCep.dadosCEP(rioBranco,cep) //pega os dados da minha massa
        cy.GETApi('', env.apiCEP+'cep',cep).then((response)=>{
            expect(response.status).eq(200)
            expect(response.body.address).eq(dadosCep.address)
            expect(response.body.number).eq(dadosCep.number)
            expect(response.body.city).eq(dadosCep.city)
            expect(response.body.longitude).eq(dadosCep.longitude)
            expect(response.body.state).eq(dadosCep.state)
            expect(response.body.id).eq(dadosCep.id)
            expect(response.body.latitude).eq(dadosCep.latitude)
            expect(response.body.neighborhood).eq(dadosCep.neighborhood)
            expect(response.body.blockDelivery).eq(dadosCep.blockDelivery)
        })
    })

    it('Deve realizar consulta de CEP de Maceió ao enviar o valor ',()=>{
        let cep = geradorCep.pickCEP(cidade.maceio) //escolhe o cep que vou usar
        let dadosCep = getDadosCep.dadosCEP(maceio,cep) //pega os dados da minha massa
        cy.GETApi('', env.apiCEP+'cep',cep).then((response)=>{
            expect(response.status).eq(200)
            expect(response.body.address).eq(dadosCep.address)
            expect(response.body.number).eq(dadosCep.number)
            expect(response.body.city).eq(dadosCep.city)
            expect(response.body.longitude).eq(dadosCep.longitude)
            expect(response.body.state).eq(dadosCep.state)
            expect(response.body.id).eq(dadosCep.id)
            expect(response.body.latitude).eq(dadosCep.latitude)
            expect(response.body.neighborhood).eq(dadosCep.neighborhood)
            expect(response.body.blockDelivery).eq(dadosCep.blockDelivery)
        })
    })

    it('Deve realizar consulta de CEP de Macapá ao enviar o valor ',()=>{
        let cep = geradorCep.pickCEP(cidade.macapa) //escolhe o cep que vou usar
        let dadosCep = getDadosCep.dadosCEP(macapa,cep) //pega os dados da minha massa
        cy.GETApi('', env.apiCEP+'cep',cep).then((response)=>{
            expect(response.status).eq(200)
            expect(response.body.address).eq(dadosCep.address)
            expect(response.body.number).eq(dadosCep.number)
            expect(response.body.city).eq(dadosCep.city)
            expect(response.body.longitude).eq(dadosCep.longitude)
            expect(response.body.state).eq(dadosCep.state)
            expect(response.body.id).eq(dadosCep.id)
            expect(response.body.latitude).eq(dadosCep.latitude)
            expect(response.body.neighborhood).eq(dadosCep.neighborhood)
            expect(response.body.blockDelivery).eq(dadosCep.blockDelivery)
        })
    })

    it('Deve realizar consulta de CEP de Manaus ao enviar o valor ',()=>{
        let cep = geradorCep.pickCEP(cidade.manaus) //escolhe o cep que vou usar
        let dadosCep = getDadosCep.dadosCEP(manaus,cep) //pega os dados da minha massa
        cy.GETApi('', env.apiCEP+'cep',cep).then((response)=>{
            expect(response.status).eq(200)
            expect(response.body.address).eq(dadosCep.address)
            expect(response.body.number).eq(dadosCep.number)
            expect(response.body.city).eq(dadosCep.city)
            expect(response.body.longitude).eq(dadosCep.longitude)
            expect(response.body.state).eq(dadosCep.state)
            expect(response.body.id).eq(dadosCep.id)
            expect(response.body.latitude).eq(dadosCep.latitude)
            expect(response.body.neighborhood).eq(dadosCep.neighborhood)
            expect(response.body.blockDelivery).eq(dadosCep.blockDelivery)
        })
    })

    it('Deve realizar consulta de CEP de Salvador ao enviar o valor ',()=>{
        let cep = geradorCep.pickCEP(cidade.salvador) //escolhe o cep que vou usar
        let dadosCep = getDadosCep.dadosCEP(salvador,cep) //pega os dados da minha massa
        cy.GETApi('', env.apiCEP+'cep',cep).then((response)=>{
            expect(response.status).eq(200)
            expect(response.body.address).eq(dadosCep.address)
            expect(response.body.number).eq(dadosCep.number)
            expect(response.body.city).eq(dadosCep.city)
            expect(response.body.longitude).eq(dadosCep.longitude)
            expect(response.body.state).eq(dadosCep.state)
            expect(response.body.id).eq(dadosCep.id)
            expect(response.body.latitude).eq(dadosCep.latitude)
            expect(response.body.neighborhood).eq(dadosCep.neighborhood)
            expect(response.body.blockDelivery).eq(dadosCep.blockDelivery)
        })
    })

    it('Deve realizar consulta de CEP de Fortaleza ao enviar o valor ',()=>{
        let cep = geradorCep.pickCEP(cidade.fortaleza) //escolhe o cep que vou usar
        let dadosCep = getDadosCep.dadosCEP(fortaleza,cep) //pega os dados da minha massa
        cy.GETApi('', env.apiCEP+'cep',cep).then((response)=>{
            expect(response.status).eq(200)
            expect(response.body.address).eq(dadosCep.address)
            expect(response.body.number).eq(dadosCep.number)
            expect(response.body.city).eq(dadosCep.city)
            expect(response.body.longitude).eq(dadosCep.longitude)
            expect(response.body.state).eq(dadosCep.state)
            expect(response.body.id).eq(dadosCep.id)
            expect(response.body.latitude).eq(dadosCep.latitude)
            expect(response.body.neighborhood).eq(dadosCep.neighborhood)
            expect(response.body.blockDelivery).eq(dadosCep.blockDelivery)
        })
    })

    it('Deve realizar consulta de CEP de Brasilia ao enviar o valor ',()=>{
        let cep = geradorCep.pickCEP(cidade.brasilia) //escolhe o cep que vou usar
        let dadosCep = getDadosCep.dadosCEP(brasilia,cep) //pega os dados da minha massa
        cy.GETApi('', env.apiCEP+'cep',cep).then((response)=>{
            expect(response.status).eq(200)
            expect(response.body.address).eq(dadosCep.address)
            expect(response.body.number).eq(dadosCep.number)
            expect(response.body.city).eq(dadosCep.city)
            expect(response.body.longitude).eq(dadosCep.longitude)
            expect(response.body.state).eq(dadosCep.state)
            expect(response.body.id).eq(dadosCep.id)
            expect(response.body.latitude).eq(dadosCep.latitude)
            expect(response.body.neighborhood).eq(dadosCep.neighborhood)
            expect(response.body.blockDelivery).eq(dadosCep.blockDelivery)
        })
    })

    it('Deve realizar consulta de CEP de Vitoria ao enviar o valor ',()=>{
        let cep = geradorCep.pickCEP(cidade.vitoria) //escolhe o cep que vou usar
        let dadosCep = getDadosCep.dadosCEP(vitoria,cep) //pega os dados da minha massa
        cy.GETApi('', env.apiCEP+'cep',cep).then((response)=>{
            expect(response.status).eq(200)
            expect(response.body.address).eq(dadosCep.address)
            expect(response.body.number).eq(dadosCep.number)
            expect(response.body.city).eq(dadosCep.city)
            expect(response.body.longitude).eq(dadosCep.longitude)
            expect(response.body.state).eq(dadosCep.state)
            expect(response.body.id).eq(dadosCep.id)
            expect(response.body.latitude).eq(dadosCep.latitude)
            expect(response.body.neighborhood).eq(dadosCep.neighborhood)
            expect(response.body.blockDelivery).eq(dadosCep.blockDelivery)
        })
    })

    it('Deve realizar consulta de CEP de Goiania ao enviar o valor ',()=>{
        let cep = geradorCep.pickCEP(cidade.goiania) //escolhe o cep que vou usar
        let dadosCep = getDadosCep.dadosCEP(goiania,cep) //pega os dados da minha massa
        cy.GETApi('', env.apiCEP+'cep',cep).then((response)=>{
            expect(response.status).eq(200)
            expect(response.body.address).eq(dadosCep.address)
            expect(response.body.number).eq(dadosCep.number)
            expect(response.body.city).eq(dadosCep.city)
            expect(response.body.longitude).eq(dadosCep.longitude)
            expect(response.body.state).eq(dadosCep.state)
            expect(response.body.id).eq(dadosCep.id)
            expect(response.body.latitude).eq(dadosCep.latitude)
            expect(response.body.neighborhood).eq(dadosCep.neighborhood)
            expect(response.body.blockDelivery).eq(dadosCep.blockDelivery)
        })
    })

    it('Deve realizar consulta de CEP de São Luiz ao enviar o valor ',()=>{
        let cep = geradorCep.pickCEP(cidade.saoLuiz) //escolhe o cep que vou usar
        let dadosCep = getDadosCep.dadosCEP(saoLuiz,cep) //pega os dados da minha massa
        cy.GETApi('', env.apiCEP+'cep',cep).then((response)=>{
            expect(response.status).eq(200)
            expect(response.body.address).eq(dadosCep.address)
            expect(response.body.number).eq(dadosCep.number)
            expect(response.body.city).eq(dadosCep.city)
            expect(response.body.longitude).eq(dadosCep.longitude)
            expect(response.body.state).eq(dadosCep.state)
            expect(response.body.id).eq(dadosCep.id)
            expect(response.body.latitude).eq(dadosCep.latitude)
            expect(response.body.neighborhood).eq(dadosCep.neighborhood)
            expect(response.body.blockDelivery).eq(dadosCep.blockDelivery)
        })
    })

    it('Deve realizar consulta de CEP de Cuiaba ao enviar o valor ',()=>{
        let cep = geradorCep.pickCEP(cidade.cuiaba) //escolhe o cep que vou usar
        let dadosCep = getDadosCep.dadosCEP(cuiaba,cep) //pega os dados da minha massa
        cy.GETApi('', env.apiCEP+'cep',cep).then((response)=>{
            expect(response.status).eq(200)
            expect(response.body.address).eq(dadosCep.address)
            expect(response.body.number).eq(dadosCep.number)
            expect(response.body.city).eq(dadosCep.city)
            expect(response.body.longitude).eq(dadosCep.longitude)
            expect(response.body.state).eq(dadosCep.state)
            expect(response.body.id).eq(dadosCep.id)
            expect(response.body.latitude).eq(dadosCep.latitude)
            expect(response.body.neighborhood).eq(dadosCep.neighborhood)
            expect(response.body.blockDelivery).eq(dadosCep.blockDelivery)
        })
    })

    it('Deve realizar consulta de CEP de Campo Grande ao enviar o valor ',()=>{
        let cep = geradorCep.pickCEP(cidade.campoGrande) //escolhe o cep que vou usar
        let dadosCep = getDadosCep.dadosCEP(campoGrande,cep) //pega os dados da minha massa
        cy.GETApi('', env.apiCEP+'cep',cep).then((response)=>{
            expect(response.status).eq(200)
            expect(response.body.address).eq(dadosCep.address)
            expect(response.body.number).eq(dadosCep.number)
            expect(response.body.city).eq(dadosCep.city)
            expect(response.body.longitude).eq(dadosCep.longitude)
            expect(response.body.state).eq(dadosCep.state)
            expect(response.body.id).eq(dadosCep.id)
            expect(response.body.latitude).eq(dadosCep.latitude)
            expect(response.body.neighborhood).eq(dadosCep.neighborhood)
            expect(response.body.blockDelivery).eq(dadosCep.blockDelivery)
        })
    })

    it('Deve realizar consulta de CEP de Belo Horizonte ao enviar o valor ',()=>{
        let cep = geradorCep.pickCEP(cidade.beloHorizonte) //escolhe o cep que vou usar
        let dadosCep = getDadosCep.dadosCEP(beloHorizonte,cep) //pega os dados da minha massa
        cy.GETApi('', env.apiCEP+'cep',cep).then((response)=>{
            expect(response.status).eq(200)
            expect(response.body.address).eq(dadosCep.address)
            expect(response.body.number).eq(dadosCep.number)
            expect(response.body.city).eq(dadosCep.city)
            expect(response.body.longitude).eq(dadosCep.longitude)
            expect(response.body.state).eq(dadosCep.state)
            expect(response.body.id).eq(dadosCep.id)
            expect(response.body.latitude).eq(dadosCep.latitude)
            expect(response.body.neighborhood).eq(dadosCep.neighborhood)
            expect(response.body.blockDelivery).eq(dadosCep.blockDelivery)
        })
    })

    it('Deve realizar consulta de CEP de Belem ao enviar o valor ',()=>{
        let cep = geradorCep.pickCEP(cidade.belem) //escolhe o cep que vou usar
        let dadosCep = getDadosCep.dadosCEP(belem,cep) //pega os dados da minha massa
        cy.GETApi('', env.apiCEP+'cep',cep).then((response)=>{
            expect(response.status).eq(200)
            expect(response.body.address).eq(dadosCep.address)
            expect(response.body.number).eq(dadosCep.number)
            expect(response.body.city).eq(dadosCep.city)
            expect(response.body.longitude).eq(dadosCep.longitude)
            expect(response.body.state).eq(dadosCep.state)
            expect(response.body.id).eq(dadosCep.id)
            expect(response.body.latitude).eq(dadosCep.latitude)
            expect(response.body.neighborhood).eq(dadosCep.neighborhood)
            expect(response.body.blockDelivery).eq(dadosCep.blockDelivery)
        })
    })

    it('Deve realizar consulta de CEP de João Pessoa ao enviar o valor ',()=>{
        let cep = geradorCep.pickCEP(cidade.joaoPessoa) //escolhe o cep que vou usar
        let dadosCep = getDadosCep.dadosCEP(joaoPessoa,cep) //pega os dados da minha massa
        cy.GETApi('', env.apiCEP+'cep',cep).then((response)=>{
            expect(response.status).eq(200)
            expect(response.body.address).eq(dadosCep.address)
            expect(response.body.number).eq(dadosCep.number)
            expect(response.body.city).eq(dadosCep.city)
            expect(response.body.longitude).eq(dadosCep.longitude)
            expect(response.body.state).eq(dadosCep.state)
            expect(response.body.id).eq(dadosCep.id)
            expect(response.body.latitude).eq(dadosCep.latitude)
            expect(response.body.neighborhood).eq(dadosCep.neighborhood)
            expect(response.body.blockDelivery).eq(dadosCep.blockDelivery)
        })
    })

    it('Deve realizar consulta de CEP de Curitiba ao enviar o valor ',()=>{
        let cep = geradorCep.pickCEP(cidade.curitiba) //escolhe o cep que vou usar
        let dadosCep = getDadosCep.dadosCEP(curitiba,cep) //pega os dados da minha massa
        cy.GETApi('', env.apiCEP+'cep',cep).then((response)=>{
            expect(response.status).eq(200)
            expect(response.body.address).eq(dadosCep.address)
            expect(response.body.number).eq(dadosCep.number)
            expect(response.body.city).eq(dadosCep.city)
            expect(response.body.longitude).eq(dadosCep.longitude)
            expect(response.body.state).eq(dadosCep.state)
            expect(response.body.id).eq(dadosCep.id)
            expect(response.body.latitude).eq(dadosCep.latitude)
            expect(response.body.neighborhood).eq(dadosCep.neighborhood)
            expect(response.body.blockDelivery).eq(dadosCep.blockDelivery)
        })
    })

    it('Deve realizar consulta de CEP de Recife ao enviar o valor ',()=>{
        let cep = geradorCep.pickCEP(cidade.recife) //escolhe o cep que vou usar
        let dadosCep = getDadosCep.dadosCEP(recife,cep) //pega os dados da minha massa
        cy.GETApi('', env.apiCEP+'cep',cep).then((response)=>{
            expect(response.status).eq(200)
            expect(response.body.address).eq(dadosCep.address)
            expect(response.body.number).eq(dadosCep.number)
            expect(response.body.city).eq(dadosCep.city)
            expect(response.body.longitude).eq(dadosCep.longitude)
            expect(response.body.state).eq(dadosCep.state)
            expect(response.body.id).eq(dadosCep.id)
            expect(response.body.latitude).eq(dadosCep.latitude)
            expect(response.body.neighborhood).eq(dadosCep.neighborhood)
            expect(response.body.blockDelivery).eq(dadosCep.blockDelivery)
        })
    })

    it('Deve realizar consulta de CEP de Teresina ao enviar o valor ',()=>{
        let cep = geradorCep.pickCEP(cidade.teresina) //escolhe o cep que vou usar
        let dadosCep = getDadosCep.dadosCEP(teresina,cep) //pega os dados da minha massa
        cy.GETApi('', env.apiCEP+'cep',cep).then((response)=>{
            expect(response.status).eq(200)
            expect(response.body.address).eq(dadosCep.address)
            expect(response.body.number).eq(dadosCep.number)
            expect(response.body.city).eq(dadosCep.city)
            expect(response.body.longitude).eq(dadosCep.longitude)
            expect(response.body.state).eq(dadosCep.state)
            expect(response.body.id).eq(dadosCep.id)
            expect(response.body.latitude).eq(dadosCep.latitude)
            expect(response.body.neighborhood).eq(dadosCep.neighborhood)
            expect(response.body.blockDelivery).eq(dadosCep.blockDelivery)
        })
    })

    it('Deve realizar consulta de CEP de Rio de Janeiro ao enviar o valor ',()=>{
        let cep = geradorCep.pickCEP(cidade.rioJaneiro) //escolhe o cep que vou usar
        let dadosCep = getDadosCep.dadosCEP(rioDeJaneiro,cep) //pega os dados da minha massa
        cy.GETApi('', env.apiCEP+'cep',cep).then((response)=>{
            expect(response.status).eq(200)
            expect(response.body.address).eq(dadosCep.address)
            expect(response.body.number).eq(dadosCep.number)
            expect(response.body.city).eq(dadosCep.city)
            expect(response.body.longitude).eq(dadosCep.longitude)
            expect(response.body.state).eq(dadosCep.state)
            expect(response.body.id).eq(dadosCep.id)
            expect(response.body.latitude).eq(dadosCep.latitude)
            expect(response.body.neighborhood).eq(dadosCep.neighborhood)
            expect(response.body.blockDelivery).eq(dadosCep.blockDelivery)
        })
    })

    it('Deve realizar consulta de CEP de Porto Alegre ao enviar o valor ',()=>{
        let cep = geradorCep.pickCEP(cidade.portoAlegre) //escolhe o cep que vou usar
        cy.log(cep)
        let dadosCep = getDadosCep.dadosCEP(portoAlegre,cep) //pega os dados da minha massa
        cy.log(dadosCep)
        cy.GETApi('', env.apiCEP+'cep',cep).then((response)=>{
            expect(response.status).eq(200)
            expect(response.body.address).eq(dadosCep.address)
            expect(response.body.number).eq(dadosCep.number)
            expect(response.body.city).eq(dadosCep.city)
            expect(response.body.longitude).eq(dadosCep.longitude)
            expect(response.body.state).eq(dadosCep.state)
            expect(response.body.id).eq(dadosCep.id)
            expect(response.body.latitude).eq(dadosCep.latitude)
            expect(response.body.neighborhood).eq(dadosCep.neighborhood)
            expect(response.body.blockDelivery).eq(dadosCep.blockDelivery)
        })
    })

    it('Deve realizar consulta de CEP de Boa vista ao enviar o valor ',()=>{
        let cep = geradorCep.pickCEP(cidade.boaVista) //escolhe o cep que vou usar
        let dadosCep = getDadosCep.dadosCEP(boaVista,cep) //pega os dados da minha massa
        cy.GETApi('', env.apiCEP+'cep',cep).then((response)=>{
            expect(response.status).eq(200)
            expect(response.body.address).eq(dadosCep.address)
            expect(response.body.number).eq(dadosCep.number)
            expect(response.body.city).eq(dadosCep.city)
            expect(response.body.longitude).eq(dadosCep.longitude)
            expect(response.body.state).eq(dadosCep.state)
            expect(response.body.id).eq(dadosCep.id)
            expect(response.body.latitude).eq(dadosCep.latitude)
            expect(response.body.neighborhood).eq(dadosCep.neighborhood)
            expect(response.body.blockDelivery).eq(dadosCep.blockDelivery)
        })
    })

    it('Deve realizar consulta de CEP de Florianopolis ao enviar o valor ',()=>{
        let cep = geradorCep.pickCEP(cidade.florianopolis) //escolhe o cep que vou usar
        let dadosCep = getDadosCep.dadosCEP(florianopolis,cep) //pega os dados da minha massa
        cy.GETApi('', env.apiCEP+'cep',cep).then((response)=>{
            expect(response.status).eq(200)
            expect(response.body.address).eq(dadosCep.address)
            expect(response.body.number).eq(dadosCep.number)
            expect(response.body.city).eq(dadosCep.city)
            expect(response.body.longitude).eq(dadosCep.longitude)
            expect(response.body.state).eq(dadosCep.state)
            expect(response.body.id).eq(dadosCep.id)
            expect(response.body.latitude).eq(dadosCep.latitude)
            expect(response.body.neighborhood).eq(dadosCep.neighborhood)
            expect(response.body.blockDelivery).eq(dadosCep.blockDelivery)
        })
    })

    it('Deve realizar consulta de CEP de São Paulo ao enviar o valor ',()=>{
        let cep = geradorCep.pickCEP(cidade.saoPaulo) //escolhe o cep que vou usar
        let dadosCep = getDadosCep.dadosCEP(saoPaulo,cep) //pega os dados da minha massa
        cy.GETApi('', env.apiCEP+'cep',cep).then((response)=>{
            expect(response.status).eq(200)
            expect(response.body.address).eq(dadosCep.address)
            expect(response.body.number).eq(dadosCep.number)
            expect(response.body.city).eq(dadosCep.city)
            expect(response.body.longitude).eq(dadosCep.longitude)
            expect(response.body.state).eq(dadosCep.state)
            expect(response.body.id).eq(dadosCep.id)
            expect(response.body.latitude).eq(dadosCep.latitude)
            expect(response.body.neighborhood).eq(dadosCep.neighborhood)
            expect(response.body.blockDelivery).eq(dadosCep.blockDelivery)
        })
    })

    it('Deve realizar consulta de CEP de Aracaju ao enviar o valor ',()=>{
        let cep = geradorCep.pickCEP(cidade.aracaju) //escolhe o cep que vou usar
        let dadosCep = getDadosCep.dadosCEP(aracaju,cep) //pega os dados da minha massa
        cy.GETApi('', env.apiCEP+'cep',cep).then((response)=>{
            expect(response.status).eq(200)
            expect(response.body.address).eq(dadosCep.address)
            expect(response.body.number).eq(dadosCep.number)
            expect(response.body.city).eq(dadosCep.city)
            expect(response.body.longitude).eq(dadosCep.longitude)
            expect(response.body.state).eq(dadosCep.state)
            expect(response.body.id).eq(dadosCep.id)
            expect(response.body.latitude).eq(dadosCep.latitude)
            expect(response.body.neighborhood).eq(dadosCep.neighborhood)
            expect(response.body.blockDelivery).eq(dadosCep.blockDelivery)
        })
    })

    it('Deve realizar consulta de CEP de Palmas ao enviar o valor ',()=>{
        let cep = geradorCep.pickCEP(cidade.palmas) //escolhe o cep que vou usar
        let dadosCep = getDadosCep.dadosCEP(palmas,cep) //pega os dados da minha massa
        cy.GETApi('', env.apiCEP+'cep',cep).then((response)=>{
            expect(response.status).eq(200)
            expect(response.body.address).eq(dadosCep.address)
            expect(response.body.number).eq(dadosCep.number)
            expect(response.body.city).eq(dadosCep.city)
            expect(response.body.longitude).eq(dadosCep.longitude)
            expect(response.body.state).eq(dadosCep.state)
            expect(response.body.id).eq(dadosCep.id)
            expect(response.body.latitude).eq(dadosCep.latitude)
            expect(response.body.neighborhood).eq(dadosCep.neighborhood)
            expect(response.body.blockDelivery).eq(dadosCep.blockDelivery)
        })
    })

    it('Não deve realizar consulta de CEP ao enviar CEP com formato invalido',()=>{
        cy.GETApi('', env.apiCEP+'cep','77001-002').then((response)=>{
            expect(response.status).eq(400)
            let camposErros = response.body.additionalInfo[0]
            expect(response.body.httpStatusCode).eq(400)
            expect(response.body.errorCode).eq('400')
            expect(response.body.message).eq('Requisição mal formatada')
            expect(response.body.info).eq('http://api.b2winc.com/doc/error/400')
            expect(camposErros.key).eq('cause')
            expect(camposErros.value).eq('CEP inválido: 77001-002')
        })
    })

})
