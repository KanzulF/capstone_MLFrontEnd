class AppSearchBook extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
  this.innerHTML = `

  <section class="page-section bg-primary" id="about">
  <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-lg-8 text-center">
              <h2 class="text-white mt-0">Find a book that fits your needs!</h2>
              <hr class="divider divider-light" />
              <p class="text-white-75 mb-4">Enter your ID and a little information about the book you're looking for and you'll find it!</p>

              <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                  <!-- Name input-->
                  <div class="form-floating mb-3">
                      <input class="form-control" id="inputName" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                      <label for="name">Full Name</label>
                      <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                  </div>
                  <!-- Phone number input-->
                  <div class="form-floating mb-3">
                      <input class="form-control" id="inputNIM" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                      <label for="phone">NIM</label>
                      <div class="invalid-feedback" data-sb-feedback="phone:required">A NIM is required.</div>
                  </div>
                  <!-- Phone number input-->
                  <div class="form-floating mb-3">
                      <input class="form-control" id="inputKeywords" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                      <label for="phone">Book Information</label>
                      <div class="invalid-feedback" data-sb-feedback="phone:required">A think about book is required.</div>
                  </div>
                  <!-- Submit Button-->
                  <div class="d-grid"><button class="btn btn-light btn-xl" id="submitButton" type="submit">Submit</button></div>
              </form>

          </div>
      </div>
  </div>
</section>
  `
    }
 }

 customElements.define("app-searchbook", AppSearchBook);
