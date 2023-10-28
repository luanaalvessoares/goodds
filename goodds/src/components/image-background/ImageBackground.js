import React, { useRef, useEffect, useState } from 'react';
import './ImageBackground.css'
import SuportAvatar from '../../assets/images/support-avatar-bg.webp'
import VideoHomeBg from '../../assets/images/video-home-bg.mp4'

function ImageBackground({isVideo, image, title, description}) {
    return (
        <div id="headerBgSection">
            <section className="bgHeader">
                {isVideo ? (
                    <video src={VideoHomeBg} autoPlay loop muted playsInline className="imageBg" />
                ) : (
                    <img src={image} alt="" className="imageBg"/>
                )}

                <div className="headerOverlay">
                    <div className="contentHeader">
                        <div className="titleHeader">
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </div>
                        <div className="headerContact">
                            <a className="btnHeaderContact" href="#!">
                                <div className="contactBgImage">
                                    <img src={SuportAvatar} alt=""/>
                                </div>
                                <div>
                                    <p>Precisa de ajuda?</p>
                                    <p>Fale com um especialista</p>
                                </div>
                            </a>
                        </div>
                    </div>				
                </div>
            </section>
        </div>
    )
}

export default ImageBackground;