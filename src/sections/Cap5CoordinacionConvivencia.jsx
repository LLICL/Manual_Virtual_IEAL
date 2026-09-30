const ITEMS = [
  {
    term: '1. Administración del Clima Escolar y Disciplina',
    text: 'Garantizar un ambiente seguro, respetuoso y armónico entre estudiantes, docentes y personal administrativo en la sede a su cargo.',
  },
  {
    term: '2. Ejecución del Protocolo de Celulares y Dispositivos',
    text: 'Liderar el protocolo formativo y devolutivo gradual por uso no autorizado de celulares: resguardo el mismo día la 1ª vez; entrega presencial al acudiente la 2ª vez; retención por el año lectivo en la 3ª vez.',
  },
  {
    term: '3. Operacionalización de la Ruta de Atención Integral',
    text: 'Coordinar el abordaje de Situaciones Tipo I, Tipo II y Tipo III, garantizando la toma de descargos por escrito en versión libre, sin realizar interrogatorios directos.',
  },
  {
    term: '4. Control de Asistencia, Retardos y Permisos de Salida',
    text: 'Supervisar el registro diario de asistencia, expedir las órdenes oficiales de salida para la portería y citar presencialmente a acudientes por retardos repetidos (más de 3) o inasistencias injustificadas (más de 2 en un mes).',
  },
  {
    term: '5. Supervisión de Direcciones de Grupo e Historias Escolares',
    text: 'Asignar y controlar las funciones de los directores de grupo, garantizando el registro oportuno de citaciones y compromisos en el Observador del Estudiante.',
  },
  {
    term: '6. Organización de Turnos de Disciplina',
    text: 'Elaborar y supervisar los cuadrantes y turnos de vigilancia docente durante las horas de descanso, formaciones, actos cívicos y salidas pedagógicas.',
  },
  {
    term: '7. Decomisos y Reposición Patrimonial de Daños',
    text: 'Gestionar la retención de elementos no autorizados/distractores y citar al acudiente para suscribir compromisos de reparación económica de daños a la planta física en un plazo de 10 días hábiles.',
  },
  {
    term: '8. Enlace de Protección e Intersectorialidad',
    text: 'Remitir casos de afectación socioemocional a la Orientación Escolar y articular acciones inmediatas con Comisaría de Familia, ICBF y Policía de Infancia.',
  },
];

export default function Cap5CoordinacionConvivencia() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          5.6.3
        </span>
        <h2 className="section-title">
          Funciones de la Coordinación de Convivencia
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          5.6.3
        </span>
        <h3 className="hz-head-title">
          Funciones de la Coordinación de Convivencia
        </h3>
      </div>

      <p className="hz-p">
        El Coordinador de Convivencia depende de la Rectoría y le corresponde la{" "}
        <span className="hz-key">dirección del régimen convivencial</span>, la administración
        disciplinaria de los estudiantes y el seguimiento a la jornada escolar, con las siguientes
        funciones:
      </p>

      <ul className="hz-list">
        {ITEMS.map((i) => (
          <li key={i.term}>
            <span className="hz-term">{i.term}</span>
            <details className="hz-collapse hz-collapse--mini">
              <summary>Ver descripción</summary>
              <div className="hz-collapse-body">
                <p>{i.text}</p>
              </div>
            </details>
          </li>
        ))}
      </ul>
    </>
  );
}