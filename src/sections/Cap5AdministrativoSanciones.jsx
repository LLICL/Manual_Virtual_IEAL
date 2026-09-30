const ITEMS = [
  {
    term: 'a',
    title: 'Amonestación verbal',
  },
  {
    term: 'b',
    title: 'Amonestación escrita con anotación a la hoja de vida',
  },
  {
    term: 'c',
    title: 'Llamado de atención por escrito (faltas leves)',
    text: 'Cuando un funcionario administrativo incurra en falta constitutiva de hechos que contraríen en menor grado el orden administrativo o académico al interior de la institución sin afectar sustancialmente los deberes funcionales o comportamentales, el Rector, previo cumplimiento del debido proceso, hará un llamado de atención por escrito al autor del hecho sin necesidad de acudir a formalismo procesal alguno. Este llamado de atención se remitirá mediante oficio a las Oficinas de Recursos Humanos de la Secretaría de Educación Municipal para efectos de anotación en la respectiva hoja de vida.',
  },
  {
    term: 'd',
    title: 'Remisión para acción disciplinaria (faltas graves o reiteradas)',
    text: 'En el evento que el funcionario administrativo incurra en la reiteración de tales hechos o en faltas graves o gravísimas, el Rector, mediante oficio, comunicará el caso a las Oficinas de Control Interno Disciplinario de la Alcaldía Municipal de Sincelejo, adjuntando los soportes allegados, para dar inicio formal a la acción disciplinaria.',
  },
];

export default function Cap5AdministrativoSanciones() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          5.7.4
        </span>
        <h2 className="section-title">
          Sanciones del personal administrativo y de servicio
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          5.7.4
        </span>
        <h3 className="hz-head-title">
          Sanciones del personal administrativo y de servicio
        </h3>
      </div>

      <ul className="hz-list">
        {ITEMS.map((i) => (
          <li key={i.term}>
            <span className="hz-term">
              {i.term}. {i.title}
            </span>
            {i.text && (
              <details className="hz-collapse hz-collapse--mini">
                <summary>Ver descripción</summary>
                <div className="hz-collapse-body">
                  <p>{i.text}</p>
                </div>
              </details>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}