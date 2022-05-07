import UserTravel from "./UserTravel"

const Travels = () => {


    function cancelRide(){
        console.log("Cancelar viaje")
    }

    const testUsers = [
        {date:"May 3rd, 10:10:00 AM", from:"Insurgentes Sur 4411", to:"Bicholandia", by:"Oscar",costRide:10},
        {date:"May 3rd, 10:10:00 AM", from:"Insurgentes Sur 4411", to:"Bicholandia", by:"Oscar",costRide:10},
        {date:"May 3rd, 10:10:00 AM", from:"Insurgentes Sur 4411", to:"Bicholandia", by:"Oscar",costRide:10},
        {date:"May 3rd, 10:10:00 AM", from:"Insurgentes Sur 4411", to:"Bicholandia", by:"Oscar",costRide:10}
    ]

    function makeOffer(){
        console.log("Hacer oferta")
    }

    return(
    <div className="container">
        <ul className="list-group">
            {
                testUsers.map((user, index) => {
                    return <UserTravel
                    date= {user.date}
                    from= {user.from}
                    to= {user.to}
                    by= {user.by}
                    cancelRide= {cancelRide}
                    costRide= {user.costRide}
   
                />
                })
            }

        </ul>        
    </div>

    )
}

export default Travels