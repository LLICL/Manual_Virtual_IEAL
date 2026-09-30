const ITEMS = [
  {
    term: '1',
    title: 'Respeto del debido proceso y de la ruta de atención',
    text: 'Conocer, acatar e inexcusablemente respetar el debido proceso y la ruta de atención que se debe aplicar a los educandos, especialmente las actas de debido proceso, acatando lo pertinente a la normativa aplicable a los menores de edad.',
  },
  {
    term: '2',
    title: 'Puntualidad y cumplimiento de la jornada laboral',
    text: 'Ser puntuales en la llegada a la Institución y cumplir con la jornada laboral establecida para los funcionarios de la Administración municipal o Distrital, y cumplir con el horario asignado por El Rector, de acuerdo con las necesidades de nuestra institución.',
  },
  {
    term: '3',
    title: 'Buen trato de palabra y de obra',
    text: 'Brindar buen trato de palabra y de obra tanto a directivos, docentes y padres de familia, como a estudiantes y a personas que soliciten o requieran de algún servicio relacionado con sus funciones.',
  },
  {
    term: '4',
    title: 'Servicio adecuado, diligente y oportuno',
    text: 'Prestar un servicio adecuado, diligente y oportuno, de manera concurrente con los principios organizacionales y el alcance de los objetivos misionales de nuestra institución.',
  },
  {
    term: '5',
    title: 'Respuesta cortés a sugerencias y observaciones',
    text: 'Responder cortésmente a las sugerencias y observaciones que reciban por parte de las directivas de nuestra institución.',
  },
  {
    term: '6',
    title: 'Sigilo profesional y protección del buen nombre',
    text: 'Mantener el sigilo profesional evitando que por su causa se divulgue información o se hagan afirmaciones y/o imputaciones que perjudiquen el buen nombre de otras personas o el funcionamiento institucional y se cause de alguna manera desmedro en el alcance de los objetivos institucionales o deterioro del clima institucional.',
  },
  {
    term: '7',
    title: 'Aporte oportuno de información',
    text: 'De acuerdo con la competencia de la dependencia a la cual han sido asignados, aportar de manera oportuna la información requerida por las directivas o cualquier miembro de la Comunidad Educativa, así como por las dependencias de la Administración municipal que administran y controlan la ejecución del servicio educativo público.',
  },
];

export default function Cap5AdministrativoDeberes() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          5.7.2
        </span>
        <h2 className="section-title">
          Deberes del personal administrativo y de servicios
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          5.7.2
        </span>
        <h3 className="hz-head-title">
          Deberes del personal administrativo y de servicios
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