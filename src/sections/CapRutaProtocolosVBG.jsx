const ACCIONES = [
  {
    term: '1. Prevención y desmitificación',
    text: 'Promoción de lecturas no sexistas, análisis crítico de estereotipos, cuestionamiento de roles machistas y fomento de masculinidades conscientes.',
  },
  {
    term: '2. Ruta de atención e imparcialidad',
    text: 'Escucha activa con perspectiva de género, confidencialidad absoluta y estricta prohibición de revictimizar, juzgar o confrontar directamente a la víctima con el agresor.',
  },
  {
    term: '3. Denuncia obligatoria',
    text: 'Si la agresión constituye presunto delito (abuso sexual, acoso, exhibicionismo), se denuncia de oficio ante la Fiscalía General de la Nación, la Policía de Infancia y Adolescencia o la Comisaría de Familia en un plazo no mayor a 24 horas.',
  },
  {
    term: '4. Garantía de trayectoria educativa',
    text: 'Aplicación de flexibilizaciones académicas y medidas de protección administrativas para asegurar la permanencia de la estudiante en el sistema, sin segregación.',
  },
];

export default function CapRutaProtocolosVBG() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.3.3
        </span>
        <h2 className="section-title">
          Violencias basadas en género (VBG)
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.3.3
        </span>
        <h3 className="hz-head-title">
          Protocolo para la prevención y atención de violencias basadas en género (VBG)
        </h3>
      </div>

      <p className="hz-p">
        La institución adopta medidas de <span className="hz-key">prevención, atención y garantía de
        derechos</span> frente a las violencias basadas en género en el entorno escolar:
      </p>

      <ol className="hz-ol">
        {ACCIONES.map((a) => (
          <li key={a.term}>
            <span className="hz-term">{a.term}</span>
            <details className="hz-collapse hz-collapse--mini">
              <summary>Ver descripción</summary>
              <div className="hz-collapse-body">
                <p>{a.text}</p>
              </div>
            </details>
          </li>
        ))}
      </ol>
    </>
  );
}