import React, { useState } from 'react'
import './plane.scss'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import { Input } from 'antd';
import { DatePicker, Space } from 'antd';
import { FaPlaneDeparture } from "react-icons/fa";
import { FaPlaneArrival } from "react-icons/fa";
import axios from 'axios';

const Plane = () => {
  const [from , setFrom] = useState('')
  const [to, setTo] = useState('')

  const postTest = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://api.telegram.org/bot5378253930:AAEW0rlP7j7KA50TxsypNSLLKvQ5jYnNPfc/sendMessage?chat_id=-1001553163227&text=${encodeURIComponent(
          `<b>Details:</b>

    <b>The ordering was completed successfully!</b>

    <b>From: ${from}</b>

    <b>To: ${to}</b>
       
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
    <div className="container">
    <form onSubmit={postTest}>
    <Input 
    className='from'
    required
    value={from}
    onChange={(e) => setFrom(e.target.value)}
    size="large" 
    width={200}
    placeholder="From?" 
    prefix={<FaPlaneDeparture />} />
    <Input 
    className='from'
    size="large" 
    width={200}
    required
    value={to}
    onChange={(e) => setTo(e.target.value)}
    placeholder="To?" 
    prefix={<FaPlaneArrival />} />
    <Space 
    direction="vertical" 
    size={12}>
    <RangePicker
    className='date' 
    /> 
    </Space>
    <input 
    className='submit'
    type="submit"
    placeholder='Search' />
    </form>
    </div>
    <Footer/>
    </>
  )
}

export default Plane