const DERECHOS = [
  {
    term: 'Dignidad, respeto e idoneidad',
    text: 'Recibir un trato respetuoso, cortés e imparcial de parte de directivos, estudiantes, padres de familia, administrativos y miembros de la comunidad educativa.',
  },
  {
    term: 'Autonomía pedagógica y libertad de cátedra',
    text: 'Ejercer la libertad de cátedra e innovación pedagógica dentro del marco del Modelo Pedagógico Institucional y el PEI.',
  },
  {
    term: 'Debido proceso y protección frente a anónimos',
    text: 'Ser informado oportunamente sobre reclamos o investigaciones en su contra, garantizando el derecho a la defensa y la presunción de inocencia. No se dará trámite a acusaciones secretas, anónimas o verbales no sustentadas.',
  },
  {
    term: 'Formación y cualificación continua',
    text: 'Participar en los programas de capacitación pedagógica, actualización curricular y desarrollo profesional organizados por la institución o la Secretaría de Educación Municipal.',
  },
  {
    term: 'Licencias, permisos y excusas',
    text: 'Solicitar y obtener permisos, licencias y comisiones de estudio de conformidad con el conducto regular y las disposiciones legales vigentes.',
  },
  {
    term: 'Participación democrática y gobierno escolar',
    text: 'Elegir y ser elegido como representante docente ante el Consejo Directivo, Consejo Académico, Comité Escolar de Convivencia y Comisiones de Evaluación.',
  },
  {
    term: 'Bienestar social y estímulos',
    text: 'Disfrutar de los programas de bienestar institucional, reconocimientos por producción de material didáctico e investigación educativa.',
  },
  {
    term: 'Protección contra el acoso laboral',
    text: 'Desempeñar sus labores en un ambiente de trabajo sano, digno y libre de acoso laboral.',
  },
  {
    term: 'Evaluación justa e imparcial',
    text: 'Ser evaluado en su desempeño docente con equidad, criterios objetivos e instrumentos transparentes conforme a la ley.',
  },
  {
    term: 'Asociación y representación',
    text: 'Ejercer libremente los derechos de asociación sindical y representación gremial.',
  },
  {
    term: 'Garantía de autocuidado y salud mental docente (\"Cuidar a los que Cuidan\")',
    text: 'La institución reconoce que el bienestar emocional del personal docente y directivo es condición indispensable para sostener la calidad del servicio educativo. La Rectoría y la Orientación Escolar coordinarán espacios periódicos de contención, reflexión colegiada y herramientas para la gestión del estrés laboral.',
  },
];

export default function Cap5Derechos() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          5.2
        </span>
        <h2 className="section-title">
          Derechos de los docentes Lenistas
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          5.2
        </span>
        <h3 className="hz-head-title">
          Derechos de los docentes Lenistas
        </h3>
      </div>

      <p className="hz-p">
        En consonancia con la Constitución Política, el Estatuto Docente y el Código General
        Disciplinario, los docentes de la institución gozan de los siguientes{" "}
        <span className="hz-key">derechos fundamentales e institucionales</span>:
      </p>

      <ol className="hz-ol">
        {DERECHOS.map((d) => (
          <li key={d.term}>
            <span className="hz-term">{d.term}</span>
            <details className="hz-collapse hz-collapse--mini">
              <summary>Ver descripción</summary>
              <div className="hz-collapse-body">
                <p>{d.text}</p>
              </div>
            </details>
          </li>
        ))}
      </ol>

      <div className="hz-note">
        <strong>Autocuidado docente:</strong> el bienestar emocional del personal docente y
        directivo busca sostenerse mediante espacios periódicos de contención y herramientas para
        la gestión del estrés laboral.
      </div>
    </>
  );
}