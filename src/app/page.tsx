'use client';

import React   from "react";

import Landing from "@containers/landing/Landing";

import Navbar  from "@components/Navbar";
import Footer  from "@components/Footer";

const Home = () => {
    return (
      <>
        <Landing />
        <Navbar />
        <Footer />
      </>
    );
};

export default Home;

// path: src/app/page.tsx