const FORMAS = [
  {
    term: '1. Citación por parte del docente',
    text: 'El docente, teniendo en cuenta la situación académica o convivencial del estudiante, envía citación al padre de familia, a través del mismo estudiante o medio institucional oficial, para atención en los espacios que la institución ha destinado para tal fin.',
  },
  {
    term: '2. Solicitud de cita por parte del padre de familia',
    text: 'El padre de familia y/o acudiente, a través del estudiante y/o mediante comunicación escrita, puede solicitar al docente la posibilidad de reunirse en los espacios destinados, previa disponibilidad del docente y de las citaciones que se hayan realizado previamente.',
  },
  {
    term: '3. Asistencia en los espacios asignados sin cita previa',
    text: 'El padre de familia y/o acudiente puede acercarse a dialogar con el docente en los horarios establecidos por la institución para tal fin; cuenta con esta posibilidad (NO obligatoria) de hablar con el educador, sujeto a la necesidad y a la disponibilidad de las citaciones que previamente el docente haya organizado en su horario de atención.',
  },
];

export default function Cap6HorarioAtencion() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          6.6
        </span>
        <h2 className="section-title">
          Horario de atención a padres de familia
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          6.6
        </span>
        <h3 className="hz-head-title">
          Horario de atención a padres de familia
        </h3>
      </div>

      <p className="hz-p">
        A inicio del año escolar se entrega a los padres de familia y/o acudientes el{" "}
        <span className="hz-key">horario de atención a padres</span> del año lectivo, con el fin
        de establecer canales de comunicación eficaces entre el hogar y la institución educativa. A
        este espacio se accede a través de tres formas formales:
      </p>

      <ul className="hz-list">
        {FORMAS.map((i) => (
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
        <strong>Parágrafo 11. Atención exclusiva en horario establecido:</strong> los docentes no
        atenderán padres de familia fuera del horario establecido por la institución para tal fin,
        debido a que se encuentran orientando las clases correspondientes según su asignación
        académica o ejerciendo otras funciones pedagógicas o de organización institucional.
      </div>

      <div className="hz-note">
        <strong>Parágrafo 12. Atención por directivos docentes:</strong> los padres de familia
        y/o acudientes tienen la posibilidad de reunirse con docentes directivos (Rector o
        Coordinadores) mediante comunicación escrita previa, o en su efecto ser citados por los
        mismos según sus horarios institucionales.
      </div>
    </>
  );
}