import React from "react";
import "./styles/App.css";
import logo from "./img/ND-logo.png";

function App() {
  return (
    <div className="App" id="top">
      <header>
        <div className="header-logo">
          <img src={logo} alt="ND" className="logo-img" />
          <h1>New Dimensions</h1>
        </div>
        <div className="header-right">
          <a href="#hiw">How it works</a>
          <a href="#prs">Prices</a>
          <a href="#supp">Support</a>
        </div>
      </header>
      <main>
        <div id="hiw">
          <h2 className="h2-content">How It Works</h2>
          <a href="#hiw-description" className="lm">
            Learn More
          </a>
        </div>
        <div id="hiw-description" className="content-description">
          <p>
            Using the 5th+ dimensions, we can add extra space to your room. For
            instance, if your flat has 12m<sup>2</sup> we can add 30 more m
            <sup>2</sup>, or using 8D and greater you can get even 70m
            <sup>3</sup>+!. Our technology uses the parallel universe structure
            to connect the 4D world with greater dimensions. Everybody knows,
            that in 3031 scientists from North America, all of a sudden,
            discovered a new material called "DarkM", and since this time people
            can see the 4th dimension (they used to 3rd), and now, using this,
            the scientists can connect different dimensions together, and they
            provide this material to us.
            <hr />
            We clear your wall from wallpapers, them using nano-bots made with
            DarkM, we create kind of black hole which takes the part of a wall
            inside of self and absolutely empty room will show up, after that we
            give you a special key, with which you can set up the room.
          </p>
        </div>
        <div id="prs">
          <h2 className="h2-content">Prices</h2>
          <a href="#discover" className="lm">
            Discover
          </a>
        </div>
        <div id="discover">
          <div className="price-columns">
            <div className="price-column">
              <div className="price-column-top basic">5D (BASIC)</div>
              <div className="price-column-amount">
                10,000$ / 10m<sup>2</sup>
              </div>
              <div className="price-column-decription">
                <p>
                  Extra 10m<sup>2</sup> to your space, using 5D. The cheapest
                  price, but not the best one. Free delivery.
                </p>
              </div>
              <div className="price-column-bottom">
                <button>GET</button>
              </div>
            </div>

            <div className="price-column hot-column">
              <div className="price-column-top hot">6D (HOT!)</div>
              <div className="price-column-amount hot-amount">
                30,000$ / 30m<sup>2</sup>
              </div>
              <div className="price-column-decription">
                <p>
                  The best price = the best quality. This is HOT price, which
                  means, that a tons of people already uses this variant and
                  likes this a lot! Free delivery. Free special key.
                </p>
              </div>
              <div className="price-column-bottom">
                <button>GET</button>
              </div>
            </div>
            <div className="price-column">
              <div className="price-column-top plus">8D (PLUS+)</div>
              <div className="price-column-amount">
                50,000$ / 70m<sup>3</sup>
              </div>
              <div className="price-column-decription">
                <p>
                  Using advanced the 7D+8D technology we can add a lot of free
                  space to your room. This is the expensive price and the
                  quality one too! Free delivery. Free special key. Advanced
                  nano-bots.
                </p>
              </div>
              <div className="price-column-bottom">
                <button>GET</button>
              </div>
            </div>
            <div className="price-column">
              <div className="price-column-top advanced">10D (ADVANCED)</div>
              <div className="price-column-amount">
                200,000$ / 100m<sup>5</sup>
              </div>
              <div className="price-column-decription">
                <p>
                  Almost the same as the 8D one, but the 10th dimension is the
                  expensiest price, because of there are a few nano-bots which
                  can work with the 10D. The 10D can be expanded in the
                  future, while the lesser dimensions cannot. Free delivery.
                  Free special key. Advanced nano-bots.
                </p>
              </div>
              <div className="price-column-bottom">
                <button>GET</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer id="supp">
        <div className="main">
          <div className="info">
            <h2 className="cwu">New Dimensions contact with us:</h2>
            <p className="phone">+40992121999</p>
            <p className="email">thend@ggmail.com</p>
          </div>
        </div>
        <div className="extra">
          <div className="github">
            <p>
              Also Check Out creator's{" "}
              <a
                href="https://github.com/RuslanPr0g/NewDimensions"
                target="_blank"
                id="gh"
              >
                github
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
