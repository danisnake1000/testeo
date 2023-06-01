import { useState } from "react";

const Card = () => {
  const [vehiculo, setVehiculo] = useState("");
  const [marca, setMarca] = useState("");
  const [error, setError] = useState();

  function handleSubmit(e) {
    e.preventDefault()
    if (vehiculo.trim() && vehiculo.length >= 2) {
        console.log(e.target.value);
        console.log("pasaste");
      } else {
        console.log("no paste");
      }
      
      if(marca.length >= 5){
   

        console.log(e.target.value);
        console.log('marca paso')
      }else{
        console.log('marca no paso')
      }


  }

  function handleOnchanceVehiculo(e) {
    setVehiculo(e.target.value);
   
  }
  function handleOnchanceMarca(e) {
     setMarca(e.target.value);
    
}

  return (
    <form onSubmit={handleSubmit}>
      Formulario
      <input
        type="text"
        placeholder="Vehiculo"
        value={vehiculo}
        onChange={handleOnchanceVehiculo}
      />
      <input
        type="text"
        placeholder="marca"
        value={marca}
        onChange={handleOnchanceMarca}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Card;
