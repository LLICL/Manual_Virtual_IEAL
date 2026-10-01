const EXCEPCIONAL = [
  'Solicitud escrita del acudiente al director de grupo durante las primeras semanas del año escolar.',
  'Evaluación del equipo docente del grado y de Orientación Escolar.',
  'Exigencia de Desempeño Superior en todas las áreas y asignaturas, excelente convivencia y ausencia de anotaciones en el observador.',
  'Presentación y aprobación de pruebas de suficiencia integrales sobre todas las temáticas del grado cursado.',
  'Recomendación de las Comisiones de Evaluación y Consejo Académico al Consejo Directivo, quien aprobará mediante Resolución Rectoral motivada.',
];

export default function Cap7PromocionExcepcional() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          7.6.1
        </span>
        <h2 className="section-title">
          Promoción Anticipada por Desempeño excepcional (Estudiantes Regulares)
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          7.6.1
        </span>
        <h3 className="hz-head-title">
          Promoción Anticipada por Desempeño excepcional (Estudiantes Regulares)
        </h3>
      </div>

      <ul className="hz-list">
        {EXCEPCIONAL.map((i) => (
          <li key={i}>
            <span className="hz-p">{i}</span>
          </li>
        ))}
      </ul>

      <div className="hz-note">
        <strong>Parágrafo 16. Exención de pruebas memorísticas:</strong> si la totalidad de los
        docentes certifica que las competencias y la estructura mental del estudiante trascienden
        los contenidos de memorización, el Consejo Directivo podrá eximirlo de las pruebas escritas
        y autorizar su promoción directa.
      </div>
    </>
  );
}