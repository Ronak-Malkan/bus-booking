import "./App.css";
import { SeatData } from "./seatData";
import SeatContainer from "./components/seatContainer/seatContainer";
import { useState } from "react";

function App() {
   const [seatData, setSeatData] = useState(SeatData);

   return (
      <div className="App">
         <h2 className="title">Bus Booking</h2>
         <div className="bus">
            <div className="wheel"></div>
            <SeatContainer seatData={seatData} setSeatData={setSeatData} />
         </div>
      </div>
   );
}

export default App;
