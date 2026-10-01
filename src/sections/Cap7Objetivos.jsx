const ITEMS = [
  {
    term: 'Valorar avances continuos',
    text: 'Identificar características personales, ritmos de desarrollo y estilos de aprendizaje para valorar los avances continuos.',
  },
  {
    term: 'Ajustar prácticas pedagógicas',
    text: 'Proporcionar información básica al docente para consolidar, ajustar o reorientar sus prácticas pedagógicas.',
  },
  {
    term: 'Implementar estrategias de apoyo pedagógico',
    text: 'Implementar estrategias de apoyo pedagógico para estudiantes con Desempeño Bajo o fortalezas en Desempeño Superior.',
  },
  {
    term: 'Suministrar insumos para el PMI',
    text: 'Suministrar insumos reales para la formulación del Plan de Mejoramiento Institucional (PMI).',
  },
  {
    term: 'Determinar promoción y título',
    text: 'Determinar objetivamente la promoción escolar o la expedición del título de Bachiller.',
  },
];

export default function Cap7Objetivos() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          7.1.3
        </span>
        <h2 className="section-title">
          Objetivos del SIEE
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          7.1.3
        </span>
        <h3 className="hz-head-title">
          Objetivos del SIEE
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