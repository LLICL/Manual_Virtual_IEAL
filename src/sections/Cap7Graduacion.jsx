const REQUISITOS = [
  {
    term: '1',
    title: 'Aprobación académica formal',
    text: 'Aprobación de la totalidad de los grados de Educación Básica (1° a 9°) y Media (10° y 11°).',
  },
  {
    term: '2',
    title: 'Servicio Social Estudiantil Obligatorio',
    text: 'Cumplimiento a satisfacción de las ochenta (80) horas del Servicio Social Estudiantil Obligatorio.',
  },
  {
    term: '3',
    title: 'Paz y salvo',
    text: 'Estar a paz y salvo por todo concepto académico, administrativo, bibliotecario y de reposición de bienes con la institución.',
  },
  {
    term: '4',
    title: 'Pruebas Estado SABER 11° (ICFES)',
    text: 'Inscripción formal y presentación efectiva de las Pruebas Estado SABER 11° (ICFES).',
  },
  {
    term: '5',
    title: 'Curso Institucional Obligatorio de Pre-ICFES',
    text: 'Asistencia y participación en el Curso Institucional Obligatorio de Pre-ICFES programado para los grados 10° y 11°.',
  },
];

export default function Cap7Graduacion() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          7.7
        </span>
        <h2 className="section-title">
          Requisitos para la graduación y proclamación de bachilleres
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          7.7
        </span>
        <h3 className="hz-head-title">
          Requisitos para la graduación y proclamación de bachilleres
        </h3>
      </div>

      <p className="hz-p">
        Para obtener el título de Bachiller (Académico o Técnico) y participar en la ceremonia
        solemne de graduación, los estudiantes del Grado Undécimo (11°) deberán acreditar los
        siguientes <span className="hz-key">requisitos cumplidos e innegociables</span>:
      </p>

      <ul className="hz-list">
        {REQUISITOS.map((i) => (
          <li key={i.term}>
            <span className="hz-term">
              {i.term}. {i.title}
            </span>
            {i.text && (
              <details className="hz-collapse hz-collapse--mini">
                <summary>Ver descripción</summary>
                <div className="hz-collapse-body">
                  <p>{i.text}</p>
                </div>
              </details>
            )}
          </li>
        ))}
      </ul>

      <div className="hz-note">
        <strong>
          Parágrafo 17. Reserva del derecho de proclamación en ceremonia solemne:
        </strong>{" "}
        las directivas institucionales y el Consejo Directivo se reservan el derecho de autorizar la
        participación en la ceremonia solemne de graduación a aquellos estudiantes que al finalizar
        el año lectivo atenten contra la filosofía institucional, incurran en faltas
        graves/gravísimas o desvirtúen el Manual de Convivencia. En tales casos, el estudiante
        recibirá su título de Bachiller por ventanilla en la Secretaría Académica.
      </div>
    </>
  );
}