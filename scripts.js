// Add evento no botão - quando clicar, ele vai selecionar aleatoriamente 2 imagens e exibir //

// para selecionar as imagens - tentativa nº 1: selecionar pelo número da imagem previamente salvo e inserir na div //

const generateButton = document.querySelector("#generate-button");
const resultCombination = document.querySelector("#result-combination");

generateButton.addEventListener("click", generateCombination);


function generateCombination() {

    resultCombination.innerHTML = "";
    
    const firstImage = Math.floor(Math.random() * 50) + 1;
    const secondImage = Math.floor(Math.random() * 50) + 1;

    const containerFirstImage = document.createElement("div");
    const containerSecondImage = document.createElement("div");

    containerFirstImage.classList.add("first-image");
    containerSecondImage.classList.add("second-image");

  
    containerFirstImage.innerHTML = `<img src="./imgs/${firstImage}.jpg" alt="">`;
    containerSecondImage.innerHTML = `<img src="./imgs/${secondImage}.jpg" alt="">`;
    
    resultCombination.appendChild(containerFirstImage);
    resultCombination.appendChild(containerSecondImage);
    

    containerFirstImage.style.backgroundImage = containerFirstImage;
    containerSecondImage.style.backgroundImage = containerSecondImage;

    generateButton.innerHTML = "Gerar nova combinação";
    
};

// Falta fazer verificação de imagens repetidas // 











