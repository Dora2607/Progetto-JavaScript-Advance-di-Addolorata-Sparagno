function showModal(link, description, coverBook) {
  const modalBook = document.getElementById("modalBook");
  modalBook.style.backgroundColor = "rgba(0,0,0,0.4)"
  modalBook.style.backdropFilter = " blur(10px)"
  const modalContent = document.createElement("div");
  modalContent.className = "modalContent";
  modalContent.id = "modalContent";
 
  const closeButton = document.createElement("span");
  closeButton.classList.add("close");
  closeButton.textContent = "&times";
  
  // closeButton.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   modalBook.style.display = 'none';
  //   window.location.hash = '';
  //   });

  const linkTitle = link.textContent;
  const linkAuthor = link.parentElement.nextElementSibling.textContent;

    const imgCover = document.createElement("img");
    imgCover.src=coverBook;
    imgCover.alt="Image of "+linkTitle;
    imgCover.id ="imgCover";

    const bookTitle = document.createElement("h3");
    bookTitle.textContent = linkTitle;
    bookTitle.id = "bookTitle";
    const authorTitle = document.createElement("h4");
    authorTitle.textContent = "by " + linkAuthor;
    authorTitle.id = "authorTitle"

    const bookDescription = document.createElement("p");
    bookDescription.innerText = description;
    bookDescription.id = "description";
    modalContent.appendChild(imgCover);
    modalContent.appendChild(bookTitle);
    modalContent.appendChild(authorTitle);
    modalContent.appendChild(bookDescription);
    modalContent.appendChild(closeButton);
    modalBook.appendChild(modalContent);
  }

  module.exports = showModal;