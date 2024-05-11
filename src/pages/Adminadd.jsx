import axios from 'axios';
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './adminadd.scss'

const Adminadd = () => {
  const navigate = useNavigate();

  const createProduct = (e) => {
    e.preventDefault()
    axios.post("http://localhost:5500/users", {
        image: e.target[0].value,
        image1: e.target[1].value,
        image2: e.target[2].value,
        image3: e.target[3].value,
        image4: e.target[4].value,
        image5: e.target[5].value,
        image6: e.target[6].value,
        name: e.target[7].value,
        place: e.target[8].value,
        distance: e.target[9].value,
        location: e.target[10].value,
        desc: e.target[11].value,
        desc1: e.target[12].value,
        description: e.target[13].value,
        price: e.target[14].value,
        country: e.target[15].value,
    })
        .then(() => {
            window.location.reload()
        })
        .catch((err) => {
            alert(err)
        })
}

  React.useEffect(() => {
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

        </div>

        <form className='forma' onSubmit={createProduct}>
                <input type="text" placeholder='image' required />
                <input type="text" placeholder='image1' required />
                <input type="text" placeholder='image2' required />
                <input type="text" placeholder='image3' required />
                <input type="text" placeholder='image4' required />
                <input type="text" placeholder='image5' required />
                <input type="text" placeholder='image6' required />
                <input type="text" placeholder='name' required />
                <input type="text" placeholder='place' required />
                <input type="text" placeholder='distance' required />
                <input type="text" placeholder='location' required />
                <input type="text" placeholder='desc' required />
                <input type="text" placeholder='desc1' required />
                <input type="text" placeholder='description' required />
                <input type="number" placeholder='price' required />
                <input type="text" placeholder='country' required />
                <input type="submit" />
            </form>

      </div>
    </>
  )
}

export default Adminadd