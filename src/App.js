import "./App.css";
import { SeatData } from "./seatData";
import Card from "./components/card/card";
import SeatContainer from "./components/seatContainer/seatContainer";
import { useState } from "react";

function App() {
   const [seatData, setSeatData] = useState(SeatData);
   const [seatSelected, setSeatSelected] = useState(false);
   const [displayCard, setCardStatus] = useState(false);
   const [message, setMessage] = useState("");
   const [buttonTitle, setButtonTitle] = useState("");

   const bookNow = () => {
      setMessage("Booking for seat number: ");
      let firstSeatAdded = false;
      seatData.forEach((seat) => {
         if (seat.selected && !firstSeatAdded) {
            setMessage((message) => message + seat.seatNumber);
            firstSeatAdded = true;
         } else if (seat.selected && firstSeatAdded) {
            setMessage((message) => message + ", " + seat.seatNumber);
         }
      });
      setButtonTitle("Confirm");
      setCardStatus(true);
   };

   return (
      <div className="App">
         <h2 className="title">
            <span style={{ color: "red" }}>Bus</span> Booking
         </h2>
         <div className="bus">
            <div className="wheel"></div>
            <SeatContainer
               setSeatSelected={setSeatSelected}
               seatData={seatData}
               setSeatData={setSeatData}
               setCardStatus={setCardStatus}
               setMessage={setMessage}
               setButtonTitle={setButtonTitle}
            />
         </div>
         {seatSelected && (
            <button className="bookButton" onClick={bookNow}>
               Book Now!
            </button>
         )}
         {displayCard && (
            <Card
               message={message}
               buttonTitle={buttonTitle}
               setSeatData={setSeatData}
               setCardStatus={setCardStatus}
            />
         )}
         <div className="seatInfoContainer">
            <div>
               <div
                  className="seatInfo"
                  style={{ backgroundColor: "red" }}
               ></div>{" "}
               &nbsp;&nbsp; Selected Seats
            </div>
            <div>
               <div
                  className="seatInfo"
                  style={{ backgroundColor: "black" }}
               ></div>{" "}
               &nbsp;&nbsp; Booked Seats
            </div>
            <div>
               <div
                  className="seatInfo"
                  style={{ backgroundColor: "white" }}
               ></div>{" "}
               &nbsp;&nbsp; Available Seats
            </div>
         </div>
      </div>
   );
}

export default App;
