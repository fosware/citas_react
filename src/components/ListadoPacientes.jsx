import Pacientes from "./Pacientes"

const ListadoPacientes = ({pacientes, setPaciente}) => {
  return (
   
    
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      { pacientes && pacientes.length ? ( 
        <> 
          <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {' '}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          { pacientes.map( paciente => (
                <Pacientes 
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  />
            )) 
          }    
          </> 
      ) : (
        <> 
          <h2 className="font-black text-3xl text-center">Aún no hay pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
            <span className="text-indigo-600 font-bold">
              Comienza agregando Pacientes
            </span>
            
            </p>
        </>
      ) }
      
    </div>
  )
}

export default ListadoPacientes
