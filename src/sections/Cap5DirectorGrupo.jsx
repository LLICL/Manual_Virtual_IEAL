const ITEMS = [
  {
    term: '1. Inducción y acompañamiento',
    text: 'Orientar el proceso de adaptación de los estudiantes al inicio del año lectivo y socializar el Manual de Convivencia.',
  },
  {
    term: '2. Diligenciamiento del Observador',
    text: 'Mantener al día la ficha de seguimiento u Observador del Estudiante en la plataforma institucional, registrando citaciones, compromisos y reconocimientos.',
  },
  {
    term: '3. Control de Asistencia y Citación Parental',
    text: 'Realizar seguimiento diario a las inasistencias y retardos; citar presencialmente al acudiente al acumular dos (2) ausencias injustificadas en un mes.',
  },
  {
    term: '4. Mediación de Conflictos',
    text: 'Liderar el abordaje pedagógico inicial de las Situaciones Tipo I que se presenten en el grupo.',
  },
  {
    term: '5. Informe a Comisiones',
    text: 'Presentar el informe académico y convivencial del curso ante las Comisiones de Evaluación y Promoción al cierre de cada periodo.',
  },
];

export default function Cap5DirectorGrupo() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          5.5
        </span>
        <h2 className="section-title">
          Funciones específicas del director(a) de grupo
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          5.5
        </span>
        <h3 className="hz-head-title">
          Funciones específicas del director(a) de grupo
        </h3>
      </div>

      <p className="hz-p">
        El director de grupo es el{" "}
        <span className="hz-key">articulador inmediato de la acción formativa</span> y el enlace
        directo con la familia. Le corresponden las siguientes funciones:
      </p>

      <ul className="hz-list">
        {ITEMS.map((i) => (
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
    </>
  );
}