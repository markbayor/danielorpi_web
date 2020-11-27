import React from "react";
import {Footer, Navbar, PageHead} from "../components";

export default function Contact() {
  return (
    <div className='contact-page'>
      <PageHead />
      <Navbar />
      <main className='main'>
        <div className='contact-info'>
          <div className='contact-info_sub'>
            Management
            <div className='contact-info_sub--actual'>
              &#9993; amrit@ammanagement.info
            </div>
          </div>
          <div className='contact-info_sub'>
            Booking (WW)
            <div className='contact-info_sub--actual'>
             &#9993; contact@danielorpi.com
            </div>
            <div className='contact-info_sub--actual'>
              &#9993; amrit@ammanagement.info
            </div>
          </div>
          <div className='contact-info_sub'>
            Press Contact
            <div className='contact-info_sub--actual'>
              &#9993; contact@danielorpi.com
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}