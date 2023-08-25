import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
const HomeCarousel = () => {
    return (
        <div><Carousel>
            <Carousel.Item>
                <img src="https://c4.wallpaperflare.com/wallpaper/978/412/21/water-drops-squirt-freshness-wallpaper-preview.jpg" alt="1" text="First slide" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://e0.pxfuel.com/wallpapers/91/229/desktop-wallpaper-fresh-food-ultra-background-for-u-tv-widescreen-ultrawide-laptop-tablet-smartphone-organic-food.jpg" alt="2" text="Second slide" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://c4.wallpaperflare.com/wallpaper/761/246/345/fruit-grapes-food-wallpaper-preview.jpg" alt="3" text="Third slide" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel></div>
    )
}

export default HomeCarousel