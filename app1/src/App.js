// import logo from './logo.svg';
import './App.css';
import HomeCarousel from './HomeCarousel';
import ImageCard from './ImageCard';
import NavBar from './NavBar';
import ImageData from './ImageData';

const ncard = (val) =>{
  return (
    <ImageCard
    key={val.id}
    title={val.title}
    imgsrc={val.imgsrc}
    desc={val.desc}
    />
  )
}
function App() {
  return (
    <div className="container">
      <NavBar />
      <HomeCarousel />
      <div className='row'>
      {ImageData.map ((val, index) => (
        <div key={val.id} className='col-md-3'>
        {ncard(val)}
        </div>
      ))}
    </div>

    </div>

  );
}


export default App;
