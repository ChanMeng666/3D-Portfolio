import React, { useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { panelsData } from "../constants/index";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { snorkellingVideo1 } from "../assets/index";
import { snorkellingVideo2 } from "../assets/index";
import { volunteerVideo1 } from "../assets/index";
import { volunteerVideo2 } from "../assets/index";

const ExpandCard = ({
  name,
  imageUrl,
  activePanel,
  index,
  handlePanelClick,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      key={index}
      className={`panel bg-cover bg-center bg-no-repeat	h-[80vh] rounded-[50px] text-white cursor-pointer m-[10px] relative ${
        index === activePanel ? "active" : ""
      }`}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={() => handlePanelClick(index)}
    >
      {index === activePanel && (
          <h5 className="text-center text-[0.5rem] sm:text-[1rem] md:text-[1.5rem] lg:text-[3rem] absolute">
            {name}
          </h5>
      )}
    </motion.div>
  );
};

const Hobby = () => {
  const [activePanel, setActivePanel] = useState(2);
  const [activeVideoIndex, setActiveVideoIndex] = useState(1);

  const videos = [snorkellingVideo1, snorkellingVideo2, volunteerVideo1, volunteerVideo2];

  const handlePanelClick = (index) => {
    setActivePanel(index);
  };

  const handlePreviousVideo = () => {
    setActiveVideoIndex((prevState) =>
      prevState === 0 ? videos.length - 1 : prevState - 1
    );
  };

  const handleNextVideo = () => {
    setActiveVideoIndex((prevState) => (prevState + 1) % videos.length);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Embracing beautiful life</p>
        <h2 className={styles.sectionHeadText}>Hobbies</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 mb-16 text-secondary text-[17px] max-w-4xl leading-[30px]"
        >
          My greatest passions are snorkeling and volunteering.
          Exploring the vast ocean world brings me closer to nature,
          refreshing my spirit and giving me a sense of peace.
          <br />
          At the same time,
          being able to help underprivileged children on islands,
          whether it's providing them with a nutritious meal or teaching them something new,
          fills my heart with joy.
          Spending time with the kids and making a positive impact on their lives uplifts my soul.
        </motion.p>
      </div>
      <div className="w-full relative">
        <button
          onClick={handlePreviousVideo}
          className="bg-secondary hover:bg-content text-white font-bold py-2 px-4 rounded-lg absolute top-[40%] left-10 max-md:left-1 cursor-pointer z-10 max-sm:top-3 max-sm:left-3"
        >
          ⬅️
        </button>
        <video
          src={videos[activeVideoIndex]}
          autoPlay
          loop
          controls
          className="h-auto md:h-[55vh] w-[100%]"
        ></video>
        <button
          onClick={handleNextVideo}
          className="bg-secondary hover:bg-content text-white font-bold py-2 px-4 rounded-lg absolute top-[40%] right-10 max-md:right-1 cursor-pointer z-10 max-sm:top-3 max-sm:right-3"
        >
          ➡️
        </button>
      </div>
      <div className="flex">
        {panelsData.map((panel, index) => (
          <ExpandCard
            key={panel.name}
            index={index}
            activePanel={activePanel}
            handlePanelClick={handlePanelClick}
            {...panel}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Hobby, "hobby");
