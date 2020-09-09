import React from "react";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Gallery />
      </Wrapper>
    </div>
  );
}

export default App;
