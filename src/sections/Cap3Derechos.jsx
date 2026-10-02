const DERECHOS = [
  {
    term: 'a) Información y publicidad del manual',
    items: [
      'Obtener el día de la matrícula o al inicio del año lectivo la información completa y copia digital del Manual de Convivencia, como carta de navegación institucional.',
    ],
  },
  {
    term: 'b) Dignidad, respeto e identidad',
    items: [
      'Ser respetado en su dignidad e integridad personal y ser llamado siempre por sus nombres y apellidos; queda proscrito el uso de números de lista, apodos o términos deshumanizantes.',
      'No ser objeto de discriminación por razones de raza, etnia, credo, limitaciones físicas, condición socioeconómica, orientación e identidad sexual o diversidad de género.',
      'Ser protegido eficazmente contra toda forma de agresión, intimidación, humillación, matoneo o ciberacoso.',
    ],
  },
  {
    term: 'c) Debido proceso y garantías disciplinarias',
    items: [
      'Seguir el conducto regular y ser objeto de la aplicación estricta del debido proceso en todas las actuaciones académicas, convivenciales o administrativas, con garantía del derecho a la defensa y a la presunción de inocencia.',
    ],
  },
  {
    term: 'd) Derechos académicos y evaluativos',
    items: [
      'Conocer al inicio del año escolar los objetivos, indicadores de desempeño, metodologías y criterios del sistema de evaluación de cada asignatura.',
      'Ser evaluado de forma continua, integral, cualitativa y cuantitativa en la escala numérica oficial (1.0 a 5.0), con equidad y justicia.',
      'No ser obligado a presentar más de dos (2) evaluaciones o trabajos escritos individuales en un mismo día.',
      'Conocer los resultados de las evaluaciones y trabajos dentro de los cinco (5) días hábiles siguientes a su presentación y antes de ser reportados a la plataforma virtual.',
      'Presentar evaluaciones o entregas extemporáneas dentro de los tres (3) días hábiles siguientes a su reintegro, cuando la ausencia esté debidamente justificada.',
      'Solicitar la asignación de un segundo evaluador en caso de controversia fundada en la valoración académica, conforme a los procedimientos del SIEE.',
    ],
  },
  {
    term: 'e) Participación democrática y expresión',
    items: [
      'Elegir y ser elegido en las instancias de representación del Gobierno Escolar (Consejo de Estudiantes, Personería Estudiantil, Contraloría Estudiantil y representación al Consejo Directivo).',
      'Participar activamente en el proceso de enseñanza-aprendizaje, formular preguntas, solicitar aclaraciones y expresar sus opiniones de forma respetuosa.',
    ],
  },
  {
    term: 'f) Uso de instalaciones, bienes y bienestar',
    items: [
      'Disfrutar de una planta física, mobiliario, laboratorios, salas de informática y biblioteca en condiciones higiénicas y funcionales adecuadas.',
      'Disfrutar de espacios de descanso, recreación y deporte acordes a su nivel educativo, bajo la protección reforzada hacia la primera infancia.',
      'Recibir atención oportuna de primeros auxilios en caso de accidente o enfermedad durante la jornada escolar, sin suministro de medicamentos no autorizados por escrito.',
      'Portar el carné estudiantil que lo acredita formalmente como estudiante de la institución.',
    ],
  },
];

export default function Cap9Derechos() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          3.4.1
        </span>
        <h2 className="section-title">
          Derechos de los estudiantes Lenistas
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          3.4.1
        </span>
        <h3 className="hz-head-title">
          Derechos de los estudiantes Lenistas
        </h3>
      </div>

      <ul className="hz-list">
        {DERECHOS.map((d) => (
          <li key={d.term}>
            <span className="hz-term">{d.term}</span>
            <ul className="hz-list hz-list--sub">
              {d.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <details className="hz-collapse">
        <summary>Concepto de dignidad</summary>
        <div className="hz-collapse-body">
          <p>
            Para ello, entiéndase dentro del presente Manual de Convivencia, que el concepto claro de{' '}
            <span className="hl-green">Dignidad</span> que significa: "calidad de digna". Deriva del
            adjetivo latino "dignus", se traduce por "valioso"; es el sentimiento que nos hace sentir
            valiosos, sin importar nuestra vida material o social.
          </p>
          <p>
            La dignidad, se basa en el reconocimiento de la persona de ser merecedor de respeto, es
            decir que todos merecemos respeto sin importar como seamos, atendiendo incluso, lo
            señalado por la Honorable Corte Constitucional. De igual manera el educando, tiene derecho
            a explorar, avanzar y, dar a conocer su{' '}
            <span className="hl-green">libre desarrollo de la personalidad</span>, sin que con ello,
            afecte de manera negativa, induciendo, coercitando, estimulando, constriñendo o induciendo,
            a los demás educandos y en especial deben actuar y proceder con el debido respeto hacia la
            primera infancia, tal y como lo señala la corte constitucional aduciendo:
          </p>
        </div>
      </details>

      <details className="hz-collapse">
        <summary>El libre desarrollo de la personalidad (Corte Constitucional)</summary>
        <div className="hz-collapse-body">
          <div className="quote-block">
            <p>
              "Al interpretar el artículo 16 de la Constitución que consagra el derecho al libre
              desarrollo de la personalidad, la corte constitucional y la doctrina han entendido que:
              ―ese derecho consagra una protección general de la capacidad que la Constitución
              reconoce a las personas para auto determinarse, esto es, a darse sus propias normas y
              desarrollar planes propios de vida, siempre y cuando no afecten derechos de terceros".
              Corte Constitucional, Sentencia C-481 de 1998.
            </p>
          </div>
        </div>
      </details>

      <details className="hz-collapse">
        <summary>Parágrafo de autonomía progresiva y límites constitucionales</summary>
        <div className="hz-collapse-body">
          Los niños, niñas y adolescentes desarrollan una autonomía progresiva en el ejercicio de sus
          derechos y deberes, acorde con la evolución de sus facultades. La crianza y la educación se
          deben orientar hacia el logro de esta autonomía progresiva. Los educandos, deben reconocer
          y respetar a los demás, y brindar con respeto, los mismos derechos que exigen para sí, en
          armonía con lo señalado por la Jurisprudencia. Ya que el libre desarrollo de la
          personalidad, NO es un derecho absoluto.
        </div>
      </details>
    </>
  );
}
