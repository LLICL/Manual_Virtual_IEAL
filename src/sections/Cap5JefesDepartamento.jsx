const ITEMS = [
  {
    term: '1. Dirección Pedagógica del Área',
    text: 'Liderar la planeación, actualización y unificación de mallas curriculares, planes de asignatura y criterios de evaluación de su disciplina en todas las sedes y jornadas.',
  },
  {
    term: '2. Representación ante el Consejo Académico',
    text: 'Actuar como vocero oficial del departamento académico ante el Consejo Académico, proponiendo ajustes curriculares y proyectos pedagógicos.',
  },
  {
    term: '3. Fomento de la Investigación (IEP) y Semilleros',
    text: 'Impulsar la Investigación como Estrategia Pedagógica (IEP), la conformación de semilleros escolares y la producción de materiales didácticos.',
  },
  {
    term: '4. Administración de Laboratorios y Recursos Especializados',
    text: 'Responder por el inventario, uso adecuado, mantenimiento y seguridad de los laboratorios de ciencias, salas de informática, biblioteca y materiales didácticos de su departamento.',
  },
  {
    term: '5. Asesoría en Asignación Académica',
    text: 'Colaborar con la Coordinación Académica en la distribución de asignaturas e intensidad horaria según los perfiles profesionales de los docentes.',
  },
];

export default function Cap5JefesDepartamento() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          5.6.5
        </span>
        <h2 className="section-title">
          Funciones de los jefes de Departamento / Coordinadores de Área
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          5.6.5
        </span>
        <h3 className="hz-head-title">
          Funciones de los jefes de Departamento / Coordinadores de Área
        </h3>
      </div>

      <p className="hz-p">
        Los jefes de Departamento o Coordinadores de Área dependen funcionalmente de la
        Coordinación Académica y lideran el{" "}
        <span className="hz-key">desarrollo pedagógico y metodológico</span> de su respectiva
        especialidad:
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