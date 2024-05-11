import React, { useState } from 'react';
import './nav.scss';
import { IoBedOutline } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Drawer } from 'antd';
import { LuPlane } from 'react-icons/lu';
import { IoMdExit } from 'react-icons/io';
import { IoCarSportOutline } from 'react-icons/io5';
import { TbBuildingCarousel } from 'react-icons/tb';
import { BsTaxiFront } from 'react-icons/bs';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { useLocalStorage } from '@uidotdev/usehooks';


const Nav = () => {
  const [open, setOpen] = useState(false);
  const [fav, saveFav] = useLocalStorage('favourites', []);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const back = () => navigate('/');
  return (
    <>
      <nav>
        <div className='container'>
          <div className='nav1'>
            <div className='left'>
              <img
                onClick={back}
                src='https://www.himmapanavillas.com/wp-content/uploads/2020/09/booking-com-logo.png'
                alt=''
              />
            </div>
            <div className='right'>
              <Link to={'/favourite'} className='btn1'>
                <FaRegHeart />
                <sub>{fav.length}</sub>
              </Link>
              <button className='btn1'>
                <FaRegQuestionCircle />
              </button>
              <button className='btn2'>Зарегистрировать свой объект</button>
              {!localStorage.getItem('Acces') ? (
                <Link className='btn2' to={'/register'}>
                  Регистрация/Вход
                </Link>
              ) : (
                <button
                  className='btn2'
                  onClick={() => {
                    localStorage.removeItem('Acces');
                    window.location.reload();
                  }}>
                  Выйти
                </button>
              )}
              <h2 onClick={showDrawer}>
                <RxHamburgerMenu />
              </h2>
              <Drawer
                className='draver'
                title=''
                placement='right'
                closable={false}
                onClose={onClose}
                open={open}
                getContainer={false}
                width={1200}
                height={1000}
              >
                <h1 onClick={onClose}>
                  <IoMdExit />
                </h1>
                <div className='pages2'>
                  <Link to={'/search'} className='btn3'>
                    <IoBedOutline /> Жилье
                  </Link>
                  <Link to={'/aviaticket'} className='btn3'>
                    <LuPlane /> Авиабилеты
                  </Link>
                  <Link to={'/rent'} className='btn3'>
                    <IoCarSportOutline /> Аренда машин
                  </Link>
                  <Link to={'/variant'} className='btn3'>
                    <TbBuildingCarousel /> Варианты досуга
                  </Link>
                  <Link to={'/taxi'} className='btn3'>
                    <BsTaxiFront />
                    Такси от/до аеропорта
                  </Link>
                </div>

              </Drawer>
            </div>
          </div>
          <div className='nav2'>
            <div className='pages'>
              <Link to={'/search'} className='btn3'>
                <IoBedOutline /> Жилье
              </Link>
              <Link to={'/aviaticket'} className='btn3'>
                <LuPlane /> Авиабилеты
              </Link>
              <Link to={'/rent'} className='btn3'>
                <IoCarSportOutline /> Аренда машин
              </Link>
              <Link to={'/variant'} className='btn3'>
                <TbBuildingCarousel /> Варианты досуга
              </Link>
              <Link to={'/taxi'} className='btn3'>
                <BsTaxiFront />
                Такси от/до аеропорта
              </Link>
            </div>

          </div>
          <div className="nav3">
            <Link to={'/favourite'} className='btn1'>
              <FaRegHeart />
              <sub>{fav.length}</sub> Избранные
            </Link>
            {!localStorage.getItem('Acces') ? (
                <Link className='btn2' to={'/register'}>
                  Регистрация/Вход
                </Link>
              ) : (
                <button
                  className='btn2'
                  onClick={() => {
                    localStorage.removeItem('Acces');
                    window.location.reload();
                  }}>
                  Выйти
                </button>
              )} 
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
