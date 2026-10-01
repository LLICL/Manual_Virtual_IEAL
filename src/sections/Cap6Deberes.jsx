const ITEMS = [
  {
    term: '1',
    title: 'Matrícula oportuna y permanencia',
    text: 'Matricular a sus hijos en las fechas fijadas por el cronograma institucional y asegurar su asistencia diaria y permanencia durante el año escolar.',
  },
  {
    term: '2',
    title: 'Cumplimiento del contrato de matrícula',
    text: 'Cumplir estrictamente con las obligaciones contraídas en el acto de matrícula y aceptar la totalidad de las normas del Manual de Convivencia.',
  },
  {
    term: '3',
    title: 'Suministro de uniforme y materiales',
    text: 'Dotar a sus acudidos del uniforme único oficial completo, textos, útiles y el Seguro Estudiantil obligatorio de accidentes desde el primer día de clases (plazo máximo al 27 de febrero para estudiantes nuevos).',
  },
  {
    term: '4',
    title: 'Acompañamiento en el hogar',
    text: 'Acompañar de forma permanente el proceso de aprendizaje en casa, supervisar la realización de tareas, controlar el horario de estudio y promover hábitos de vida saludable.',
  },
  {
    term: '5',
    title: 'Clima de respeto y lenguaje decoroso',
    text: 'Mantener un trato comedido, respetuoso y cortés con directivos, docentes, compañeros, administrativos y guardas de seguridad, estando proscrito todo lenguaje vulgar, gritos o agresiones.',
  },
  {
    term: '6',
    title: 'Deber de reporte e información temprana',
    text: 'Comunicar de inmediato a las autoridades del colegio cualquier irregularidad, síntoma de enfermedad o riesgo que afecte a los menores (maltrato infantil, abuso sexual, consumo/tráfico de SPA).',
  },
  {
    term: '7',
    title: 'Asistencia obligatoria a convocatorias',
    text: 'Asistir puntualmente a las entregas de informes académicos, citaciones individuales de Coordinación/Docentes y a los talleres de Escuela de Padres.',
  },
  {
    term: '8',
    title: 'Responsabilidad patrimonial por daños',
    text: 'Responder económicamente y reparar/reponer en un plazo máximo de diez (10) días hábiles cualquier daño o deterioro causado por su acudido a la planta física, muebles o equipos del plantel.',
  },
  {
    term: '9',
    title: 'Control del tiempo libre, redes sociales y tecnologías',
    text: 'Supervisar el uso de redes sociales, internet y dispositivos móviles fuera del colegio, evitando que sus hijos incurran en ciberacoso (ciberbullying), publicación de videos obscenos, uso indebido de IA o retos virales de riesgo.',
  },
  {
    term: '10',
    title: 'Responsabilidad reparatoria e indemnizatoria por acoso escolar',
    text: 'Indemnizar económicamente a la familia de la víctima en caso de que su acudido sea hallado responsable de acoso escolar (bullying/ciberbullying) o lesiones en un proceso disciplinario en firme.',
  },
  {
    term: '11',
    title: 'Desconexión laboral y respeto al tiempo de descanso docente',
    text: 'Respetar estrictamente la jornada laboral y los horarios oficiales de atención institucionales, absteniéndose de enviar mensajes, realizar llamadas o exigir atención de docentes y directivos docentes por canales personales fuera del horario escolar, durante las noches, fines de semana o periodos de receso escolar, en garantía del derecho a la desconexión laboral, el descanso y la intimidad personal y familiar del cuerpo docente.',
  },
  {
    term: '12',
    title: 'Corresponsabilidad en educación inclusiva y ajustes razonables (PIAR/DUA)',
    text: 'Suministrar el día de la matrícula la certificación médica o diagnóstico especializado en caso de discapacidad o trastornos específicos del aprendizaje, aportar la información para el SIMAT, y cumplir los compromisos fijados en el Plan Individual de Ajustes Razonables (PIAR) y DUA.',
  },
  {
    term: '13',
    title: 'Actualización permanente de datos e información de contacto',
    text: 'Informar de manera inmediata a la Secretaría de la institución o al director de Grupo cualquier cambio en la dirección de residencia, número telefónico, celular o correo electrónico, garantizando canales de comunicación abiertos para emergencias o citaciones.',
  },
  {
    term: '14',
    title: 'Control epidemiológico, salud preventiva y esquemas de vacunación',
    text: 'Abstenerse de enviar al estudiante a la institución si presenta fiebre, sintomatologías virales infectocontagiosas, cuadros gripales o pediculosis; presentar el carné de vacunación actualizado y entregar las certificaciones o altas médicas al reintegrarse a clases.',
  },
  {
    term: '15',
    title: 'Horarios de ingreso y recogida presencial en primaria',
    text: 'Asegurar la llegada puntual del estudiante al inicio de la jornada y cumplir estrictamente con la recogida presencial en las Sedes de Primaria (Carrenales y Mercedes Ábrego) dentro de un margen máximo de 15 minutos tras finalizar las clases, comprendiendo que la inasistencia o retardo reiterado dará lugar a reporte ante la Comisaría de Familia/ICBF.',
  },
  {
    term: '16',
    title: 'Prohibición de agresiones, litigiosidad temeraria y respeto al conducto regular',
    text: 'Canalizar toda inquietud, reclamo o inconformidad por el conducto regular institucional (Docente → Coordinación → Consejo Académico → Consejo Directivo), absteniéndose de incurrir en agresiones físicas o verbales contra servidores públicos (servidores educativos) o litigar de forma temeraria contra la autonomía del colegio.',
  },
  {
    term: '17',
    title: 'Acompañamiento en salidas pedagógicas y proyectos transversales',
    text: 'Otorgar oportunamente los permisos escritos firmados para la participación de sus acudidos en salidas pedagógicas, brigadas o actividades de la Semana de la Dignidad, informando prevenciones de salud y asegurando el acompañamiento familiar.',
  },
  {
    term: '18',
    title: 'Participación en procesos de autoevaluación y gobierno escolar',
    text: 'Participar activamente en el proceso de autoevaluación anual del establecimiento educativo, en las asambleas del Consejo de Padres y en la formulación del Plan de Mejoramiento Institucional (PMI).',
  },
];

export default function Cap6Deberes() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          6.2
        </span>
        <h2 className="section-title">
          Deberes y obligaciones de los padres, madres de familia y acudientes
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          6.2
        </span>
        <h3 className="hz-head-title">
          Deberes y obligaciones de los padres, madres de familia y acudientes
        </h3>
      </div>

      <p className="hz-p">
        En consonancia con el{" "}
        <span className="hz-key">principio de corresponsabilidad</span>, corresponden a los padres
        de familia y acudientes las siguientes obligaciones imperativas:
      </p>

      <ul className="hz-list">
        {ITEMS.map((i) => (
          <li key={i.term}>
            <span className="hz-term">
              {i.term}. {i.title}
            </span>
            {i.text && (
              <details className="hz-collapse hz-collapse--mini">
                <summary>Ver descripción</summary>
                <div className="hz-collapse-body">
                  <p>{i.text}</p>
                </div>
              </details>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}