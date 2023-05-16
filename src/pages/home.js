import React from 'react'
import Header from '../components/Invitations/Headers'
import SectionOne from '../components/Invitations/SectionOne'
import SectionTwo from '../components/Invitations/SectionTwo'
import SectionThree from '../components/Invitations/SectionThree'
import SectionGallery from '../components/Invitations/SectionGallery'
import SectionProkes from '../components/Invitations/SectionProkes'
import Gift from '../components/Invitations/Gift'
import SectionComment from '../components/Invitations/SectionComment'
import Subfooter from '../components/Invitations/Subfooter'
import Footer from '../components/Invitations/Footer'

const Home = () => {
    return (
        <>

            <Header />
            <SectionOne />
            <SectionTwo />
            <SectionThree />

            <SectionGallery />
            <SectionProkes />
            <Gift />
            <SectionComment />
            <Subfooter />
            <Footer />
        </>
    )
}

export default Home