
// first we call the classes and ids by using selector.
let addform = document.querySelector("#add-book");
let input = document.querySelector(".hola");
let addbtn = document.querySelector("button");
let unorder = document.querySelector("ul");

let search = document.querySelector("#search-books input");
let books = document.querySelectorAll("#book-list li");

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

//deletion of list items from an unordered list (<ul>)
// -- when a delete button is clicked.
unorder.addEventListener("click" , function(e){
    // Cheking if the target (<ul>) has a child with class name == "delet" exist.
    if(e.target.className == "delete"){
        // Here we spicify the parent and put it in var.
        listparent = e.target.parentElement;
        // Remove the (parent element witch here <li>) of the target <ul>.
        unorder.removeChild(listparent)

    }
})

// creating an event listener for the checkBox
// to hide the <ul> 
cheko.addEventListener("change" , function(e){
    // ckeking if the ckeckbox is true then
    if(cheko.checked){
        // hide the unordered list.
        unorder.style.display = "none";
    }
    else{
        // show the unordered list.
        unorder.style.display = "block";
    }
})


// Search functionality
search.addEventListener("keyup", function(e) {

    // Get the value of the search input
    let query = e.target.value.toLowerCase();
    
    // loops through each book list item in the <li> using foreach()
    books.forEach(function(book) {
        // this line to get the text content from the class (name) from the <li> and convert it to lower case.
        let title = book.querySelector(".name").textContent.toLowerCase();
        // check if any content of <li> contain char from search bar
        if (title.includes(query)) {
            // if the char in search bar then show the list
            book.style.display = "block";
        } else {
            // if not then display.
            book.style.display = "none";
        }
    });
});