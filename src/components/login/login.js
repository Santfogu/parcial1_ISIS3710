import './login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Login() {


    const [dataPOST, setDataPOST] = useState("{}")
    const [dataGET, setDataGet] = useState("{}")
    const API_KEY = ""
  
    const exampleJSON = { "id": 1, "first_name": "Erwin", "last_name": "Mangeney", "email": "emangeney0@unicef.org", "gender": "Polygender", "ip_address": "75.180.222.81", "test_input": "#$%&/" }
  
    async function handlePost() {
      const response = await fetch("https://localhost:3001/login", { method: "POST", body: JSON.stringify(exampleJSON), headers: {"X-Requested-With": "XMLHttpRequest"} })
      const dataa = await response.json()
      console.log(dataa)
      setDataPOST(JSON.stringify(dataa))
    };
  
    useEffect(()=>{
      fetch("http://localhost:3001/login").then(response => response.json()).then(data => setDataGet(JSON.stringify(data)))
    },[dataPOST])


    const [formValues, setFormValues] = useState({user:"", password:""});
  
    const [validationStates, setValidationStates] = useState({userState:false, passwordState:false});
  
  
    const handleUserChange = ((e) => {
      setFormValues({...formValues, user: e.target.value})
    });
   
    const handlePasswordChange = ((e) => {
      setFormValues({...formValues, password: e.target.value})
    });
   
  
    const clickSubmit = (() => {
      if (formValues.user == dataGET.user && formValues.password == dataGET.password)
      {
        setValidationStates({userState: true, passwordState: true});
  
      }
    })
  
  
  
    return (
      <div>
        <h3 className='titulo'>Inicio de sesión</h3>
       
        <Form>
        <Form.Group className="mb-6" controlId="formBasicUser">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control type="user" placeholder="Enter usuario" onChange={handleUserChange} value={formValues.user}/>
        </Form.Group>
   
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} />
          { !validationStates.passwordState && <Form.Text className="text-muted">Your password should be have numbers and letters and should be at least 9 char long</Form.Text>}
        </Form.Group>
        
        <Button variant="primary" onClick={clickSubmit} classname='botones'>
            <Link to={"/libros"}>
                Ingresar
            </Link>
        </Button>
        <Button variant="primary" onClick={clickSubmit}>
            <Link to={"/"}>
                Cancelar
            </Link>
        </Button>
      </Form>
      </div>
    );
  
  }
  

export default Login;



