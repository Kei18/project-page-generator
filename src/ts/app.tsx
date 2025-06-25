import * as React from "react";
import { createRoot } from "react-dom/client";

import "../scss/custom.scss";
import data from "../../data.yaml";

import { Meta } from "./components/Meta";
import { Header } from "./components/Header";
import { Authors } from "./components/Authors";
import { Links } from "./components/Links";
import { HeaderImage } from "./components/HeaderImage";
import { Abstract } from "./components/Abstract";
import { News } from "./components/News";
import { Demo } from "./components/Demo";
import { Video } from "./components/Video";
import { Slides } from "./components/Slides";
import { Citation } from "./components/Citation";
import { OtherLinks } from "./components/OtherLinks";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const App: React.SFC<{}> = () => {
  return (
    <div>
      <main role="main flex-shrink-0">
        <Meta {...data} />
        <div className="container">
          <Header title={data.title} />
          <Authors authors={data.authors} />
          <Links
            links={data.topLinks}
            className="top-links"
            badgeClassName="bg-primary"
          />
          <HeaderImage headerImage={data.headerImage} />
          <Links
            links={data.subLinks}
            className="sub-links"
            badgeClassName="bg-success"
          />
          <Abstract abstract={data.abstract} />
          <News news={data.news} />
          <Demo demo={data.demo} />
          <Video video={data.video} />
          <Slides slides={data.slides} />
          <Citation citation={data.citation} />
          <OtherLinks otherLinks={data.otherLinks} />
          <Contact contact={data.contact} />
        </div>
      </main>
      <Footer copyright={data.copyright} />
    </div>
  );
};

const root = createRoot(document.querySelector("#root"));
root.render(<App />);