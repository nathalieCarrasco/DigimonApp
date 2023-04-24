/* container tarjeta */
const cardContainer = document.getElementById('card-contenedor');
/* modal */
const modal = document.getElementById('modal');
const modalName = document.getElementById('modal-name');
const modalImage = document.getElementById('modal-image');
const modalLevel = document.getElementById('modal-level');
const modalType = document.getElementById('modal-type');
const modalAttribute = document.getElementById('modal-attribute');
const closeModal = document.querySelector('.close');

/*  Función para obtener los datos desde la API */
async function getDigimons() {

  
  try {
    const response = await fetch('https://digimon-api.vercel.app/api/digimon');
    const data = await response.json();
    data.forEach(digimon => {
       let tipos =digimon.level 
       //console.log(tipos);
       
      // elementos HTML de la tarjeta
      const card = document.createElement('div');
      card.classList.add('card');

      const image = document.createElement('img');
      image.src = digimon.img;
      image.classList.add('img-card');

/* Agregar la imagen */
      card.appendChild(image);

     /* Agregar un evento al hacer clic  */
      card.addEventListener('click', () => {
        // datos del digimon seleccionado con click
        modalName.textContent = digimon.name;
        modalImage.src = digimon.img;
        modalLevel.textContent = `Level: ${digimon.level}`;
       


        modal.style.display = 'block';
      });


      cardContainer.appendChild(card);
    });

  } catch (error) {
    console.log(error);
  }
}

// Cerrar el modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cerra al hacer clic fuera
window.addEventListener('click', event => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

/* llamamos a la funcion */
getDigimons();

