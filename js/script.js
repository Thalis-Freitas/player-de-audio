// array que irá armanezar o nome, o arquivo de áudio e a imagem de cada música
const musicas = [
    {
        nome: "Loteria da Babilônia",
        src: "./arquivos/audios/1 - Loteria da Babilonia.mp3",
        img: "./arquivos/imagens/1 - loteria da babilônia.jpg"
    },
    {
        nome: "Super-heróis",
        src: "./arquivos/audios/2 - Super-heróis.mp3",
        img: "./arquivos/imagens/2 - super-heróis.jpg"
    },
    {
        nome: "Cachorro urubu",
        src: "./arquivos/audios/3 - Cachorro urubu.mp3",
        img: "./arquivos/imagens/3 - cachorro urubu.jpg"
    },
    {
        nome: "Capim Guiné",
        src: "./arquivos/audios/4 - Capim Guiné.mp3",
        img: "./arquivos/imagens/4 - capim guiné.jpg"
    },
    {
        nome: "As aventuras de Raul Seixas na cidade de Thor",
        src: "./arquivos/audios/5 - As aventuras de Raul Seixas na cidade de Thor.mp3",
        img: "./arquivos/imagens/5 - as aventuras de raul seixas na cidade de thor.jpg"
    },
    {
        nome: "É fim do mês",
        src: "./arquivos/audios/6 - É fim de mês.mp3",
        img: "./arquivos/imagens/6 - é fim de mês.jpg"
    },
    {
        nome: "Aluga-se",
        src: "./arquivos/audios/7 - Aluga-se.mp3",
        img: "./arquivos/imagens/7 - aluga-se.jpg"
    },
    {
        nome: "Cowboy fora da lei",
        src: "./arquivos/audios/8 - Cowboy fora da lei.mp3",
        img: "./arquivos/imagens/8 - cowboy fora da lei.jpg"
    },
    {
        nome: "Sociedade alternativa",
        src: "./arquivos/audios/9 - Sociedade alternativa.mp3",
        img: "./arquivos/imagens/9 - sociedade alternativa.jpg"
    },
    {
        nome: "Al Capone",
        src: "./arquivos/audios/10 - Al Capone.mp3",
        img: "./arquivos/imagens/10 - al capone.jpg"
    },
    {
        nome: "Metrô linha 743",
        src: "./arquivos/audios/11 - Metrô linha 743.mp3",
        img: "./arquivos/imagens/11 - metrô linha 743.jpg"
    },
    {
        nome: "Maluco beleza",
        src: "./arquivos/audios/12 - Maluco beleza.mp3",
        img: "./arquivos/imagens/12 - maluco beleza.jpg"
    },
    {
        nome: "Rock do Diabo",
        src: "./arquivos/audios/13 - Rock do Diabo.mp3",
        img: "./arquivos/imagens/13 - rock do diabo.jpg"
    },
    {
        nome: "Canto para minha morte",
        src: "./arquivos/audios/14 - Canto para minha morte.mp3",
        img: "./arquivos/imagens/14 - canto para minha morte.jpg"
    },
    {
        nome: "Moleque maravilhoso",
        src: "./arquivos/audios/15 - Moleque maravilhoso.mp3",
        img: "./arquivos/imagens/15 - moleque maravilhoso.jpg"
    },
    {
        nome: "Mosca na sopa",
        src: "./arquivos/audios/16 - Mosca na sopa.mp3",
        img: "./arquivos/imagens/16 - mosca na sopa.jpg"
    },
    {
        nome: "Metamorfose ambulante",
        src: "./arquivos/audios/17 - Metamorfose ambulante.mp3",
        img: "./arquivos/imagens/17 - metamorfose ambulante.jpg"
    },
    {
        nome: "Não quero mais andar na contramão",
        src: "./arquivos/audios/18 - Não quero mais andar na contramão.mp3",
        img: "./arquivos/imagens/18 - não quero mais andar na contramão.jpg"
    },
    {
        nome: "Ouro de tolo",
        src: "./arquivos/audios/19 - Ouro de tolo.mp3",
        img: "./arquivos/imagens/19 - ouro de tolo.jpg"
    },
    {
        nome: "Eu nasci há dez mil anos atrás",
        src: "./arquivos/audios/20 - Eu nasci há dez mil anos atrás.mp3",
        img: "./arquivos/imagens/20 - eu nasci há dez mil anos atrás.jpg"
    },
    {
        nome: "Não pare na pista",
        src: "./arquivos/audios/21 - Não pare na pista.mp3",
        img: "./arquivos/imagens/21 - não pare na pista.jpg"
    },
    {
        nome: "Gita",
        src: "./arquivos/audios/22 - Gita.mp3",
        img: "./arquivos/imagens/22 - gita.jpg"
    },
    {
        nome: "Como vovó já dizia",
        src: "./arquivos/audios/23 - Como vovó já dizia.mp3",
        img: "./arquivos/imagens/23 - como vovó já dizia.jpg"
    },
    {
        nome: "Meu amigo Pedro",
        src: "./arquivos/audios/24 - Meu amigo Pedro.mp3",
        img: "./arquivos/imagens/24 - meu amigo pedro.jpg"
    },
    {
        nome: "Eu também vou reclamar",
        src: "./arquivos/audios/25 - Eu também vou reclamar.mp3",
        img: "./arquivos/imagens/25 - eu também vou reclamar.jpg"
    }
]

