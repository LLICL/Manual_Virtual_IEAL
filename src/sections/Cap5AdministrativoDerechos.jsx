const ITEMS = [
  {
    term: '1',
    title: 'Trato respetuoso y cordial',
    text: 'Recibir un trato respetuoso y cordial por parte de los miembros de la Comunidad Educativa.',
  },
  {
    term: '2',
    title: 'Conocimiento de funciones del cargo',
    text: 'Conocer las funciones y competencias de su cargo y ser exigidos únicamente sobre ellas.',
  },
  {
    term: '3',
    title: 'Evaluación oportuna, justa y equitativa',
    text: 'Ser evaluados en su desempeño de manera oportuna, justa y equitativa de acuerdo a las disposiciones vigentes en la materia.',
  },
  {
    term: '4',
    title: 'Ambiente de armonía, respeto y solidaridad',
  },
  {
    term: '5',
    title: 'Participación en el bienestar social institucional',
    text: 'Participar de los servicios y actividades del bienestar social que se desarrollan en la Institución.',
  },
  {
    term: '6',
    title: 'Evaluación institucional y elaboración del Manual',
    text: 'Participar en la evaluación institucional y en la elaboración del presente Manual, conociendo, aceptando y cumpliendo todas las normas establecidas en el manual de funciones según su cargo y las normas vigentes.',
  },
];

export default function Cap5AdministrativoDerechos() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          5.7.1
        </span>
        <h2 className="section-title">
          Derechos del personal administrativo y de servicios
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          5.7.1
        </span>
        <h3 className="hz-head-title">
          Derechos del personal administrativo y de servicios
        </h3>
      </div>

      <ul className="hz-list">
        {ITEMS.map((i) => (
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
    </>
  );
}