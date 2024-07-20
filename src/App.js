import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Card from './components/card';

export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Card img='/img/katie-zaferes.png'
            rating= '5.0'
            count= {6}
            country='Online'
            title='Life Lessons with Katie Zaferes'
            description='I will share with you what I call "Positively Impactful Moments of Disappointment." Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.'
            price={136}
            />
      <Card img='/img/wedding-photography.png'
            rating= '5.0'
            count= {30}
            country='Online'
            title='Learn Wedding Photography'
            description='Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that will last a lifetime.'
            price={125}
      />
      <Card />
      <Card />
      <Card />
    </div>
  );

//   const data = [
//     {
//         id: 1,
//         title: "Life Lessons with Katie Zaferes",
//         description:
//             'I will share with you what I call "Positively Impactful Moments of Disappointment." Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.',
//         price: 136,
//         coverImg: require("./images/katie-zaferes.png"),
//         stats: {
//             rating: 5.0,
//             reviewCount: 6,
//         },
//         location: "Online",
//         openSpots: 0,
//     },
//     {
//         id: 2,
//         title: "Learn Wedding Photography",
//         description:
//             "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
//         price: 125,
//         coverImg: require("./images/wedding-photography.png"),
//         stats: {
//             rating: 5.0,
//             reviewCount: 30,
//         },
//         location: "Online",
//         openSpots: 27,
//     },
//     {
//         id: 3,
//         title: "Group Mountain Biking",
//         description:
//             "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
//         price: 50,
//         coverImg: require("./images/mountain-bike.png"),
//         stats: {
//             rating: 4.8,
//             reviewCount: 2,
//         },
//         location: "Norway",
//         openSpots: 3,
//     },
//     {
//         id: 4,
//         title: "Life Lessons with Katie Zaferes",
//         description:
//             'I will share with you what I call "Positively Impactful Moments of Disappointment." Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.',
//         price: 136,
//         coverImg: require("./images/katie-zaferes.png"),
//         stats: {
//             rating: 5.0,
//             reviewCount: 6,
//         },
//         location: "Online",
//         openSpots: 0,
//     },
//     {
//         id: 5,
//         title: "Learn Wedding Photography",
//         description:
//             "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
//         price: 125,
//         coverImg: require("./images/wedding-photography.png"),
//         stats: {
//             rating: 5.0,
//             reviewCount: 30,
//         },
//         location: "Online",
//         openSpots: 27,
//     },
//     {
//         id: 6,
//         title: "Group Mountain Biking",
//         description:
//             "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
//         price: 50,
//         coverImg: require("./images/mountain-bike.png"),
//         stats: {
//             rating: 4.8,
//             reviewCount: 2,
//         },
//         location: "Norway",
//         openSpots: 3,
//     },
// ];

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