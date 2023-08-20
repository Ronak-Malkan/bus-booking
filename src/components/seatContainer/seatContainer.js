import "./seatContainer.css";

const SeatContainer = ({
   seatData,
   setSeatData,
   setSeatSelected,
   setCardStatus,
   setMessage,
   setButtonTitle,
}) => {
   const selectSeat = (e) => {
      if (seatData[parseInt(e.target.id) - 1].booked) {
         setMessage("You cannot select already booked seat");
         setButtonTitle("Close");
         setCardStatus(true);
         return;
      }
      setSeatData((currentSeatData) => {
         if (currentSeatData[parseInt(e.target.id) - 1].selected)
            currentSeatData[parseInt(e.target.id) - 1].selected = false;
         else currentSeatData[parseInt(e.target.id) - 1].selected = true;

         setSeatSelected(false);
         currentSeatData.forEach((seat) => {
            if (seat.selected) setSeatSelected(true);
         });

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
