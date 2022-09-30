import './home.css';
import HomeHeader from '../../components/homeHeader/HomeHeader';
import React from 'react';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Home() {
    return (
        <React.Fragment>
            <HomeHeader />
            <div className="Home">

                <Posts />
                <Sidebar />
            </div>
        </React.Fragment>
    )
}