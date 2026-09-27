const ESTAMENTOS = [
  ['2.3.1', 'Consejo de Estudiantes y Veeduría de Diversidad e Inclusión (VDI)'],
  ['2.3.2', 'Personero(a) Estudiantil'],
  ['2.3.3', 'Contralor(a) Estudiantil'],
  ['2.3.4', 'Comité Escolar de Convivencia'],
  ['2.3.5', 'Comisiones de Evaluación y Promoción'],
  ['2.3.6', 'Consejo de Padres de Familia'],
  ['2.3.7', 'Asociación de Padres de Familia'],
  ['2.3.8', 'Asociación de exalumnos y sector productivo'],
];

export default function CapEstamentos() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          2.3
        </span>
        <h2 className="section-title">
          Estamentos e instancias de participación y control
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          2.3
        </span>
        <h3 className="hz-head-title">
          Estamentos e instancias de participación y control
        </h3>
      </div>

      <p className="hz-p">
        Para garantizar la{' '}
        <strong className="hz-key">democracia participativa</strong>, el{' '}
        <strong className="hz-key">control social</strong> y el{' '}
        <strong className="hz-key">acompañamiento formativo</strong>, la institución organiza los
        siguientes estamentos:
      </p>

      <ul className="hz-list">
        {ESTAMENTOS.map(([num, nombre]) => (
          <li key={num}>
            <span className="hz-term">{num}</span> {nombre}
          </li>
        ))}
      </ul>
    </>
  );
}
