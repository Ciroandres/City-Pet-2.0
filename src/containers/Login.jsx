import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";

export default function Login() {
    const { search } = useLocation;
    const redirectInUrl = new URLSearchParams(search).get("redirect");
    const redirect = redirectInUrl ? redirectInUrl : "/";

    return (
        <Container className="small-container text-center">
            <h1 className="my-3">Inicio de sesión</h1>
            <Form className="text-center">
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" require placeholder="Ingresa tu correo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" require placeholder="Ingresa tu contraseña" />
                </Form.Group>
                <div className="mb-3">
                    <Button type="submit">Iniciar sesión</Button>
                </div>
                <div className="mb-3">
                    ¿No tienes una cuenta?
                    <Link to={`/signup?redirect=${redirect}`}>Crear un cuenta</Link>
                </div>
            </Form>
        </Container>
    )
}
