import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import {MapChart} from "./MapChart";

interface WorldMapChartProps {

}

export const WorldMapChart: React.FC<WorldMapChartProps> = ({}) => {
    const [content, setContent] = useState("af");
    return (
      <div>
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    );
}