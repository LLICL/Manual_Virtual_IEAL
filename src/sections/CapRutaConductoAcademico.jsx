const INSTANCIAS = [
  {
    term: '1. Docente titular del área o asignatura',
    text: 'Reclamación escrita u oral presentada respetuosamente ante el profesor de la materia, dentro de los cinco (5) días hábiles siguientes a la notificación de la nota.',
  },
  {
    term: '2. Comisión de Evaluación y Promoción / Coordinación Académica',
    text: 'Instancia competente en caso de persistir el desacuerdo, o para solicitar la designación de un Segundo Evaluador conforme a los procedimientos del SIEE.',
  },
  {
    term: '3. Consejo Académico',
    text: 'Órgano superior pedagógico encargado de estudiar en apelación las controversias evaluativas, los criterios de nivelación o los casos de promoción anticipada, y de recomendar lo pertinente al Consejo Directivo.',
  },
  {
    term: '4. Consejo Directivo y Rectoría',
    text: 'Instancia final para resolver los recursos de reposición (ante el Consejo Directivo en 3 días hábiles) y apelación (ante la Rectoría en 5 días hábiles), emitiendo el fallo definitivo e inmodificable.',
  },
];

export default function CapRutaConductoAcademico() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.2.7.2
        </span>
        <h2 className="section-title">
          Conducto regular para reclamaciones académicas (SIEE)
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.2.7.2
        </span>
        <h3 className="hz-head-title">
          Conducto regular para reclamaciones académicas y evaluativas (SIEE)
        </h3>
      </div>

      <p className="hz-p">
        Toda inconformidad, solicitud de revisión de notas, evaluación extemporánea o controversia
        académica formulada por estudiantes o acudientes se tramitará{' '}
        <span className="hz-key">por escrito</span> en las siguientes{' '}
        <span className="hz-key">cuatro (4) instancias</span>:
      </p>

      <ol className="hz-ol">
        {INSTANCIAS.map((i) => (
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
      </ol>
    </>
  );
}