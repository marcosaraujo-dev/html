// Classe js de comtrole de seleção do personagem

// OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
// passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

const personagens = document.querySelectorAll(".personagem");

// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
personagens.forEach((personagem) => {
	personagem.addEventListener("mouseenter", () => {
		if (window.innerWidth < 450) {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}

		// passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
		removerSelecaoDoPersonagem();

		personagem.classList.add("selecionado");

		// OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande

		//passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
		alterarImagemPersonagemSelecionado(personagem);

		// passo 3 - alterar o nome do personagem grande
		alterarNomePersonagemSelecionado(personagem);

		// passo 4 - alterar a descrição do personagem grande
		alterarDescricaoPersonagem(personagem);
	});
});

// Muda a descricaçao exibida de acordo com o personagem
function alterarDescricaoPersonagem(personagem) {
	const descricaoPersonagem = document.getElementById("descricao-personagem");
	descricaoPersonagem.innerText = personagem.getAttribute("data-description");
}

// Altera o texto com o nome do personagem selecionado
function alterarNomePersonagemSelecionado(personagem) {
	const nomePersonagem = document.getElementById("nome-personagem");
	nomePersonagem.innerText = personagem.getAttribute("data-name");
}

// Altera a iamgem de acordo com o personagem selecionado
function alterarImagemPersonagemSelecionado(personagem) {
	const imagemPersonagemGrande = document.querySelector(".personagem-grande");
	// passo 2 - alterar a imagem do personagem grande
	const idPersonagem = personagem.attributes.id.value;
	imagemPersonagemGrande.src = `./src/images/card-${idPersonagem}.png`;
}

//Remove a seleção de personagem
function removerSelecaoDoPersonagem() {
	const personagemSelecionado = document.querySelector(".selecionado");
	personagemSelecionado.classList.remove("selecionado");
}
