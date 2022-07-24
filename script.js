function Book(title, author, numPages, hasRead){
  this.title = title
  this.author = author
  this.numPages = numPages
  this.hasRead = hasRead
  this.info = function() {
    console.log(title, author, numPages, hasRead);
  }
}

const LORD_OF_THE_RINGS = new Book('The Lord of the Rings', 'JRR Tolkien', 748, false);

LORD_OF_THE_RINGS.info();