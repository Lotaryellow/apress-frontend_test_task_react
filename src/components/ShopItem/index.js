import React from "react";
// import API from "../API/products";
import "./shopItem.css";

const ShopItem = ({ onVisible, onPlus, title, img, price, id }) => {
  return (
    <div className="shopItemBody">
      <img src={"images" + img} alt="" />
      <div className="shopBodyInfo">
        <p>{title}</p>
        <p className="shopInfoPrice">{price}</p>
      </div>
      <div className="shopBodyGroupButton">
        <button
          className="shopButtonOrder"
          onClick={() => onVisible({ title, img, price })}
        >
          Заказать
        </button>
        <button
          className="shopButtonBasket"
          onClick={() => onPlus({ title, img, price, id })}
        >
          В Корзину
        </button>
      </div>
    </div>
  );
};

export default ShopItem;
