import React from 'react'
import './VedioPlayer.css'
import video from '../../assets/college-video.mp4'

const VedioPlayer = ({playState, setPlayState}) => {

    const player = useRef(null);

    const closePlayer = (e) => {
        if(e.target === player.current);
    }

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VedioPlayer