import React from "react";
import "./orderModal.css";

const OrderModal = (props) => {
  return (
    <div className="orderModal" onClick={() => props.onClose()}>
      <div className="orderBody">
        <div className="orderContent" onClick={(e) => e.stopPropagation()}>
          <div className="orderContentHeader">
            <p>{props.title}</p>
            <div className="orderCloseButton" onClick={() => props.onClose()}>
              X
            </div>
          </div>
          <div className="orderContentCenter">
            <div className="orderCenterInfo">
              <img className="orderInfoImg" src={"images" + props.img} alt="" />
              <p>{props.price}</p>
            </div>
            <div className="orderCenterComment">
              <p>Комментарий к заказу:</p>
              <form action="#" method="post">
                <textarea className="orderCommentArea" name="" id=""></textarea>
              </form>
            </div>
          </div>
          <div className="orderContentFooter">
            <form action="#" method="post">
              <p>Ваш телефон*:</p>
              <input type="tel" />
            </form>
            <button type="submit">Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
