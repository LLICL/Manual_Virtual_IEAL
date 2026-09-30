const ITEMS = [
  {
    term: '1. Inteligencia digital',
    text: 'Formación transversal en las 8 habilidades digitales: identidad digital, respeto a derechos digitales, gestión de la privacidad, autocontrol del tiempo en pantalla y resiliencia ante riesgos.',
  },
  {
    term: '2. Cibersituaciones Tipo II (ciberacoso recurrente sin comisión de delito)',
    text: 'Reconstrucción de la situación, aplicación de medidas restaurativas (eliminación de contenidos, disculpas privadas), acuerdos con las familias y reporte en SIUCE.',
  },
  {
    term: '3. Cibersituaciones Tipo III (ciberdelitos, suplantación, pornografía infantil, extorsión digital)',
    text: 'Denuncia penal inmediata ante la Fiscalía General de la Nación o el CAI Virtual de la Policía Nacional, citación presencial a acudientes y reporte en SIUCE.',
  },
];

export default function CapRutaProtocolosCiberAcoso() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.3.4.1
        </span>
        <h2 className="section-title">
          Protocolo de cibersituaciones y ciberacoso
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.3.4.1
        </span>
        <h3 className="hz-head-title">
          Protocolo de Cibersituaciones y ciberacoso
        </h3>
      </div>

      <ol className="hz-ol">
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
      </ol>
    </>
  );
}