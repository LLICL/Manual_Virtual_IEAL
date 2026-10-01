const ITEMS = [
  {
    term: 'Propósitos de Desarrollo y Aprendizaje',
    text: 'Constituyen el horizonte integrador de la organización curricular y pedagógica de la primera infancia.',
  },
  {
    term: 'Referentes de Desarrollo y Aprendizaje',
    text: 'Organizados a partir de los tres (3) propósitos fundamentales de la educación inicial para brindar una visión amplia, dinámica e integral del desarrollo del niño y la niña.',
  },
  {
    term: 'Indicadores de Desarrollo y Aprendizaje',
    text: 'Descriptores pedagógicos que permiten identificar los aprendizajes y saberes que los niños y las niñas han construido al interactuar activamente con su medio ambiente, facilitando la representación de sus pensamientos, emociones y experiencias cotidianas.',
  },
  {
    term: 'Criterios de Valoración e Instrumentos Pedagógicos',
    text: 'Para proyectar los aprendizajes periódicos, la institución diseña instrumentos que organizan los saberes según los propósitos y referentes de desarrollo. Como fundamento teórico científico-pedagógico, se adopta la Taxonomía de Bloom para la formulación de los indicadores de desarrollo y aprendizaje, evaluando los avances acumulados desde una escala cognitiva de menor complejidad hasta procesos de mayor complejidad cognitiva.',
  },
];

export default function Cap7Preescolar() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          7.4.1
        </span>
        <h2 className="section-title">
          Evaluación en educación inicial / preescolar (jardín y transición)
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          7.4.1
        </span>
        <h3 className="hz-head-title">
          Evaluación en educación inicial / preescolar (jardín y transición)
        </h3>
      </div>

      <p className="hz-p">
        En la primera infancia (jardín y transición) la evaluación{" "}
        <span className="hz-key">no se realiza mediante escalas numéricas</span>, sino a través de
        procesos de observación sistemática, seguimiento continuo y valoración cualitativa, en
        estricto cumplimiento de las Bases Curriculares y los lineamientos del Ministerio de
        Educación Nacional (MEN). La estructura de valoración en preescolar se fundamenta en los
        siguientes componentes pedagógicos:
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