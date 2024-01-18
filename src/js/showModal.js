function showModal(link, description, immagine) {
    // Prendere il titolo e gli autori dal link cliccato
    const titolo = link.textContent;
    const autori = link.parentElement.nextElementSibling.textContent;
  
    // Creare un elemento modale
    const modal = document.createElement('div');
    modal.classList.add('modal');
  
    // Aggiungere il contenuto al modale
    modal.innerHTML = `
      <h2>${titolo}</h2>
      <h3>${autori}</h3>
      <img src="${coverBook}" alt="${titolo}">
      <p>${description}</p>
    `;
  
    // Aggiungere il modale al body del documento
    document.body.appendChild(modal);
  
    // Mostrare il modale
    modal.style.display = 'block';
  }

  module.exports = showModal;