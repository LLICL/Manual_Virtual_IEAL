const MEDIDAS = [
  {
    term: 'Ruta de Atención Integral',
    text: 'Toda conducta de intimidación sistemática se abordará mediante los protocolos de las Situaciones Tipo II o Tipo III, según la gravedad o la comisión de delitos conexos (injuria, calumnia, lesiones, amenazas).',
  },
  {
    term: 'Indemnización por daños y perjuicios',
    text: 'Los padres de familia y/o acudientes del estudiante declarado como agresor en un proceso disciplinario en firme deberán indemnizar económicamente a la familia del estudiante víctima por los daños materiales y morales causados, sin perjuicio de las sanciones formativas e institucionales impuestas al agresor.',
  },
];

export default function CapRegAcoso() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          3.6.4
        </span>
        <h2 className="section-title">
          Del acoso escolar
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          3.6.4
        </span>
        <h3 className="hz-head-title">
          Del acoso escolar
        </h3>
      </div>

      <p className="hz-p">
        La institución mantiene una{' '}
        <span className="hz-key">política de cero tolerancias frente al acoso escolar</span> (bullying),
        ciberacoso (ciberbullying), intimidación o vejámenes físicos y verbales.
      </p>

      <ol className="hz-letras">
        {MEDIDAS.map((m) => (
          <li key={m.term}>
            <span className="hz-term">{m.term}:</span> {m.text}
          </li>
        ))}
      </ol>
    </>
  );
}
