function Footer() {
  return (
    <section className="footer">
      <div className="footer-up-cnt">
        <div className="footer-up">
          <div className="footer-cnt">
            <nav class="nav-col">
              <p class="footer-heading">Company</p>
              <ul class="footer-nav">
                <li className="footer-list">
                  <a class="footer-link" href="#">
                    About us
                  </a>
                </li>
                <li>
                  <a class="footer-link" href="#">
                    Sell on Ecoyaan
                  </a>
                </li>
                <li>
                  <a class="footer-link" href="#">
                    Carreers
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer-cnt">
            <nav class="nav-col">
              <p class="footer-heading">Links</p>
              <ul class="footer-nav">
                <li className="footer-list">
                  <a class="footer-link" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a class="footer-link" href="#">
                    Terms of use
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer-cnt">
            <div className="suscribe">
              <h3 className="footer-heading">
                Subscribe to receive updates on blogs, future launches and more
                !
              </h3>
              <input type="text" placeholder="Your Email Address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 - 2024, Ecoyaan TM</p>
        <div className="icons">
          <a
            className="footer-link"
            href="https://www.facebook.com/Ecoyaan/"
            target="_blank"
          >
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a
            className="footer-link"
            href="https://www.linkedin.com/company/ecoyaan/"
            target="_blank"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a
            className="footer-link"
            href="https://www.instagram.com/ecoyaan/"
            target="_blank"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
