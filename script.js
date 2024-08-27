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
             texto: ' VOCÊ PREFERE AJUDAR UMA CRIANÇA QUE ESTÁ SOFRENDO BULLYING;',
             afirmacao: 'MAS PERDE SUA ENTREVISTA DE EMPREGO;',

        },

        {
            texto: 'VOCÊ PREFERE IR NA ENTREVISTA DE EMPREGO;',
            afirmacao: 'VOCÊ NÃO AJUDA A CRIANÇA QUE ESTÁ SOFRENDO BULLYING;',

       }
    ]
    },
   
    {
        enunciado: 'No âmbito ambiental, você prefere:',
        alternativas: [
        {
             texto: 'REVERTER A SITUAÇÃO CRÍTICA AMBIENTAL DO MUNDO;',
             afirmacao: ' VOCÊ PERDE SUA CAPACIDADE DE RACIOCINIO;',

        },

        {
            texto: 'NÃO PERDER SUA CAPACIDADE LÓGICA;',
            afirmacao: 'A CRISE AMBIENTAL AUMENTA NOS PRÓXIMOS 5 ANOS;',

       }
    ]
    },

    {
        enunciado: 'No âmbito tecnológico, você prefere:',
        alternativas: [
        {
             texto: 'VOCÊ PREFERE TER INTERNET PARA SEMPRE .',
             afirmacao: 'E NÃO PODE COMUNICAR-SE COM SEUS PAIS.'
        },

        {
            texto: 'VOCÊ PREFERE COMUNICAR-SE COM SEUS PAIS. ',
            afirmacao: 'E NUNCA TER INTERNET. ',

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
    caixaPerguntas.textContent = "Resultado final do jogo de escolhas:"
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPerguntas();