const INASISTENCIAS = [
  {
    term: '1. Primera Inasistencia',
    text: 'Diálogo empático con el orientador/director de grupo y compromiso pedagógico práctico en el hogar con el educando.',
  },
  {
    term: '2. Segunda Inasistencia',
    text: 'Taller de nivelación flexible de competencias parentales (presencial o TIC) y apoyo colaborativo en material o logística escolar.',
  },
  {
    term: '3. Tercera Inasistencia o Ausencia Total',
    text: 'Mesa de concertación con el Rector y Comité de Convivencia para suscribir un Plan de Compromiso Familiar Solidario (apadrinamiento formativo de zonas verdes, apoyo en comedor o animación de juegos recreativos en asocio con su hijo/a).',
  },
];

const CONDICIONES = [
  'Pedagógicos',
  'Razonables',
  'Respetuosos de la dignidad humana',
  'Reflexivos',
  'Solidarios',
  'Coherentes con el PEI',
  'Participativos con los NNA',
  'Restaurativos y de mediación',
  'Prohibición absoluta de erogaciones monetarias',
];

export default function Cap6RutaRestaurativa() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          6.4.1
        </span>
        <h2 className="section-title">
          Ruta de alternativas restaurativas
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          6.4.1
        </span>
        <h3 className="hz-head-title">
          Ruta de alternativas restaurativas
        </h3>
      </div>

      <p className="hz-p">
        Ante la inasistencia de un acudiente a los encuentros programados, se aplica la
        siguiente ruta de <span className="hz-key">alternativas restaurativas</span>:
      </p>

      <ul className="hz-list">
        {INASISTENCIAS.map((i) => (
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
        <span className="hz-head-num">
          6.4.1
        </span>
        <h3 className="hz-head-title">
          Nueve (9) Condiciones de Legitimidad
        </h3>
      </div>

      <p className="hz-p">
        Los compromisos restaurativos deben cumplir las siguientes nueve condiciones de
        legitimidad:
      </p>

      <ul className="hz-list">
        {CONDICIONES.map((c, idx) => (
          <li key={c}>
            <span className="hz-term">
              {idx + 1}. {c}.
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}