const ITEMS = [
  {
    term: '1. Relaciones sentimentales o erótico-sexuales con estudiantes',
    text: 'Prohibición absoluta de sostener, propiciar, participar o promover cualquier tipo de relación sexual, emocional, sentimental, galanteo o de pareja con los alumnos o alumnas del plantel, independientemente de su edad o grado. El incumplimiento dará lugar a destitución e investigación penal por delitos sexuales o acoso.',
  },
  {
    term: '2. Porte de armas',
    text: 'Ingresar o portar cualquier tipo de armas de fuego, armas blancas, elementos cortopunzantes o artefactos peligrosos dentro de las instalaciones de la institución.',
  },
  {
    term: '3. Rifas y eventos no autorizados',
    text: 'Promover, organizar o vender rifas, bonos, bailes, minitecas, fiestas, promos o eventos lucrativos con los educandos sin la autorización previa y por escrito de la Rectoría.',
  },
  {
    term: '4. Envío de mensajes y comunicaciones fuera de la jornada laboral y fines de semana',
    text: 'Queda estrictamente prohibido enviar mensajes de texto, comunicados, tareas o notificaciones a los padres de familia y acudientes a través de WhatsApp, correo electrónico o redes sociales durante las noches, fines de semana o días festivos, en garantía del derecho a la desconexión laboral e intimidad familiar. Se exceptúan únicamente las comunicaciones de extrema urgencia e inaplazables relativas a modificaciones imprevistas del tiempo escolar (suspensión extemporánea de clases o emergencias de fuerza mayor decretadas por la Rectoría).',
  },
  {
    term: '5. Cobros no autorizados',
    text: 'Exigir cuotas monetarias a los estudiantes o acudientes para material didáctico, guías o evaluaciones sin la debida aprobación del docente Coordinador correspondiente y el Consejo Directivo.',
  },
  {
    term: '6. Uso indebido de equipos y laboratorios',
    text: 'Sacar elementos, mobiliario o emplear los equipos de cómputo, laboratorios y material didáctico del plantel para el servicio o beneficio de personas o entidades ajenas a la institución.',
  },
  {
    term: '7. Proselitismo político',
    text: 'Hacer proselitismo político-partidista o promover campañas electorales dentro del plantel.',
  },
  {
    term: '8. Proselitismo religioso o ideológico',
    text: 'Hacer proselitismo religioso, imponer dogmas de culto o interferir en la libertad de conciencia de los educandos.',
  },
  {
    term: '9. Discriminación de cualquier índole',
    text: 'Ejercer cualquier forma de discriminación hacia estudiantes, acudientes o compañeros de trabajo por motivos de etnia, sexo, color, creencias religiosas, orientación sexual o condición socioeconómica.',
  },
  {
    term: '10. Divulgación no autorizada de información',
    text: 'Proporcionar noticias, informes o documentos reservados sobre asuntos internos de la institución cuando no esté expresamente facultado para hacerlo.',
  },
  {
    term: '11. Abandono del cargo y de funciones',
    text: 'Abandonar el cargo o apartarse de sus funciones pedagógicas durante la jornada laboral sin la debida autorización de su superior inmediato.',
  },
  {
    term: '12. Consumo de tabaco o vapeadores',
    text: 'Fumar o vapear (sistemas electrónicos de nicotina - SEAN) dentro del colegio o en actividades pedagógicas programadas.',
  },
  {
    term: '13. Alcohol y sustancias psicoactivas',
    text: 'Presentarse a la institución bajo los efectos del alcohol, sustancias alucinógenas o estupefacientes, o ingresar, consumir, distribuir o comercializar las mismas dentro o en los alrededores del plantel.',
  },
  {
    term: '14. Tráfico de evaluaciones o favores académicos',
    text: 'Sacar ventajas personales, económicas o de cualquier índole mediante la manipulación o tráfico de evaluaciones o calificaciones.',
  },
  {
    term: '15. Retiro no autorizado de estudiantes del aula de clase',
    text: 'Retirar o sacar a los educandos del aula de clase sin la correspondiente remisión o entrega formal y presencial a la Coordinación de Convivencia o a la Orientación Escolar. Queda categóricamente prohibido dejar a los estudiantes de pie en los pasillos o fuera del salón sin supervisión, así como someterlos a castigos físicos, psicológicos, morales o degradantes.',
  },
  {
    term: '16. Permanencia de familiares en jornada laboral',
    text: 'Mantener la permanencia de hijos o familiares menores de edad en el aula de clase o dependencias del colegio cuando ello obstaculice el normal desarrollo de la labor docente.',
  },
  {
    term: '17. Personal no autorizado en funciones del cargo',
    text: 'Tener a su servicio, en forma temporal o permanente, a personas ajenas a la institución para el desempeño de las funciones propias de su cargo docente.',
  },
  {
    term: '18. Solicitud de dádivas o regalos',
    text: 'Solicitar o recibir, directa o indirectamente, dádivas, agasajos, regalos, favores o beneficios a cambio de notas o decisiones pedagógicas.',
  },
  {
    term: '19. Asignación de trabajos en grupo fuera de la institución',
    text: 'Asignar o exigir la realización de trabajos en grupo por fuera de la institución que requieran que los estudiantes se trasladen de un sitio a otro para reunirse en casas particulares, bibliotecas u otros espacios que pongan en riesgo la seguridad e integridad de los educandos. El docente debe promover e incentivar el uso de reuniones virtuales mediante las Tecnologías de la Información y la Comunicación (TIC).',
  },
  {
    term: '20. Uso indebido de instalaciones',
    text: 'Ocupar o utilizar indebidamente oficinas, aulas, espacios deportivos o instalaciones de la institución para fines particulares o ajenos al servicio educativo.',
  },
  {
    term: '21. Incompatibilidad con la Asociación de Padres',
    text: 'Hacer parte de la Junta Directiva de la Asociación de Padres de Familia.',
  },
  {
    term: '22. Otras prohibiciones legales',
    text: 'Las demás prohibiciones contempladas en el Estatuto Docente, el Código General Disciplinario y la normatividad educativa vigente.',
  },
];

export default function Cap5Prohibiciones() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          5.4
        </span>
        <h2 className="section-title">
          Prohibiciones explícitas a los docentes
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          5.4
        </span>
        <h3 className="hz-head-title">
          Prohibiciones explícitas a los docentes
        </h3>
      </div>

      <p className="hz-p">
        Con el propósito de salvaguardar la <span className="hz-key">intangibilidad de la infancia,
        la transparencia administrativa y el clima institucional</span>, queda estrictamente
        prohibido a los docentes:
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