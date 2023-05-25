"use client"

import { Box } from "@mui/material";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import BelowBennerSection from "./components/BelowBennerSection";
import HeroSectionOne from "./components/HeroSectionOne";
import HeroSectionTwo from "./components/HeroSectionTwo";


export default function Home() {
  return (
    <Box sx={{
      maxWidth: '1500px',
      margin: 'auto'
    }}>
      <Navbar></Navbar>
      <Banner></Banner>
      <BelowBennerSection></BelowBennerSection>
      <HeroSectionOne></HeroSectionOne>
      <HeroSectionTwo></HeroSectionTwo>
    </Box>
  )
}
