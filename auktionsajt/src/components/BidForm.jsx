import {useState} from 'react';

function BidForm() {

    const [bid, setBid] = useState(""); //Här sparas budet
   
    return (
        <div>
            <h3>Lägg ett bud</h3>
            <input
            type="number"
            placeholder="Skriv ditt bud här"
            value={bid}
            onChange={ (e) => setBid(e.target.value)}
            />
            </div>
    );
}

export default BidForm;