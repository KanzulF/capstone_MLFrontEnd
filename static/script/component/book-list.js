import './book-item.js';
 
class BookList extends HTMLElement {
 
   constructor() {
       super();
       this.shadowDOM = this.attachShadow({mode: "open"});
   }
 
   set books(books) {
       this._books = books;
       this.render();
   }
 
   renderError(message) {
       this.shadowDOM.innerHTML = `
       <style>
           .placeholder {
               font-weight: lighter;
               color: rgba(0,0,0,0.5);
               -webkit-user-select: none;
               -moz-user-select: none;
               -ms-user-select: none;
               user-select: none;
           }
       </style>
       `;
       this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
   }
 
   render() {
       this.shadowDOM.innerHTML = "" ;
       this._bookes.forEach(book => {
           const bookItemElement = document.createElement("book-item");
           bookItemElement.book = book
           this.shadowDOM.appendChild(bookItemElement);
       })
   }
}
 
customElements.define("book-list", BookList);