import ListadoEmpleados from './empleados/listadoEmpleados.jsx'

export default function App() {
  return (
    <div className="container py-4">
      <header className="mb-4">
        <h1 className="h3 mb-0">Sistema de Recursos Humanos</h1>
        <p className="text-secondary mb-0">Listado de empleados</p>
      </header>

      <ListadoEmpleados />
    </div>
  )
}
