import { Feature } from "../../components";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  const featureData = [
    {
      title: "What is GPT-3",
      text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.",
    },
    {
      title: "Chatbots",
      text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought.",
    },
    {
      title: "Knowledgebase",
      text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments.",
    },
    {
      title: "Education",
      text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments.",
    },
  ];
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title={featureData[0].title} text={featureData[0].text} key={featureData[0].title + 0} />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">Possibilities beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title={featureData[1].title} text={featureData[1].text} key={featureData[1].title + 1} />
        <Feature title={featureData[2].title} text={featureData[2].text} key={featureData[2].title + 2} />
        <Feature title={featureData[3].title} text={featureData[3].text} key={featureData[3].title + 3} />
      </div>
    </div>
  );
};

export default WhatGPT3;
