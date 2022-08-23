import { collection, getDocs, addDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from 'services/firebase';

function Add() {
  const dishRef = collection(db, 'dishes');
  const orderRef = collection(db, 'orders');
  const userRef = collection(db, 'users');
  const [data, setData] = useState([]);
  //test
  const [order, setOrder] = useState([]);
  const [user, setUser] = useState([]);
  const [id, setId] = useState('');

  const fecthUserId = async () => {
    try {
      const doc = await getDocs(userRef);
      const data = doc.docs[1].data();
      setId(data.uid);
    } catch (err) {
      console.log(err);
    }
  };

  const res = order.filter((item) => item.uid === id);

  const addDish = (name, price, time, rating, url, type, discount) => {
    addDoc(dishRef, {
      name    : name,
      price   : price,
      time    : time,
      rating  : rating,
      img_url : url,
      type    : type,
      discount: discount,
    }).then(() => console.log('dish added'));
  };

  const addOrder = (name, price, url, dishes) => {
    addDoc(orderRef, {
      name   : name,
      price  : price,
      img_url: url,
      dishes : dishes,
    }).then(() => console.log('order added'));
  };

  useEffect(() => {
    getDocs(dishRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          setData((prev) => [...prev, doc.data()]);
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log('render');
  }, []);

  useEffect(() => {
    getDocs(orderRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          setOrder((prev) => [...prev, doc.data()]);
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log('render');
    fecthUserId();
  }, []);

  useEffect(() => {
    getDocs(userRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          setUser((prev) => [...prev, doc.data()]);
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log('render');
  }, []);

  console.log(data);

  return (
    <div>
      <button
        onClick={() => addDish('Pizza', 13, 40, 4.5, 'add later', 'food', 50)}
      >
				Add dish
      </button>
      <button onClick={() => addOrder()}> Add order</button>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>
            <img src={item.img_url} alt='dish image' /> {item.name}
          </li>
        ))}
      </ul>
      <h1>Order item</h1>
      <ul>
        {order.map((item) => (
          <li key={item.quantity}>{item.name}</li>
        ))}
      </ul>
      <h1>User name list</h1>
      <ul>
        {user.map((item) => (
          <li key={item.uid}>{item.uid}</li>
        ))}
      </ul>
      <h1>User name with orders</h1>
      <ul>
        {res.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Add;
