import './swiper.css'
import SliderImages from './SliderImages'
const swipImg = [
  './swiper/Diamond.png',
  'https://img.freepik.com/free-photo/beautiful-engagement-ring-with-diamonds_23-2149509236.jpg?w=2000',
  'https://img.freepik.com/free-photo/beautiful-engagement-ring-with-diamonds_23-2149509244.jpg?w=2000',
]
function Swiper() {



  return (
    <div className="swiper">
      <SliderImages swipImg={swipImg} />
    </div>
  )
}

export default Swiper
