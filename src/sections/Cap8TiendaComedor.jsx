const ITEMS = [
  {
    term: 'Contratación e higiene',
    text: 'La concesión de la tienda escolar se realiza mediante licitación pública institucional, exigiendo el cumplimiento de normas de manipulación de alimentos, precios justos y oferta de productos saludables.',
  },
  {
    term: 'Normas de conducta y turnos',
    text: 'Los estudiantes acudirán a la tienda y comedor escolar únicamente durante los períodos oficiales de descanso o receso. Se exige mantener filas ordenadas sin empujones, trato cortés al personal de atención, consumo higiénico de alimentos y depositar los desechos en las canecas de reciclaje correspondientes, dejando mesas y sillas limpias.',
  },
  {
    term: 'Prohibición de venta ambulante externa y exoneración de responsabilidad',
    text: 'Queda prohibida la compra de alimentos a vendedores ambulantes a través de cerramientos o mallas de la institución. Por razones de salud pública y control epidemiológico, la institución se exime de cualquier responsabilidad por brotes de intoxicación derivados del consumo de alimentos adquiridos a proveedores externos no autorizados.',
  },
];

export default function Cap8TiendaComedor() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          8.5
        </span>
        <h2 className="section-title">
          Tienda escolar y comedor escolar (Programa de Alimentación Escolar - PAE)
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          8.5
        </span>
        <h3 className="hz-head-title">
          Tienda escolar y comedor escolar (Programa de Alimentación Escolar - PAE)
        </h3>
      </div>

      <p className="hz-p">
        El servicio de tienda y comedor escolar brinda soporte nutricional a la comunidad educativa
        bajo <span className="hz-key">estándares de calidad e higiene</span>:
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