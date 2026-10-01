const BLOQUES = [
  {
    letra: 'A',
    titulo: 'Priorización de aprendizajes esenciales e integración curricular',
    items: [
      {
        term: 'Concentración en Aprendizajes Clave',
        text: 'Los equipos docentes priorizarán las competencias cognitivas, ciudadanas y socioemocionales esenciales, integrando áreas a través de Problemas Socialmente Relevantes (PSR) o proyectos de aula.',
      },
      {
        term: 'Reducción de sobrecarga',
        text: 'Se evitará la saturación de tareas, guías o evaluaciones acumulativas que generen estrés desproporcionado en los educandos o sus familias.',
      },
    ],
  },
  {
    letra: 'B',
    titulo: 'Valoración cualitativa formativa y diversidad de evidencias (DUA)',
    items: [
      {
        term: 'Privilegio de la retroalimentación cualitativa',
        text: 'La evaluación se concentrará en señalar los avances y brindar orientaciones claras para mejorar, por encima de la simple asignación de notas sumativas punitivas.',
      },
      {
        term: 'Diversificación de fuentes de evidencia',
        text: 'Se valorarán portafolios físicos o digitales, diarios de campo, bitácoras, audios, producciones artísticas, proyectos prácticos y exposiciones verbales, evitando que la conectividad o la entrega física de un único formato sea barrera de evaluación.',
      },
    ],
  },
  {
    letra: 'C',
    titulo: 'Inexistencia de punición por falta temporal de evidencias',
    items: [
      {
        term: 'No Interpretación automática como negligencia',
        text: 'La falta fortuita de evidencias derivadas de situaciones emocionales, de salud o fuerza mayor no se calificará automáticamente como nota 1.0 o desinterés. Activará una lectura pedagógica del grupo para ofrecer alternativas de acompañamiento y reprogramación.',
      },
    ],
  },
  {
    letra: 'D',
    titulo: 'Fomento de la autoevaluación y coevaluación participativa',
    items: [
      {
        term: 'Espacios de autorreflexión',
        text: 'Las guías e instrumentos incorporarán preguntas sencillas de autoevaluación («¿qué aprendí hoy?», «¿qué fue fácil?», «¿qué ayuda necesité?») para que el estudiante reconozca activamente sus propios logros y áreas de mejora.',
      },
      {
        term: 'Valoración formativa del aprendizaje en centros de interés',
        text: 'Las evidencias de desempeño, proyectos, portafolios (Portafolio Emocional y Literario, Portafolio de Aprendizaje, Portafolio del Pensador) y producciones desarrolladas por los estudiantes en los Centros de Interés institucionales (Plan LEO / Empatía, Tejedores de Paz, Jaque al Pensamiento y a la Resiliencia) se valorarán de forma cualitativa e integrada en las asignaturas afines (Lengua Castellana, Matemáticas, Ciencias Sociales, Ética, Artística, Educación Física y Cátedra de Paz), sirviendo como criterio de nivelación y superación de dificultades académicas.',
      },
    ],
  },
];

export default function Cap7Flexibilizacion() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          7.11
        </span>
        <h2 className="section-title">
          Criterios de Flexibilización Curricular, Gradualidad y Evaluación Formativa Socioemocional
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          7.11
        </span>
        <h3 className="hz-head-title">
          Criterios de Flexibilización Curricular, Gradualidad y Evaluación Formativa Socioemocional
        </h3>
      </div>

      <p className="hz-p">
        En consonancia con la Ley 2382 de 2024, el Decreto 1290 de 2009 y las orientaciones
        pedagógicas del MEN («Aprender desde lo Pedagógico»), el SIEE de la Institución Educativa
        Antonio Lenis incorpora criterios de flexibilización y evaluación formativa para contextos de
        contingencia o afectación socioemocional:
      </p>

      {BLOQUES.map((b) => (
        <div key={b.letra}>
          <div className="hz-head">
            <h3 className="hz-head-title">
              <span className="hz-term">{b.letra}.</span> {b.titulo}
            </h3>
          </div>

          <ul className="hz-list">
            {b.items.map((i) => (
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
        </div>
      ))}
    </>
  );
}