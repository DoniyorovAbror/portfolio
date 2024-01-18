import React, { useEffect } from "react";

const Preloader = () => {
    useEffect(() => {
        const preloaderStatus = document.querySelector('.atf-status');
        const preloader = document.querySelector('.atf-preloader');

        const handlePreloaderAnimation = () => {
            preloaderStatus.style.display = 'none';
            preloader.style.animation = 'fadeOut 0.75s easeOut';

            setTimeout(() => {
                preloader.style.display = 'none';
            }, 750);
        };

        window.addEventListener('load', handlePreloaderAnimation);

        return () => {
            window.removeEventListener('load', handlePreloaderAnimation);
        };
    }, []);
    
    return (
        <div className="atf-preloader">
            <div className="atf-status">
                <div className="atf-lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
