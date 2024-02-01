// This function displays a modal with book information when a book link is clicked
export async function showModal(link, description, coverBook) {
  const modalBook = document.getElementById("modalBook");
  while (modalBook.firstChild) {
    modalBook.removeChild(modalBook.firstChild);
  }
  const modalContent = document.createElement("div");
  modalContent.className = "modalContent";
  modalContent.id = "modalContent";

  const closeButton = document.createElement("span");
  closeButton.classList.add("close");
  const imgButton = document.createElement("img");
  imgButton.classList.add("imgButton");
  imgButton.src = "asset/img/iconsX.png";

  const linkTitle = link.textContent;
  const linkAuthor = link.parentElement.nextElementSibling.textContent;

  const imgCover = document.createElement("img");
  imgCover.src = coverBook;
  imgCover.alt = `Image of ${linkTitle}`;
  imgCover.id = "imgCover";
  const bookTitle = document.createElement("h3");
  bookTitle.textContent = linkTitle;
  bookTitle.id = "bookTitle";
  const authorTitle = document.createElement("h4");
  authorTitle.textContent = `by ${linkAuthor}`;
  authorTitle.id = "authorTitle";
  const bookDescription = document.createElement("p");
  bookDescription.innerText = description;
  bookDescription.id = "description";

  modalContent.appendChild(imgCover);
  modalContent.appendChild(bookTitle);
  modalContent.appendChild(authorTitle);
  modalContent.appendChild(bookDescription);
  closeButton.appendChild(imgButton);
  modalContent.appendChild(closeButton);
  modalBook.appendChild(modalContent);

  const close = document.querySelector(".imgButton");
  close.addEventListener("click", (e) => {
    e.preventDefault();
    modalBook.style.display = "none";
    const results = document.getElementById("results");
    results.style.display = "flex";
  });
}

// <a target="_blank" href="https://icons8.com/icon/dnWj68fbIjQS/moltiplicare">X</a> icona di <a target="_blank" href="https://icons8.com">Icons8</a>
