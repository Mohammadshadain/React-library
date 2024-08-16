'use client'

import React from 'react';
// import {header}'./compoents/header';'
import Header from '@/components/header';
import Main from '@/components/main';
import Footer from '@/components/footer';
import Card from '@/components/Card';



const HOME = () => {
  return (
    <>
    <Header></Header>
    <Main/>
    <Card/>
   
    <Footer/>
        </>
  )
}

export default HOME