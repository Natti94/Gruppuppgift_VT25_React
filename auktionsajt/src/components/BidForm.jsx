import {useState} from 'react';

function BidForm() {

    const [bid, setBid] = useState(""); //Här sparas budet

    const [message, setMessage] = useState(""); //Här sparas meddelandet
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage(`Du har lagt ett bud på ${bid} kr`);
        setBid("");
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

             {message && <p>{message}</p>}
            </form>
    );
}

export default BidForm;