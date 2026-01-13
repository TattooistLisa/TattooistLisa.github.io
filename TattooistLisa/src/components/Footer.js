import React from "react";
import { Outlet } from "react-router-dom";
import Contact from "./Contact";
import ContactForm from "./ContactForm";

const Footer = () => {
    return (
        <>
            <ContactForm />
            <Contact />
        </>
    );
};

export default Footer;