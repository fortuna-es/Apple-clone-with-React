import React, { useState, useEffect } from "react";

function Youtube() {
  const [youTubeVideos, setYouTubeVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCb-p00HI13A9CL0pRvvHIfW3cSsaV5k1Q&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6"
    )
      .then((response) => response.json())
      .then((data) => {
        setYouTubeVideos(data.items);
      });
  }, []);
  console.log(youTubeVideos);

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Latest Videos
            </div>
          </div>
          {youTubeVideos.map((singleVideo, i) => {
            let vidId = singleVideo.id.videoId;

            let vidLink = "https://www.youtube.com/watch?v=" + vidId;
            let videoWrapper = (
              <div key={i} className="col-sm-12 col-md-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank">
                      <img src={singleVideo.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                      <br />
                      <br />
                      <br />
                      {singleVideo.snippet.publishTime}
                    </div>
                  </div>
                </div>
              </div>
            );
            return videoWrapper;
          })}

          {/* {videoWrapper} */}
        </div>
      </div>
    </div>
  );
}

export default Youtube;
