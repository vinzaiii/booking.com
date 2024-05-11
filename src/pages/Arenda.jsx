import React, { useState } from 'react'
import './arenda.scss'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import { Input, DatePicker, Space } from 'antd';
import { FaPhone } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import axios from 'axios';

const Arenda = () => {
  const [location, setLocation] = useState('')
  const [phone, setPhone] = useState('')
  const [mail, setMail] = useState('')

  const postTest = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://api.telegram.org/bot5378253930:AAEW0rlP7j7KA50TxsypNSLLKvQ5jYnNPfc/sendMessage?chat_id=-1001553163227&text=${encodeURIComponent(
          `<b>Details:</b>

    <b>The ordering was completed successfully!</b>

    <b>Location: ${location}</b>

    <b>Phone number: ${phone}</b>

    <b>Mail : ${mail}</b>

       
`
        )}&parse_mode=html`
      )
      .then(() => {
        window.location.reload();
      });
  };

  const { RangePicker } = DatePicker;
  return (
    <>
      <Nav />
      <div className="undernava">
        <h1>Аренда автомобилей для любой поездки</h1>
        <p>Отличные предложения от крупнейших прокатных компаний.</p>
      </div>
      <div className="container">
        <form onSubmit={postTest}>
          <Input
            className='inpa'
            size="large"
            required
            placeholder="Место получения"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            prefix={<IoSearch />} />

          <Input
            className='inpa'
            size="large"
            type='number'
            required
            placeholder="Телефон номер"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            prefix={<FaPhone />} />

          <Input
            className='inpa'
            size="large"
            type='text'
            required
            placeholder="Электронная почта"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            prefix={<CiMail />} />

          <Space direction="vertical" size={12}>
            <RangePicker
              required
              className='datea'
              showTime />
          </Space>

          <input
            type="submit"
            required
            className='inpa1'
          />

        </form>
      </div>

      <div className="infoa">
        <div className="leftar1">
          <img src="https://t-cf.bstatic.com/design-assets/assets/v3.109.0/illustrations-traveller/CustomerService.png" alt="" />
          <div className="leftar2">
            <h2>Мы всегда готовы помочь</h2>
            <p>Наша служба поддержки работает более чем на 30 языках</p>
          </div>
        </div>
        <div className="leftar1">
          <img src="https://t-cf.bstatic.com/design-assets/assets/v3.109.0/illustrations-traveller/FreeCancellation.png" alt="" />
          <div className="leftar2">
            <h2>Бесплатная отмена</h2>
            <p>Действует для большинства бронирований,если до получения более 48 часов.</p>
          </div>
        </div>
        <div className="leftar1">
          <img src="https://t-cf.bstatic.com/design-assets/assets/v3.109.0/illustrations-traveller/Reviews.png" alt="" />
          <div className="leftar2">
            <h2>Более 5 млн отзывов</h2>
            <p>Отзывы от реальных клиентов.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Arenda