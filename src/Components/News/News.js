import React, { useState, useEffect } from "react";

function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=apple&sortBy=publishedAt&pageSize=6&language=en&apiKey=3b76fc993c554924a00ea469d8346636"
    )
      .then((response) => response.json())
      .then((news) => {
        setNews(news.articles);
      });
  }, []);

  return (
    <div className="allNewsWrapper">
      <div class="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold news-title-wrapper">
              Latest Apple News
            </div>
          </div>

          {news.map((singleNews, i) => {
            let Title = singleNews.title;
            let Image = singleNews.urlToImage;
            let Description = singleNews.description;
            let Links = singleNews.url;
            let newswrapper = (
              <div key={i} className="col-sm-12 col-md-4">
                <div className="singleNewsWrapper">
                  <div className="newsInfoWrapper">
                    <div className="newsTitle">
                      <a href={Links} Target="_blank">
                        {Title}
                      </a>
                    </div>
                    <div className="newsImage">
                      <a href={Links} Target="_blank">
                        <img src={Image} alt="Apple news Image" />
                      </a>
                    </div>
                    <div className="newsDescription">{Description}</div>
                  </div>
                </div>
              </div>
            );
            return newswrapper;
          })}
        </div>
      </div>
    </div>
  );
}

export default News;
