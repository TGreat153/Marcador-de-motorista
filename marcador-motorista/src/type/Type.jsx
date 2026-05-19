import { useState } from "react"

function Type() {

    const [time, setTime] = useState("");

    const changeTime = (e) => {
        setTime(e.target.value);
    }

  return (
    <>
        <h1>Escolha o tipo da viagem?</h1>
        <p>Por favor selecione o tipo da viagem, para conseguir marcar a sua viagem</p>
        <form className="forms">
            <div className="radio">
                <input value="go" name="type" type="radio" checked={time === "go"} onChange={changeTime}  />
                <label htmlFor="go">Ida</label>
            </div>
            <div className="radio">
                <input value="back" name="type" type="radio" checked={time === "back"} onChange={changeTime} />
                <label htmlFor="back">Volta</label>
            </div>
            <div className="radio">
                <input value="both" name="type" type="radio" checked={time === "both"} onChange={changeTime}/>
                <label htmlFor="both">Ida e Volta</label>
            </div>
            <a href="/" className="btn btn-dark">Voltar</a>
            <a href="/time" className="btn btn-dark">Avançar</a>
        </form>
    </>
  )
}

export default Type