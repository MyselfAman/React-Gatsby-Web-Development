import React from 'react'
import Heading from '../Reuseable/Heading'
import '../Contact/contact.css'
export default function () {
  
  return (
    <section className="py-3 mb-5">
      <Heading title="Contact Us"/>
        <div className="bg-theme contact4 overflow-hiddedn position-relative">
          <div className="row no-gutters">
            <div className="container">
              <div className="col-lg-6 contact-box mb-4 mb-md-0">
                <div className="">
                  <form className="mt-3" method="POST" action="https://formspree.io/f/xnqrbadn">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <input className="form-control text-white" name="name" type="text" placeholder="name"/>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <input className="form-control text-white" name="email" type="email" placeholder="email address"/>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <textarea className="form-control text-white" name="description" rows="3" placeholder="message"></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12 d-flex align-items-center mt-2">
                        <button type="submit" className="btn bg-white text-inverse px-3 py-2"><span> Submit</span></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 right-image p-r-0">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1619902.0054433027!2d-122.68851282163044!3d37.534535608111824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1507725785789"
                width="100%" height="462" frameborder="0" allowfullscreen data-aos="fade-left" data-aos-duration="3000"></iframe>
            </div>
          </div>
        </div>
    </section>
  )
}
