import React from 'react'
import './App.css';
import Header from '../Header/Header';
import Card from '../Card/Card';

const data = [
  {
    img: "https://www.atlassian.com/ru/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg",
    name: "Ciarian Sheehan",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quam exercitationem",
    photo: "https://thumbs.dreamstime.com/b/falling-drop-rain-blue-earth-image-water-splash-crown-shape-water-splash-crown-shape-falling-drop-earth-140453719.jpg",
    comment: 200,
    like: 600
  },
  {
    img: "https://www.atlassian.com/ru/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg",
    name: "Adrian Gates",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quam exercitationem",
    photo: "https://thumbs.dreamstime.com/b/falling-drop-rain-blue-earth-image-water-splash-crown-shape-water-splash-crown-shape-falling-drop-earth-140453719.jpg",
    comment: 123,
    like: 700
  },
  {
    img: "https://www.atlassian.com/ru/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg",
    name: "Jorj Billis",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quam exercitationem",
    photo: "https://ochanjang.com/wp-content/uploads/2021/01/6t8Zh249QiFmVnkQdCCtHK.jpg",
    comment: 315,
    like: 900
  }
]

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <Header />
        <div className="container py-4">
          <div className="row">
            {
              data.map((value, index) => {
                return <div className="col-sm-6 col-md-4">
                  <Card
                    img={value.img}
                    name={value.name}
                    desc={value.desc}
                    photo={value.photo}
                    comment={value.comment}
                    like={value.like} />
                </div>
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
