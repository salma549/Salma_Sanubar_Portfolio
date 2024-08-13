import React from "react";

import GitHubSearchEngine from "../assets/portfolio/search.png";
import netflixMovies from "../assets/portfolio/netflixMovies.png";
import netflix from "../assets/portfolio/netflix.png";
import Weather from "../assets/portfolio/weather.png";
import Game from "../assets/portfolio/Game.png";
import Color from "../assets/portfolio/color.png";
import Voting from "../assets/portfolio/Voting.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: GitHubSearchEngine,
      demoLink: " https://salma549.github.io/Salma_githubSearchEngine/",
      codeLink: "https://github.com/salma549/Salma_githubSearchEngine",
    },
    {
      id: 2,
      src: netflixMovies,
      demoLink: "https://netflixmovies-demo.com",
      codeLink: "https://github.com/salma549/netflixMovies",
    },
    {
      id: 3,
      src: netflix,
      demoLink: "https://netflix-demo.com",
      codeLink: "https://github.com/salma549/Netflix-Clone",
    },
    {
      id: 4,
      src: Color,
      demoLink: "https://color-demo.com",
      codeLink: "https://github.com/salma549/bgChanger-react",
    },
    {
      id: 5,
      src: Game,
      demoLink: "https://game-demo.com",
      codeLink: "https://github.com/salma549/numberGuessGame",
    },
    {
      id: 6,
      src: Weather,
      demoLink: "https://weather-demo.com",
      codeLink: "https://github.com/salma549/weatherAPI",
    },
    {
      id: 7,
      src: Voting,
      demoLink: "https://salma549.github.io/votingsPoll/",
      codeLink: "https://github.com/salma549/votingsPoll",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-800 via-black to-black w-full h-auto text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <div className="h-48 w-full overflow-hidden flex justify-center items-center">
                <img
                  src={src}
                  alt=""
                  className="h-full w-auto object-cover"
                />
              </div>
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
