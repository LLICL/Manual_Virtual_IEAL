const CENTROS = [
  {
    nombre: 'Lectura, Escritura y Oralidad Conectada con la Empatía (Plan LEO / Empatía)',
    lineas: [
      'Potencia las habilidades comunicativas (lectura crítica, escritura creativa y expresión oral en círculos de palabra) como vehículos de autoexpresión, empatía, regulación emocional y escucha sensible.',
      'Incluye estudiantes de Preescolar, Básica Primaria (Sedes Carrenales y Mercedes Ábrego) y Educación Media (Sede Principal).',
      'Vincula Lengua Castellana, Ética, Ciencias Sociales, Educación Artística, CRESE y Matemáticas.',
      'Se evalúa con el Portafolio Emocional y Literario, fanzines, diarios de aprendizaje, autoevaluación y coevaluación.',
    ],
  },
  {
    nombre: 'Tejedores de Paz — Creando Ambientes de Convivencia Escolar',
    lineas: [
      'Crea entornos pacíficos e inclusivos mediante el Aprendizaje Basado en Proyectos (ABP), interviniendo problemáticas como peleas, acoso escolar y lenguaje violento.',
      'Participan estudiantes de 1° de primaria hasta secundaria y media, junto con docentes, directivos, tutores y familias.',
      'Usa círculos de diálogo, talleres de negociación y mediación escolar, campañas comunitarias de inclusión y diarios narrativos.',
      'Se evalúa con el Portafolio de Aprendizaje, conversaciones de aprendizaje, rúbricas de desempeño y seguimiento a proyectos de paz.',
    ],
  },
  {
    nombre: 'Jaque al Pensamiento y a la Resiliencia (Ajedrez Pedagógico Integral)',
    lineas: [
      'Utiliza la práctica del ajedrez (en tableros físicos, gigantes o vivientes) para potenciar el pensamiento lógico, la planificación estratégica y la toma de decisiones, articuladas con la resiliencia emocional, la tolerancia a la frustración y la valoración del error como oportunidad de aprendizaje.',
      'Atiende a estudiantes de 8 a 16 años (Básica Primaria y Secundaria), garantizando la participación de estudiantes con discapacidad o barreras de aprendizaje (PIAR/DUA) y la apertura a pares de otras instituciones.',
      'Emplea trabajo cooperativo en parejas, dinámicas del Semáforo Emocional, cómics de jugadas y torneos escolares.',
      'Se evalúa con el Portafolio del Pensador, rúbricas de análisis de jugadas, círculos de realimentación oral y autoevaluación guiada.',
    ],
  },
];

export default function CapRutaCentros() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.1.3
        </span>
        <h2 className="section-title">
          Centros de Interés institucionales
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.1.3
        </span>
        <h3 className="hz-head-title">
          Centros de Interés institucionales
        </h3>
      </div>

      <p className="hz-p">
        La institución institucionaliza los{' '}
        <span className="hz-key">Centros de Interés (CI)</span> como escenarios pedagógicos
        intencionados, interdisciplinares, participativos y flexibles, estrategia pilar del Componente
        de Promoción de la Ruta de Atención Integral y factor protector frente al acoso escolar, el
        consumo de sustancias psicoactivas, las violencias basadas en género y la deserción escolar.
        Su desarrollo es financiado con los recursos del Sistema General de Participaciones (SGP,
        Gratuidad y Calidad / Formación Integral-CRESE).
      </p>

      <h4 className="hz-sub">Caracterización de los tres Centros de Interés oficiales</h4>
      <ul className="hz-list">
        {CENTROS.map((c) => (
          <li key={c.nombre}>
            <span className="hz-term">{c.nombre}</span>
            <ul className="hz-list hz-list--sub">
              {c.lineas.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h4 className="hz-sub">Articulación con el SIEE, el observador y la evaluación formativa</h4>
      <p className="hz-p">
        La participación activa del educando en los Centros de Interés se reconoce formalmente en el
        SIEE (Capítulo VII) dentro de los criterios de evaluación cualitativa formativa, y genera
        Anotaciones Positivas y Reconocimientos por Liderazgo y Trabajo Colaborativo en el Observador
        del Estudiante, fortaleciendo la motivación, la permanencia escolar y el desarrollo de
        competencias ciudadanas.
      </p>
    </>
  );
}