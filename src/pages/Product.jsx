import axios from 'axios';
import './product.scss';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoLocationSharp } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';
import { IoHeartSharp } from 'react-icons/io5';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import { useLocalStorage } from '@uidotdev/usehooks';

const Product = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  const getProducts = async () => {
    await axios
      .get(`http://localhost:5500/users/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const [fav, saveFav] = useLocalStorage('favourites', []);

  const handleAddFav = (el) => {
    const isExist = fav.find((item) => item._id === el._id);

    if (isExist) {
      saveFav(fav.filter((item) => item._id !== el._id));
      return;
    }
    saveFav([...fav, el]);
  };

  const { id } = useParams();
  const isExist = fav.find((item) => item._id === product._id);

  function handleOrder(hotelImg, hotelName) {
    localStorage.setItem('hotelImg', hotelImg);
    localStorage.setItem('hotelName', hotelName);
    navigate('/cart');
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <Nav />
      <div className='container'>
        <div key={product?._id} className='product'>
          <div className='product1'>
            <div className='map'>
              <div className='name'>
                <h1>{product?.name}</h1>
                <p>
                  <span>
                    <IoLocationSharp />
                  </span>
                  {product?.location}
                </p>
              </div>
              <div className='name1'>
                {isExist ? (
                  <h1
                    onClick={() => handleAddFav(product)}
                    style={{ cursor: 'pointer' }}
                  >
                    <IoHeartSharp />
                  </h1>
                ) : (
                  <h1
                    onClick={() => handleAddFav(product)}
                    style={{ cursor: 'pointer' }}
                  >
                    <CiHeart />
                  </h1>
                )}
                <Link to={`/cart`}>Забронировать</Link>
              </div>
            </div>
            <div className='images'>
              <img src={product?.image} alt='' />
              <img src={product?.image1} alt='' />
            </div>
            <div className='images1'>
              <img src={product?.image2} alt='' />
              <img src={product?.image3} alt='' />
              <img src={product?.image4} alt='' />
              <img src={product?.image5} alt='' />
            </div>
          </div>

          <div className='product2'>
            <h2>Преимущества этого варианта</h2>
            <p>
              Отличное расположение <br /> высокие оценки от недавно побывавших
              гостей
            </p>
            <br />
            <p>БЕСПЛАТНАЯ парковка!</p>

            <button className='btnp1' onClick={() => handleOrder(product?.image, product?.name)}>
              Забронировать
            </button>
            <br />
            {isExist ? (
              <button
                className='btnp2'
                onClick={() => handleAddFav(product)}
                style={{ cursor: 'pointer' }}
              >
                Сохранено !
              </button>
            ) : (
              <button
                className='btnp2'
                onClick={() => handleAddFav(product)}
                style={{ cursor: 'pointer' }}
              >
                Сохранить жилье
              </button>
            )}
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='description'>
          <p>{product?.description}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
