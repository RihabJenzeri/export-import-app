import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="wrapper">
      <a href="#" id="back-to-top"></a>

      <!-- page preloader -->
      <div id="de-loader"></div>

      <!-- header begin -->
      <header class="transparent scroll-light">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="de-flex sm-pt10">
                <div class="de-flex-col">
                  <div id="logo">
                    <a href="/">
                      <img class="logo-main"   src="assets/images/logo.png" alt="">
                      <img class="logo-scroll" src="assets/images/logo.png"  alt="">
                      <img class="logo-mobile" src="assets/images/logo.png" alt="">
<!--                      <img class="logo-main"   src="assets/images/logo-white.webp" alt="">-->
<!--                      <img class="logo-scroll" src="assets/images/logo-dark.webp"  alt="">-->
<!--                      <img class="logo-mobile" src="assets/images/logo-white.webp" alt="">-->
                    </a>
                  </div>
                </div>
                <div class="de-flex-col header-col-mid">
                  <ul id="mainmenu">
                    <li><a class="menu-item" href="/">Home</a>
                      <ul class="mega">
                        <li>
                          <div class="container">
                            <div class="sb-menu p-4">
                              <div class="row g-3">
                                <div class="col-lg-4 col-md-6 text-center">
                                  <div class="relative hover text-center overflow-hidden rounded-1">
                                    <img src="assets/images/demo/homepage-1.webp" class="w-100 relative hover-scale-1-1" alt="">
                                    <div class="abs abs-centered w-70 z-2 hover-op-1">
                                      <a class="btn-main mb-2" href="/">Multipage</a>
                                    </div>
                                    <div class="hover-op-05 abs abs-centered bg-dark w-100 h-100 z-1"></div>
                                  </div>
                                  <h5 class="mt-2 mb-0">Logistic</h5>
                                </div>
                                <div class="col-lg-4 col-md-6 text-center">
                                  <div class="relative hover text-center overflow-hidden rounded-1">
                                    <img src="assets/images/demo/homepage-2.webp" class="w-100 relative hover-scale-1-1" alt="">
                                    <div class="abs abs-centered w-70 z-2 hover-op-1">
                                      <a class="btn-main mb-2" href="/">Ship Freight</a>
                                    </div>
                                    <div class="hover-op-05 abs abs-centered bg-dark w-100 h-100 z-1"></div>
                                  </div>
                                  <h5 class="mt-2 mb-0">Ship Freight</h5>
                                </div>
                                <div class="col-lg-4 col-md-6 text-center">
                                  <div class="relative hover text-center overflow-hidden rounded-1">
                                    <img src="assets/images/demo/homepage-3.webp" class="w-100 relative hover-scale-1-1" alt="">
                                    <div class="abs abs-centered w-70 z-2 hover-op-1">
                                      <a class="btn-main mb-2" href="/">Air Freight</a>
                                    </div>
                                    <div class="hover-op-05 abs abs-centered bg-dark w-100 h-100 z-1"></div>
                                  </div>
                                  <h5 class="mt-2 mb-0">Air Freight</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li><a class="menu-item" href="/services">Services</a>
                      <ul>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/service-single">Service Single</a></li>
                      </ul>
                    </li>
                    <li><a class="menu-item" href="#">Company</a>
                      <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/team">Our Team</a></li>
                        <li><a href="/careers">Careers</a></li>
                      </ul>
                    </li>
                    <li><a class="menu-item" href="#">Pages</a>
                      <ul>
                        <li><a href="/track">Track Your Package</a></li>
                        <li><a href="/booking">Book Shipment</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/testimonials">Testimonials</a></li>
                      </ul>
                    </li>
                    <li><a class="menu-item" href="/blog">Blog</a></li>
                    <li><a class="menu-item" href="/contact">Contact</a></li>
                  </ul>
                </div>
                <div class="de-flex-col">
                  <div class="menu_side_area">
                    <a href="/booking" class="btn-main fx-slide"><span>Book Shipment</span></a>
                    <span id="menu-btn"></span>
                  </div>
                  <div id="btn-extra">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <!-- header end -->

      <!-- content begin -->
      <div class="no-bottom no-top" id="content">

        <div id="top"></div>

        <!-- ===== HERO SLIDER ===== -->
        <section class="text-light no-top no-bottom relative overflow-hidden">
          <div class="mh-800">
            <div class="swiper">
              <div class="swiper-wrapper">

                <!-- Slide 1 -->
                <div class="swiper-slide">
                  <div class="swiper-inner" data-bgimage="url(assets/images/slider/b1.webp)">
                    <div class="sw-caption">
                      <div class="container">
                        <div class="row gx-5 align-items-center justify-content-center text-center">
                          <div class="col-lg-10">
                            <div class="sw-text-wrapper">
                              <h1 class="animated text-uppercase anim-order-1">Global Ship Freight with Trusted Shipping</h1>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="animated anim-order-2">
                              <p>We work with reliable international carriers to ensure smooth cargo movement across major ports. Whether you need FCL, LCL, or fast transit service, we secure the best route and handle the logistics.</p>
                              <div class="spacer-half"></div>
                              <a class="btn-main fx-slide animated fadeInUp anim-order-3" href="/booking"><span>Book Shipment</span></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="abs w-100 bottom-0 z-2 pb-5 sm-hide">
                      <div class="container">
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="d-flex justify-content-between text-center">
                              <div class="relative"><h6 class="mb-0">Reliable Global Coverage</h6></div>
                              <div class="relative"><h6 class="mb-0">Flexible Cargo Options</h6></div>
                              <div class="relative"><h6 class="mb-0">On-Time Delivery</h6></div>
                              <div class="relative"><h6 class="mb-0">Cost-Effective Solutions</h6></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sw-overlay op-4"></div>
                  </div>
                </div>

                <!-- Slide 2 -->
                <div class="swiper-slide">
                  <div class="swiper-inner" data-bgimage="url(assets/images/slider/b2.webp)">
                    <div class="sw-caption">
                      <div class="container">
                        <div class="row gx-5 align-items-center justify-content-center text-center">
                          <div class="col-lg-10">
                            <div class="sw-text-wrapper">
                              <h1 class="animated text-uppercase anim-order-1">Efficient Container Shipping Across Borders</h1>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="animated anim-order-2">
                              <p>From standard containers to specialized equipment, we handle diverse shipping needs with precision. Our global network ensures safe transport, clear documentation, and smooth port-to-port connections.</p>
                              <div class="spacer-half"></div>
                              <a class="btn-main fx-slide animated fadeInUp anim-order-3" href="/booking"><span>Book Shipment</span></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="abs w-100 bottom-0 z-2 pb-5 sm-hide">
                      <div class="container">
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="d-flex justify-content-between text-center">
                              <div class="relative"><h6 class="mb-0">Secure Cargo Handling</h6></div>
                              <div class="relative"><h6 class="mb-0">Worldwide Port Access</h6></div>
                              <div class="relative"><h6 class="mb-0">Specialized Equipment</h6></div>
                              <div class="relative"><h6 class="mb-0">Trusted Documentation</h6></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sw-overlay op-4"></div>
                  </div>
                </div>

              </div>
              <div class="swiper-pagination"></div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
        </section>
        <!-- hero end -->

        <!-- ===== ABOUT ===== -->
        <section class="relative">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">About Us</div>
                <h2 class="split" data-wow-delay=".2s">Global Sea Cargo Logistics You Can Trust</h2>
                <p class="wow fadeInUp" data-wow-delay=".6s">
                  OceanLink Logistics delivers reliable, cost-effective, and timely sea freight solutions
                  for businesses of all sizes. From full container loads to consolidated shipments,
                  we connect U.S. ports like Long Beach, Houston, and Miami to international trade hubs
                  across Asia, Europe, and the Middle East.
                </p>
                <div class="row g-4">
                  <div class="col-md-5 wow fadeInUp" data-wow-delay=".8s">
                    <ul class="ul-check text-dark">
                      <li>Full Container Load</li>
                      <li>Less than Container Load</li>
                      <li>Breakbulk &amp; Project Cargo</li>
                    </ul>
                  </div>
                  <div class="col-md-5 wow fadeInUp" data-wow-delay=".8s">
                    <ul class="ul-check text-dark">
                      <li>Customs Brokerage</li>
                      <li>Port-to-Door Delivery</li>
                      <li>Real-Time Cargo Tracking</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <img src="assets/images/misc/c3.webp" class="w-100" alt="Sea Cargo Logistics Service">
              </div>
            </div>
          </div>
        </section>

        <!-- ===== COUNTERS ===== -->
        <section class="pt-0">
          <div class="container">
            <div class="row g-4">
              <div class="col-md-3 col-sm-6 text-center">
                <div class="de_count wow fadeInRight" data-wow-delay=".0s">
                  <h3 class="fs-40 mb-0"><span class="timer" data-to="65250" data-speed="3000">0</span>+</h3>
                  Containers Shipped
                </div>
              </div>
              <div class="col-md-3 col-sm-6 text-center">
                <div class="de_count wow fadeInRight" data-wow-delay=".2s">
                  <h3 class="fs-40 mb-0"><span class="timer" data-to="23160" data-speed="3000">0</span>+</h3>
                  Satisfied Clients
                </div>
              </div>
              <div class="col-md-3 col-sm-6 text-center">
                <div class="de_count wow fadeInRight" data-wow-delay=".4s">
                  <h3 class="fs-40 mb-0"><span class="timer" data-to="150" data-speed="3000">0</span>+</h3>
                  Global Shipping Partners
                </div>
              </div>
              <div class="col-md-3 col-sm-6 text-center">
                <div class="de_count wow fadeInRight" data-wow-delay=".6s">
                  <h3 class="fs-40 mb-0"><span class="timer" data-to="20" data-speed="3000">0</span>+</h3>
                  Years of Experience
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ===== TRACKING ===== -->
        <section class="p-0">
          <div class="container-fluid relative z-1">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="relative overflow-hidden">
                  <img src="assets/images/misc/s5.webp" class="w-100 wow scaleIn" alt="">
                </div>
              </div>
              <div class="col-lg-6">
                <div class="h-100 relative bg-dark p-5 text-light">
                  <div class="subtitle wow fadeInUp" data-wow-delay=".2s">Track Your Package</div>
                  <h2 class="split" data-wow-delay=".4s">Quick Tracking</h2>
                  <div class="row align-items-center justify-content-end">
                    <div class="col-md-9 col-sm-8">
                      <div class="hover-underline">
                        <input class="form-underline mb-0 no-border fs-18" id="order_id" name="order_id"
                               placeholder="enter your order number here..." type="text">
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-4">
                      <a class="btn-main bg-white text-dark fx-slide w-100" href="/track"><span>Track It</span></a>
                    </div>
                  </div>
                  <img src="assets/images/misc/c2.webp" class="w-50 abs bottom-0 end-0 wow scaleIn" data-wow-duration="2s" alt="">
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ===== SERVICES ===== -->
        <section class="overflow-hidden">
          <div class="container">
            <div class="row mb-3 g-4 align-items-center justify-content-between">
              <div class="col-lg-6">
                <div class="uptitle id-color wow fadeInUp">Our Services</div>
                <h2 class="split">Services Tailored to You</h2>
                <p>Offering expert project management, innovative design, renovations, and sustainable building services, LogiXpress delivers quality.</p>
              </div>
              <div class="col-lg-6">
                <div class="relative">
                  <div class="de-custom-nav d-flex flex-end" data-target="#services-carousel">
                    <div class="d-prev circle"></div>
                    <div class="d-next circle"></div>
                  </div>
                </div>
              </div>
              <div id="services-carousel" class="owl-4-cols owl-carousel owl-theme">
                <div class="item">
                  <a href="/service-single" class="d-block hover relative">
                    <img src="assets/images/icons-color/1.png" class="w-70px mb-3 hover-jello infinite" alt="">
                    <h4>Trucking</h4>
                    <p>Reliable ground transportation for shipments across the United States with flexible fleet options.</p>
                  </a>
                </div>
                <div class="item">
                  <a href="/service-single" class="d-block hover relative">
                    <img src="assets/images/icons-color/2.png" class="w-70px mb-3 hover-jello infinite" alt="">
                    <h4>Air Freight</h4>
                    <p>Fast delivery of time-sensitive cargo using global air routes with real-time tracking.</p>
                  </a>
                </div>
                <div class="item">
                  <a href="/service-single" class="d-block hover relative">
                    <img src="assets/images/icons-color/3.png" class="w-70px mb-3 hover-jello infinite" alt="">
                    <h4>Ship Freight</h4>
                    <p>Cost-effective shipping solution for bulk cargo with dependable international sea freight services.</p>
                  </a>
                </div>
                <div class="item">
                  <a href="/service-single" class="d-block hover relative">
                    <img src="assets/images/icons-color/4.png" class="w-70px mb-3 hover-jello infinite" alt="">
                    <h4>Rail Freight</h4>
                    <p>Efficient and eco-friendly rail transport option ideal for long-distance heavy shipments.</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ===== VIDEO ===== -->
        <section aria-label="section" class="relative p-0 overflow-hidden">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <a class="d-block hover popup-youtube" href="https://www.youtube.com/watch?v=FikkQTfbaOs">
                  <div class="relative overflow-hidden">
                    <div class="absolute start-0 w-100 abs-middle fs-36 text-white text-center z-2">
                      <div class="player bg-dark border-0 circle wow scaleIn"><span></span></div>
                    </div>
                    <div class="absolute w-100 h-100 top-0 bg-dark hover-op-05"></div>
                    <img src="assets/images/background/2.webp" class="w-100 hover-scale-1-1" alt="">
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- ===== WHY CHOOSE US ===== -->
        <section class="bg-dark text-light">
          <div class="container">
            <div class="row g-4 justify-content-center">
              <div class="col-lg-7 text-center">
                <div class="subtitle wow fadeInUp">Why Choose Us</div>
                <h2 class="split" data-wow-delay=".2s">Trusted Logistics Partner for Worldwide Shipping</h2>
              </div>
            </div>
            <div class="row g-4">
              <div class="col-lg-4 col-md-6 wow fadeInUp" *ngFor="let item of whyUs">
                <div class="relative">
                  <i class="abs fs-24 p-4 bg-color icon_check rounded-1 text-light"></i>
                  <div class="ps-100">
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ===== CTA ===== -->
        <section>
          <div class="container relative z-1">
            <div class="row g-4 gx-5">
              <div class="col-lg-6">
                <div class="h-100 relative">
                  <div class="subtitle id-color wow fadeInUp" data-wow-delay=".2s">Your Trusted Shipping Partner</div>
                  <h1 class="split" data-wow-delay=".4s">Expert Ship Freight Services, Deliver Worldwide with Ease</h1>
                  <div class="abs ol-lg-12 pos-sm-relative bottom-0">
                    <div class="d-flex align-items-center justify-content-between border-bottom pb-4 mb-4 wow fadeInUp" data-wow-delay=".9s">
                      <a class="btn-main fx-slide me-5" href="/booking"><span>Get Started Now</span></a>
                      <div class="d-flex align-items-center">
                        <div class="me-4">
                          <img src="assets/images/testimonial/1.webp" class="w-50px circle ms-min-10" alt="">
                          <img src="assets/images/testimonial/2.webp" class="w-50px circle ms-min-10" alt="">
                          <img src="assets/images/testimonial/3.webp" class="w-50px circle ms-min-10" alt="">
                        </div>
                        <div class="fw-600 fs-14 lh-1-5"><span class="fs-16 fw-bold text-dark">23k</span><br>successful shipments</div>
                      </div>
                    </div>
                    <p>We specialize in global ocean freight solutions, offering full container load, less than container load, and bulk cargo shipping. With our trusted carrier network and years of expertise, we guarantee smooth operations, reliable schedules, and cost-effective delivery for businesses of all sizes.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="relative">
                  <div class="abs bottom-0 end-0 m-5">
                    <div class="p-4 mb-4 bg-color text-light rounded-1 text-center wow fadeInUp" data-wow-delay=".0s">
                      <h1 class="fs-84 mb-1">15</h1>
                      <div class="fs-16 lh-1-5">Years of Excellence</div>
                    </div>
                  </div>
                  <img src="assets/images/misc/s3.webp" class="w-100 rounded-1" alt="">
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ===== BOTTOM CTA BANNER ===== -->
        <section class="bg-color text-light pt-50 pb-50">
          <div class="container">
            <div class="row g-4">
              <div class="col-md-9">
                <h3 class="mb-0 fs-32 split">Ready to Ship Your Cargo Worldwide?</h3>
              </div>
              <div class="col-lg-3 text-lg-end">
                <a class="btn-main fx-slide btn-line wow fadeInRight" data-wow-delay=".2s" href="/booking"><span>Book Shipment</span></a>
              </div>
            </div>
          </div>
        </section>

      </div>
      <!-- content end -->

      <!-- footer begin -->
      <footer class="text-light section-dark">
        <div class="container">
          <div class="row g-4 justify-content-between">
            <div class="col-md-6">
              <img src="assets/images/logo.png" class="w-170px mb-2" alt="">
              <div class="spacer-single"></div>
              <div class="row g-4">
                <div class="col-md-6">
                  <div class="widget">
                    <h5>Services</h5>
                    <ul>
                      <li><a href="/service-single">Trucking</a></li>
                      <li><a href="/service-single">Air Freight</a></li>
                      <li><a href="/service-single">Ship Freight</a></li>
                      <li><a href="/service-single">Rail Freight</a></li>
                      <li><a href="/service-single">Warehousing</a></li>
                      <li><a href="/service-single">Customs Brokerage</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="widget">
                    <h5>Company</h5>
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/about">About Us</a></li>
                      <li><a href="/team">Our Team</a></li>
                      <li><a href="/careers">Careers</a></li>
                      <li><a href="/blog">Blog</a></li>
                      <li><a href="/contact">Contact</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="social-icons mb-sm-30 text-center">
                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-youtube"></i></a>
                <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="d-flex align-items-center justify-content-between">
                <h2>Get in Touch</h2>
                <img src="assets/images/ui/up-right-arrow.webp" class="w-60px op-5" alt="">
              </div>
              <div class="widget">
                <div class="op-5 fs-15">Email</div>
                <h3>contact&#64;logixpress.com</h3>
                <div class="spacer-20"></div>
                <div class="op-5 fs-15">Phone</div>
                <h3>+929 333 9296</h3>
                <div class="spacer-20"></div>
                <div class="op-5 fs-15">Office Location</div>
                <h3>100 S Main St, New York, NY</h3>
                <div class="spacer-20"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="subfooter">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                Copyright {{ year }} LogiXpress by Designesia
              </div>
            </div>
          </div>
        </div>
      </footer>
      <!-- footer end -->

    </div>
    <!-- wrapper end -->

    <!-- overlay content -->
    <div id="extra-wrap" class="text-light">
      <div id="btn-close">
        <span></span>
        <span></span>
      </div>
      <div id="extra-content">
        <img src="assets/images/logo-white.webp" class="w-200px" alt="">
        <div class="spacer-30-line"></div>
        <h5>Our Services</h5>
        <ul class="ul-check">
          <li>Trucking</li>
          <li>Air Freight</li>
          <li>Ship Freight</li>
          <li>Rail Freight</li>
          <li>Warehousing</li>
          <li>Customs Brokerage</li>
          <li>Last-Mile Delivery</li>
          <li>Project Cargo</li>
        </ul>
        <div class="spacer-30-line"></div>
        <h5>Contact Us</h5>
        <div><i class="icofont-phone me-2 op-5"></i>+929 333 9296</div>
        <div><i class="icofont-location-pin me-2 op-5"></i>100 S Main St, New York, NY</div>
        <div><i class="icofont-envelope me-2 op-5"></i>contact&#64;logixpress.com</div>
        <div class="spacer-30-line"></div>
        <h5>About Us</h5>
        <p>We are a trusted logistics and cargo solutions provider committed to delivering your goods safely, efficiently, and on time.</p>
        <div class="social-icons">
          <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-youtube"></i></a>
          <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>
    </div>
    <!-- overlay content end -->
  `
})
export class HomeComponent implements AfterViewInit {
  year = new Date().getFullYear();

  whyUs = [
    { title: 'Experienced Logistics',       desc: 'Our specialists bring decades of experience in freight forwarding and customs clearance, ensuring smooth and efficient supply chain solutions worldwide.' },
    { title: 'Fast Delivery Commitment',    desc: 'We understand the urgency of every shipment and act quickly. Optimized routes and tracking technology ensure timely deliveries without unnecessary delays.' },
    { title: 'Transparent Pricing Policy',  desc: 'Our pricing is clear, competitive, and easy to understand for all clients. We guarantee no hidden charges and complete financial transparency every time.' },
    { title: 'Reliable Cargo Handling',     desc: 'Every shipment is managed with precision and care to avoid risks. From packing to loading, we guarantee your cargo arrives safely and intact.' },
    { title: 'Comprehensive Solutions',     desc: 'We cover every step of logistics including warehousing, distribution, and freight. Our integrated services make supply chain management simple and efficient.' },
    { title: 'Satisfaction Guarantee',      desc: 'Your trust is our highest priority across all shipments. We back our services with responsive support and a strong customer satisfaction guarantee.' }
  ];

  ngAfterViewInit() {
    // Laisser designesia.js initialiser le menu et les animations
    // Le setTimeout donne le temps au DOM de se stabiliser
    setTimeout(() => {
      // Re-trigger designesia init si disponible
      if (typeof (window as any).designesiaInit === 'function') {
        (window as any).designesiaInit();
      }
    }, 100);
  }
}
