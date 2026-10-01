const ITEMS = [
  {
    term: 'Continua',
    text: 'Observación y seguimiento permanente a los avances y dificultades en cada clase, tema, unidad y periodo.',
  },
  {
    term: 'Integral',
    text: 'Evalúa las dimensiones cognitiva, actitudinal y procedimental, considerando el contexto del aula, el hogar y el entorno social.',
  },
  {
    term: 'Coherente',
    text: 'Correspondencia estricta entre los estándares de calidad institucionales, lo realmente enseñado y lo evaluado.',
  },
  {
    term: 'Objetiva',
    text: 'Valoración basada en datos, hechos e indicadores de desempeño preestablecidos y verificables.',
  },
  {
    term: 'Participativa',
    text: 'Involucra activamente la autoevaluación, coevaluación y heteroevaluación de docentes, estudiantes y familias.',
  },
  {
    term: 'Formativa',
    text: 'Reorienta los métodos pedagógicos y apoya al estudiante cuando los resultados evidencian vacíos de aprendizaje.',
  },
  {
    term: 'Flexible',
    text: 'Respeta los ritmos, estilos de aprendizaje, capacidades, intereses y barreras específicas de cada educando.',
  },
  {
    term: 'Sistemática',
    text: 'Organizada según el plan de estudios, el direccionamiento estratégico del PEI y los DBA del MEN.',
  },
];

export default function Cap7Caracteristicas() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          7.1.2
        </span>
        <h2 className="section-title">
          Características de la evaluación Lenista
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          7.1.2
        </span>
        <h3 className="hz-head-title">
          Características de la evaluación Lenista
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