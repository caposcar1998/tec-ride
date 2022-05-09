import imageBlockchain from "../images/blockchain.png"

function Member(props){
    return(
        <div className="d-flex align-items-center justify-content-center flex-column" id="member">
            <h3 className="h4">{props.name}</h3>
            <h3 className="h5">{props.idM}</h3>
        </div>
    )
}

const Home = () => {
    return(
        <div className="containerHome">
            <h1 className="text-center">Rides Blockchain WebApp</h1>
            <div className="d-flex align-items-center justify-content-around" >
                <img src={imageBlockchain} className="mx-4 w-100"></img>
                <div className="border border-3 border-dark px-3 pt-2 mx-4 h5" id="infoP">
                    <p>
                        In this project Blockchain technology will be used. Blockchain could be define as a chain 
                        of blocks that contains information and the main porpuse of this is to make changes, 
                        hacks or system cheat more difficult or even impossible.
                    </p>
                    <p>
                        Why is it important to use blockchain in enterprises? Block is based on principles of cryptography, 
                        decentralization and consensus which ensures trust in transactions. In most blockchains or distributed 
                        ledger technologies (DLT), the data is structured into blocks and each block contains a transaction or 
                        bundle of transactions. Each new block connects to all the blocks before it in a cryptographic chain in 
                        such a way that it's nearly impossible to tamper with. All transactions within the blocks are validated 
                        and agreed upon by a consensus mechanism, ensuring that each transaction is true and correct.
                    </p>
                </div>
            </div>
            <h2 className="text-center my-4">Team Members</h2>
            <div className="d-flex align-items-center justify-content-around pt-3" id="teamMembers">
                <Member name="Manuel Ortiz" idM="A01655515"/>
                <Member name="Aldo Ortiz" idM="A01654725"/>
                <Member name="Óscar Contreras" idM="A01655772"/>
                <Member name="Emiliano Pineda" idM="A01332517"/>
            </div>
            
        </div>
    )
}

export default Home