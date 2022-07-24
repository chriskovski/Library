const newBookForm = document.forms['newBook'];
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const numPagesInput = document.getElementById('numPages');
const hasReadInput = document.getElementById('hasRead');
const submitBtn = document.getElementById('submit');
const container = document.getElementById('container');


function Book(title, author, numPages, hasRead){
  this.title = title
  this.author = author
  this.numPages = numPages
  this.hasRead = hasRead
  this.info = function() {
    console.log(title, author, numPages, hasRead);
  }
}

let myLibrary = [];

newBookForm.addEventListener('submit', function(e){
  e.preventDefault();

  //add new Book
  myLibrary.push(new Book(newBookForm.title.value, newBookForm.author.value, newBookForm.numPages.value, newBookForm.hasRead.checked));

  //create Element
  const div = document.createElement('div');
  const ul = document.createElement('ul');
  const titleText = document.createElement('li');
  const titleLabel = document.createElement('p');
  const authorText = document.createElement('li');
  const authorLabel = document.createElement('p');
  const numPagesText = document.createElement('li');
  const numPagesLabel = document.createElement('p');
  const hasReadText = document.createElement('div');
  const deleteBtn = document.createElement('button');

  //add Content
  titleText.textContent = newBookForm.title.value;
  titleLabel.textContent = "Title:";
  authorText.textContent = newBookForm.author.value;
  authorLabel.textContent = "Author:";
  numPagesText.textContent = newBookForm.numPages.value;
  numPagesLabel.textContent = "Number of Pages:";
  deleteBtn.textContent = "Remove Book";
  if(newBookForm.hasRead.checked){
    hasReadText.textContent = "You've read this Book!";
  }else{
    hasReadText.textContent = "You haven't read this Book!"
  }
  
  //append Elements to "Your Books"-Section
  ul.appendChild(titleLabel);
  ul.appendChild(titleText);
  ul.appendChild(authorLabel);
  ul.appendChild(authorText);
  ul.appendChild(numPagesLabel);
  ul.appendChild(numPagesText);
  ul.appendChild(hasReadText);
  ul.appendChild(deleteBtn);
  div.appendChild(ul);
  container.appendChild(div);

  //clear Form
  newBookForm.title.value = "";
  newBookForm.author.value = "";
  newBookForm.numPages.value = "";
  newBookForm.hasRead.checked = false;

  //delete Book
  deleteBtn.addEventListener('click', function(){
    div.remove();
  })
});