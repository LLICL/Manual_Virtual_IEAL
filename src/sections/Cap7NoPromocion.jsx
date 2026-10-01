const CAUSALES = [
  {
    term: 'Causal 1. Rendimiento académico insuficiente',
    text: 'Obtener valoración final en Desempeño Bajo (1.0 a 2.9) en una (1) o más áreas/asignaturas del plan de estudios al finalizar el año lectivo, tras haber agotado las nivelaciones ordinarias y especiales.',
  },
  {
    term: 'Causal 2. Ausentismo injustificado',
    text: 'Acumular inasistencias injustificadas iguales o superiores al veinte por ciento (20%) de la intensidad horaria total del año escolar en una o más áreas/asignaturas.',
  },
  {
    term: 'Causal 3. Ausentismo justificado no nivelado',
    text: 'Acumular el 20% o más de inasistencias justificadas sin haber presentado o aprobado las actividades de nivelación y trabajos de nivelación prescritos.',
  },
];

export default function Cap7NoPromocion() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          7.5.1
        </span>
        <h2 className="section-title">
          Causales taxativas para la no promoción (reprobación del grado)
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          7.5.1
        </span>
        <h3 className="hz-head-title">
          Causales taxativas para la no promoción (reprobación del grado)
        </h3>
      </div>

      <ul className="hz-list">
        {CAUSALES.map((i) => (
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

      <div className="hz-note">
        <strong>Parágrafo especial. Para estudiantes repitentes:</strong> los estudiantes que
        inicien actividades especiales con tres (3) o más áreas reprobadas (año no promovido) podrán
        asistir a las jornadas de nivelación de fin de año como reforzamiento pedagógico para
        preparar el reinicio del grado y optar a la promoción anticipada por repitencia al cierre
        del primer periodo del año siguiente.
      </div>
    </>
  );
}