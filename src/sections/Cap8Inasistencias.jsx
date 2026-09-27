const PROCEDIMIENTOS = [
  {
    term: 'Notificación y citación por inasistencia continuada',
    text: 'Acumuladas dos (2) faltas continuas o discontinuas en un mismo mes sin justificación, el director de grupo cita de inmediato al acudiente, acuerda los correctivos y deja evidencia escrita en el observador.',
  },
  {
    term: 'Responsabilidad del padre de familia o acudiente',
    text: 'Si el responsable es el padre de familia o acudiente, la Coordinación de Convivencia informa a la Rectoría y da traslado a la autoridad competente (Comisaría de Familia o ICBF).',
  },
  {
    term: 'Responsabilidad del estudiante',
    text: 'Si el responsable es el estudiante, se le amonestará según el régimen disciplinario de este Manual; ante reincidencia, la Orientación Escolar activa la Ruta de Atención Integral.',
  },
  {
    term: 'Justificación de inasistencias',
    text: 'Se justifica por escrito ante la Coordinación de Convivencia, dentro de las veinticuatro (24) horas hábiles siguientes a la ausencia, con incapacidad médica de la EPS o prueba de caso fortuito, fuerza mayor o calamidad doméstica.',
  },
  {
    term: 'Trámite de excusa e incapacidad médica',
    text: 'El acudiente entrega en físico la incapacidad o la excusa soportada; la Coordinación la refrenda y notifica al aula. El estudiante se pone al día y tiene hasta tres (3) días hábiles para reprogramar evaluaciones o entregas pendientes.',
  },
  {
    term: 'Efecto de las ausencias no justificadas',
    text: 'En ausencia injustificada se pierde el derecho a las evaluaciones de esas fechas; si asiste a las nivelaciones periódicas, puede presentarlas conforme al SIEE.',
  },
  {
    term: 'Límite máximo de inasistencia para la promoción',
    text: 'Con inasistencias justificadas o injustificadas iguales o superiores al veinte por ciento (20%) de la intensidad horaria total del año escolar, el estudiante reprobará el área o grado correspondiente.',
  },
  {
    term: 'Permisos especiales y responsabilidad del educando',
    text: 'Los acudientes solicitan permisos por causas justificadas o fuerza mayor, por escrito con firma y cédula, dirigidos a la Coordinación Académica o de Convivencia. El educando queda responsable de ponerse al día y presentar trabajos y evaluaciones en las fechas asignadas.',
  },
];

export default function Cap8Inasistencias() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          3.3.3
        </span>
        <h2 className="section-title">
          Manejo de inasistencias, justificaciones y trámites
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          3.3.3
        </span>
        <h3 className="hz-head-title">
          Manejo de inasistencias, justificaciones y trámites
        </h3>
      </div>

      <p className="hz-p">
        Toda inasistencia deberá comunicarse de manera oportuna al padre de familia y/o acudiente.
        Para su seguimiento y control se establece el siguiente procedimiento:
      </p>

      <ol className="hz-steps">
        {PROCEDIMIENTOS.map((p) => (
          <li className="hz-step" key={p.term}>
            <span className="hz-step-num">
              <span className="hz-step-dot" />
              <span className="hz-step-line" />
            </span>
            <span className="hz-step-body">
              <span className="hz-step-term">{p.term}</span>
              <span className="hz-step-text">{p.text}</span>
            </span>
          </li>
        ))}
      </ol>
    </>
  );
}
