import React from "react";
import "./styles/App.css";

import Layout from "./components/Layout/Layout";

import ContentBlock from "./components/ContentBlock/ContentBlock";
import PriceBlock from "./components/PriceBlock/PriceBlock";

function App() {
  let prices = [
    {
      col_style: "price-column",
      top_style: "price-column-top basic",
      top_title: "5D (BASIC)",
      amount: "10,000$ / 10m2",
      btn_text: "GET",
      desc:
        "Extra 10m<sup>2</sup> to your space, using 5D. The cheapest price, but not the best one. Free delivery.",
    },
    {
      col_style: "price-column hot-column",
      top_style: "price-column-top hot",
      top_title: "6D (HOT!)",
      amount: "30,000$ / 30m2",
      btn_text: "GET",
      desc:
        "The best price = the best quality. This is HOT price, which means, that a tons of people already uses this variant and likes this a lot! Free delivery. Free special key.",
    },
    {
      col_style: "price-column",
      top_style: "price-column-top plus",
      top_title: "8D (PLUS+)",
      amount: "50,000$ / 70m3",
      btn_text: "GET",
      desc:
        "Using advanced the 7D+8D technology we can add a lot of free space to your room. This is the expensive price and the quality one too! Free delivery. Free special key. Advanced nano-bots.",
    },
    {
      col_style: "price-column",
      top_style: "price-column-top advanced",
      top_title: "10D (ADVANCED)",
      amount: "200,000$ / 100m5",
      btn_text: "GET",
      desc:
        "Almost the same as the 8D one, but the 10th dimension is the expensiest price, because of there are a few nano-bots which can work with the 10D. The 10D can be expanded in the future, while the lesser dimensions cannot. Free delivery. Free special key. Advanced nano-bots.",
    },
  ];

  let prices_components = [];
  for (let i = 0; i < prices.length; i++) {
    prices_components.push(
      <PriceBlock
        col_style={prices[i].col_style}
        top_style={prices[i].top_style}
        top_title={prices[i].top_title}
        amount={prices[i].amount}
        btn_text={prices[i].btn_text}
        key={i}
      >
        <p>{prices[i].desc}</p>
      </PriceBlock>
    );
  }

  return (
    <div className="App" id="top">
      <Layout>
        <ContentBlock
          title="How It Works"
          button_text="Learn More"
          main_id="hiw"
          desc_id="hiw-description"
        >
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
            provide this material to us.{" "}
          </p>
          <p>
            {" "}
            We clear your wall from wallpapers, them using nano-bots made with
            DarkM, we create kind of black hole which takes the part of a wall
            inside of self and absolutely empty room will show up, after that we
            give you a special key, with which you can set up the room.
          </p>
        </ContentBlock>
        <ContentBlock
          title="Prices"
          button_text="Discover"
          main_id="prs"
          desc_id="discover"
        >
          <div className="price-columns">{prices_components}</div>
        </ContentBlock>
      </Layout>
    </div>
  );
}

export default App;

// *
