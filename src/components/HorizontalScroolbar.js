import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import BodyParts from "./BodyParts";
import {
  ScrollMenu, //اللي هتعمل الاسكرول هحوط بيها الكاردس
  VisibilityContext,
} from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

function HorizontalScroolbar({ data, setBodyPart, bodyPart }) {
  //left and right arrow code

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item, index) => (
        <Box
          key={item.id || item.name || index}
          itemID={item.id || item.name}
          title={item.id || item.name}
          m="0 40px"
        >
          <BodyParts
            item={item}
            bodyPart={bodyPart}
            setBodtPart={setBodyPart}
          />
        </Box>
      ))}
    </ScrollMenu>
  );
}

export default HorizontalScroolbar;
