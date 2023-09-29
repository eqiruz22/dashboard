import React from "react";
import "./topbox.scss";
import { topDealUsers } from "../../dataLink";

const TopBox = () => {
  return (
    <div className="topbox">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((item) => (
          <div className="listItem" key={item.id}>
            <div className="user">
              <img src={item.img} alt="" />
              <div className="userText">
                <span className="username">{item.username}</span>
                <span className="email">{item.email}</span>
              </div>
            </div>
            <span className="amount">${item.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
