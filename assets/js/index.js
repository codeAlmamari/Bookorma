
// first we call the classes and ids by using selector.
let addform = document.querySelector("#add-book");
let input = document.querySelector(".hola");
let addbtn = document.querySelector("button");
let unorder = document.querySelector("ul");

let delspn = document.querySelectorAll(".delete");
let cheko = document.querySelector("#hide");


// i need when the user add a new book then press the button. 
// to add the new book to the bookList. 
addbtn.addEventListener("click" , function(e){
    //step 1 -  prevent reload behaviour 
    e.preventDefault();
    //step 2 - take user value from input 
    uservalue = input.value ; 
    //step 3 - verfication as the value is not ""
    if(uservalue != "" ){
        //step 4 - creating elements
        // create Element (li,span) is used for creat an html elements like he li and span.     
        let lst =  document.createElement("li");
        let spn = document.createElement("span");
        let del = document.createElement("span");

        // add <li> and inside it create 2 span's.
        lst.appendChild(spn);
        lst.appendChild(del);

        // add classes to the span named by........ .
        spn.classList.add("name");
        del.classList.add("delete");

        // add a text to the span.
        spn.textContent = uservalue;
        del.textContent = "delete";

        // add the created li with the 2 span t un ordered list.
        unorder.appendChild(lst);

    }   
    
    // to reset the value from the text input.
    input.value = ""   

})

unorder.addEventListener("click" , function(e){
    if(e.target.className == "delete"){

        listparent = e.target.parentElement;

        unorder.removeChild(listparent)

    }
})

cheko.addEventListener("change" , function(e){
    if(cheko.checked){
        unorder.style.display = "none";
    }
    else{
        unorder.style.display = "block";
    }
})


cheko.addEventListener("change", function(e) {
    if(cheko.checked){
        unorder.style.display = "none";
    } else {
        unorder.style.display = "block";
    }
});

// Search functionality
document.querySelector("#search-books input").addEventListener("keyup", function(e) {
    let query = e.target.value.toLowerCase();
    let books = document.querySelectorAll("#book-list li");
    books.forEach(function(book) {
        let title = book.querySelector(".name").textContent.toLowerCase();
        if (title.includes(query)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
});