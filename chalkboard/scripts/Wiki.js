function wikiAPI() {
    var searchTerm = document.getElementById('searchTerm').value;
    var connect = new XMLHttpRequest();
    var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + searchTerm

    connect.open('GET', url);

    connect.onload = function () {
        var wikiObject = JSON.parse(this.response);
        //console.log(wikiObject);
       // console.log(wikiObject.query.pages);
        var pages = wikiObject.query.pages;
        var list = document.createElement('ul'); // Create a new unordered list element

        for (var i in pages) {
            var pageURL = "https://en.wikipedia.org/?curid=";
            //create an element 'a'
            var newAnchor = document.createElement("a");
            //give 'a' some attributes (href, className, innerText)
            newAnchor.href = pageURL + pages[i].pageid;
            //how you add a className attribute to an HTML element by using a JS element 
            newAnchor.className = 'dblock';
            //fill in what text will be on that page
            newAnchor.innerText = pages[i].title;

            var listItem = document.createElement('li'); // Create a new list item element
           //position the 'a' element onto the page
            listItem.appendChild(newAnchor); // Append the anchor element to the list item
            list.appendChild(listItem); // Append the list item to the unordered list
        }

        document.getElementById("wiki").appendChild(list); // Append the unordered list to the "wiki" element
    };

    connect.send();
}
    

document.addEventListener('DOMContentLoaded', () => {
    const btn1 = document.getElementById("button_01");
    btn1.addEventListener('click', wikiAPI);
})

   
//for (var i in pages) {

   // var pageURL = "https://en.wikipedia.org/?curid="
   // var newAnchor = document.createElement("a");
   // newAnchor.href = pageURL+pages[i].pageid;
   // newAnchor.className = 'dblock';
   // newAnchor.innerText = pages[i].title;
   // var newDiv  = document.createElement("div");
   // newDiv.setAttribute('class', 'table');
   // document.getElementById("wiki").appendChild(newAnchor);
   // newDiv.innerText = pages[i].title;
//};
//}
//connect.send();
//}