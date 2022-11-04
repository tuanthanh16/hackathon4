


export default function FlightsDestination(props) {


    return (
        

        <div className="custom-select">
            <div className='departure'>
                <h3>Departures:</h3>
                <select onChange={(e) => {
                    props.setFrom(e.target.value)

                }} name="departure" id="">
                    <option value='PRG'>Prague</option>
                    <option value='BER'>Berlin</option>
                    <option value='WAW'>Warsaw</option>
                    <option value='PED'>Pardubice</option>
                </select>

            </div>
            


            <div className='destination'>
                <h3>Destinations:</h3>
                <select onChange={(e) => {
                    props.setTo(e.target.value)


                }} name="destination" id="">
                    <option value='VLC'>Valencia</option>
                    <option value='MAD'>Madrid</option>
                    <option value='MXP'>Milano</option>
                    <option value='ATH'>Athens</option>
                </select>

            </div >
            
        </div>



        
    )
}