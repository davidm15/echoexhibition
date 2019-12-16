import React from 'react';
import './Main.css';
import ReactPlayer from 'react-player';

class Main extends React.Component {
    componentDidMount() {
        document.title = 'ECHOEXHIBITION';
    }
    render() {
      return <div>
          <div className="navbar">
              <div className="wrapper">
                  <div className="col-1">
                    <div className="btn-group font-size-1">
                        <span>DE</span> | <span className="active">EN</span>
                    </div>
                  </div>
            </div>
        </div>
      <div className="container">
        <div className="wrapper">
          <div className="col-1 font-size-2">
            29.01
          </div>
          <div className="col-2">
            <div className="long-dash"></div><br/>
                <ReactPlayer url="http://www.echoexhibition.at/assets/videos/poster_animated.mp4"
                 className="poster"
                 width="100%"
                 height="auto"
                 playing
                 loop
                 muted/>
          </div>
          <div className="col-3 font-size-2">
            01.02
          </div>
          </div>

            <div className="wrapper-2">
                <div className="col-2-1">
                    
                </div>
                <div className="col-2-2">
                    <div className="font-size-40 spacing-1-half pt-1">
                        MASTER'S PROGRAM SHOW<br/>
                        Communication, Media<br/>
                        Sound &amp; Interaction Design
                    </div>
                    <div className="font-size-40 spacing-1-half text-white pt-3">
                        Every creative project resonates<br/>
                        differently with people, creating<br/>
                        its own <span className="font-l">ECHO</span>.
                    </div>
                </div>
                <div className="col-2-3">
                    <div className="">

                    </div>
                </div>
                <div className="col-2-4">
                    
                </div>
            </div>
        </div>
      </div>;
    }
}

export default Main;