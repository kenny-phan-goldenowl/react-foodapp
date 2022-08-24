import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';
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

  // get User ID -----------------------------------------------
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

  // add dish to firestore -----------------------------------------------------
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

  const addOrder = (id, uid, dishes) => {
    addDoc(orderRef, {
      id    : id,
      uid   : uid,
      dishes: dishes,
    }).then(() => console.log('order added'));
  };

  // update an item -----------------------------------------------------------
  const updateRef = doc(db, 'dishes', 'OCZREvcwrGQOYavV8JlR');
  const updateDish = (name) => {
    updateDoc(updateRef, {
      name: name,
    }).then(() => console.log('Updated dish'));
  };

  // fetch data -------------------------------------------------------------
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
      <button onClick={() => updateDish('pizza')}>Update dish</button>
      <button
        onClick={() =>
          addOrder(6, '5F54XWzoARUvZdsP1ivX96xiSQy1', [
            'zkxXrdNIBu1uFY3eAh1c',
            'TvvfpIFjgFmSvCCaCk9d',
            'nMWZNa83HFELMfdDsuO5',
          ])
        }
      >
        {' '}
				Add order
      </button>
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
