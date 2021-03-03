import styled from "@emotion/styled";

import React from "react";

import xw from "xwind";

function calloutStyles(type) {
  switch (type) {
    case "warning":
      return xw` bg-amber-50 border border-l-8 border-amber-300 dark[bg-yellow-600 text-white border-yellow-800]`;
    case "info":
      return xw` bg-blue-50 border border-l-8 border-blue-300 dark[bg-lightBlue-700 text-white border-lightBlue-900]`;
    case "danger":
      return xw` bg-red-50 border border-l-8 border-red-300 dark[bg-red-700 text-white border-red-900]`;
    case "success":
      return xw` bg-green-50 border border-l-8 border-green-300 dark[bg-green-700 text-white border-green-900]`;
    default:
      return xw``;
  }
}

const CalloutWrapper = styled.div((props) => ({
  ...xw`
    flex font-normal text-gray-800 items-center px-6
  `,
  ...calloutStyles(props.type),
}));

const CalloutTitle = styled.div({
  ...xw`text-gray-900 font-semibold`,
});

const CalloutBody = styled.div({
  ...xw``,
});

export default function Callout(props) {
  return (
    <CalloutWrapper type={props.type}>
      {props.title && <CalloutTitle>{props.title}</CalloutTitle>}
      <CalloutBody>{props.children}</CalloutBody>
    </CalloutWrapper>
  );
}
