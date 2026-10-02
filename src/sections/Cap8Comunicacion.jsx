const ITEMS = [
  {
    term: 'Periódico mural y carteleras',
    text: 'Espacios destinados a la divulgación de trabajos artísticos, proyectos transversales y avisos cívicos. Su renovación es quincenal y estará bajo la coordinación del Departamento de Humanidades.',
  },
  {
    term: 'Sistema de Comunicación Interno (SICI)',
    text: 'Administrado por la Coordinación de cada jornada para avisos comunitarios e himnos. Queda estrictamente prohibida la emisión de música o contenidos que promuevan lenguaje obsceno, violencia, discriminación o degraden a la mujer.',
  },
  {
    term: 'Sitio Web Oficial (www.antoniolenis.edu.co)',
    text: 'Portal institucional para consultas de información, descarga del Manual, boletines y procesos de inscripción y matrícula en línea.',
  },
  {
    term: 'Comunidades oficiales de WhatsApp Institucional',
    text: 'Los grupos de WhatsApp creados por los directores de grupo con los acudientes serán de carácter exclusivo e institucional, configurados en modo restringido (unidireccional) para el envío de información, citaciones y comunicados oficiales, estando proscrito su uso para discusiones particulares o cadenas no pedagógicas.',
  },
];

export default function Cap8Comunicacion() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          8.6
        </span>
        <h2 className="section-title">
          Medios de comunicación institucional y canales digitales
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          8.6
        </span>
        <h3 className="hz-head-title">
          Medios de comunicación institucional y canales digitales
        </h3>
      </div>

      <p className="hz-p">
        La institución dispone de{' '}
        <span className="hz-key">canales de comunicación oficiales</span> para la divulgación de
        información académica, convivencial y cultural:
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