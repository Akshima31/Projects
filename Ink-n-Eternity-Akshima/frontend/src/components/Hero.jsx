import heroImg from "../assets/hero.jpg";
export default function Hero(){
    return(
        <div className="hero-content"> 
        <div className="hero-text">
        <p>"For Those Who Live <br/>a Thousand Lives Through Books"</p>
    </div>
    <div className="hero-img">
        <img src={heroImg} alt="Book"/>
    </div>
    </div>
    )
}