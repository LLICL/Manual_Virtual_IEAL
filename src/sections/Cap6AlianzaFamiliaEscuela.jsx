const ITEMS = [
  {
    term: 'Caracterización Familiar',
    text: 'La institución adelantará anualmente la caracterización de las familias para comprender sus dinámicas socioeconómicas, fortalezas y necesidades del contexto en cada sede.',
  },
  {
    term: 'Articulación en el PEI',
    text: 'El Consejo Directivo articulará las herramientas de la Alianza Familia-Escuela dentro del PEI y del Plan de Mejoramiento Institucional (PMI).',
  },
  {
    term: 'Enfoque Restaurativo e Inclusivo',
    text: 'Todas las acciones de la alianza promoverán la mediación, la cultura de paz y la inclusión de estudiantes con barreras para el aprendizaje.',
  },
  {
    term: 'Alianzas Intersectoriales',
    text: 'La Rectoría podrá gestionar el apoyo de entidades públicas y privadas (ICBF, Comisaría de Familia, Secretaría de Salud, Policía de Infancia) para la ejecución de talleres comunitarios.',
  },
];

export default function Cap6AlianzaFamiliaEscuela() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          6.3
        </span>
        <h2 className="section-title">
          Marco de la Alianza Familia-Escuela
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          6.3
        </span>
        <h3 className="hz-head-title">
          Marco de la Alianza Familia-Escuela
        </h3>
      </div>

      <p className="hz-p">
        La Institución Educativa Antonio Lenis formaliza la{" "}
        <span className="hz-key">Alianza Familia-Escuela</span> como una estrategia transversal
        para fortalecer las capacidades de cuidado, crianza humanizada y acompañamiento educativo:
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