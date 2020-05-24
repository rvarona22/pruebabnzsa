import React from 'react';
import videopersona from '../assets/img/videopersona.mp4';

class Video extends React.Component {
    
    render(){
        return (
            <React.Fragment>      
                <div className='vid'>
                    <video className='videoprim' loop autoPlay muted>
                      <source src="https://interactive-examples.mdn.mozilla.net/media/examples/flower.mp4" type="video/mp4" />
                    </video>
                    <video className='videosec' loop autoPlay muted>
                      <source src={videopersona} type="video/mp4" />
                    </video>
                </div>
            </React.Fragment>
        );
    }
}

export default Video;

