const ITEMS = [
  {
    term: '1. Identificación y reporte inmediato',
    text: 'Identificar, reportar y hacer seguimiento a los casos de agresión escolar, bullying, ciberbullying y vulneración de derechos en el aula.',
  },
  {
    term: '2. Obligación de denuncia en 24 horas',
    text: 'Denunciar ante la Fiscalía, Policía de Infancia, Comisaría de Familia o ICBF cualquier indicio o caso de abuso o violencia sexual contra niños, niñas o adolescentes en un término no mayor a 24 horas.',
  },
  {
    term: '3. Cuidado y custodia reforzada',
    text: 'Ejercer el deber de cuidado y vigilancia sobre la integridad de los educandos durante las horas de clase, descansos, salidas pedagógicas y eventos institucionales.',
  },
  {
    term: '4. No revictimización y confidencialidad',
    text: 'Escuchar a los educandos sin juzgar, rotular, estigmatizar ni realizar interrogatorios directos, garantizando la estricta reserva de la información.',
  },
];

export default function Cap5DeberesProteccion() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          5.3.1
        </span>
        <h2 className="section-title">
          Deberes de protección, convivencia y reporte obligatorio
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          5.3.1
        </span>
        <h3 className="hz-head-title">
          Deberes de protección, convivencia y reporte obligatorio
        </h3>
      </div>

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