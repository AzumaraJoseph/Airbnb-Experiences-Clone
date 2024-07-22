import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Card from './components/card';

export default function App() {

  const colors = [<h2>red</h2>, <h2>brown</h2>, <h2>white</h2>]
  // const cards = colors.map(color => `<h3>${color}</h3>`)


  

  return (
    <div>
      <NavBar />
      {colors}
      <Hero />
      <Card img='/img/katie-zaferes.png'
            rating= '5.0'
            count= {6}
            location='Online'
            title='Life Lessons with Katie Zaferes'
            description='I will share with you what I call "Positively Impactful Moments of Disappointment." Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.'
            price={136}
            openSpots= {0}

            />
      <Card img='/img/wedding-photography.png'
            rating= '5.0'
            count= {30}
            location='Online'
            title='Learn Wedding Photography'
            description='Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that will last a lifetime.'
            price={125}
            openSpots= {27}

      />
      <Card img='/img/mountain-bike.png'
            rating= '4.5'
            count= {2}
            location='Norway'
            title='Group Mountain Biking'
            description='Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)'
            price={50}
            openSpots= {3}
            
      />
    </div>
  );

//   

// export default data;

  // const date = new Date()
  // const hours = date.getHours()
  // let timeOfday;

  // if(hours < 12) {
  //   timeOfday = 'Morning'
  // } else if(hours >= 12 && hours < 17) {
  //   timeOfday = 'Afternoon'
  // } else if(hours >= 17 && hours < 20) {
  //   timeOfday =  'Evening'
  // } else {
  //   timeOfday = 'Night'
  // }
  
  // return (
  //   <h1>Good {timeOfday}!</h1>
  // )
}


{/* <img src={logo} className="App-logo" alt="logo" /> */}