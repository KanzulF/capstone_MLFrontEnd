class BookItem extends HTMLElement {
 
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    set book(book) {
        this._book = book;
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                :host {
                    width: 18%;
                    display: inline-block;
                    margin-bottom: 18px;
                    margin-left: 5px;
                    margin-right: 5px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                }
               
                .fan-art-book {
                    width: 100%;
                    max-height: 425px;
                    object-fit: cover;
                    object-position: center;
                }
               
                .book-info {
                    text-align: center;
                    padding: 24px;
                }
               
                .book-info > h2 {
                    font-weight: lighter;
                }
               
                .book-info > p {
                    font-size: 14px;
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10; /* number of lines to show */
                }
            </style>
            <img class="fan-art-book" src="http://cryptic-dawn-98965.bookkuapp.com/images/${this._book.book_name}.jpg" alt="Fan Art">
            <div class="book-info">
                <h2>${this._book.book_name}</h2>
                <p>${this._book.book_role}</p>
                <p>${this._book.book_specially}</p>
            </div>`;
    }
 }
  
 customElements.define("book-item", BookItem);