import React from 'react'
import "./footer.scss"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer>
      <div className="container">
        <div className="footerbar">
          <div className="f">
            <Link to="">Страны</Link>
            <Link to="">Регионы</Link>
            <Link to="">Города</Link>
            <Link to="">Районы</Link>
            <Link to="">Аэропорты</Link>
            <Link to="">Отели</Link>
            <Link to="">Ориентиры</Link>
          </div>
          <div className="f">
            <Link to="">Курортные отели</Link>
            <Link to="">Дома и апартаменты</Link>
            <Link to="">Апартаменты/квартиры</Link>
            <Link to="">Виллы</Link>
            <Link to="">Хостелы</Link>
            <Link to="">Отели типа «постель и завтрак»</Link>
            <Link to="">Гостевые дома</Link>
          </div>
          <div className="f">
            <Link to="">Уникальное жилье</Link>
            <Link to="">Все направления</Link>
            <Link to="">Авиабилеты: все направления</Link>
            <Link to="">Все пункты проката</Link>
            <Link to="">Все направления для отпуска</Link>
            <Link to="">Отзывы</Link>
            <Link to="">Жилье на месяц</Link>
            <Link to="">Статьи</Link>
            <Link to="">Сезонные и праздничные <br /> спецпредложения</Link>
            <Link to="">Traveller Review Awards</Link>
          </div>
          <div className="f">
            <Link to="">Прокат автомобилей</Link>
            <Link to="">Поиск авиабилетов</Link>
            <Link to="">Заказ столиков в ресторанах</Link>
            <Link to="">Booking.com для турагентов</Link>
          </div>
          <div className="f1">
            <Link to="">Коронавирус (COVID-19): часто <br /> задаваемые вопросы</Link>
            <Link to="">О Booking.com</Link>
            <Link to="">Служба поддержки</Link>
            <Link to="">Центр помощи партнерам</Link>
            <Link to="">Careers</Link>
            <Link to="">Устойчивое развитие</Link>
            <Link to="">Пресс-центр</Link>
            <Link to="">Центр знаний по безопасности</Link>
            <Link to="">Для инвесторов</Link>
            <Link to="">Правила и условия</Link>
            <Link to="">Разрешение споров</Link>
            <Link to="">Как мы работаем</Link>
            <Link to="">Положение о <br /> конфиденциальности и cookie</Link>
            <Link to="">Заявление (MSA)</Link>
            <Link to="">Корпоративные контакты</Link>
            <Link to="">Требования к контенту и подача <br /> жалоб</Link>
            <Link to="">Мы возвращаем разницу в цене</Link>
            
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer