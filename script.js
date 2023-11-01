window.onload = () => {
    title = document.getElementById("title");
    author = document.getElementById("author");
    genre = document.getElementById("genre");
    btn = document.getElementById("btn");
    error = document.getElementById("error");

    bookList = new BookList();

    btn.addEventListener("click", addBook);

}

function addBook(e){
    e.preventDefault();

    if(title.value!="" && author.value!="" && genre.value!=""){
        book = new Book(title.value, author.value, genre.value);
    
        bookList.add(book);
    
        showBook();
        showReads();
    
        title.value = "";
        author.value = "";
        genre.value = "";
        error.innerHTML = "";
    }else{
        error.innerHTML = "Enter all data";
    }
    
}

function showBook(){
    let List = document.getElementById("List");
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    row.id = bookList.nbooks()-1;

    let p1 = document.createElement("div");
    p1.setAttribute("class", "p1");
    row.appendChild(p1);

    let pgenre = document.createElement("p");
    row.appendChild(pgenre);
    pgenre.setAttribute("class", "pgenre");
    pgenre.innerHTML = genre.value;

    let p = document.createElement("p");
    p.className = "read";
    row.appendChild(p);
    p.innerHTML = "Not Read";

    

    let h3 = document.createElement("h3");
    let h4 = document.createElement("h4");
    h3.innerHTML = title.value;
    h4.innerHTML = author.value;
    
    p1.appendChild(h3);
    p1.appendChild(h4);

    List.appendChild(row);

    row.addEventListener("click", readBook);
}

function showReads(){
    let reads = document.getElementById("reads");

    let nreads = bookList.nReads();
    let nbooks = bookList.nbooks();

    reads.innerHTML = "Books Read: " + nreads + " of " + nbooks;
}

function readBook(e){
    let read = e.target.querySelector(".read")
    let id = e.target.id;
    bookList.readBook(id);
    read.innerHTML = bookList.getDate(id);
    showReads();
}