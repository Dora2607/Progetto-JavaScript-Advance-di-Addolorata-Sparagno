function showModal(link, description, coverBook) {
    // Prendere il titolo e gli autori dal link cliccato
    const titleBook = link.textContent;
    const authorBook = link.parentElement.nextElementSibling.textContent;
  
    // Creare un elemento modale
    const modal = document.createElement('div');
    modal.classList.add('modal');
  
    // Aggiungere il contenuto al modale
    modal.innerHTML = `
      <h2>${titleBook}</h2>
      <h3>${authorBook}</h3>
      <img src="${coverBook}" alt="${titleBook}">
      <p>${description}</p>
    `;
  
    // Aggiungere il modale al body del documento
    document.body.appendChild(modal);
  
    // Mostrare il modale
    modal.style.display = 'block';
  }

  module.exports = showModal;