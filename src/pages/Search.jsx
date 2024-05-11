import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import Nav from '../components/Nav/Nav'
import { CiSquareRemove } from "react-icons/ci";
import DatePicker from "react-datepicker";
import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import "react-datepicker/dist/react-datepicker.css";
import { IoPersonOutline } from "react-icons/io5";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { ru } from 'date-fns/locale/ru';
import { Link } from 'react-router-dom';
import Select from 'react-select'
import Footer from '../components/Footer/Footer';
import './search.scss'
registerLocale('ru', ru)

const Search = () => {
  const [product, setProduct] = useState([]);
  const [hotel, setHotel] = useState('')

  const getProducts = async () => {
    await axios.get('http://localhost:5500/users')
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        alert(err);
      })
  }

  useEffect(() => {
    getProducts();
    setHotel(localStorage.getItem('name'))
  }, []);

  const hotelFilter = product?.filter((el) => {
    return el?.name?.toLowerCase().includes(hotel?.toLowerCase())
  })

  return (
    <>
      <Nav />
      <div className="container">
        {localStorage.getItem("name") ? (
          <h1 className='hotelsearch'>найденные отели</h1>
        ) : (
          <h1 className='hotelsearch'>Отели:</h1>
        )}

        {localStorage.getItem('name') ? (
          <div className="hotels">
            <button onClick={() => {
              localStorage.removeItem('name')
              window.location.reload()
            }}>{hotel} <span><h2><CiSquareRemove /></h2></span></button>
          </div>
        ) : null}
      </div>
      <section>
        <div className="container">
          <div className="right2">
            <div className="wrapper">
              {hotelFilter?.length ? (
                hotelFilter?.map((el) => {
                  return (
                    <div key={el._id} className="card">
                      <div className="info">
                        <Link to={`/product/${el._id}`} className="lefti">
                          <img src={el.image} alt="" />
                        </Link>
                        <Link to={`/product/${el._id}`} className="righti">
                          <h1>{el.name}</h1>
                          <div className="p">
                            <p>{el.place}</p>
                            <p>{el.distance}</p>
                          </div>
                          <div className="pb">
                            <p>{el.desc}</p>
                            <b>{el.desc1}</b>
                          </div>
                        </Link>
                      </div>
                      <div className="price">
                        <h2>UZS {el.price.toLocaleString()}</h2>
                        <Link to={`/buy`}>Наличие мест </Link>
                      </div>
                    </div>
                  )
                })
              ) : (
                product?.map((el) => {
                  return (
                    <div key={el._id} className="card">
                      <div className="info">
                        <Link to={`/product/${el._id}`} className="lefti">
                          <img src={el.image} alt="" />
                        </Link>
                        <Link to={`/product/${el._id}`} className="righti">
                          <h1>{el.name}</h1>
                          <div className="p">
                            <p>{el.place}</p>
                            <p>{el.distance}</p>
                          </div>
                          <div className="pb">
                            <p>{el.desc}</p>
                            <b>{el.desc1}</b>
                          </div>
                        </Link>
                        
                      </div>
                      <div className="price">
                        <h2>UZS {el.price.toLocaleString()}</h2>
                        <button>Наличие мест </button>
                      </div>
                    </div>
                  )
                })
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Search



