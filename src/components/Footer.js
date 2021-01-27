import React from 'react'
import './Footer.css'
import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined'
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__left">
                <p>song details</p>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer_green"/>
                <SkipPreviousIcon className="footer_icon"/>
                <PlayCircleFilledOutlinedIcon fontSize="large" className="footer_icon"/>
                <SkipNextIcon className="footer_icon"/>
                <RepeatIcon className="footer_green"/>
            </div>
            <div class="footer__right">
                <p>volume</p>
            </div>
        </div>
    )
}

export default Footer
