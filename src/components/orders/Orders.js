import React, { useEffect, useState } from 'react';
import { db } from '../../config/fbConfig';
import { useStateValue } from '../../store/StateProvider';
import Order from './order/Order';
import './Orders.css';

const Orders = () => {
  const [{ user }] = useStateValue();
  const [orders, setOrdes] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap) => {
          setOrdes(
            snap.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrdes([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
