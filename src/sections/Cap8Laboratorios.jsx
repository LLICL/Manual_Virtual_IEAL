const ITEMS = [
  {
    term: 'Indumentaria obligatoria y seguridad',
    text: 'Es obligatorio el uso de bata blanca de laboratorio durante las prácticas. Por razones de seguridad, los estudiantes con cabello largo deberán llevarlo debidamente peinado y recogido. Queda prohibido el uso de prendas sueltas o accesorios colgantes (aretes largos, pulseras, collares, bufandas o pañoletas) que representen riesgo de atrapamiento o contacto con reactivos.',
  },
  {
    term: 'Prohibición de alimentos y humo',
    text: 'Se prohíbe de forma absoluta ingerir alimentos, bebidas, mascar chicle, fumar o vapear dentro de los laboratorios por riesgo de contaminación química o intoxicación.',
  },
  {
    term: 'Manipulación y reposición de cristalería/equipos',
    text: 'La manipulación de mecheros, sustancias químicas, microscopios e instrumentos se realizará bajo la instrucción directa y supervisión permanente del docente del área. Cualquier daño, rotura de cristalería o avería de equipos causada por negligencia, juego o desobediencia de instrucciones deberá ser repuesta en su totalidad (100% del valor) por el estudiante y su acudiente en un plazo no mayor a diez (10) días hábiles.',
  },
];

export default function Cap8Laboratorios() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          8.4
        </span>
        <h2 className="section-title">
          Laboratorios de ciencias naturales (física, química, biología)
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          8.4
        </span>
        <h3 className="hz-head-title">
          Laboratorios de ciencias naturales (física, química, biología)
        </h3>
      </div>

      <p className="hz-p">
        Los laboratorios son espacios especializados de experimentación científica que exigen el
        cumplimiento riguroso de <span className="hz-key">bioseguridad, orden y autocuidado</span>:
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