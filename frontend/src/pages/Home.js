import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "../styles/Home.css";
import Footer from "../components/Footer";
function Home() {
  const sliderImages = [
    {
       url: "https://media.istockphoto.com/id/1471845506/vector/open-book-winter-nature-inside-imagination-fantasy-magic-in-literature-concept-season-fairy.jpg?s=612x612&w=0&k=20&c=KP4HjUXuLdMjvEDyIG3mu93EtakgU61uBwQT3pOlCj0=",
    },
    {
       url: "https://media.istockphoto.com/id/1471846911/vector/open-book-summer-nature-bench-park-inside-imagination-fantasy-magic-in-literature-concept.jpg?s=612x612&w=0&k=20&c=xDWxLQiBbp7I1pNJkzFGqvnX8Np2FdMeNXVcUZ6Tywg=",
    },
    {
       url: "https://media.istockphoto.com/id/1471853969/vector/open-book-autumn-nature-inside-imagination-fantasy-magic-in-literature-concept-season-fairy.jpg?s=612x612&w=0&k=20&c=W6YU7cB8Ht_kfNGv8nfYm-NL6Uam2pmbidS4cJ8QFBE=",
    }
  
 ];


  return (
    <div className="home" >
         <SimpleImageSlider
            width={1350}
            height={400}
            images={sliderImages}
            showNavs={true}
            autoPlay={true}
            style={{ objectFit: 'cover' }}
         />
        
          </div>
             
  );
}

export default Home; 
