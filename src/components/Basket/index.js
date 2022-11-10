import React from "react";
import "./basket.css";

const Basket = ({ onDelete, onClose, items = [] }) => {
  return (
    <div className="basketBody">
      <div className="basketHeader">Вы добавили в корзину:</div>
      <div className="basketCenter">
        {items.map((obj, index) => (
          <div key={index} className="basketCenterItem">
            <img className="basketItemImg" src={"images" + obj.img} alt="" />
            <div className="basketItemInfo">
              <p className="basketInfoTitle">{obj.title}</p>
              <p className="basketInfoPrice">{obj.price} руб.</p>
            </div>
            <p className="basketDeleteClose" onClick={() => onDelete(index)}>
              X
            </p>
          </div>
        ))}
      </div>
      <div className="basketFooter">
        <button className="basketOrderButton">Перейти в корзину</button>
        <button className="basketClose" onClick={() => onClose()}>
          Закрыть Корзину
        </button>
      </div>
    </div>
  );
};

export default Basket;
