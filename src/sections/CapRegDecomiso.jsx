const PROCEDIMIENTOS = [
  {
    term: 'Procedimiento de decomiso',
    text: 'Los objetos distractores, juguetes, juegos de azar o elementos no autorizados en clase serán retenidos por los docentes o coordinadores y entregados en la Coordinación de Convivencia para su posterior devolución al acudiente.',
  },
  {
    term: 'Responsabilidad por daños a la planta física',
    text: 'Todo daño o deterioro causado intencional o culposamente sobre sillas, mesas, pupitres, paredes, equipos de cómputo o laboratorios constituirá Situación Tipo II o Tipo III (daño en bien ajeno). El estudiante y su acudiente deberán reparar o reponer el bien afectado en un plazo no mayor a diez (10) días hábiles.',
  },
];

export default function CapRegDecomiso() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          3.6.6
        </span>
        <h2 className="section-title">
          Decomiso de bienes ajenos o prohibidos y reposición de daños
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          3.6.6
        </span>
        <h3 className="hz-head-title">
          Decomiso de bienes ajenos o prohibidos y reposición de daños
        </h3>
      </div>

      <ol className="hz-letras">
        {PROCEDIMIENTOS.map((p) => (
          <li key={p.term}>
            <span className="hz-term">{p.term}:</span> {p.text}
          </li>
        ))}
      </ol>
    </>
  );
}
