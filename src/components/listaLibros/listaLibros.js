import { useEffect, useState } from "react";
import DetalleLibro from "../detalleLibro/detalleLibro";
import "./listaLibros.css"

function ListaLibros(props) {

    const [dataPOST, setDataPOST] = useState("{}")
    const [dataGET, setDataGet] = useState("{}")
    const API_KEY = "a99edd10"
  
    const exampleJSON = { "email": "emangeney0@unicef.org", "password": "Erwin", "role": true}
  
    async function handlePost() {
      const response = await fetch("https://my.api.mockaroo.com/login?key="+API_KEY+"&id="+exampleJSON.id, { method: "POST", body: JSON.stringify(exampleJSON), headers: {"X-Requested-With": "XMLHttpRequest"} })
      const dataa = await response.json()
      console.log(dataa)
      setDataPOST(JSON.stringify(dataa))
    };
  
    useEffect(()=>{
      fetch("https://my.api.mockaroo.com/login?key="+API_KEY).then(response => response.json()).then(data => setDataGet(JSON.stringify(data)))
    },[dataPOST])
  
    return (
      <div className="App">
        <header className="App-header">
          <textarea value={dataGET}></textarea>
          <button onClick={handlePost}>Test Post</button>
          <textarea value={dataPOST}></textarea>
        </header>
      </div>
    );

    return (
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    {props.companias.map((company) => (
                        <DetalleLibro 
                            empresa={company.empresa} 
                            correo={company.correo} 
                            direccion={company.direccion}
                            telefono={company.telefono}
                            categoria={company.categoria}  
                            imagen={company.imagen}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListaLibros;