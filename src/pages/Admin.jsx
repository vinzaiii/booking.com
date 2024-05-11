import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import 'react-modern-drawer/dist/index.css'
import Drawer from 'react-modern-drawer'
import './admin.scss'
import axios from 'axios';

const Admin = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

  const navigate = useNavigate();
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

  const deleteProduct = (_id) => {
    axios
        .delete(`http://localhost:5500/users/${_id}`)
        .then(() => {
            window.location.reload()
        })
        .catch((err) => {
            alert(err)
        })
}

  React.useEffect(() => {
    getProducts();
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <>

      <div className='container'>
        <div className='panel'>
          <Link to="/adminadd">
            <h3>создать объект</h3>
          </Link>
          <Link to="/admin">
            <h3>aдмин панель</h3>
          </Link>
          <h3 onClick={() => {
            localStorage.removeItem("token")
            window.location.reload()
          }
          }>Log Out</h3>
          <button onClick={toggleDrawer}>Show</button>
            <Drawer
                size={400}
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='adminnav'
            >
                <Link to="/adminadd">
            <h3>создать объект</h3>
          </Link>
          <Link to="/admin">
            <h3>aдмин панель</h3>
          </Link>
          <h3 onClick={() => {
            localStorage.removeItem("token")
            window.location.reload()
          }
          }>Log Out</h3>
            </Drawer>
        </div>
        <div className="wrapper">
              {product.map((el) => {
                return (
                  <div key={el._id} className="card">
                    <div className="info">
                      <a className="lefti">
                        <img src={el.image} alt="" />
                      </a>
                      <a className="righti">
                        <h1>{el.name}</h1>
                        <div className="p">
                          <p>{el.place}</p>
                          <p>{el.distance}</p>
                          <button className='delete' onClick={() => deleteProduct(el?._id)}>Удалить объект</button>
                        </div>
                        <div className="pb">
                        <p>{el.desc}</p>
                        <b>{el.desc1}</b>
                        
                        </div>
                      </a>
                    </div>
                    <div className="price">
                      <h2>UZS {el.price}</h2>
                      <button onClick={() => deleteProduct(el?._id)}>Удалить объект</button>
                    </div>
                  </div>
                )
              })}
            </div>
      </div>

      
    </>
  )
}

export default Admin