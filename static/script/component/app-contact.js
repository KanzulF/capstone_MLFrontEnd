class AppContact extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <section class="page-section" id="contact">
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-lg-8 col-xl-6 text-center">
                    <h2 class="mt-0">Let's Get In Touch!</h2>
                    <hr class="divider" />
                    <p class="text-muted mb-5">Have feedback for this website? Please give your suggestions and criticisms via contact us!</p>
                </div>
            </div>
            <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
                <div class="col-lg-6">
      <form action="https://wa.me/6282132618941">
      <div class="d-grid">
      <input type="submit" value="Contact Us" class="btn btn-primary btn-xl" />
      </div>
      </form>
            </div>
        </div>
      </section>
        `
      
    }
 }

 customElements.define("app-contact", AppContact);