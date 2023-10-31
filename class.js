class BookList{
    constructor(){
        this.nextBook; // A reference to the next book to read (book object)
        this.currentBook; // A reference to the current book being read (book object)
        this.lastBook; // A reference to the last book read (book object)
        this.books = []; // An array of all the Books
    }

    add(book){
        if(!this.exitsBook(book)){
            this.books.push(book);
            if(!this.currentBook){
                this.currentBook = book;
            }
            else if(!this.nextBook){
                this.nextBook = book;
            }
        }
    }

    finishCurrentBook(){
        if(this.currentBook){
            this.currentBook.read = true;
            this.currentBook.readDate = Date.now();
            this.lastBook = this.currentBook;
            this.currentBook = this.nextBook;
            this.nextBook = this.findNextBookToRead();
        }
    }

    exitsBook(book){
        this.books.forEach(element => {
            if(element.title == book.title){
                return true;
            }
        });
        return false;
    }

    findNextBookToRead() {
        return this.books.find(book => (!book.read) && (book!=this.currentBook));
    }

    getNumberOfBooksRead() {
        return this.books.filter(book => book.read).length;
    }

    getNumberOfBooksNotRead() {
        return this.books.filter(book => !book.read).length;
    }

    setNextBookToRead(book) {
        this.currentBook = book;
    }

    formatDate(date) {
        const day = date.getDate();
        const month = date.getMonth() + 1; // Los meses comienzan desde 0
        const year = date.getFullYear();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        return `${day}-${month}-${year}-${minutes}:${seconds}`;
    }

    nbooks(){
        return this.books.length;
    }

    nReads(){
        let cont = 0;
        for(let book of this.books){
            if(book.read) cont++;
        }
        return cont;
    }

    getDate(n){
        console.log("Libro " + n + "::::>> " + this.books[n].readDate);
        return this.formatoFecha(this.books[n].readDate);
    }

    formatoFecha(milisegundos) {
        const fecha = new Date(milisegundos);
    
        const dia = fecha.getDate();
        const mes = fecha.getMonth() + 1; // Los meses son indexados desde 0
        const año = fecha.getFullYear();
        const horas = fecha.getHours();
        const minutos = fecha.getMinutes();
        const segundos = fecha.getSeconds();
    
        // Formatea el resultado como una cadena
        const fechaFormateada = `${dia}/${mes}/${año} ${horas}:${minutos}:${segundos}`;
    
        return fechaFormateada;
    }

    readBook(n){
        this.books[n].readDate = Date.now();
        this.books[n].read = true;
    }

}

class Book{
    read;
    constructor(title, genre, author, readDate = null){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = false;
        this.readDate = readDate;
    }
}


// const book1 = new Book('Book 1', 'Fiction', 'Author 1');
// const book2 = new Book('Book 2', 'Non-Fiction', 'Author 2');
// const book3 = new Book('Book 3', 'Mystery', 'Author 3');
// const book4 = new Book('Book 4', 'Mystery', 'Author 4');

// const bookList = new BookList();
// bookList.add(book1);
// bookList.add(book2);
// bookList.add(book3);
// bookList.add(book4);

// document.write("<b> LISTA DE LIBROS </b><br>");
// bookList.showBooks();
// document.write("<br><br>");

// document.write("<b> CURRENT BOOK: </b>" + bookList.currentBook.title + "<br>");
// document.write("<b> NEXT BOOK: </b>" + bookList.nextBook.title + "<br>");
// document.write("<b> LAST BOOK: </b>" + (bookList.lastBook ? bookList.lastBook.title:"No Books Read Yet") + "<br>");
// document.write("<br><br>");

// document.write("<p style=\"color:red\">-- LEEMOS UN LIBRO<p><br><br>");
// bookList.finishCurrentBook();

// document.write("<b> CURRENT BOOK: </b>" + bookList.currentBook.title + "<br>");
// document.write("<b> NEXT BOOK: </b>" + bookList.nextBook.title + "<br>");
// document.write("<b> LAST BOOK: </b>" + bookList.lastBook.title + "<br>");
// document.write("<br><br>");


// document.write("<b> LISTA DE LIBROS </b><br>");
// bookList.showBooks();
// document.write("<br><br>");


// document.write('Number of books read: ', bookList.getNumberOfBooksRead() + "<br>"); 
// document.write('Number of books not read: ', bookList.getNumberOfBooksNotRead() + "<br>"); 
// document.write("<br><br>");

// document.write("<p style=\"color:red\">-- LEEMOS TRES LIBROS<p><br><br>");
// bookList.finishCurrentBook();
// bookList.finishCurrentBook();
// bookList.finishCurrentBook();

// document.write("<b> CURRENT BOOK: </b>" + (bookList.currentBook ? bookList.currentBook.title : "No Current Book") + "<br>");
// document.write("<b> NEXT BOOK: </b>" + (bookList.nextBook ? bookList.nextBook.title : "No Next Book") + "<br>");
// document.write("<b> LAST BOOK: </b>" + bookList.lastBook.title + "<br>");
// document.write("<br><br>");
// document.write("<b> LISTA DE LIBROS </b><br>");
// bookList.showBooks();
// document.write("<br><br>");

// document.write('Number of books read: ', bookList.getNumberOfBooksRead() + "<br>"); 
// document.write('Number of books not read:' , bookList.getNumberOfBooksNotRead() + "<br>"); 
// document.write("<br><br>");


// document.write("<p style=\"color:red\">-- AÑADIMOS UN LIBRO NUEVO<p><br><br>");
// const book5 = new Book('Book 5', 'Mystery', 'Author 5');
// bookList.add(book5);


// document.write("<b> CURRENT BOOK: </b>" + (bookList.currentBook ? bookList.currentBook.title : "No Current Book") + "<br>");
// document.write("<b> NEXT BOOK: </b>" + (bookList.nextBook ? bookList.nextBook.title : "No Next Book") + "<br>");
// document.write("<b> LAST BOOK: </b>" + bookList.lastBook.title + "<br>");
// document.write("<br><br>");
// document.write("<b> LISTA DE LIBROS </b><br>");
// bookList.showBooks();
// document.write("<br><br>");

// document.write('Number of books read: ', bookList.getNumberOfBooksRead() + "<br>"); 
// document.write('Number of books not read:' , bookList.getNumberOfBooksNotRead() + "<br>"); 
