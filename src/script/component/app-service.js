class AppService extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
  this.innerHTML = `
  <section class="page-section" id="services">
  <div class="container px-4 px-lg-5">
      <h2 class="text-center mt-0">At Your Service</h2>
      <hr class="divider" />
      <div class="row gx-4 gx-lg-5">
          <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                  <div class="mb-2"><i class="bi-gem fs-1 text-primary"></i></div>
                  <h3 class="h4 mb-2">Usefull Information</h3>
                  <p class="text-muted mb-0">Can provide the best recommendations for users in choosing reading books</p>
              </div>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                  <div class="mb-2"><i class="bi-laptop fs-1 text-primary"></i></div>
                  <h3 class="h4 mb-2">Attractive Look</h3>
                  <p class="text-muted mb-0">Presented with a comfortable and attractive appearance</p>
              </div>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                  <div class="mb-2"><i class="bi-globe fs-1 text-primary"></i></div>
                  <h3 class="h4 mb-2">Integrated Online</h3>
                  <p class="text-muted mb-0">Connected online so it's always up-to-date</p>
              </div>
          </div>
          <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                  <div class="mb-2"><i class="bi-heart fs-1 text-primary"></i></div>
                  <h3 class="h4 mb-2">Made with Love</h3>
                  <p class="text-muted mb-0">Dedicated to book readers</p>
              </div>
          </div>
      </div>
  </div>
</section>
  `
    }
 }

 customElements.define("app-service", AppService);