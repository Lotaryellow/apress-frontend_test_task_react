import React, { useEffect, useState } from "react";
import Basket from "./components/Basket";
import OrderModal from "./components/OrderModal";
import ShopItem from "./components/ShopItem";
import API from "./assets/API/products";
import "./App.css";

export const App = () => {
  const [visible, setShopVisible] = useState(false);
  const [item, setShopItems] = useState({});
  const [itemOnBasket, setItemOnBasket] = useState([]);
  const [visibleBasket, setBasketVisible] = useState(false);

  const showShop = (item) => {
    setShopVisible(true);
    setShopItems(item);
  };

  const basketClose = () => {
    setBasketVisible(false);
  };

  const addNewItemOnBasket = (obj) => {
    setBasketVisible(true);
    setItemOnBasket((prev) => [...prev, obj]);
  };

  const deleteItemOnBasket = (index) => {
    const idx = itemOnBasket.findIndex((el) => el.index === index);
    const renderBasketDelete = [...itemOnBasket.slice(0, idx)];
    setItemOnBasket(renderBasketDelete);
  };

  useEffect(() => {
    if (itemOnBasket.length === 0) {
      setBasketVisible(false);
    }
  }, [itemOnBasket]);

  return (
    <>
      {visible && (
        <OrderModal {...item} onClose={() => setShopVisible(false)} />
      )}
      <h1 className="mainTitle">Sofas Shop</h1>
      {visibleBasket && (
        <Basket
          items={itemOnBasket}
          onDelete={deleteItemOnBasket}
          onClose={basketClose}
        />
      )}
      {API.products.map((item) => (
        <ShopItem
          key={item.id}
          {...item}
          onVisible={showShop}
          onPlus={(obj) => addNewItemOnBasket(obj)}
        />
      ))}
    </>
  );
};
