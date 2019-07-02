import React from "react";

export default function hyperpigmentation(props) {
  const { fill, size } = props.details;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill={fill} d="M20 2v36a18 18 0 0 0 0-36zm0 38a20 20 0 1 1 0-40 20 20 0 0 1 0 40z" />
    </svg>
  );
}
