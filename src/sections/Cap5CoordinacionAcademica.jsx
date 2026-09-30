const ITEMS = [
  {
    term: '1. Planeación y Administración Curricular',
    text: 'Dirigir y supervisar la formulación, actualización y ejecución de los planes de área, asignaturas, proyectos pedagógicos transversales y mallas curriculares según los DBA.',
  },
  {
    term: '2. Presidencia de las Comisiones de Evaluación y Promoción',
    text: 'Convocar y presidir las Comisiones de Evaluación y Promoción de cada grado, analizando casos de desempeño bajo o superior y coordinando las actividades de nivelación.',
  },
  {
    term: '3. Elaboración de Horarios y Carga Académica',
    text: 'Diseñar el horario general de clases por grupo, jornada y sede, así como la asignación académica docente en colaboración con la Rectoría y la Coordinación de Convivencia.',
  },
  {
    term: '4. Dirección del Proceso de Matrícula y Admisiones',
    text: 'Liderar el proceso técnico pedagógico de admisión, asignación de cupos y traslados internos de grupos, jornadas o sedes.',
  },
  {
    term: '5. Coordinación del Equipo de Gestión Académica',
    text: 'Liderar el trabajo unificado de los Jefes de Departamento / Área para asegurar la coherencia en las evaluaciones cualitativas y cuantitativas (escala 1.0 a 5.0).',
  },
  {
    term: '6. Acompañamiento a la Educación Inclusiva (PIAR/DUA)',
    text: 'Coordinar con la Orientación Escolar el diseño de los Ajustes Razonables (PIAR) y la implementación del DUA para estudiantes con barreras para el aprendizaje.',
  },
  {
    term: '7. Trámite de Reclamaciones Evaluativas y Evaluaciones Extemporáneas',
    text: 'Resolver en segunda instancia las solicitudes o reclamos pedagógicos de acudientes y autorizar la presentación de pruebas extemporáneas justificadas dentro de los 3 días hábiles.',
  },
  {
    term: '8. Estrategias de Retención y Rendimiento Escolar',
    text: 'Evaluar periódicamente los índices de reprobación e inasistencia académica, formulando planes de contingencia para elevar los resultados en las Pruebas Saber 11.',
  },
];

export default function Cap5CoordinacionAcademica() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          5.6.2
        </span>
        <h2 className="section-title">
          Funciones de la Coordinación Académica
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          5.6.2
        </span>
        <h3 className="hz-head-title">
          Funciones de la Coordinación Académica
        </h3>
      </div>

      <p className="hz-p">
        El Coordinador Académico depende directamente de la Rectoría y tiene a su cargo la{" "}
        <span className="hz-key">administración y supervisión pedagógica</span> del plantel, con
        las siguientes funciones:
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