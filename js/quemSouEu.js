const listPersonagens = [
  (personagem0001 = {
    nome: "CHAVES",
    imagem: "./img/img_0001.jpg",
  }),
  (personagem0002 = {
    nome: "PELÉ",
    imagem: "./img/img_0002.jpg",
  }),
  (personagem0003 = {
    nome: "AYRTON SENNA",
    imagem: "./img/img_0003.jpg",
  }),
  (personagem0004 = {
    nome: "RENATO ARAGÃO",
    imagem: "./img/img_0004.jpg",
  }),
  (personagem0005 = {
    nome: "JESUS CRISTO",
    imagem: "./img/img_0005.jpg",
  }),
  (personagem0006 = {
    nome: "SELTON MELLO",
    imagem: "./img/img_0006.jpg",
  }),
  (personagem0007 = {
    nome: "PEPPA PIG",
    imagem: "./img/img_0007.jpg",
  }),
  (personagem0008 = {
    nome: "WILL SMITH",
    imagem: "./img/img_0008.jpg",
  }),
  (personagem0009 = {
    nome: "PICA PAU",
    imagem: "./img/img_0009.jpg",
  }),
  (personagem0010 = {
    nome: "WAGNER MOURA",
    imagem: "./img/img_0010.jpg",
  }),
  (personagem0011 = {
    nome: "MICKEY MOUSE",
    imagem: "./img/img_0011.jpg",
  }),
  (personagem0012 = {
    nome: "NARUTO",
    imagem: "./img/img_0012.jpg",
  }),
  (personagem0013 = {
    nome: "SILVIO SANTOS",
    imagem: "./img/img_0013.jpg",
  }),
  (personagem0014 = {
    nome: "BOB ESPONJA",
    imagem: "./img/img_0014.jpg",
  }),
  (personagem0015 = {
    nome: "SCARLETT JOHANSSON",
    imagem: "./img/img_0015.jpg",
  }),
  (personagem0016 = {
    nome: "MEGAN FOX",
    imagem: "./img/img_0016.jpg",
  }),
  (personagem0017 = {
    nome: "XUXA",
    imagem: "./img/img_0017.jpg",
  }),
  (personagem0018 = {
    nome: "ANITA",
    imagem: "./img/img_0018.jpg",
  }),
  (personagem0019 = {
    nome: "MICHAEL JACKSON",
    imagem: "./img/img_0019.jpg",
  }),
  (personagem0020 = {
    nome: "CLAUDIA LEITTE",
    imagem: "./img/img_0020.jpg",
  }),
  (personagem0021 = {
    nome: "NEYMAR",
    imagem: "./img/img_0021.jpg",
  }),
  (personagem0022 = {
    nome: "WOLVERINE",
    imagem: "./img/img_0022.jpg",
  }),
  (personagem0023 = {
    nome: "TIM MAIA",
    imagem: "./img/img_0023.jpg",
  }),
  (personagem0024 = {
    nome: "GISELE BUNDCHEN",
    imagem: "./img/img_0024.jpg",
  }),
  (personagem0025 = {
    nome: "PICACHU",
    imagem: "./img/img_0025.jpg",
  }),
  (personagem0026 = {
    nome: "ANA MARIA BRAGA",
    imagem: "./img/img_0026.jpg",
  }),
  (personagem0027 = {
    nome: "VIN DIESEL",
    imagem: "./img/img_0027.jpg",
  }),
  (personagem0028 = {
    nome: "CHIQUINHA",
    imagem: "./img/img_0028.jpg",
  }),
  (personagem0029 = {
    nome: "TIRIRICA",
    imagem: "./img/img_0029.jpg",
  }),
  (personagem0030 = {
    nome: "SANDRA BULLOCK",
    imagem: "./img/img_0030.jpg",
  }),
  (personagem0031 = {
    nome: "KIKO",
    imagem: "./img/img_0031.jpg",
  }),
  (personagem0032 = {
    nome: "SEU MADRUGA",
    imagem: "./img/img_0032.jpg",
  }),
  (personagem0033 = {
    nome: "BUZZ LIGHTYEAR",
    imagem: "./img/img_0033.jpg",
  }),
  (personagem0034 = {
    nome: "RENATO RUSSO",
    imagem: "./img/img_0034.jpg",
  }),
  (personagem0035 = {
    nome: "MANO BROWN",
    imagem: "./img/img_0035.jpg",
  }),
  (personagem0036 = {
    nome: "NELSON MANDELA",
    imagem: "./img/img_0036.jpg",
  }),
  (personagem0037 = {
    nome: "PATRICK",
    imagem: "./img/img_0037.jpg",
  }),
  (personagem0038 = {
    nome: "FRED FLINSTONE",
    imagem: "./img/img_0038.jpg",
  }),
  (personagem0039 = {
    nome: "MARÍLIA MENDONÇA",
    imagem: "./img/img_0039.jpg",
  }),
  (personagem0040 = {
    nome: "RAUL SEIXAS",
    imagem: "./img/img_0040.jpg",
  }),
  (personagem0041 = {
    nome: "CINDERELA",
    imagem: "./img/img_0041.jpg",
  }),
  (personagem0042 = {
    nome: "ED SHEERAN",
    imagem: "./img/img_0042.jpg",
  }),
  (personagem0043 = {
    nome: "MILEY CYRUS",
    imagem: "./img/img_0043.jpg",
  }),
  (personagem0044 = {
    nome: "DANILO GENTILI",
    imagem: "./img/img_0044.jpg",
  }),
  (personagem0045 = {
    nome: "CHICO ANISIO",
    imagem: "./img/img_0045.jpg",
  }),
  (personagem0046 = {
    nome: "TOM HOLLAND",
    imagem: "./img/img_0046.jpg",
  }),
  (personagem0047 = {
    nome: "ROBERT DOWNEY JR",
    imagem: "./img/img_0047.jpg",
  }),
  (personagem0048 = {
    nome: "JHONNY DEPP",
    imagem: "./img/img_0048.jpg",
  }),
  (personagem0049 = {
    nome: "MARAYA CAREY",
    imagem: "./img/img_0049.jpg",
  }),
  (personagem0050 = {
    nome: "EMINEM",
    imagem: "./img/img_0050.jpg",
  }),
];

