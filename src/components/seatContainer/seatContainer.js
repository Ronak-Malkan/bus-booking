const SeatContainer = ({ seatData, setSeatData }) => {
   return (
      <div className="seatContainer">
         {seatData.map((seat) => (
            <div className="seats" key={seat.seatNumber}>
               {seat.seatNumber}
            </div>
         ))}
      </div>
   );
};

export default SeatContainer;
