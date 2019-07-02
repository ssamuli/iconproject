import React from "react";

export default function crowsfeet(props) {
  const { fill, size } = props.details;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill={fill} d="M0 20v-6L25 0l3 4-18 10h30v6H11l17 10-3 4L0 20z" />
    </svg>
  );
}
