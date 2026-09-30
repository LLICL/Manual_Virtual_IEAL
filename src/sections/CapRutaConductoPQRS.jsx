const PASOS = [
  {
    term: 'Radicación formal',
    text: 'Toda PQRS escrita deberá radicarse en la oficina específica si es académica o de convivencia; las demás se radican de manera física en la Secretaría General de la institución.',
  },
  {
    term: 'Trámite por competencia',
    text: 'La Secretaría asignará el trámite según el asunto: Docente titular, Coordinación o Rectoría.',
  },
  {
    term: 'Términos legales de respuesta',
    text: 'Se resolverán de fondo e informará al peticionario en los siguientes plazos máximos: quejas y reclamos convivenciales: ocho (8) días hábiles; derechos de petición de información o certificaciones: quince (15) días hábiles; consultas complejas o del Archivo Institucional: veinticinco (25) días hábiles.',
  },
];

export default function CapRutaConductoPQRS() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.2.7.3
        </span>
        <h2 className="section-title">
          Conducto regular para PQR S(Peticiones, Quejas, Reclamos y Sugerencias)
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.2.7.3
        </span>
        <h3 className="hz-head-title">
          Conducto regular para Peticiones, Quejas, Reclamos y Sugerencias (PQRS)
        </h3>
      </div>

      <p className="hz-p">
        Todo trámite administrativo, solicitud formal de certificados o reclamo comunitario radicado
        por padres de familia o terceros observará el siguiente procedimiento de PQRS:
      </p>

      <ol className="hz-ol">
        {PASOS.map((p) => (
          <li key={p.term}>
            <span className="hz-term">{p.term}:</span> {p.text}
          </li>
        ))}
      </ol>
    </>
  );
}