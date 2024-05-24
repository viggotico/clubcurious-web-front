import { useWindowScroll } from "@uidotdev/usehooks";
import Slider from "react-slick";
import useTranslation from '../../hooks/useTranslation';
import style from './Home.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = ({ }) => {
    const translation = useTranslation();
    // const [{ x, y }, scrollTo] = useWindowScroll();
    const maps_iframeSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4445.110689830471!2d10.207486377932346!3d56.14750217323279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c3f8f6e2328c1%3A0xf0681bc3c7063087!2sJ%C3%A6gerg%C3%A5rdsgade%20154e%2C%208000%20Aarhus!5e0!3m2!1sda!2sdk!4v1716522426149!5m2!1sda!2sdk';
    const sliderSettings = {
        autoplay: true,
        // dots: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        // variableWidth: true,
    };

    return (
        <div className={style.main}>
            <header className={style.header}>
                <Slider {...sliderSettings} className={style.slider}>
                    <div className={style.item}><div style={{ backgroundImage: 'url("img/slides/ClubCurious_Croquis&Cava_22.10.20-106.jpg")' }}></div></div>
                    <div className={style.item}><div style={{ backgroundImage: 'url("img/slides/ClubCurious_Croquis&Cava_22.10.20-107.jpg")' }}></div></div>
                    <div className={style.item}><div style={{ backgroundImage: 'url("img/slides/ClubCurious_Croquis&Cava_22.10.20-108.jpg")' }}></div></div>
                    <div className={style.item}><div style={{ backgroundImage: 'url("img/slides/ClubCurious_Croquis&Cava_22.10.20-110.jpg")' }}></div></div>
                    <div className={style.item}><div style={{ backgroundImage: 'url("img/slides/ClubCurious_Croquis&Cava_22.10.20-112.jpg")' }}></div></div>
                    <div className={style.item}><div style={{ backgroundImage: 'url("img/slides/ClubCurious_Croquis&Cava_22.10.20-113.jpg")' }}></div></div>
                    <div className={style.item}><div style={{ backgroundImage: 'url("img/slides/ClubCurious_Croquis&Cava_22.10.20-117.jpg")' }}></div></div>
                </Slider>
            </header>
            <div className={style.about}>
                <div className={style.left}>
                    <h1>{translation.get('frontpage', 'title')}</h1>
                    <p>{translation.get('frontpage', 'description1')}</p>
                    <p>{translation.get('frontpage', 'description2')}</p>
                    <p>{translation.get('frontpage', 'description3')}</p>
                    <p>{translation.get('frontpage', 'description4')}</p>
                </div>
                <div className={style.right}>
                    <div className={style.blob}></div>
                </div>
            </div>
            <div className={style.textPath}>
                <svg id="text-container" viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg">
                    <path id="text-curve" d="M0 100s269.931 86.612 520 0c250.069-86.612 480 0 480 0" fill="none" />

                    <text y="40" fontSize="20">
                        <textPath id="text-path" href="#text-curve" startOffset={200} fill="#BD1A1A">
                            connect. create. celebrate.
                        </textPath>
                    </text>
                </svg>
            </div>
            <iframe
                className={style.maps}
                src={maps_iframeSrc}
                height='200'
                loading='lazy'
                style={{ border: '0' }}
                referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
        </div>
    )
}

export default Home;