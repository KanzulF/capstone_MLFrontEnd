class AppAdmin extends HTMLElement {
    connectedCallback(){
        this.render();
    }
   
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
  
    get value() {
        return this.querySelector("#inputName").value;
    }
  
    render() {
        this.innerHTML = `
        <header class="masthead">
        <div class="container px-4 px-lg-5 h-100">
            <div class="row gx-4 gx-lg-5 h-75 align-items-center justify-content-center text-center">
                <div class="col-lg-8 align-self-end">
                    <h1 class="text-white font-weight-bold">Library Assistant</h1>
                    <hr class="divider" />
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div class="form-floating mb-3">
                            <input class="form-control" id="inputUsername" type="text" placeholder="Enter your username..." data-sb-validations="required" />
                            <label for="name">Username</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input class="form-control" id="inputPassword" type="password" placeholder="*****" data-sb-validations="required" />
                            <label for="password">Password</label>
                        </div>
                        <!-- Submit Button-->
                        <div class="d-grid"><button class="btn btn-light btn-xl" id="loginButton" type="submit">Submit</button></div>
                    </form>
                </div>
                    
            </div>
        </div>
      </header>
        `;
  
        this.querySelector("#loginButton").addEventListener("click", this._clickEvent);
    }
 }

 customElements.define("app-admin", AppAdmin);