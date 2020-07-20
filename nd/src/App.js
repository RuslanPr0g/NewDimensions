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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
            aliquam ex. Nunc sit amet sollicitudin urna. Pellentesque eget
            pretium quam, sit amet feugiat ipsum. In id libero eleifend, finibus
            libero efficitur, placerat orci. Mauris finibus tortor viverra,
            malesuada risus sed, aliquam ex. Vivamus nec posuere lorem, viverra
            euismod massa. Nam ut dui tortor. Donec vestibulum hendrerit nulla,
            quis sagittis lacus mattis et. Etiam laoreet erat nec convallis
            tempor. In nec orci sed mauris molestie efficitur sed ut velit.
            Etiam euismod dui ut pretium elementum. Aenean ac tristique felis,
            ac tristique eros. Nullam velit nisl, venenatis at magna quis,
            ullamcorper congue enim. Sed vel ante vehicula, volutpat leo vel,
            rhoncus orci. Sed mollis purus at mi venenatis posuere. Integer at
            est nisl. Donec laoreet condimentum odio non varius. Nam blandit
            risus maximus lectus suscipit, id interdum dolor euismod. Fusce
            viverra pulvinar ex sed pharetra. Quisque sagittis felis eget dui
            elementum, id aliquet enim porta. Ut molestie at eros non aliquet.
            Quisque non blandit quam. Mauris ultrices dui nec orci semper, id
            molestie libero porta. Quisque ultrices condimentum luctus. Praesent
            enim risus, dapibus a consectetur nec, interdum in nulla. Quisque
            mollis odio a neque vehicula, nec rhoncus enim commodo. Mauris
            ornare, urna a bibendum molestie, felis arcu varius nisl, non
            accumsan ipsum arcu vel elit. Nullam et metus porttitor urna dictum
            faucibus. Phasellus ultricies quis tortor sed commodo. Duis rhoncus
            iaculis accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Aenean sollicitudin tellus lectus, eu placerat eros malesuada
            eu. Donec a neque sapien. Etiam fringilla gravida pretium. Nulla nec
            sodales elit. Nulla vehicula gravida ligula vitae placerat.
            Suspendisse a ante ut augue tincidunt ultricies a in risus. Donec at
            bibendum urna, vitae ullamcorper urna. Ut venenatis sodales nunc
            auctor varius. Maecenas consectetur id metus vel tempus. Phasellus
            sem justo, elementum eu ultricies eu, pharetra sed erat. Maecenas
            nec lectus eget eros lobortis rhoncus nec nec augue. Quisque blandit
            nulla ac dolor iaculis congue. Cras sed purus varius, pharetra
            lectus mattis, tempus lacus. Proin a tempor libero, eget hendrerit
            nisi. Morbi tincidunt dui dui, quis porta nunc molestie vel. Integer
            tincidunt felis id varius condimentum. Morbi lacinia ultrices orci
            tempus elementum. Fusce rhoncus fermentum pretium.
          </p>
        </div>
        <div id="prs">
          <h2 className="h2-content">Prices</h2>
          <a href="#discover" className="lm">
            Discover
          </a>
        </div>
        <div id="discover"></div>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
