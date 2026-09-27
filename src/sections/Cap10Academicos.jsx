const COMPROMISOS = [
  'Asumir la condición de primer responsable de su propia autoformación, autodisciplina y desarrollo integral.',
  'Asistir diaria y puntualmente a clases, a la jornada escolar y a todas las actividades pedagógicas programadas por la institución.',
  'Cumplir y entregar oportunamente los trabajos, tareas, investigaciones, nivelaciones y el servicio social en las fechas asignadas por los docentes.',
  'Contar desde el primer día con sus propios libros, útiles e implementos necesarios para el normal desarrollo escolar.',
  'Prestar atención activa a las explicaciones pedagógicas, tomar apuntes claros y participar respetuosamente en el aula de clase.',
  'Preparar adecuadamente sus evaluaciones según los criterios evaluativos de cada área y actuar con estricta honestidad académica, evitando cualquier forma de fraude, copia o plagio.',
  'Reclamar y ejecutar oportunamente los planes y horarios de nivelación y apoyo docente.',
  'Respetar las notas y observaciones consignadas en sus cuadernos de trabajo, talleres, evaluaciones y documentos docentes.',
  'Presentar dentro de las veinticuatro (24) horas hábiles las excusas, incapacidades médicas o justificaciones de inasistencia o retardos ante la Coordinación de Convivencia.',
  'Ponerse al día con los temas y presentar las evaluaciones pendientes en un plazo máximo de tres (3) días hábiles tras su reintegro.',
  'Permanecer en el aula de clase durante las sesiones académicas con una actitud de interés y constancia.',
  'Portar diariamente el carné estudiantil y el documento de afiliación a la EPS.',
];

export default function Cap10Academicos() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          3.5.1
        </span>
        <h2 className="section-title">
          Compromisos académicos
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          3.5.1
        </span>
        <h3 className="hz-head-title">
          Compromisos académicos
        </h3>
      </div>

      <p className="hz-p">Cada estudiante tiene el compromiso de:</p>

      <ol className="hz-letras">
        {COMPROMISOS.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ol>
    </>
  );
}
