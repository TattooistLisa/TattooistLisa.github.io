import React from 'react';
import './Css/Testimonial.css';
import carterImage from '../images/CarterSquare.jpg';

const Testimonial = () => {
    return (

       
            <section class="bg-light py-5 py-xl-6">
                <div class="container mb-5 mb-md-6">
                    <div class="row justify-content-md-center">
                        <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
                            <h2 class="mb-4 display-5">Testimonials</h2>
                            <p class="text-secondary mb-4 mb-md-5">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque et neque id ligula mattis commodo.</p>
                            <hr class="w-50 mx-auto mb-0 text-secondary"/>
                        </div>
                    </div>
                </div>
                <div class="container overflow-hidden">
                    <div class="row justify-content-lg-around gy-5 gy-md-6">
                        <div class="col-12 col-sm-6 col-lg-5">
                            <div class="col-xl-11 col-xxl-10 mx-auto text-center">
                            <img class="img-fluid rounded rounded-circle mb-4" loading="lazy" src={carterImage} alt=""/>
                                    <p class="mb-2">Phasellus sem justo, <a href="#!">pretium eu lacus ut</a>, aliquet diam. Morbi sit amet dolor eu erat ornare viverra.</p>
                                    <p class="m-0 fw-bold">Luna John - Marketer</p>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-5">
                            <div class="col-xl-11 col-xxl-10 mx-auto text-center">
                            <img class="img-fluid rounded rounded-circle mb-4" loading="lazy" src={carterImage} alt=""/>
                                    <p class="mb-2">Phasellus sem justo, <a href="#!">pretium eu lacus ut</a>, aliquet diam. Morbi sit amet dolor eu erat ornare viverra.</p>
                                    <p class="m-0 fw-bold">Mark Smith - Designer</p>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-5">
                            <div class="col-xl-11 col-xxl-10 mx-auto text-center">
                            <img class="img-fluid rounded rounded-circle mb-4" loading="lazy" src={carterImage} alt=""/>
                                    <p class="mb-2">Phasellus sem justo, <a href="#!">pretium eu lacus ut</a>, aliquet diam. Morbi sit amet dolor eu erat ornare viverra.</p>
                                    <p class="m-0 fw-bold">Michael Wilson - SEO</p>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-5">
                            <div class="col-xl-11 col-xxl-10 mx-auto text-center">
                            <img class="img-fluid rounded rounded-circle mb-4" loading="lazy" src={carterImage} alt=""/>
                                    <p class="mb-2">Phasellus sem justo, <a href="#!">pretium eu lacus ut</a>, aliquet diam. Morbi sit amet dolor eu erat ornare viverra.</p>
                                    <p class="m-0 fw-bold">Luke Reeves - Sales</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Testimonial;