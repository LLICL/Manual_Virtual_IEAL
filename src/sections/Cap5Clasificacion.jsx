const CATEGORIAS = [
  {
    term: 'Docentes de Aula / Área',
    text: 'Profesionales pedagógicos encargados de orientar los procesos de enseñanza-aprendizaje en las asignaturas asignadas del plan de estudios en los niveles de Educación Inicial, Básica Primaria, Básica Secundaria, Media y Jornada Sabatina.',
  },
  {
    term: 'Docentes directores de grupo',
    text: 'Profesionales asignados por la Rectoría para liderar la orientación acompañante, el seguimiento convivencial y el vínculo directo con las familias de un curso específico.',
  },
  {
    term: 'Jefes de Departamento / Área',
    text: 'Docentes encargados de coordinar la planeación curricular, la actualización de proyectos pedagógicos y la articulación de metodologías evaluativas en sus respectivas disciplinas.',
  },
  {
    term: 'Docentes Orientadores / Consejería Escolar',
    text: 'Profesionales especializados en psicología o psicopedagogía encargados del acompañamiento socioemocional, la prevención de riesgos, la formulación de ajustes PIAR/DUA y la articulación intersectorial de la Ruta de Atención Integral.',
  },
  {
    term: 'Directivos Docentes',
    text: 'Integrados por el Rector (Representante Legal y Director Ejecutivo) y los Coordinadores (Académicos y de Convivencia de la Sede Principal y Sedes de Primaria Carrenales y Mercedes Ábrego), responsables de la dirección académica, administrativa y convivencial del establecimiento.',
  },
];

export default function Cap5Clasificacion() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          5.1
        </span>
        <h2 className="section-title">
          Clasificación y perfil del personal docente
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          5.1
        </span>
        <h3 className="hz-head-title">
          Clasificación y perfil del personal docente
        </h3>
      </div>

      <p className="hz-p">
        De conformidad con la estructura orgánica de la institución y la normatividad nacional
        vigente, el personal docente y directivo docente de la Institución Educativa{" "}
        <span className="hz-key">Antonio Lenis</span> se clasifica en las siguientes categorías:
      </p>

      <ul className="hz-list">
        {CATEGORIAS.map((c) => (
          <li key={c.term}>
            <span className="hz-term">{c.term}</span>
            <details className="hz-collapse hz-collapse--mini">
              <summary>Ver descripción</summary>
              <div className="hz-collapse-body">
                <p>{c.text}</p>
              </div>
            </details>
          </li>
        ))}
      </ul>
    </>
  );
}