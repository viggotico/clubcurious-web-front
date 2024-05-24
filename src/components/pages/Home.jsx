import Slider from "react-slick";
import useTranslation from '../../hooks/useTranslation';
import style from './Home.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = ({ }) => {
    const translation = useTranslation();
    const maps_iframeSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4445.110689830471!2d10.207486377932346!3d56.14750217323279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c3f8f6e2328c1%3A0xf0681bc3c7063087!2sJ%C3%A6gerg%C3%A5rdsgade%20154e%2C%208000%20Aarhus!5e0!3m2!1sda!2sdk!4v1716522426149!5m2!1sda!2sdk';

    var sliderSettings = {
        //   dots: true,
        //   infinite: true,
        //   speed: 500,
        //   slidesToShow: 1,
        //   slidesToScroll: 1,

        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        centerMode: true,
        variableWidth: true,
        dots: true,
    };

    return (
        <div className={style.main}>
            <header className={style.header}>
                <Slider {...sliderSettings}>
                    <img src="https://www.s-graphi.co.jp/img/SAMPLE/code/code_sample04.jpg" alt="Slideshow" />
                    <img src="https://www.s-graphi.co.jp/img/SAMPLE/code/code_sample05.jpg" alt="Slideshow" />
                    <img src="https://www.s-graphi.co.jp/img/SAMPLE/code/code_sample06.jpg" alt="Slideshow" />
                    <img src="https://www.s-graphi.co.jp/img/SAMPLE/code/code_sample07.jpg" alt="Slideshow" />
                </Slider>
            </header>
            <div className={style.about}>
                <div className={style.left}>
                    <h1>{translation.get('frontpage', 'title')}</h1>
                    <p>{translation.get('frontpage', 'description')}</p>
                </div>
                <div className={style.right}>
                    <div className={style.blob}></div>
                </div>
            </div>
            <iframe
                className={style.maps}
                src={maps_iframeSrc}
                height='200'
                loading='lazy'
                style={{ border: '0' }}
                frameborder="0"
                referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
        </div>
    )
}

export default Home;