import './swiper.css'
import SliderImages from './SliderImages'
import { Box } from '@mui/material'
const swipImg = [
  './swiper/Diamond.png',
  'https://img.freepik.com/free-photo/beautiful-engagement-ring-with-diamonds_23-2149509236.jpg?w=2000',
  'https://img.freepik.com/free-photo/beautiful-engagement-ring-with-diamonds_23-2149509244.jpg?w=2000',
]
function Swiper() {



  return (
    <Box dir='ltr' className="swiper">
      <SliderImages swipImg={swipImg} />
    </Box>
  )
}

export default Swiper
