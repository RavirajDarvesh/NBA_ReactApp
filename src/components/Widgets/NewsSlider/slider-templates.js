import React from "react";
import Slick from "react-slick";
import { Link } from "react-router-dom";

import Styles from "./slider.css";

const SliderTemplates = props => {
  let template = null;
  const Settings = {
    dots: true,
    infinte: true,
    speed: 500,
    slidesToShow: 1,
    autoScroll: true,
    slidesToScroll: 1,
    ...props.settings
  };

  switch (props.type) {
    case "featured":
      template = props.data.map((item, i) => {
        return (
          <div key={i}>
            <div className={Styles.featuredItem}>
              <div
                className={Styles.featuredImage}
                style={{
                  background: `url(../images/articles/${item.image})`
                }}
              >
                <Link to={`/articles/${item.id}`}>
                  <div className={Styles.featuedCaption}>{item.title}</div>
                </Link>
              </div>
            </div>
          </div>
        );
      });
      break;

    default:
      template = null;
  }

  return <Slick {...Settings}>{template}</Slick>;
};

export default SliderTemplates;
