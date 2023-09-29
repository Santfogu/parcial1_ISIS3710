const [data, setData] = useState([]);

  useEffect(() => {
    
    const url = 'https://my.api.mockaroo.com/login?key=a99edd10';

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Hubo un problema con la solicitud fetch:', error);
      });
  }, []); 

  return (
    <div>
      <h1>Datos de Mockaroo</h1>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
        {data.map(item => (
          <tr key={item.email}>
          <td>{item.email}</td>
          <td>{item.password}</td>
          <td>{item.role0 ? 'Activo' : 'Inactivo'}</td>
        </tr>        
        ))}
        </tbody>
      </table>
    </div>
  );


  import { useEffect, useState } from 'react';
  import './App.css';
  
  function App() {
  
    const [dataPOST, setDataPOST] = useState("{}")
    const [dataGET, setDataGet] = useState("{}")
    const API_KEY = ""
  
    const exampleJSON = { "id": 1, "first_name": "Erwin", "last_name": "Mangeney", "email": "emangeney0@unicef.org", "gender": "Polygender", "ip_address": "75.180.222.81", "test_input": "#$%&/" }
  
    async function handlePost() {
      const response = await fetch("https://my.api.mockaroo.com/users.json?key="+API_KEY+"&id="+exampleJSON.id, { method: "POST", body: JSON.stringify(exampleJSON), headers: {"X-Requested-With": "XMLHttpRequest"} })
      const dataa = await response.json()
      console.log(dataa)
      setDataPOST(JSON.stringify(dataa))
    };
  
    useEffect(()=>{
      fetch("https://my.api.mockaroo.com/users.json?key="+API_KEY).then(response => response.json()).then(data => setDataGet(JSON.stringify(data)))
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
  }
  
  export default App;

  