const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');


const perguntas = [
    {
        enunciado: 'No âmbito social, você prefere:',
        alternativas: [
        {
             texto: ' VOCÊ PREFERE AJUDAR SUA NAMORADA COMPRANDO DOCES MENSALMENTE;',
             afirmacao: 'MAS VOCê VAI FICAR SEM UM POUCO DE DINHEIRO;',

        },

        {
            texto: 'VOCÊ PREFERE TER DINHEIRO;',
            afirmacao: 'VOCÊ VAI VOLTAR COM A SUA EX;',

       }
    ]
    },
   
    {
        enunciado: 'No âmbito ambiental, você prefere:',
        alternativas: [
        {
             texto: 'VOCê PREFERE ME LEVAR PRA JANTAR ALGUM DIA;',
             afirmacao: ' VOCÊ PERDE SUA CAPACIDADE DE RACIOCINIO;',

        },

        {
            texto: 'NÃO PERDER SUA CAPACIDADE LÓGICA;',
            afirmacao: 'MAS VOCÊ VAI TER SUA NAMORADA MUITO FELIZ;',

       }
    ]
    },

    {
        enunciado: 'No âmbito tecnológico, você prefere:',
        alternativas: [
        {
             texto: 'VOCê PREFERE ME AMAR PRA SEMPR ;',
             afirmacao: 'MAS NUNCA MAIS BEIJAR OUTRA PESSOA QUE NÃO SEJA EU;'
        },

        {
            texto: 'VOCÊ PREFERE CURTIR SUA VIDA SEM MIM; ',
            afirmacao: 'VOCê VAI CASAR COM A SUA NAMORADA QUE TE AMA MUITO; ',

       }
    ]
    }

]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPerguntas () {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    caixaAlternativas.textContent = "";

    mostraAlternativas();
}


function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(alternativa) {
    const afirmacoes = alternativa.afirmacao;
    historiaFinal +=  afirmacoes +" ";
    atual++;
    mostraPerguntas();

}

function mostraResultado(){
    caixaPerguntas.textContent = "Resultado final do jogo de escolhas que a angela linda fez pro guigui:"
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPerguntas();
 