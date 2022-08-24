import { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import Bill from 'components/Bill/Bill';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { truck, avatar } from 'assets';
import { db, auth } from 'services/firebase';

import './style.scss';

function Profile() {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [data, setData] = useState([]);
  const [id, setId] = useState('');
  const [toggle, setToggle] = useState(true);
  const [dish, setDish] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const orderRef = collection(db, 'orders');
  const userRef = collection(db, 'users');
  const dishRef = collection(db, 'dishes');
  const updateInfoRef = doc(db, 'users', 'a0sAWN8IU70iWXYZjwxt');

  const fetchUserId = async () => {
    try {
      const q = query(userRef, where('uid', '==', user.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setId(data.uid);
    } catch (error) {
      console.error(error);
      alert('Error while fetching data');
    }
  };

  const editInfo = (name, email, phone, dob) => {
    if ((name, email, phone, dob)) {
      updateDoc(updateInfoRef, {
        name : name,
        email: email,
        phone: phone,
        dob  : dob,
      }).then(() => alert('Edit success'));
      setName('');
      setEmail('');
      setPhone('');
      setDob('');
    } else {
      alert('Try again');
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/');
    fetchUserId();
  }, [user, loading]);

  // get orders list
  useEffect(() => {
    getDocs(orderRef).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        setData((prev) => [...prev, doc.data()]);
      });
    });
  }, []);

  // get dish list
  useEffect(() => {
    getDocs(dishRef).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        setDish((prev) => [...prev, doc.data()]);
      });
    });
  }, []);

  console.log(user);
  console.log(id);
  console.log(loading);

  return (
    <div>
      <Header />
      <div className='profile'>
        <div className='profile__img'>
          <img className='img1' src={truck} alt='background img' />
          <img className='img2' src={avatar} alt='avatar img' />
        </div>
        <div className='profile__switch'>
          <button
            onClick={() => setToggle(true)}
            className={`btn1__${toggle}`}
            autoFocus
          >
            {' '}
						Profile{' '}
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`btn2__${toggle}`}
          >
            {' '}
						Order History{' '}
          </button>
        </div>
        <div
          style={{ display: toggle ? '' : 'none' }}
          className='profile__info'
        >
          <h1>Personal Information</h1>
          <input
            type='text'
            placeholder='Username'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='text'
            placeholder='Phone Number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type='text'
            placeholder='Date Of Birth'
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <button onClick={() => editInfo(name, email, phone, dob)}>
						Edit
          </button>
        </div>
        <div
          style={{ display: toggle ? 'none' : '' }}
          className='profile__order'
        >
          <h1>Order History</h1>
          <div style={{ overFlow: 'auto' }}>
            {data
              .filter((item) => item.uid === id)
              .map((item) => (
                <Bill key={item.id} dishesInOrder={item.dishes} dishes={dish} />
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
