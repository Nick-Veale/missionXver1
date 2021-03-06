import React, { useState } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export const ProjectsUI = (props) => {
  const [complexity, setComplexity] = useState("Beginner");
  const [queryValue, SetQueryValue] = useState(props.queryValue);
  //Filter Functions
  const handleComp = (event) => {
    setComplexity(event);
  };

  const showVariant = (string) => {
    if (string === props.numberShown) {
      return "contained";
    } else {
      return null;
    }
  };
  const showColor = (string) => {
    if (string === props.numberShown) {
      return "primary";
    } else {
      return null;
    }
  };
  const numberRadioButtonClassName = (num) => {
    if (num === props.numberShown) {
      return "numberRadioButton";
    } else {
      return "numberRadioButtonGrey";
    }
  };
  const complexityRadioButtonClassName = (num) => {
    if (num === complexity) {
      return "complexityRadioButton";
    } else {
      return "complexityRadioButtonGrey";
    }
  };
  const complexityVariant = (string) => {
    if (string === complexity) {
      return "contained";
    } else {
      return null;
    }
  };
  const complexityColor = (string) => {
    if (string === complexity) {
      return "primary";
    } else {
      return null;
    }
  };

  return (
    <div>
      <div className="projFilterControlsTop">
        <ButtonGroup size="small">
          <Button
            id={complexityRadioButtonClassName("Beginner")}
            variant={complexityVariant("Beginner")}
            color={complexityColor("Beginner")}
            onClick={() => handleComp("Beginner")}
          >
            Beginner
          </Button>
          <Button
            id={complexityRadioButtonClassName("Intermediate")}
            variant={complexityVariant("Intermediate")}
            color={complexityColor("Intermediate")}
            onClick={() => handleComp("Intermediate")}
          >
            Intermediate
          </Button>
          <Button
            id={complexityRadioButtonClassName("Advanced")}
            variant={complexityVariant("Advanced")}
            color={complexityColor("Advanced")}
            onClick={() => handleComp("Advanced")}
          >
            Advanced
          </Button>
        </ButtonGroup>

        <ButtonGroup size="small">
          <div style={{ marginRight: "20px" }}>SHOW</div>
          <Button
            id={numberRadioButtonClassName(25)}
            variant={showVariant(25)}
            onClick={() => props.handleSetNumber(25)}
            color={showColor(25)}
          >
            25
          </Button>
          <Button
            id={numberRadioButtonClassName(50)}
            variant={showVariant(50)}
            onClick={() => props.handleSetNumber(50)}
            color={showColor(50)}
          >
            50
          </Button>
          <Button
            id={numberRadioButtonClassName(100)}
            variant={showVariant(100)}
            onClick={() => props.handleSetNumber(100)}
            color={showColor(100)}
          >
            100
          </Button>
        </ButtonGroup>
      </div>

      <div className="projFilterControls">
        <FormControl>
          <FormLabel id="FormLabel">Subscription</FormLabel>
          <FormControlLabel
            id="FormControlLabel"
            value="Free"
            control={
              <Checkbox
                onChange={(e) => props.handleSetQ(e)}
                checked={queryValue.includes("free")}
                value="free"
                color="primary"
                name="free"
              />
            }
            label={<span style={{ fontFamily: "nunito" }}>Free</span>}
          />
          <FormControlLabel
            id="FormControlLabel"
            value="Premium"
            control={
              <Checkbox
                onChange={(e) => props.handleSetQ(e)}
                checked={queryValue.includes("primary")}
                color="primary"
                name="premium"
                value="premium"
              />
            }
            label={<span style={{ fontFamily: "nunito" }}>Premium</span>}
          />
        </FormControl>

        <FormControl>
          <FormLabel id="FormLabel">Activity Type</FormLabel>
          <FormControlLabel
            id="FormControlLabel"
            value="Animation"
            control={
              <Checkbox
                onChange={(e) => props.handleSetQ(e)}
                checked={queryValue.includes("animation")}
                name="animation"
                value="animation"
                color="primary"
              />
            }
            label={<span style={{ fontFamily: "nunito" }}>Animation</span>}
          />
          <FormControlLabel
            id="FormControlLabel"
            value="Game"
            control={
              <Checkbox
                onChange={(e) => props.handleSetQ(e)}
                checked={queryValue.includes("game")}
                name="game"
                value="game"
                color="primary"
              />
            }
            label={<span style={{ fontFamily: "nunito " }}>Game</span>}
          />
          <FormControlLabel
            id="FormControlLabel"
            value="Chatbot"
            control={
              <Checkbox
                onChange={(e) => props.handleSetQ(e)}
                checked={queryValue.includes("chatbot")}
                name="chatbot"
                value="chatbot"
                color="primary"
              />
            }
            label={<span style={{ fontFamily: "nunito " }}>Chatbot</span>}
          />
          <FormControlLabel
            id="FormControlLabel"
            value="Augmented Reality"
            control={
              <Checkbox
                color="primary"
                onChange={(e) => props.handleSetQ(e)}
                checked={queryValue.includes("augmentedReality")}
                name="augmentedReality"
                value="augmentedReality"
              />
            }
            label={
              <span style={{ fontFamily: "nunito " }}>Augmented Reality</span>
            }
          />
        </FormControl>

        <FormControl>
          <FormLabel id="FormLabel">Year Level</FormLabel>
          <FormControlLabel
            id="FormControlLabel"
            value="1-4"
            control={
              <Checkbox
                onChange={(e) => props.handleSetQ(e)}
                checked={queryValue.includes("oneToFour")}
                name="oneToFour"
                value="oneToFour"
                color="primary"
              />
            }
            label={<span style={{ fontFamily: "nunito " }}>1-4</span>}
          />
          <FormControlLabel
            id="FormControlLabel"
            value="5-6"
            control={
              <Checkbox
                onChange={(e) => props.handleSetQ(e)}
                checked={queryValue.includes("fiveToSix")}
                name="fiveToSix"
                value="fiveToSix"
                color="primary"
              />
            }
            label={<span style={{ fontFamily: "nunito " }}>5-6</span>}
          />
          <FormControlLabel
            id="FormControlLabel"
            value="7-8"
            control={
              <Checkbox
                onChange={(e) => props.handleSetQ(e)}
                checked={queryValue.includes("sevenToEight")}
                name="sevenToEight"
                value="sevenToEight"
                color="primary"
              />
            }
            label={<span style={{ fontFamily: "nunito " }}>7-8</span>}
          />
          <FormControlLabel
            id="FormControlLabel"
            value="9-13"
            control={
              <Checkbox
                onChange={(e) => props.handleSetQ(e)}
                checked={queryValue.includes("nineToThirteen")}
                name="nineToThirteen"
                value="nineToThirteen"
                color="primary"
              />
            }
            label={<span style={{ fontFamily: "nunito" }}>9-13</span>}
          />
        </FormControl>

        <FormControl>
          <FormLabel id="FormLabel">Subject Matter</FormLabel>
          <FormControlLabel
            id="FormControlLabel"
            value="Computer Science"
            control={
              <Checkbox
                onChange={(e) => props.handleSetQ(e)}
                checked={queryValue.includes("computerScience")}
                name="computerScience"
                value="computerScience"
                color="primary"
              />
            }
            label={
              <span style={{ fontFamily: "nunito " }}>Computer Science</span>
            }
          />
          <FormControlLabel
            id="FormControlLabel"
            value="Maths"
            control={
              <Checkbox
                onChange={(e) => props.handleSetQ(e)}
                checked={queryValue.includes("maths")}
                name="maths"
                value="maths"
                color="primary"
              />
            }
            label={<span style={{ fontFamily: "nunito " }}>Maths</span>}
          />
          <FormControlLabel
            id="FormControlLabel"
            value="Science"
            control={
              <Checkbox
                onChange={(e) => props.handleSetQ(e)}
                checked={queryValue.includes("science")}
                name="science"
                value="science"
                color="primary"
              />
            }
            label={<span style={{ fontFamily: "nunito " }}>Science</span>}
          />
          <FormControlLabel
            id="FormControlLabel"
            value="Language"
            control={
              <Checkbox
                onChange={(e) => props.handleSetQ(e)}
                checked={queryValue.includes("language")}
                name="language"
                value="language"
                color="primary"
              />
            }
            label={<span style={{ fontFamily: "nunito " }}>Language</span>}
          />
          <FormControlLabel
            id="FormControlLabel"
            value="Art"
            control={
              <Checkbox
                onChange={(e) => props.handleSetQ(e)}
                checked={queryValue.includes("art")}
                name="art"
                value="art"
                color="primary"
              />
            }
            label={<span style={{ fontFamily: "nunito " }}>Art</span>}
          />
          <FormControlLabel
            id="FormControlLabel"
            value="Music"
            control={
              <Checkbox
                onChange={(e) => props.handleSetQ(e)}
                checked={queryValue.includes("music")}
                name="music"
                value="music"
                color="primary"
              />
            }
            label={<span style={{ fontFamily: "nunito " }}>Music</span>}
          />
        </FormControl>
      </div>
    </div>
  );
};
