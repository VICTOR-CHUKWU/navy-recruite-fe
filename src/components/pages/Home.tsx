import React from 'react'
import { Header, HeroSection, HowToJoin, FeaturedArticles, NewsLetter } from '@/components/home'

const HomePage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <HowToJoin />
            <FeaturedArticles />
            <NewsLetter />
        </>
    )
}

export default HomePage