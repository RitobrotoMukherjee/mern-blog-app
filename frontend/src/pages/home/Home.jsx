import './home.css';
import HomeHeader from '../../components/homeHeader/HomeHeader';
import React from 'react';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';

export default function Home() {
    return (
        <React.Fragment>
            <HomeHeader />
            <div className="Home">

                <Posts />
                <Sidebar />
            </div>
            <Footer />
        </React.Fragment>
    )
}