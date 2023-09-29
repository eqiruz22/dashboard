import React from "react";
import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../dataLink";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item">
          <span className="title" key={item.id}>
            {item.title}
          </span>
          {item.listItems.map((list) => (
            <Link to={list.url} className="listItem" key={list.id}>
              <img src={list.icon} />
              <span className="listItemTitle">{list.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
