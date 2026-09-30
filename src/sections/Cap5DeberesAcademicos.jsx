const ITEMS = [
  {
    term: '1. Preparación y planeación',
    text: 'Preparar con rigor profesional las clases, guías de aprendizaje, talleres y evaluaciones de acuerdo con el plan de estudios y los DBA.',
  },
  {
    term: '2. Cumplimiento de asignación y horario',
    text: 'Cumplir estrictamente la jornada laboral y la intensidad horaria académica asignada por la Rectoría.',
  },
  {
    term: '3. Registro y evaluación oportuna',
    text: 'Dar a conocer las valoraciones a los estudiantes dentro de los 5 días hábiles siguientes y registrar oportunamente las notas e inasistencias en la plataforma virtual.',
  },
  {
    term: '4. Apoyo a la nivelación e inclusión',
    text: 'Programar y ejecutar las estrategias de nivelación periódica y aplicar los ajustes razonables (PIAR/DUA) para estudiantes con barreras para el aprendizaje.',
  },
];

export default function Cap5DeberesAcademicos() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          5.3.2
        </span>
        <h2 className="section-title">
          Deberes académicos y pedagógicos
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          5.3.2
        </span>
        <h3 className="hz-head-title">
          Deberes académicos y pedagógicos
        </h3>
      </div>

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