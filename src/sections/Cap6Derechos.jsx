const ITEMS = [
  {
    term: '1',
    title: 'Elección de la educación',
    text: 'Elegir el tipo de educación que, de acuerdo con sus convicciones éticas y morales, procure el desarrollo integral de sus hijos.',
  },
  {
    term: '2',
    title: 'Publicidad del Manual y SIEE',
    text: 'Conocer con anticipación o en el acto de matrícula el Manual de Convivencia, el PEI, el plan de estudios, el Sistema Institucional de Evaluación (SIEE) y el plan de mejoramiento.',
  },
  {
    term: '3',
    title: 'Información periódica',
    text: 'Recibir información veraz, suficiente y periódica sobre el rendimiento académico y el comportamiento convivencial de su acudido al finalizar cada periodo lectivo.',
  },
  {
    term: '4',
    title: 'Expresión respetuosa y conducto regular',
    text: 'Expresar de manera respetuosa y por el conducto regular sus opiniones o reclamos sobre el proceso formativo de sus hijos y la labor docente.',
  },
  {
    term: '5',
    title: 'Participación en órganos colegiados',
    text: 'Elegir y ser elegido representante de los padres ante el Consejo de Padres, Asamblea General, Junta Directiva de la Asociación de Padres, Consejo Directivo y Comisiones de Evaluación.',
  },
  {
    term: '6',
    title: 'Participación en la actualización normativa',
    text: 'Participar en la revisión, evaluación y actualización anual del PEI y del Manual de Convivencia a través de las instancias de participación.',
  },
  {
    term: '7',
    title: 'Derecho de asociación',
    text: 'Ejercer libremente el derecho de asociación para constituir la Asociación de Padres de Familia con el fin de apoyar el servicio educativo.',
  },
  {
    term: '8',
    title: 'Respuesta a PQRS',
    text: 'Recibir respuesta oportuna, clara y de fondo a sus peticiones, quejas y reclamos dentro de los términos establecidos en este Manual y la ley.',
  },
  {
    term: '9',
    title: 'Asignación de segundo evaluador',
    text: 'Solicitar la asignación de un segundo evaluador en caso de controversia académica debidamente comprobada, conforme a los procedimientos del SIEE.',
  },
  {
    term: '10',
    title: 'Debido proceso e impugnación',
    text: 'Controvertir las decisiones convivenciales o académicas que afecten a su acudido, mediante los recursos de Reposición (ante Consejo Directivo) y Apelación (ante Rectoría).',
  },
];

export default function Cap6Derechos() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          6.1
        </span>
        <h2 className="section-title">
          Derechos de los padres, madres de familia y acudientes
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          6.1
        </span>
        <h3 className="hz-head-title">
          Derechos de los padres, madres de familia y acudientes
        </h3>
      </div>

      <p className="hz-p">
        La condición de{" "}
        <span className="hz-key">padre de familia o acudiente registrado en la matrícula</span>{" "}
        otorga los siguientes derechos fundamentales e institucionales:
      </p>

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