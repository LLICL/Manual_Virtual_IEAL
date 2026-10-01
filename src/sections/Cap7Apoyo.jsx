const REFUERZOS = [
  {
    term: 'Refuerzo inmediato de aula',
    text: 'Asignación inmediata de ejercicios, guías o tutorías entre pares durante la clase tan pronto se detecte la dificultad.',
  },
  {
    term: 'Refuerzo permanente (hora de acompañamiento)',
    text: 'Espacio semanal agendado en el cronograma escolar donde el docente atiende de forma personalizada en grupos pequeños a estudiantes con vacíos pedagógicos.',
  },
];

const NIVELACIONES = [
  {
    term: 'Semana de nivelación ordinaria',
    text: 'Programada al finalizar cada uno de los cuatro periodos académicos. Se entregan planes de apoyo escritos que deben ser sustentados mediante pruebas orales, escritas o proyectos prácticos.',
  },
  {
    term: 'Nota máxima de nivelación',
    text: 'La calificación máxima que se asignará al aprobar una nivelación será de Desempeño Básico (3.0), nota que reemplazará el Desempeño Bajo previo.',
  },
  {
    term: 'Nivelaciones Especiales de Fin de Año',
    text: 'Se realizan durante la última semana del calendario escolar para aquellos estudiantes que al cierre del cuarto periodo persistan con Desempeño Bajo en una (1) o dos (2) áreas.',
  },
];

export default function Cap7Apoyo() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          7.9
        </span>
        <h2 className="section-title">
          Estrategias de apoyo: refuerzos escolares y nivelaciones periódicas
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          7.9
        </span>
        <h3 className="hz-head-title">
          Estrategias de apoyo: refuerzos escolares y nivelaciones periódicas
        </h3>
      </div>

      <div className="hz-head">
        <h3 className="hz-head-title">
          <span className="hz-term">1.</span> Refuerzos escolares (durante el periodo académico)
        </h3>
      </div>

      <ul className="hz-list">
        {REFUERZOS.map((i) => (
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

      <div className="hz-head">
        <h3 className="hz-head-title">
          <span className="hz-term">2.</span> Evaluaciones bimestrales
        </h3>
      </div>

      <p className="hz-p">
        Pruebas aplicadas al finalizar cada periodo lectivo para medir la apropiación de
        competencias antes de la semana de nivelación.
      </p>

      <div className="hz-head">
        <h3 className="hz-head-title">
          <span className="hz-term">3.</span> Estrategia para superar dificultades académicas
          (nivelaciones periódicas)
        </h3>
      </div>

      <ul className="hz-list">
        {NIVELACIONES.map((i) => (
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