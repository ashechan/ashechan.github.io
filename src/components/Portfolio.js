import React from 'react';
import clip from "../images/clip.jpg";
import vervain from "../images/vervain.jpg";
import bay from "../images/bay.jpg";
import osm from "../images/osm.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import Popup from 'reactjs-popup';
import {PopupboxManager, PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";


function Portfolio() {
//Clippendales
    
    const openPopupboxClip = () => {
        const content = (
        <>
        <img className="portfolio-image-popupbox" src={clip} alt="Clippendales Mobile Pet salon website" />
        <p className="popup-text">Clippendales Mobile Pet Salon website created using Hostinger and Wordpress.</p>
        <b className="hyper-text">To visit</b><a className="hyper-link" onClick={() => window.open("https://clippendalesnc.com/")}> Click Here</a>
        </>
        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Clippendales Website",
              },
            },
          });
    }

    const popupboxConfigClip = {
        titleBar: {
            enable: true,
            text: "Clippendales Website"
        },
        fadeIn: true,
        fadeInSpeed: 500

    }

    //Vervain
    
    const openPopupboxVervain = () => {
        const content = (
        <>
        <img className="portfolio-image-popupbox" src={vervain} alt="A bootstrap theme called Vervain" />
        <p className="popup-text">Bootstrap theme I named Vervain. Pictures edited using Photoshop </p>
        <b className="hyper-text">Demo:</b><a className="hyper-link" onClick={() => window.open("https://ashechan.github.io/vervain-theme/", "_blank")}> Click Here</a> <br/>
        <b className="hyper-text">Code:</b><a className="hyper-link" onClick={() => window.open("https://github.com/ashechan/vervain-theme")}> Click Here</a>
        </>
        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Vervain: Bootstrap theme project",
              },
            },
          });
    }

    const popupboxConfigVervain = {
    
        titleBar: {
            enable: true,
            text: "Vervain: Bootstrap theme project"
        },
        fadeIn: true,
        fadeInSpeed: 500

    }

      //Bayonetta
    
      const openPopupboxBay = () => {
        const content = (
        <>
        <img className="portfolio-image-popupbox" src={bay} alt="Bayonetta charactr" />
        <p className="popup-text">Image of Bayonetta as a tumbler doll from the game "Bayonetta" created using HTML/CSS. <br/> Placed fourth in the international Bayonetta 10th Anniversary art contest.</p>
        <b className="hyper-text">Demo:</b><a className="hyper-link" onClick={() => window.open("https://codepen.io/blu3ros33/full/dyygOPN", "_blank")}> Click Here</a> <br/>
        <b className="hyper-text">Code:</b><a className="hyper-link" onClick={() => window.open("https://codepen.io/blu3ros33/pen/dyygOPN")}> Click Here</a>
        </>
        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Bayonetta 10th Anniversary",
              },
            },
          });
    }

    const popupboxConfigBay = {
    
        titleBar: {
            enable: true,
            text: "Bayonetta 10th Anniversary"
        },
        fadeIn: true,
        fadeInSpeed: 500

    }

     //Outer Senshi Memory Game
    
     const openPopupboxOsm = () => {
        const content = (
        <>
        <img className="portfolio-image-popupbox" src={osm} alt="Outer Senshi Memory game" />
        <p className="popup-text">Sailor Moon Outer Senshi memory game made with Vanilla Javascript</p>
        <b className="hyper-text">Demo:</b><a className="hyper-link" onClick={() => window.open("https://mg1226.github.io/outer-senshi-memory-game/", "_blank")}> Click Here</a> <br/>
        <b className="hyper-text">Code:</b><a className="hyper-link" onClick={() => window.open("https://github.com/ashechan/outer-senshi-memory")}> Click Here</a>
        </>
        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Outer Senshi Memory Game",
              },
            },
          });
    }

    const popupboxConfigOsm = {
    
        titleBar: {
            enable: true,
            text: "Outer Senshi Memory Game"
        },
        fadeIn: true,
        fadeInSpeed: 500

    }



    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                < div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxClip}>
                    <img className="portfolio-image" src={clip} alt="Clippendales mobile dog salon website" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                
                {/*..*/}
                <div className="portfolio-image-box" onClick={openPopupboxVervain}>
                    <img className="portfolio-image" src={vervain} alt="Vervain a Bootstrap theme" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
                {/*..*/}
                <div className="portfolio-image-box" onClick={openPopupboxBay}>
                    <img className="portfolio-image" src={bay} alt="Bayonetta created with HTML/CSS" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
                {/*..*/}
                <div className="portfolio-image-box" onClick={openPopupboxOsm}>
                    <img className="portfolio-image" src={osm} alt="Outer Senshi memory game" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
        
            </div>
            
            </div>
            <PopupboxContainer {...popupboxConfigClip} />
            <PopupboxContainer {...popupboxConfigVervain} />
            <PopupboxContainer {...popupboxConfigBay} />
            <PopupboxContainer {...popupboxConfigOsm} />
            <div id="view">
            <a href="https://github.com/ashechan" target="_blank" className="btn-main-offer">View More</a>
            </div>
        </div>
    )
}

export default Portfolio
