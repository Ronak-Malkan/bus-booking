import "./card.css";

const Card = ({ message, buttonTitle, setSeatData, setCardStatus }) => {
   const clickHandler = () => {
      if (buttonTitle === "Confirm") {
         setSeatData((seatData) => {
            const changedData = seatData.map((seat) => {
               if (seat.selected) {
                  seat.selected = false;
                  seat.booked = true;
               }
               return seat;
            });
            return changedData;
         });
      }
      setCardStatus(false);
   };

   return (
      <div className="card">
         <h2 className="message">{message}</h2>
         <button onClick={clickHandler} className="cardButton">
            {buttonTitle}
         </button>
      </div>
   );
};

export default Card;
