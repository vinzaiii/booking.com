import React, { useEffect } from 'react'
import './favourite.scss'
import axios from 'axios'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import { useLocalStorage } from "@uidotdev/usehooks";
import { CiHeart } from 'react-icons/ci';
import { IoHeartSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Favourite = () => {
  const [fav, saveFav] = useLocalStorage('favourites', [])

  const handleAddFav = (el) => {
    const isExist = fav.find((item) => item._id === el._id)
    if (isExist) {
      saveFav(fav.filter((item) => item._id !== el._id))
      return;
    }
    saveFav([...fav, el])
  }

  const getProducts = async () => {
    await axios.get('http://localhost:5500/users')
      .then((res) => {
        getProducts(res.data);
      })
      .catch((err) => {
        alert(err);
      })
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <Nav />
      <div className="container">
        {fav.length ? (
          <div className='wrapper'>
            {fav?.map((el) => {
              const isExists = fav.find((item) => item.id === el.id);
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
                    {isExists ? (
                      <p
                        className='favp'
                        onClick={() => handleAddFav(el)}
                        style={{ cursor: 'pointer' }}
                      >
                        <IoHeartSharp />
                      </p>
                    ) : (
                      <p
                        onClick={() => handleAddFav(el)}
                        style={{ cursor: 'pointer' }}
                      >
                        <CiHeart />
                      </p>
                    )}
                  </div>
                  <div className="price">
                    {isExists ? (
                      <h1
                        onClick={() => handleAddFav(el)}
                        style={{ cursor: 'pointer' }}
                      >
                        <IoHeartSharp />
                      </h1>
                    ) : (
                      <h1
                        onClick={() => handleAddFav(el)}
                        style={{ cursor: 'pointer' }}
                      >
                        <CiHeart />
                      </h1>
                    )}
                    <h2>UZS {el.price.toLocaleString()}</h2>
                    <button>Наличие мест </button>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className='wrapper'>
            <img className='zero' src='https://gshop.uz/assets/images/wooz/no-info.png' />
          </div>
        )}
      </div>
      <Footer/>
    </>
  )
}

export default Favourite