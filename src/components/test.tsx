import React from "react";
import { HorizontalDivider, HorizontalSpacer, Row } from "./misc";
import { colors } from "../@xlox/ui.mjs";

function Test() {
  return (
    <div>
      <Row>
        <h1>Intro</h1>
        <HorizontalDivider color={colors.pink[700]} />
        <HorizontalSpacer n={5} />
      </Row>
    </div>
  );
}

export default Test;
