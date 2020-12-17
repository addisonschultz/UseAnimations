import * as React from "react";
import { addPropertyControls, ControlType } from "framer";
import UseAnimations from "react-useanimations";
import { chooseIcon } from "./chooseIcon";

/**
 * TODO:
 * - Update color when changed
 * - Update icon when changed
 */

interface IconProps {
  height: number;
  width: number;
  iconName: string;
  strokeColor: string;
  speed: number;
  reverse: boolean;
  autoplay: boolean;
  loop: boolean;
  onClick: () => void;
}

export function Icon({
  width,
  iconName,
  strokeColor,
  speed,
  reverse,
  autoplay,
  loop,
  onClick,
}: IconProps) {
  React.useEffect(() => {}, [iconName, strokeColor]);

  return (
    <>
      <UseAnimations
        animation={chooseIcon(iconName)}
        size={width}
        reverse={reverse}
        loop={loop}
        autoplay={autoplay}
        speed={speed}
        strokeColor={strokeColor}
        onClick={onClick}
        style={{ padding: 100 }}
      ></UseAnimations>
    </>
  );
}

addPropertyControls(Icon, {
  iconName: {
    type: ControlType.Enum,
    options: [
      "activity",
      "airplay",
      "alertCircle",
      "alertOctagon",
      "alertTriangle",
      "archive",
      "arrowDown",
      "arrowDownCircle",
      "arrowLeftCircle",
      "arrowRightCircle",
      "arrowUp",
      "arrowUpCircle",
      "bookmark",
      "calendar",
      "checkBox",
      "codepen",
      "copy",
      "download",
      "edit",
      "explore",
      "facebook",
      "github",
      "heart",
      "infinity",
      "info",
      "instagram",
      "linkedin",
      "loading",
      "loading2",
      "loading3",
      "lock",
      "mail",
      "maximizeMinimize",
      "maximizeMinimize2",
      "menu",
      "menu2",
      "menu3",
      "menu4",
      "microphone",
      "microphone2",
      "notification",
      "notification2",
      "playPause",
      "playPauseCircle",
      "plusToX",
      "pocket",
      "radioButton",
      "scrollDown",
      "searchToX",
      "settings",
      "settings2",
      "share",
      "skipBack",
      "skipForward",
      "star",
      "thumbUp",
      "toggle",
      "trash",
      "trash2",
      "twitter",
      "userMinus",
      "userPlus",
      "userX",
      "video",
      "video2",
      "visibility",
      "visibility2",
      "volume",
      "youtube",
      "youtube2",
    ],
  },
  strokeColor: {
    type: ControlType.Color,
    title: "Color",
    defaultValue: "#000000",
  },
  speed: {
    type: ControlType.Number,
    title: "Speed",
    defaultValue: 1,
    min: 0.1,
    max: 5,
    step: 0.1,
    displayStepper: true,
  },
  reverse: {
    type: ControlType.Boolean,
    title: "Reverse",
    defaultValue: false,
  },
  autoplay: {
    type: ControlType.Boolean,
    title: "Autoplay",
    defaultValue: false,
  },
  loop: {
    type: ControlType.Boolean,
    title: "Loop",
    defaultValue: false,
  },
  onClick: {
    type: ControlType.EventHandler,
    title: "Click",
  },
});

Icon.defaultProps = {
  height: 32,
  width: 32,
};
