const ITEMS = [
  {
    term: 'Pruebas orales y escritas por competencias',
    text: 'Comprensión, interpretación, análisis y solución de problemas, posibilitando el acceso a textos o notas de consulta.',
  },
  {
    term: 'Sustentación de trabajos de investigación',
    text: 'Individual o en equipo, e indagación guiada.',
  },
  {
    term: 'Prácticas y TIC',
    text: 'Prácticas de laboratorio, talleres aplicados y uso de Tecnologías de la Información y la Comunicación (TIC).',
  },
  {
    term: 'Exposiciones, debates y semilleros',
    text: 'Exposiciones, debates, conversatorios e incorporación de la Investigación como Estrategia Pedagógica (IEP) y semilleros escolares.',
  },
  {
    term: 'Observación y seguimiento',
    text: 'Seguimiento al cumplimiento de tareas, puntualidad, asistencia, comportamiento y sentido de pertenencia.',
  },
  {
    term: 'Pruebas bimestrales y simulacros SABER',
    text: 'Pruebas bimestrales integrales al cierre de cada periodo y simulacros tipo Pruebas SABER.',
  },
];

export default function Cap7MediosInstrumentos() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          7.2
        </span>
        <h2 className="section-title">
          Medios e instrumentos evaluativos
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          7.2
        </span>
        <h3 className="hz-head-title">
          Medios e instrumentos evaluativos
        </h3>
      </div>

      <p className="hz-p">
        La evaluación de los aprendizajes se llevará a cabo mediante{" "}
        <span className="hz-key">diversos medios pedagógicos</span> acordados entre docentes y
        estudiantes:
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