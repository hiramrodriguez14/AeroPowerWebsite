import React from 'react';
import Header from '../../layout/header';
import Footer from "../../layout/footer";
import CompetitionBlock from "./competitionBlock";
import MissionVisionBlock from "./missionVisionBlock";
import ImpressionBlock from "./impressionBlock";
import ThisIsWhatWeDo from "./thisIsWhatWeDoBlock";

const HomePage = () => {
  return (
    <div>
      <Header />
      <ImpressionBlock />
      <ThisIsWhatWeDo />
      <MissionVisionBlock />
      <CompetitionBlock />
      <Footer />
    </div>
  );
};

export default HomePage;