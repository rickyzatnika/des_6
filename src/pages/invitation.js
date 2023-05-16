
import React, { lazy, Suspense, useEffect } from 'react';
import { useParams } from "react-router-dom";
import useSWR from "swr";
import Gift from '../components/Invitations/Gift';

const Header = lazy(() => import("../components/Invitations/Headers"));

const SectionOne = lazy(() => import("../components/Invitations/SectionOne"));
const SectionTwo = lazy(() => import("../components/Invitations/SectionTwo"));
const SectionThree = lazy(() => import("../components/Invitations/SectionThree"));
const SectionRSVP = lazy(() => import("../components/Invitations/SectionRSVP"));
const SectionGallery = lazy(() => import("../components/Invitations/SectionGallery"));
const SectionProkes = lazy(() => import("../components/Invitations/SectionProkes"));
const SectionComment = lazy(() => import("../components/Invitations/SectionComment"));
const Subfooter = lazy(() => import("../components/Invitations/Subfooter"));
const Footer = lazy(() => import("../components/Invitations/Footer"));


const Invitation = () => {

    const { uuid } = useParams();
    const fetcher = (url) => fetch(url).then((res) => res.json());

    const { data: guest, error } = useSWR(
        `${process.env.REACT_APP_URI}/invitation/${uuid}`,
        fetcher
    );
    useEffect(() => { }, [guest, error]);

    if (error) {
        return <div>Error Loading data...</div>;
    }

    return (

        <Suspense fallback={<div className="w-full min-h-screen flex items-center justify-center">
            <img src="/loaders.svg" alt="" />
        </div>}>

            <Header />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionRSVP guest={guest} />
            <SectionGallery />
            <SectionProkes />
            <Gift />
            <SectionComment guest={guest} />
            <Subfooter />
            <Footer />
        </Suspense>

    )
}

export default Invitation