import React, { useEffect, useState } from "react";

const Preloader = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const preloaderStatus = document.querySelector('.atf-status');
        const preloader = document.querySelector('.atf-preloader');

        const handlePreloaderAnimation = () => {
            preloaderStatus.style.display = 'none';
            preloader.style.animation = 'fadeOut 0.75s easeOut';

            setTimeout(() => {
                preloader.style.display = 'none';
                setVisible(false);
            }, 500);
        };
        if (document.readyState === 'complete') {
            handlePreloaderAnimation();
        } else {
            window.addEventListener('load', handlePreloaderAnimation);
        }

        return () => {
            window.removeEventListener('load', handlePreloaderAnimation);
        };
    }, []);
    
    return (
        <div className={`atf-preloader ${visible ? 'visible' : 'hidden'}`}>
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
