import "./App.css";
import { SeatData } from "./seatData";
import SeatContainer from "./components/seatContainer/seatContainer";
import { useState } from "react";

function App() {
   const [seatData, setSeatData] = useState(SeatData);

   return (
      <div className="App">
         <h2 className="title">
            <span style={{ color: "red" }}>Bus</span> Booking
         </h2>
         <div className="bus">
            <div className="wheel"></div>
            <SeatContainer seatData={seatData} setSeatData={setSeatData} />
         </div>
         <button className="bookButton">
            <span style={{ color: "red" }}>Book</span> Now!
         </button>
      </div>
   );
}

export default App;
