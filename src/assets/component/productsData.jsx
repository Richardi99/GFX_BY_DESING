import React from 'react'
import img1 from '../img/Graphics/Graphics 1.jpg'
import img2 from '../img/Graphics/Graphics 2.jpg'
import img3 from '../img/Graphics/Graphics 3.jpg'
import img4 from '../img/Graphics/Graphics 4.jpg'
import img5 from '../img/Graphics/Graphics 5.jpg'
import img6 from '../img/Graphics/Graphics 6.jpg'
import img7 from '../img/Graphics/Graphics 7.jpg'
import img8 from '../img/Graphics/Graphics 8.jpg'
import img9 from '../img/Graphics/Graphics 9.jpg'
import img10 from '../img/Graphics/Graphics 10.jpg'
import img11 from '../img/Graphics/Graphics 11.jpg'
import img12 from '../img/Graphics/Graphics 12.jpg'
import img13 from '../img/Graphics/Graphics 13.jpg'
import img14 from '../img/Graphics/Graphics 14.jpg'
import img15 from '../img/Graphics/Graphics 15.jpg'
import img16 from '../img/Graphics/Graphics 16.jpg'
import img17 from '../img/Car Wraps/Car wraps 1.jpg'
import img18 from '../img/Car Wraps/Car wraps 2.jpg'
import img19 from '../img/Car Wraps/Car wraps 3.jpg'
import img20 from '../img/Car Wraps/Car wraps 4.jpg'
import img21 from '../img/Bussiness card/Business Card 1.jpg'
import img22 from '../img/Bussiness card/Business Card 2.jpg'
import img23 from '../img/Bussiness card/Business Card 3.jpg'
import img24 from '../img/Printing/Banner 1.jpg'
import img25 from '../img/Printing/Banner 2.jpg'
import img26 from '../img/Printing/Banner 3.jpg'
import img27 from '../img/Printing/Banner 4.jpg'
import img28 from '../img/Printing/Banner 5.jpg'
import img29 from '../img/Printing/video1.mp4'
import img30 from '../img/Printing/video2.mp4'
import img31 from '../img/Printing/video3.mp4'
import img32 from '../img/Graphics/videoDesign1.mp4'
import img33 from '../img/Graphics/videoDesign2.mp4'
import img34 from '../img/Graphics/videoDesign3.mp4'
import img35 from '../img/Graphics/videoDesign4.mp4'
import img36 from '../img/Others/image0.jpeg'
import img37 from '../img/Others/image1.jpeg'
import img38 from '../img/Others/image2.jpeg'
import img39 from '../img/Others/image3.jpeg'
import img40 from '../img/Others/image4.jpeg'
import img41 from '../img/Others/image5.jpeg'
import img42 from '../img/Others/image6.jpeg'
import img43 from '../img/Others/image7.jpeg'
import img44 from '../img/Others/image8.jpeg'



const productsData = [
  { id: 30, title: 'Producto30', image: img30, alt: 'Video30', category: 'Printing' },
  { id: 32, title: 'Producto32', image: img32, alt: 'Video32', category: 'Graphics' },
  { id: 44, title: 'Producto44', image: img44, alt: 'Others44', category: 'Others' },
  { id: 28, title: 'Producto28', image: img28, alt: 'Printing28', category: 'Printing' },
  { id: 21, title: 'Producto21', image: img21, alt: 'Bussiness card21', category: 'Business card' },
  { id: 33, title: 'Producto33', image: img33, alt: 'Video33', category: 'Graphics' },
  { id: 29, title: 'Producto29', image: img29, alt: 'Video29', category: 'Printing' },
  { id: 34, title: 'Producto34', image: img34, alt: 'Video34', category: 'Graphics' },
  { id: 1, title: 'Producto1', image: img1, alt: 'Graphics1', category: 'Graphics' },
  { id: 2, title: 'Producto2', image: img2, alt: 'Graphics2', category: 'Graphics' },
  { id: 3, title: 'Producto3', image: img3, alt: 'Graphics3', category: 'Graphics' },
  { id: 35, title: 'Producto35', image: img35, alt: 'Video35', category: 'Graphics' },
  { id: 4, title: 'Producto4', image: img4, alt: 'Graphics4', category: 'Graphics' },
  { id: 5, title: 'Producto5', image: img5, alt: 'Graphics5', category: 'Graphics' },
  { id: 6, title: 'Producto6', image: img6, alt: 'Graphics6', category: 'Graphics' },
  { id: 7, title: 'Producto7', image: img7, alt: 'Graphics7', category: 'Graphics' },
  { id: 8, title: 'Producto8', image: img8, alt: 'Graphics8', category: 'Graphics' },
  { id: 9, title: 'Producto9', image: img9, alt: 'Graphics9', category: 'Graphics' },
  { id: 10, title: 'Producto10', image: img10, alt: 'Graphics10', category: 'Graphics' },
  { id: 11, title: 'Producto11', image: img11, alt: 'Graphics11', category: 'Graphics' },
  { id: 12, title: 'Producto12', image: img12, alt: 'Graphics12', category: 'Graphics' },
  { id: 13, title: 'Producto13', image: img13, alt: 'Graphics13', category: 'Graphics' },
  { id: 14, title: 'Producto14', image: img14, alt: 'Graphics14', category: 'Graphics' },
  { id: 15, title: 'Producto15', image: img15, alt: 'Graphics15', category: 'Graphics' },
  { id: 16, title: 'Producto16', image: img16, alt: 'Graphics16', category: 'Graphics' },
  { id: 17, title: 'Producto17', image: img17, alt: 'Graphics17', category: 'Car Wraps' },
  { id: 18, title: 'Producto18', image: img18, alt: 'Graphics18', category: 'Car Wraps' },
  { id: 19, title: 'Producto19', image: img19, alt: 'Car Wraps19', category: 'Car Wraps' },
  { id: 20, title: 'Producto20', image: img20, alt: 'Car Wraps20', category: 'Car Wraps' },
  { id: 22, title: 'Producto22', image: img22, alt: 'Bussiness card22', category: 'Business card' },
  { id: 23, title: 'Producto23', image: img23, alt: 'Bussiness card23', category: 'Business card' },
  { id: 24, title: 'Producto24', image: img24, alt: 'Printing24', category: 'Printing' },
  { id: 25, title: 'Producto25', image: img25, alt: 'Printing25', category: 'Printing' },
  { id: 31, title: 'Producto31', image: img31, alt: 'Video31', category: 'Printing' },
  { id: 26, title: 'Producto26', image: img26, alt: 'Printing26', category: 'Printing' },
  { id: 27, title: 'Producto27', image: img27, alt: 'Printing27', category: 'Printing' },
  { id: 36, title: 'Producto36', image: img36, alt: 'Others36', category: 'Others' },
  { id: 37, title: 'Producto37', image: img36, alt: 'Others37', category: 'Others' },
  { id: 43, title: 'Producto43', image: img43, alt: 'Others43', category: 'Others' },
  { id: 38, title: 'Producto38', image: img38, alt: 'Others38', category: 'Others' },
  { id: 39, title: 'Producto39', image: img39, alt: 'Others39', category: 'Others' },
  { id: 40, title: 'Producto40', image: img40, alt: 'Others40', category: 'Others' },
  { id: 41, title: 'Producto41', image: img41, alt: 'Others41', category: 'Others' },
  { id: 42, title: 'Producto42', image: img42, alt: 'Others42', category: 'Others' },
  
  ]
export default productsData