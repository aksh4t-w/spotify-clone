import React from 'react'
import './Footer.css'
import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined'
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__left">
                <img src="" alt="" className="footer_albumLogo"/>
                <div className="footer__songInfo">
                    <h4>Numb</h4>
                    <p>LP</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer_green"/>
                <SkipPreviousIcon className="footer_icon"/>
                <PlayCircleFilledOutlinedIcon style={{fontSize: 50}} className="footer_icon"/>
                <SkipNextIcon className="footer_icon"/>
                <RepeatIcon className="footer_green"/>
            </div>
            <div class="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
