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
      </div>
      </div>;
    }
}

export default Main;