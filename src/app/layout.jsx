import "../styles/global.css"; // Asegúrate de que la ruta sea correcta

export default function Layout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Restaurante App</title>
      </head>
      <body>
        <header>
          <h1>Restaurante App</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>Derechos reservados &copy; 2024</p>
        </footer>
      </body>
    </html>
  );
}
