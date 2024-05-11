import React, { useEffect, useRef, useState } from 'react'
import './home.scss'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoPersonOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { ru } from 'date-fns/locale/ru';
import axios from 'axios';
import Select from 'react-select'
import { Link, useNavigate } from 'react-router-dom';
registerLocale('ru', ru)


const options = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' }
]

const options1 = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' }
]


const Home = () => {

  const [date, handleDateSelect, handleDateChange] = useState(new Date());
  const [date1, handleDateSelect1, handleDateChange1] = useState(new Date());
  const navigate = useNavigate()

  const [product, setProduct] = useState([]);

  const getProducts = async () => {
    await axios.get('http://localhost:5500/users')
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        alert(err);
      })
  }

  const [search, setSearch] = useState('');
  const bookSearch = product.filter((el) => {
    return el.name.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    getProducts();
  }, []);

  const handleLocalStorage = (e) => {
    e.preventDefault()
    localStorage.setItem('name', search)
    navigate('/search')
  }

  return (
    <>
      <Nav />
      <header>
        <div className="container">
          <div className="genius">
            <div className="left1">
              <h1>Войдите в аккаунт и <br /> сэкономьте</h1>
              <h3>Сэкономьте от 10% в объектах размещения, <br /> отмеченных синим значком Genius.</h3>
              <button>Войти или зарегистрироваться</button>
            </div>
            <div className="right1">
              <img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x300/316543397.png?k=c42a7cb04035fb44ee49b1f539e6b2bfb745955a8fe8df2db662c938077cd021&o=" alt="" />
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="search">
          <form className='forms' onSubmit={handleLocalStorage}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='inp1' type="text"
              placeholder='Куда вы хотите поехать?'
              required />

            <DatePicker className='inp2'
              selected={date}
              onSelect={handleDateSelect}
              onChange={handleDateChange}
              required
              locale="ru" />
            <DatePicker className='inp2'
              selected={date1}
              onSelect={handleDateSelect1}
              onChange={handleDateChange1}
              required
              locale="ru" />
            <input
              className='inp3'
              type="submit"
              placeholder='Найти'
            />
          </form>
        </div>
      </div>
      <div className="drawerwrapper">
        {search !== '' ? (
          bookSearch.map((el) => {
            return (
              <div
                onClick={() => {
                  setSearch(el?.name)
                }} className="card1" key={el._id}>
                <div className="card2">
                  <h3 className='h3'><span><IoBedOutline /></span> {el.name}</h3>
                  <h4 className='h4'>{el.place}, {el.country}</h4>
                </div>
              </div>
            )
          })
        ) : (
          <>
            <h2></h2>
          </>
        )}
      </div>

      <div className="container">
        <div className="describe">
          <h1>Популярные направления</h1>
          <p>Куда чаще всего отправляются путешественники из Узбекистана.</p>
        </div>
        <div className="location">
          <div className="cardl">
            <img src="https://telegra.ph/file/24e718139aa288460c793.png" alt="Tashkent" />
            <h1>Ташкент</h1>
          </div>
          <div className="cardl">
            <img src="https://www.advantour.com/img/uzbekistan/samarkand/registan-square.jpg" alt="Samarkand" />
            <h1>Самарканд</h1>
          </div>
          <div className="cardl">
            <img src="https://live.staticflickr.com/65535/52378455665_285df6481e_b.jpg" alt="Bukhara" />
            <h1>Бухара</h1>
          </div>
          <div className="cardl">
            <img src="https://central-asia.guide/wp-content/uploads/2021/11/Khiva_gate_and_Kalta_minor_tiles-1024x682.jpg" alt="Khiva" />
            <h1>Кхива</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="appart">
          <div className="lefta">
            <h1>Найдите дома <br /> и аппартименты на <br /> следующей поездки</h1>
            <button>Узнать больше</button>
          </div>
          <div className="righta">
            <img src="https://cf.bstatic.com/psb/capla/static/media/bh_aw_cpg_main_image.b4347622.png" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home