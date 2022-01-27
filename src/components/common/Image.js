import React from "react";
import PropTypes from "prop-types";

export const MyImage = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

MyImage.defaultProps = {
  alt: "myImage",
};

MyImage.prototypes = {
  src: PropTypes.string.isRequired,
};
