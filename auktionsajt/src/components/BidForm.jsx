import {useState} from 'react';

function BidForm() {

    const [bid, setBid] = useState(""); //Här sparas budet
   
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Bud skickat", bid);
    };

    return (

        <form onSubmit={handleSubmit}>
            <h3>Lägg ett bud</h3>
            <input
           
            type="number"
            placeholder="Skriv ditt bud här"
            value={bid}
            onChange={ (e) => setBid(e.target.value)}
            />
             <button type ="submit">Lägg bud</button>
            </form>
    );
}

export default BidForm;