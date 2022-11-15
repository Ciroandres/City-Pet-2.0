import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";

export default function Login() {
    const { search } = useLocation;
    const redirectInUrl = new URLSearchParams(search).get("redirect");
    const redirect = redirectInUrl ? redirectInUrl : "/";

    return (
        <Container className="small-container">
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

// const Login = () => {
//   return (
//     <div>
//       <header id="header" className="d-flex align-items-center header-inner-pages">
//         <div className="container-fluid d-flex align-items-center justify-content-lg-between">
//           <h1 className="logo me-auto me-lg-0">
//             <a href="index.html">CityPet</a>
//           </h1>
//           <a href="index.html" className="logo me-auto me-lg-0">
//             <img src="assets/img/logo.png" alt="" className="img-fluid"></img>
//           </a>

//           <nav id="navbar" className="navbar order-last order-lg-0">
//             <ul>
//               <li>
//                 <a className="nav-link scrollto active" href="@{/}">
//                   Inicio
//                 </a>
//               </li>
//               <li>
//                 <a className="nav-link scrollto" href="@{/#servicio}">
//                   Servicio
//                 </a>
//               </li>
//               <li>
//                 <a className="nav-link scrollto" href="@{/#caracteristicas}">
//                   Caracteristicas
//                 </a>
//               </li>
//               <li>
//                 <a className="nav-link scrollto " href="@{/#dondeir}">
//                   Donde ir
//                 </a>
//               </li>
//               <li>
//                 <a className="nav-link scrollto" href="@{/#geolocalizacion}">
//                   Geolocalizacion
//                 </a>
//               </li>
//               <li className="dropdown">
//                 <a href={"$"}>
//                   <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
//                 </a>
//               </li>
//               <li>
//                 <a className="nav-link scrollto" href="#logino">
//                   Registrate
//                 </a>
//               </li>
//             </ul>
//             <i className="bi bi-list mobile-nav-toggle"></i>
//           </nav>

//           <div className="header-social-links d-flex align-items-center">
//             <a href={"$"} className="twitter">
//               <i className="bi bi-twitter"></i>
//             </a>
//             <a href={"$"} className="facebook">
//               <i className="bi bi-facebook"></i>
//             </a>
//             <a href={"$"} className="instagram">
//               <i className="bi bi-instagram"></i>
//             </a>
//             <a href={"$"} className="linkedin">
//               <i className="bi bi-linkedin"></i>
//             </a>
//           </div>
//         </div>
//       </header>

//       <main id="main">
//         <section className="inner-page">
//           <div className="container">
//             <div id="contenedor">
//               <div id="central">
//                 <div id="login">
//                   <div className="titulo">Bienvenido</div>
//                   <div className="formularioiniciosesion">
//                     <form id="loginform" method="post" action="@{/login}">
//                       <input
//                         type="text"
//                         name="username"
//                         id="username"
//                         placeholder="Su usuario..."
//                       />
//                       <input
//                         type="password"
//                         name="password"
//                         id="password"
//                         placeholder="Su password..."
//                       />
//                       <button
//                         name="submit"
//                         type="submit"
//                         value="Iniciar Sesión"
//                       >
//                         Login
//                       </button>
//                     </form>
//                     <div
//                       if="{params.error}"
//                       className="alert alert-warning"
//                       role="alert"
//                     >
//                       Password o usuario inválidos
//                     </div>
//                   </div>
//                 </div>

//                 <div className="inferior">
//                   <a href="@{/}">Volver</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer id="footer">
//         <div className="footer-top">
//           <div className="container">
//             <div className="row  justify-content-center">
//               <div className="col-lg-6">
//                 <h3>CityPet</h3>
//               </div>
//             </div>

//             <div className="row footer-newsletter justify-content-center">
//               <div className="col-lg-6">
//                 <form action="" method="post">
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Enter your Email"
//                   />
//                   <input type="submit" value="Subscribe" />
//                 </form>
//               </div>
//             </div>

//             <div className="social-links">
//               <a href={"$"} className="twitter">
//                 <i className="bx bxl-twitter"></i>
//               </a>
//               <a href={"$"} className="facebook">
//                 <i className="bx bxl-facebook"></i>
//               </a>
//               <a href={"$"} className="instagram">
//                 <i className="bx bxl-instagram"></i>
//               </a>
//               <a href={"$"} className="google-plus">
//                 <i className="bx bxl-skype"></i>
//               </a>
//               <a href={"$"} className="linkedin">
//                 <i className="bx bxl-linkedin"></i>
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="container footer-bottom clearfix">
//           <div className="copyright">
//             &copy; Copyright{" "}
//             <strong>
//               <span>CityPet</span>
//             </strong>
//             . All Rights Reserved
//           </div>
//           <div className="credits">
//             Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

