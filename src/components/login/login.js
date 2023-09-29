import './login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Login() {

    const [formValues, setFormValues] = useState({email:"", password:"", favClass:"1"});
  
    const [validationStates, setValidationStates] = useState({emailState:false, passwordState:false});
  
    useEffect(() => {
       if (formValues.password.length >= 9 && (/^[a-zA-Z0-9]+$/.test(formValues.password))) {
        setValidationStates({...validationStates, passwordState: true});
      } else {
        setValidationStates({...validationStates, passwordState: false});
      }
    }, [formValues, validationStates]);
  
    const handleEmailChange = ((e) => {
      setFormValues({...formValues, email: e.target.value})
    });
   
    const handlePasswordChange = ((e) => {
      setFormValues({...formValues, password: e.target.value})
    });
   
    const handleSelectChange = ((e) => {
      setFormValues({...formValues, favClass: e.target.value})
    });
  
    const clickSubmit = (() => {
      //Call fetch
      const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formValues.email);
      setValidationStates({...validationStates, emailState: isEmailValid});
  
      alert(JSON.stringify(formValues))
    })
  
  
  
    return (
      <div>
        <h1>Ejemplo de formularios!</h1>
       
        <Form>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} value={formValues.email}/>
          { !validationStates.emailState && <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>}
        </Form.Group>
   
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} />
          { !validationStates.passwordState && <Form.Text className="text-muted">Your password should be have numbers and letters and should be at least 9 char long</Form.Text>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Favorite Class</Form.Label>
          <Form.Select onChange={handleSelectChange}>
            <option value="1">ISIS3710</option>
            <option value="2">Programación con tecnologias web</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" onClick={clickSubmit}>
            <Link to={"/libros"}>
                Submit
            </Link>
        </Button>
      </Form>
      </div>
    );
  
  }
  

export default Login;



