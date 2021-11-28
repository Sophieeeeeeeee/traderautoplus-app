import React, {Component} from 'react';
import { Button } from '../button/Button';
import '../../../app/App.css';
import './Welcome.css';
import ReactPlayer from 'react-player/youtube'

// function YoutubeEmbed(){
//     const youtubebackground = () => <div className="video-responsive">
//         <iframe width="560" height="315" src="https://www.youtube.com/embed/RcQNgQFmLCI" title="YouTube video player"
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen>
//             </iframe>
//         </div>
//     return(
//         <>
//            <youtubebackground/>
//         </>
//     )
// }
// const VIDEO_WIDTH = 1920;
// const VIDEO_HEIGHT = 1080;
// const VideoBackground = () => {
//     return <div className="video-background">
//         <iframe
//             width={VIDEO_WIDTH}
//             height={VIDEO_HEIGHT}
//             src="https://www.youtube.com/embed/D_vOqkEgmY0?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&start=50&enablejsapi=1&&widgetid=3"
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
//     </div>;
// };
//export default YoutubeEmbed;

/**
 * Renders Welcome (home) page with all the fancy buttons
 */
class WelcomeSection extends Component{
    constructor(props) {
        super(props);
    }


    render () {
        return (
            <div className='hero-container'>
                {/*<video src='https://www.youtube.com/embed/RcQNgQFmLC' autoPlay loop muted />*/}
            {/*<video id="background-video" loop autoPlay muted> </video>*/}
                {/*<YoutubeEmbed/>*/}
                {/*<video src={this.state.videoURL} type="video/mp4" />*/}

                <section className='videoplayer'>
                <ReactPlayer url='https://www.youtube.com/watch?v=RcQNgQFmLCI&ab_channel=RobComeau'
                             playing
                             loop
                             muted
                             width="100%"
                             height="80%"/>
                </section>

                <h1>Find your most suitable car,</h1>
                <h1>{"\n"} and loan.</h1>

                <p>Get Started Here</p>

                <div className='hero-btns'>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        link = '/sign-up'
                    >
                        GET STARTED
                    </Button>

                    <Button
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        onClick={console.log('hey')}
                        link = '/sign-in'
                    >
                        Sign In <i className='far fa-play-circle' />
                    </Button>

                </div>
            </div>
        )
    }
}

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return(
            <>
                <WelcomeSection />
            </>
        )

    }
}

export default Welcome;

