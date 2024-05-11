import React, { useState } from 'react';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import axios from 'axios';
import './cart.scss';

const Cart = () => {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [comment, setComment] = useState('');

  const postTest = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://api.telegram.org/bot5378253930:AAEW0rlP7j7KA50TxsypNSLLKvQ5jYnNPfc/sendMessage?chat_id=-1001553163227&text=${encodeURIComponent(
          `<b>Details:</b>

    <b>The ordering was completed successfully!</b>

    <b>Phone Number: ${tel}</b>

    <b>Username: ${name}</b>

    <b>Hotel Name: ${localStorage.getItem('hotelName')}</b>

    <b>Comment: ${comment}</b>
       
`
        )}&parse_mode=html`
      )
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <>
      <Nav />
      <div className='container'>
        <h1 className='order-title'>Забронировать отель</h1>
        <div className='order'>
          <div className='left-img'>
            <img src={localStorage.getItem('hotelImg')} alt='' />
          </div>
          <div className='order-form'>
            <form onSubmit={postTest}>
              <input
                required
                type='text'
                defaultValue={localStorage.getItem('hotelName')}
              />
              <input
                required
                type='text'
                placeholder='Имя'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                required
                type='text'
                placeholder='Телефон номер'
                value={tel}
                onChange={(e) => setTel(e.target.value)}
              />
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder='Комментария'
                required
              ></textarea>
              <input className='btn_order' type='submit' value='Купить сейчас' />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
