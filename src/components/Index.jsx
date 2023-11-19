import logo from "./images/logo.svg";
import user from "./images/User.svg";
import rocket from "./images/RocketLaunch.svg";
import avatar from "./images/Avatar Placeholder.svg";
import quyon from "./images/quyon.svg";
import ayiq from "./images/ayu.svg";
import number from "./images/raqam.svg";
import qsvg1 from "./images/q2 (1).svg";
import qsvg2 from "./images/q2 (2).svg";
import robo1 from "./images/robo1.svg";
import robo2 from "./images/robo2.svg";
import avatar1 from "./images/avatar1.svg";
import avatar2 from "./images/avatar2.svg";
import avatar3 from "./images/avatar3.svg";
import heroBg from "./images/Image Placeholder.jpg";
import dog from "./images/Primary Photo Placeholder.jpg";
import qoziqorin from "./images/qoziqorin.jpg";
import robot from "./images/robot.jpg";
import "./css/index.css";

function Index() {
  return (
    <>
      <header>
        <nav>
          <div className="container">
            <div className="navbar">
              <a href="./Index.jsx">
                <img className="navbar__logo" src={logo} alt="logo" />
              </a>
              <ul className="navbar__menu">
                <li className="navbar__menu__list">
                  <a className="navbar__menu__link" href="#">
                    Marketplace
                  </a>
                </li>
                <li className="navbar__menu__list">
                  <a className="navbar__menu__link" href="#">
                    Rankings
                  </a>
                </li>
                <li className="navbar__menu__list">
                  <a className="navbar__menu__link" href="#">
                    Connect a wallet
                  </a>
                </li>
                <button className="navbar__menu__btn">
                  <img src={user} alt="user" />
                  Sign Up
                </button>
              </ul>
            </div>
          </div>
        </nav>
        <div className="secondary-container">
          <div className="hero">
            <div className="hero__left">
              <h1 className="hero__title">
                Discover digital art & Collect NFTs
              </h1>
              <p className="hero__text">
                NFT marketplace UI created with Anima for Figma. Collect, buy
                and sell art from more than 20k NFT artists.
              </p>
              <button className="hero__btn">
                <img src={rocket} alt="user" />
                Get Started
              </button>
              <div className="hero__left__card">
                <span>
                  <b>240k+</b> Total Sale
                </span>
                <span>
                  <b>100k+</b> Auctions
                </span>
                <span>
                  <b>240k+</b> Artists
                </span>
              </div>
            </div>
            <div className="hero__right">
              <img className="hero__right__bg" src={heroBg} alt="heroBg" />
              <h4 className="hero__right__title">Space Walking</h4>
              <span className="hero__right__span">
                <img
                  className="hero__right__span__img"
                  src={avatar}
                  alt="avatar"
                />
                <p className="hero__right__span__text">Animakid</p>
              </span>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="secondary-container">
            <div className="trending">
              <h2 className="trending__title">Trending Collection</h2>
              <p className="trending__text">
                Checkout our weekly updated trending collection.
              </p>
              <div className="trending__card">
                <img className="trending__card__img" src={dog} alt="dog" />
                <img
                  className="trending__card__img"
                  src={qoziqorin}
                  alt="qoziqorin"
                />
                <img className="trending__card__img" src={robot} alt="robot" />
              </div>
              <div className="trending__info">
                <span className="trending__span">
                  <img
                    className="trending__span__img"
                    src={quyon}
                    alt="quyon"
                  />
                  <img className="trending__span__img" src={ayiq} alt="ayiq" />
                  <img
                    className="trending__span__img"
                    src={number}
                    alt="number"
                  />
                </span>
                <span className="trending__span">
                  <img
                    className="trending__span__img"
                    src={qsvg1}
                    alt="qoziqorin"
                  />
                  <img
                    className="trending__span__img"
                    src={qsvg2}
                    alt="qoziqorin"
                  />
                  <img
                    className="trending__span__img"
                    src={number}
                    alt="number"
                  />
                </span>
                <span className="trending__span">
                  <img
                    className="trending__span__img"
                    src={robo1}
                    alt="robo1"
                  />
                  <img
                    className="trending__span__img"
                    src={robo2}
                    alt="robo2"
                  />
                  <img
                    className="trending__span__img"
                    src={number}
                    alt="number"
                  />
                </span>
              </div>
              <div className="trending__bottom">
                <span className="trending__bottom__span">
                  <h4 className="trending__bottom__span__title">
                    DSGN Animals
                  </h4>
                  <span>
                    <img
                      className="trending__bottom__span__img"
                      src={avatar1}
                      alt="avatar1"
                    />
                    <p className="trending__bottom__span__text">MrFox</p>
                  </span>
                </span>
                <span className="trending__bottom__span">
                  <h4 className="trending__bottom__span__title">
                    Magic Mushrooms
                  </h4>
                  <span>
                    <img
                      className="trending__bottom__span__img"
                      src={avatar2}
                      alt="avatar1"
                    />
                    <p className="trending__bottom__span__text">MrFox</p>
                  </span>
                </span>
                <span className="trending__bottom__span">
                  <h4 className="trending__bottom__span__title">
                    Disco Machines
                  </h4>
                  <span>
                    <img
                      className="trending__bottom__span__img"
                      src={avatar3}
                      alt="avatar1"
                    />
                    <p className="trending__bottom__span__text">MrFox</p>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default Index;
