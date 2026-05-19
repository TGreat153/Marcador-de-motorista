function Travel_2() {
  return (
    <>
        <h1>2ª viagem</h1>
        <form className="forms">
            <div className="textGroup">
                <input type="text" name="startingBack" id="startingBack" />
                <label htmlFor="starting">De:</label>
            </div>
            <div className="textGroup">
                <input type="text" name="arrivalBack" id="arrivalBack" />
                <label htmlFor="arrivalBack">Para:</label>
            </div>
            <div className="textGroup">
                <input type="date" name="dateBack" id="arrivalBack" />
                <label htmlFor="dateBack">Data:</label>
            </div>
            <div className="textGroup">
                <input type="time" name="timeBack" id="timeBack" />
                <label htmlFor="timeBack">Hora:</label>
            </div>
        </form>
    </>
  )
}

export default Travel_2