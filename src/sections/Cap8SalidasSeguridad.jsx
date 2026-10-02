const ITEMS = [
  {
    term: 'Planeación y permiso escrito',
    text: 'Toda salida pedagógica se planificará con un mínimo de ocho (8) días hábiles de anticipación. Es requisito obligatorio presentar el formato institucional de autorización (modelo 8) firmado y huellado por el acudiente con número de cédula, incluyendo la declaración de condiciones de salud, medicamentos y alergias del estudiante.',
  },
  {
    term: 'Medidas de seguridad y pólizas',
    text: 'Toda salida contará con póliza de accidentes escolares activa, botiquín portátil de primeros auxilios, asignación de adultos acompañantes por grupo de estudiantes y acompañamiento de un representante de Coordinación o Docente a cargo. En ningún caso la no posesión de indumentarias opcionales impedirá la participación académica del educando.',
  },
];

export default function Cap8SalidasSeguridad() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          8.8
        </span>
        <h2 className="section-title">
          Regulaciones de seguridad en salidas pedagógicas, actividades extracurriculares y eventos
          cívicos
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          8.8
        </span>
        <h3 className="hz-head-title">
          Regulaciones de seguridad en salidas pedagógicas, actividades extracurriculares y eventos
          cívicos
        </h3>
      </div>

      <p className="hz-p">
        Las salidas pedagógicas, actividades fuera del aula, extracurriculares, eventos cívicos,
        culturales e Inter cursos son{' '}
        <span className="hz-key">extensiones del proceso formativo</span> que exigen el cumplimiento
        de los protocolos de seguridad:
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