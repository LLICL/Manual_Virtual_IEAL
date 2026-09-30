const ITEMS = [
  {
    term: '1. Dirección Integrada de Primaria',
    text: 'Ejecutar conjuntamente las funciones de administración curricular y gestión convivencial para los niveles de Transición a Quinto Grado.',
  },
  {
    term: '2. Custodia reforzada y restricción de salida autónoma',
    text: 'Aplicar la prohibición absoluta del retiro o salida sola de niños menores de 14 años, entregándolos únicamente de forma presencial a su acudiente acreditado.',
  },
  {
    term: '3. Control Estricto de la Prohibición de Celulares',
    text: 'Velar por el cumplimiento de la restricción total de ingreso y uso de teléfonos celulares y dispositivos móviles en niños y niñas de primaria.',
  },
  {
    term: '4. Vigilancia Epidemiológica y Hábitos de Higiene',
    text: 'Liderar junto con los directores de grupo las revisiones periódicas de higiene, control de pediculosis (piojos), verificación de carnés de vacunación y reporte epidemiológico a la Secretaría de Salud Municipal.',
  },
];

export default function Cap5CoordinacionesSedes() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          5.6.4
        </span>
        <h2 className="section-title">
          Funciones específicas de las Coordinaciones de Sedes de Primaria
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          5.6.4
        </span>
        <h3 className="hz-head-title">
          Funciones específicas de las Coordinaciones de Sedes de Primaria
        </h3>
      </div>

      <p className="hz-p">
        En las sedes de Primera Infancia y Básica Primaria, la Coordinación ejerce la{" "}
        <span className="hz-key">dirección unificada académica y convivencial</span>, con las
        siguientes funciones reforzadas de protección:
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