let nome = document.querySelector(".nome");
let personagem = document.querySelector(".personagem");
let statusFoto = document.querySelector(".etiqueta03");

function escolherPersonagem(nomePersonagem, imagemPersonagem, cor) {
  nome.textContent = nomePersonagem;
  nome.style.color = cor;
  personagem.src = imagemPersonagem;
}

async function lerFoto(input) {
  let foto = input.files[0];

  if (!foto) {
    return;
  }

  if (!foto.type.startsWith("image/")) {
    statusFoto.textContent = "Selecione um arquivo de imagem válido.";
    input.value = "";
    return;
  }

  if (!window.puter?.ai?.txt2img) {
    let erro = new Error("O SDK do Puter não foi carregado.");
    console.error(erro);
    statusFoto.textContent = "Não foi possível carregar o gerador de imagens.";
    input.value = "";
    return;
  }

  statusFoto.textContent = "Gerando seu personagem...";

  try {
    let desenho = await window.puter.ai.txt2img(
      "Transforme a pessoa desta foto em um personagem de videogame, com contorno preto grosso, cores vivas e enquadramento de meio corpo, mantendo o rosto parecido. A imagem deve ter fundo realmente transparente com canal alfa. Não desenhe fundo, cenário, chão, sombra, padrão quadriculado ou representação visual de transparência.",
      {
        model: "replicate:openai/gpt-image-2.5-flare",
        input_image: foto,
        quality: "medium",
        providerOptions: {
          background: "transparent",
          output_format: "png",
        },
      },
    );

    if (!(desenho instanceof HTMLImageElement) || !desenho.src) {
      throw new Error("O gerador não retornou uma imagem válida.");
    }

    escolherPersonagem("Você", desenho.src, "#ffffff");
    statusFoto.textContent = "Seu personagem está pronto.";
  } catch (erro) {
    console.error("Não foi possível gerar o personagem:", erro);
    let detalhesErro =
      typeof erro === "object" && erro !== null
        ? `${erro.message ?? ""} ${erro.code ?? ""} ${erro.upstreamCode ?? ""}`
        : String(erro);

    if (/safety|moderation|sexual/i.test(detalhesErro)) {
      statusFoto.textContent =
        "O serviço bloqueou esta foto por segurança. Tente outra imagem, como um retrato neutro.";
    } else {
      statusFoto.textContent =
        "Não foi possível gerar a imagem. Tente novamente.";
    }
  } finally {
    input.value = "";
  }
}
