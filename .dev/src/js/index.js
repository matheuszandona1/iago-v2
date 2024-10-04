const cardData = [
	// {
	// 	imgSrc: require("../assets/money.svg"),
	// 	title: "Redução de custos",
	// 	description:
	// 		"Diga adeus ao alto custo de operações de atendimento. Com o IAgo, você reduz significativamente despesas, mantendo um padrão de excelência no suporte ao cliente.",
	// },
	{
		imgSrc: require("../assets/clock.svg"),
		title: "Disponibilidade ininterrupta",
		description:
			"Seus clientes merecem respostas a qualquer hora do dia ou da noite. O IAgo está sempre disponível, garantindo que cada interação seja tratada com a eficiência que precisa.",
	},
	{
		imgSrc: require("../assets/robot.svg"),
		title: "Evolução contínua",
		description:
			"Nosso time de especialistas analisa todas interações do IAGO com com seu cliente, melhorando ainda mais o atendimento e tornando o chatbot mais preciso e assertivo.",
	},
	{
		imgSrc: require("../assets/engine.svg"),
		title: "Multiplataformas",
		description:
			"Integramos o IAgo ao site da sua empresa de maneira rápida e sem complicações. Todo o processo é pensado para que você aproveite os benefícios da IA no menor tempo possível.",
	},
	// {
	// 	imgSrc: require("../assets/emoji.svg"),
	// 	title: "Suporte humano dedicado",
	// 	description:
	// 		"Dúvidas? Problemas? Estamos aqui para ajudar. Nossa equipe está sempre pronta para garantir que o IAgo opere de forma otimizada, totalmente a favor do seu negócio.",
	// },
	{
		imgSrc: require("../assets/star.svg"),
		title: "IA regenerativa",
		description: 'Através de um meticuloso processo de "Fine Tuning", nossa equipe INGAGE realiza ajustes manuais e criteriosos com base em interações reais.',
	},
]

// Função para criar os cards dinamicamente
function createCards(cards) {
	const container = document.getElementById("card-container")

	cards.forEach((card) => {
		// Criar o elemento do card
		const cardElement = document.createElement("div")
		cardElement.classList.add("card")

		// Criar o ícone (imagem)
		const cardIcon = document.createElement("div")
		cardIcon.classList.add("card-icon")
		const img = document.createElement("img")
		img.src = card.imgSrc
		img.alt = card.title
		cardIcon.appendChild(img)

		// Criar o título
		const title = document.createElement("h5")
		title.classList.add("card-title")
		title.textContent = card.title

		// Criar a descrição
		const desc = document.createElement("p")
		desc.classList.add("card-desc")
		desc.textContent = card.description

		// Montar o card
		cardElement.appendChild(cardIcon)
		cardElement.appendChild(title)
		cardElement.appendChild(desc)

		// Adicionar o card ao container
		container.appendChild(cardElement)
	})
}

// Chamar a função para gerar os cards
createCards(cardData)

const cardProducts = [
	{
		imgSrc: require("../assets/Zapier.svg"),
	},
	{
		imgSrc: require("../assets/Slack.svg"),
	},
	{
		imgSrc: require("../assets/Wordpress.svg"),
	},
	{
		imgSrc: require("../assets/WhatsApp.svg"),
	},
	{
		imgSrc: require("../assets/Messenger.svg"),
	},
	{
		imgSrc: require("../assets/Shopify.svg"),
	},
]
// Função para criar os cards dinamicamente
function createProducts(products) {
	const container = document.getElementById("holder-p")

	products.forEach((product) => {
		// Criar o elemento do card
		const productElement = document.createElement("div")
		productElement.classList.add("product-card")

		// Criar o ícone (imagem)
		const productIcon = document.createElement("div")
		productIcon.classList.add("product-img")
		const img = document.createElement("img")
		img.src = product.imgSrc
		productIcon.appendChild(img)

		// Montar o product
		productElement.appendChild(productIcon)

		// Adicionar o product ao container
		container.appendChild(productElement)
	})
}

// Chamar a função para gerar os cards
createProducts(cardProducts)

$(document).ready(function () {
	$(".navbar-toggler").click(function () {
		$(this).toggleClass("open")
	})
})

gsap.registerPlugin(ScrollTrigger)

if (window.innerwidth > 768 || window.innerWidth < 1920) {
	// Primeira animação: entrada
	gsap.from(".iago-float", {
		scrollTrigger: {
			trigger: ".iago-float",
			start: "-160 center",
			end: "80 center",
			scrub: true,
		},
		x: -600,
		y: -100,
		duration: 3,
	})

	// Segunda animação: descida após a primeira animação
	gsap.to(".iago-float", {
		scrollTrigger: {
			trigger: ".iago-float",
			start: "50% 80%", // Começa quando o elemento atinge 80% da viewport (ajuste conforme necessário)
			end: "bottom+=500 bottom", // Controla até onde desce o elemento
			scrub: true, // Sincroniza com o scroll
		},
		y: "+=500", // Faz o elemento descer
		ease: "none", // Remove qualquer suavização, segue o scroll diretamente
	})
}

if (window.innerWidth > 768) {
	gsap.utils.toArray("#btn-animated").forEach((button) => {
		gsap.from(button, {
			scrollTrigger: {
				trigger: button,
				start: "-600 center",
				end: "-400 center",
				toggleActions: "restart pause reverse pause",
				scrub: true,
				ease: "power",
			},
			y: 300,
			duration: 3,
		})
	})
}
