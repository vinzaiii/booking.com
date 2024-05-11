import React, { useState } from 'react'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import './variant.scss'
import { Input, DatePicker, Space } from 'antd';
import { TbBuildingCarousel } from "react-icons/tb";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import axios from 'axios';

const Variant = () => {
  const [travel, setTravel] = useState('')
  const postTest = (e) => {
    e.preventDefault();
    axios  
      .post(
        `https://api.telegram.org/bot5378253930:AAEW0rlP7j7KA50TxsypNSLLKvQ5jYnNPfc/sendMessage?chat_id=-1001553163227&text=${encodeURIComponent(
          `<b>Details:</b>

    <b>The ordering was completed successfully!</b>

    <b>Travel to: ${travel}</b>

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
    <Nav/>
    <div className="undernavv">
    <h1>Экскурсии и развлечения</h1>
    <p>Найдите новые варианты досуга по вкусу и интересам.</p>
    </div>
    <div className="container">
      <form onSubmit={postTest}>
      <Input
            className='inpv'
            size="large"
            required
            value={travel}
            onChange={(e)=> setTravel(e.target.value)}
            placeholder="Куда хотите вы поехать?"
            prefix={<TbBuildingCarousel />} />
             <Space direction="vertical" size={'small'}>
            <RangePicker
              required
              className='datev' />
          </Space>
          <button className='btnv'>Проверить цены</button>
      </form>
    </div>

    <div className="container">
      <div className="variantv">
      <div className="cardv">
        <h1><TbBuildingCarousel /></h1>
        <div className="cardv2">
          <h3>Самые популярные варианты досуга</h3>
          <p>Получите максимум впечатлений от путешествия с лучшими экскурсиями, развлечениями и другими вариантами досуга.</p>
        </div>
      </div>
      <div className="cardv">
        <h1><FaRegCalendarCheck /></h1>
        <div 
        className="cardv2">
          <h3>Быстро и удобно</h3>
          <p>Бронируйте билеты онлайн за пару минут и с возможностью бесплатной отмены для множества вариантов досуга.</p>
        </div>
      </div>
      <div className="cardv">
      <h1><FaHeadset /> </h1>
      <div className="cardv2">
        <h3>Помощь в любое время</h3>
        <p>Международная служба поддержки Booking.com работает для вас круглосуточно.</p>
      </div>
      </div>
      
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Variant