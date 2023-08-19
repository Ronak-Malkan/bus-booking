import "./seatContainer.css";

const SeatContainer = ({ seatData, setSeatData }) => {
   const selectSeat = (e) => {
      console.log(e);
      setSeatData((currentSeatData) => {
         console.log(currentSeatData[parseInt(e.target.id) - 1]);
         if (currentSeatData[parseInt(e.target.id) - 1].selected)
            currentSeatData[parseInt(e.target.id) - 1].selected = false;
         else currentSeatData[parseInt(e.target.id) - 1].selected = true;
         console.log(currentSeatData[parseInt(e.target.id) - 1]);
         return [...currentSeatData];
      });
   };

   return (
      <div className="seatContainer">
         {seatData.map((seat) => {
            let colorClass = "";
            if (seat.booked) colorClass = "blackSeats";
            else if (seat.selected) colorClass = "redSeats";
            return (
               <div
                  onClick={selectSeat}
                  id={seat.seatNumber}
                  className={`seats ${colorClass}`}
                  key={seat.seatNumber}
               >
                  {seat.seatNumber}
               </div>
            );
         })}
      </div>
   );
};

export default SeatContainer;
