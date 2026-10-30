# GTA Character Select

Uma página web inspirada em uma tela de seleção de personagens. É possível alternar entre personagens disponíveis ou escolher uma foto para gerar uma versão estilizada com inteligência artificial.

## Funcionalidades

- Seleção entre Lucia, Jason e CJ.
- Atualização do nome, da imagem e da cor conforme o personagem selecionado.
- Escolha de uma foto pelo botão de câmera.
- Geração de um personagem a partir da foto usando a API de imagens do Puter.js.
- Mensagens de carregamento e de erro durante a geração.

## Tecnologias

- **HTML5** para a estrutura da página.
- **CSS3** para o layout e a apresentação visual.
- **JavaScript** para a seleção de personagens e o fluxo de geração de imagens.
- **Puter.js** para acessar geração de imagens com IA.
- **Google Fonts (Bangers)** para a tipografia.

## Como executar

1. Clone ou baixe este repositório.
2. Abra `index.html` em um navegador. Para desenvolvimento, você também pode usar uma extensão como Live Server no VS Code.
3. Para gerar uma imagem personalizada, use o botão de câmera e selecione uma foto.

O site é estático e não requer instalação de dependências locais. A geração de imagens precisa de conexão com a internet e depende da disponibilidade e das regras do serviço Puter. A foto selecionada é enviada ao serviço para processamento; não selecione imagens que não queira compartilhar com esse serviço.

## Estrutura

```text
.
├── img/          # Imagens usadas pela página
├── index.html    # Estrutura da interface
├── script.js     # Interações e geração de imagens
└── style.css     # Estilos
```

## Observação sobre marcas e imagens

Este é um projeto de fã, sem afiliação com a Rockstar Games. Os nomes, personagens e marcas de terceiros pertencem aos respectivos titulares. Os arquivos de imagem são publicados com a autorização informada pelo responsável por este projeto; respeite os direitos e as condições de uso aplicáveis ao reutilizá-los.
