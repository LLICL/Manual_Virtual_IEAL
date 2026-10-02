const ITEMS = [
  {
    term: 'Exoneración sobre bienes personales',
    text: 'La institución cuenta con cámaras de vigilancia en pasillos, salones y zonas comunes para la custodia del patrimonio público oficial. No obstante, la institución NO se hace responsable por la pérdida, extravío, daño o hurto de objetos personales de valor (teléfonos celulares, joyas, dinero en efectivo, juguetes o dispositivos electrónicos) traídos al plantel por iniciativa propia del estudiante o su familia.',
  },
  {
    term: 'Reposición de daños al patrimonio institucional',
    text: 'Todo daño, deterioro, rayado o destrucción causados intencional o culposamente por un estudiante sobre pupitres, paredes, equipos de cómputo, laboratorios o planta física de la institución constituirá Situación Tipo II o Tipo III (daño en bien ajeno del Estado). El estudiante y su padre de familia/acudiente deberán reparar o reponer el bien afectado en un plazo no mayor a diez (10) días hábiles como condición indispensable para la expedición del Paz y Salvo administrativo de fin de año.',
  },
];

export default function Cap8Patrimonial() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          8.9
        </span>
        <h2 className="section-title">
          Responsabilidad patrimonial sobre bienes personales y reposición de daños
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          8.9
        </span>
        <h3 className="hz-head-title">
          Responsabilidad patrimonial sobre bienes personales y reposición de daños
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