import './login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useIntl } from 'react-intl';


function Login() {
  
  
    const intl = useIntl();


    const [formValues, setFormValues] = useState({login:"", password:""});
  
    const [validationStates, setValidationStates] = useState({userState:true});
  
    const [redirectToCafes, setRedirectToCafes] = useState(false);

  
    const handleUserChange = ((e) => {
      setFormValues({...formValues, login: e.target.value})
    });
   
    const handlePasswordChange = ((e) => {
      setFormValues({...formValues, password: e.target.value})
    });
   
    const clickEliminar = () => {
      const formulario = document.getElementById("formulario");
      formulario.reset();
    }
  
    const clickSubmit = async () => {
      try {
        console.log('Solicitud POST:', JSON.stringify(formValues));
        const response = await fetch("http://localhost:3001/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        });
        console.log('Respuesta del servidor:', response);
  
        if (response.status === 200) {
          setValidationStates({ userState: true });
          setRedirectToCafes(true);
        } else if (response.status === 401) {
          setValidationStates({ userState: false });
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    if (redirectToCafes) {
      return <Navigate to="/cafes" />;
    }
  
    return (
      <div>
        <h6 className='titulo'>{intl.formatMessage({ id: "Inicio de sesión" })}</h6>
        <div className='formulario'>
        <Form id='formulario'>
        <Form.Group className="mb-6 formulario-contenido" controlId="formBasicUsername">
          <Form.Label>{intl.formatMessage({ id: "Nombre de usuario" })}</Form.Label>
          <Form.Control type="text" onChange={handleUserChange} value={formValues.login}/>
        </Form.Group>
   
        <Form.Group className="mb-3 formulario-contenido" controlId="formBasicPassword">
          <Form.Label>{intl.formatMessage({ id: "Contraseña" })}</Form.Label>
          <Form.Control type="password" onChange={handlePasswordChange} value={formValues.password} />
        </Form.Group>
        <div className='botones'>
        <Button variant="success" onClick={clickSubmit} className='btn'>
            <span className="text-dark">{intl.formatMessage({ id: "Ingresar" })}</span>
        </Button>
        <Button variant="danger" onClick={clickEliminar} className='btn'>
            <span className="text-dark">{intl.formatMessage({ id: "Cancelar" })}</span>
        </Button>
        </div>
        <p className='mensaje'>
        { !validationStates.userState && <Form.Text className="text-muted">{intl.formatMessage({ id: "Error de autenticación. Revise sus credenciales" })}</Form.Text>}
        </p>
      </Form>
      </div>
      </div>
    );
  
  }
  

export default Login;



