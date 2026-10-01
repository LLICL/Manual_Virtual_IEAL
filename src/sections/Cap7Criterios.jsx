const ITEMS = [
  {
    term: 'Criterio Cognitivo',
    text: 'Evalúa la apropiación de conocimientos, capacidad de análisis, síntesis, representación de problemas y producción de textos.',
  },
  {
    term: 'Criterio Actitudinal',
    text: 'Evalúa la motivación, participación activa, responsabilidad en la entrega oportuna de tareas, respeto a los valores ciudadanos, asistencia y convivencia en el aula.',
  },
  {
    term: 'Criterio Procedimental',
    text: 'Evalúa el saber hacer, el desempeño en competencias laborales/ciudadanas, la manipulación de instrumentos y la aplicación de saberes en la solución de problemas del contexto.',
  },
];

export default function Cap7Criterios() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          7.3
        </span>
        <h2 className="section-title">
          Criterios de evaluación y ponderaciones porcentuales de áreas
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          7.3
        </span>
        <h3 className="hz-head-title">
          Criterios de evaluación y ponderaciones porcentuales de áreas
        </h3>
      </div>

      <p className="hz-p">
        La evaluación del educando en cada uno de los{" "}
        <span className="hz-key">cuatro (4) periodos académicos</span> se estructurará sobre tres
        (3) criterios fundamentales:
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