import RideOffered from "./RideOffered"

const Offers = () => {

    const testUsers = [
        {date:"May 3rd, 10:10:00 AM", from:"Insurgentes Sur 4411", to:"Bicholandia", by:"Oscar",bids:10},
        {date:"May 3rd, 10:10:00 AM", from:"Insurgentes Sur 4411", to:"Bicholandia", by:"Oscar",bids:10},
        {date:"May 3rd, 10:10:00 AM", from:"Insurgentes Sur 4411", to:"Bicholandia", by:"Oscar",bids:10},
        {date:"May 3rd, 10:10:00 AM", from:"Insurgentes Sur 4411", to:"Bicholandia", by:"Oscar",bids:10}
    ]

    function makeOffer(){
        console.log("Hacer oferta")
    }

    return(
    <div className="container">
        <ul className="list-group">
            {
                testUsers.map((user, index) => {
                    return <RideOffered
                    date= {user.date}
                    from= {user.from}
                    to= {user.to}
                    by= {user.by}
                    makeOffer= {makeOffer}
                    bids= {user.bids}
   
                />
                })
            }

        </ul>        
    </div>

    )
}

export default Offers