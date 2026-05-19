import Travel_2 from "./Travel_2"

function Local() {
    function triggerTravels(type){
        if(type === "both"){
            return "ativado"
        }
        else{
            return "desativado"
        }
    }

  return (
    <>
        <h1>Digite a localização e a data</h1>
        <p>Coloque a data e a localização da sua viagem!</p>
        <h1>1ª viagem</h1>
        <form className="forms">
            <div className="textGroup">
                <input type="text" name="startingGo" id="startingGo" />
                <label htmlFor="startingGo">De:</label>
            </div>
            <div className="textGroup">
                <input type="text" name="arrivalGo" id="arrivalGo" />
                <label htmlFor="arrivalGo">Para:</label>
            </div>
            <div className="textGroup">
                <input type="date" name="dateGo" id="arrivalGo" />
                <label htmlFor="dateGo">Data:</label>
            </div>
            <div className="textGroup">
                <input type="time" name="timeGo" id="timeGo" />
                <label htmlFor="timeGo">Hora:</label>
            </div>
            
        </form>
        
    </>
  )
}

export default Local