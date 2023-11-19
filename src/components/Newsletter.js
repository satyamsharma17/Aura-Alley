

import newspic from "../assets/images/newsletter.png";

const Newsletter = ({setmodal}) =>{

    return(
        <>
  <div className="overlay" data-overlay="" />
  {/*
    - MODAL
  */}
 
  <div className="modal" data-modal="">
    <div className="modal-close-overlay" data-modal-overlay="" />
    <div className="modal-content">
      <button className="modal-close-btn" data-modal-close="" onClick={()=> setmodal(false)} >
        <ion-icon name="close-outline" />
      </button>
      <div className="newsletter-img">
        <img
          src={newspic}
          alt="subscribe newsletter"
          width={400}
          height={400}
        />
      </div>
      <div className="newsletter">
        <form action="index.html#">
          <div className="newsletter-header">
            <h3 className="newsletter-title">Subscribe Newsletter.</h3>
            <p className="newsletter-desc">
              Subscribe the <b>Anon</b> to get latest products and discount
              update.
            </p>
          </div>
          <input
            type="email"
            name="email"
            className="email-field"
            placeholder="Email Address"
            required=""
          />
          <button type="submit" className="btn-newsletter">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
        </>

    )
}

export default Newsletter;