// Declaração das variáveis
let musica = document.getElementsByTagName("audio")[0]
let iMusica = 0
let botaoPlay = document.getElementsByClassName("botao-play")[0]
let botaoPause = document.getElementsByClassName("botao-pause")[0]
let imagem = document.getElementById("imagem-musica")
let nomeMusica = document.getElementById("nome-musica")
let botaoAnterior = document.getElementsByClassName("botao-anterior")[0]
let botaoProximo = document.getElementsByClassName("botao-proximo")[0]
let tempoTotal = document.getElementById("tempo-duracao")
let barraTempo = document.getElementById("range")

//Chamando a função que irá disponibilizar a primeira música de acordo com o índice do array, que inicialmente recebeu 0 e está armazenado na variável iMusica 
trocarMusica(iMusica)

// Função para mudar para a música anterior quando o botão com a seta apontando para a esquerda for clicado
function musicaAnterior() {
    iMusica--
    if (iMusica < 0) {
        iMusica = 24
    }
    trocarMusica(iMusica)
    // condição para dar play quando trocar de música somente se o botão de play já estiver selecionado
    if(botaoPlay.style.display == "none"){
    playMusica()
}
}

// Função para mudar para a próxima música quando o botão com a seta apontando para a direita for clicado
function proximaMusica() {
    iMusica++
    if (iMusica > 24) {
        iMusica = 0
    }
    trocarMusica(iMusica)
    // condição para dar play quando trocar de música somente se o botão de play já estiver selecionado
    if(botaoPlay.style.display == "none"){
    playMusica()
}
}

// Função que irá mudar a imagem, o arquivo de áudio e o nome da música de acordo com o índice do array
function trocarMusica(i) {
    musica.setAttribute("src", musicas[i].src)
    musica.addEventListener("loadeddata", () => {
        nomeMusica.innerText = musicas[i].nome
    })
    imagem.src = musicas[i].img
    musica.addEventListener("loadeddata", function () {
        tempoTotal.innerText = tempoParaMinutos(Math.floor(musica.duration))
    });

}

// Função para dar play e esconder o botão play quando play for clicado
function playMusica() {
    musica.play()
    botaoPlay.style.display = "none"
    botaoPause.style.display = "inline-block"
}

// Função para dar pause e esconder o botão pause quando pause for clicado
function pausarMusica() {
    musica.pause()
    botaoPlay.style.display = "inline-block"
    botaoPause.style.display = "none"
}

// Função que irá atualizar a barra de tempo de acordo com o tempo que está sendo reproduzido naquele momento
function atualizarTempo() {
    barraTempo.setAttribute("max", musica.duration);
    barraTempo.value = Math.floor(musica.currentTime)

    let tempoDecorrido = document.getElementsByClassName("tempo-inicial")[0]
    tempoDecorrido.innerText = tempoParaMinutos(Math.floor(musica.currentTime))
    if (musica.currentTime == musica.duration) {
        proximaMusica()
    }
}

// Função criada para permitir trocar o tempo que está sendo reproduzido ao clicar ou arrastar o valor do input range
function mudarTempo() {
    musica.currentTime = barraTempo.value
}

// Função para formatar o tempo para que seja exibido na tela em minutos
function tempoParaMinutos(s) {
    let areaMinutos = Math.floor(s / 60)
    let areaSegundos = (s % 60)
    if (areaSegundos < 10) {
        areaSegundos = "0" + areaSegundos
    }
    return areaMinutos + ":" + areaSegundos
}

// Eventos
botaoPlay.addEventListener("click", playMusica)
botaoPause.addEventListener("click", pausarMusica)
musica.addEventListener("timeupdate", atualizarTempo)
botaoAnterior.addEventListener("click", musicaAnterior)
botaoProximo.addEventListener("click", proximaMusica)
barraTempo.addEventListener("input", mudarTempo)