let nomePersonagem;
let imagemPersonagem;
let tentativas = 5;
console.log("tentativas =" + tentativas);
let resposta;

SorteiaImagem();
function SorteiaImagem() {
  const index = parseInt(Math.random() * listPersonagens.length);

  nomePersonagem = listPersonagens[index].nome;
  imagemPersonagem = listPersonagens[index].imagem;

  console.log(nomePersonagem);
  console.log(imagemPersonagem);

  document.getElementById("imagem").style.backgroundImage =
    "url(" + imagemPersonagem + ")";

  //fesfocar a imagem
  desfocarImagem(tentativas);
}

function desfocarImagem(valoDesfoque) {
  const imagem = document.getElementById("imagem");

  switch (valoDesfoque) {
    case 5:
      imagem.style.filter = "blur(40px)";
      break;
    case 4:
      imagem.style.filter = "blur(30px)";
      break;
    case 3:
      imagem.style.filter = "blur(20px)";
      break;
    case 2:
      imagem.style.filter = "blur(17px)";
      break;
    case 1:
      imagem.style.filter = "blur(14px)";
      break;
    case 0:
      imagem.style.filter = "blur(0)";
      break;
    default:
      break;
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    resposta = document.querySelector("#resposta").value.toUpperCase();

    if (resposta.length < 3 || !resposta.trim() || resposta == undefined) {
      personalizaModal("nomeInvalido");
    } else {
      if (tentativas > 0) {
        if (resposta == nomePersonagem) {// se entrar aqui é porque ganhou
          personalizaModal("vitoria");
          document.getElementById("resposta").value = "";
          desfocarImagem(0);
          document.querySelector(".borda-imagem").style.border = "none";
        } else { // se entrar aqui é porque ainda esta tentando acertar
          tentativas--;
          desfocarImagem(tentativas);
          barraDeProgresso(tentativas)
          document.getElementById("resposta").value = "";
        }
      }

      if (tentativas == 0) { // se entrar aqui é porque perdeu
        personalizaModal("derrota");
        document.getElementById("resposta").value = "";
        desfocarImagem(0);
        document.querySelector(".borda-imagem").style.border = "none";
      }
    }
    console.log("tentativas =" + tentativas);
  }
});

const modal = document.getElementById("modal-alerta");
const span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function personalizaModal(alerta) {
  const modalMensagem = document.getElementById("modal-mensagem");

  switch (alerta) {
    case "nomeInvalido":
      modalMensagem.innerHTML =
        "<p> Está querendo me enganar ? </p><p>Digite um nome Válido.</p>";
      break;
    case "vitoria":
      modalMensagem.innerHTML =
        "<p> Você é bom nisso mesmo hein!</p><p>Nunca duvidei de você.</p>";
      break;
    case "derrota":
      modalMensagem.innerHTML =
        "<p> Não foi dessa vez</p><p>Aposto que voce consegue na próxima.</p>";
      break;
    default:
      break;
  }
  modal.style.display = "block";
}

function barraDeProgresso(carregaBarra) {
  if (carregaBarra == 5) {
    document.getElementById("progresso-01").style.backgroundColor = "#ffffff";
    document.getElementById("progresso-02").style.backgroundColor = "#ffffff";
    document.getElementById("progresso-03").style.backgroundColor = "#ffffff";
    document.getElementById("progresso-04").style.backgroundColor = "#ffffff";
    document.getElementById("progresso-05").style.backgroundColor = "#ffffff";
  } else {
    switch (carregaBarra) {
      case 4:
        document.getElementById("progresso-01").style.backgroundColor = "#ffd700";
        break;
      case 3:
        document.getElementById("progresso-02").style.backgroundColor = "#ffd700";
        break;
      case 2:
        document.getElementById("progresso-03").style.backgroundColor = "#ffd700";
        break;
      case 1:
        document.getElementById("progresso-04").style.backgroundColor = "#ffd700";
        break;
      case 0:
        document.getElementById("progresso-05").style.backgroundColor = "#ffd700";
        break;
      default:
        break;
    }
  }
}
