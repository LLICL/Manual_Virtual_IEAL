const ITEMS = [
  {
    term: '1. Atención y Contención Psicosocial Inicial',
    text: 'Brindar primeros auxilios psicológicos, contención emocional y orientación psicosocial individual o grupal a educandos y familias que atraviesen situaciones de crisis o vulnerabilidad.',
  },
  {
    term: '2. Liderazgo de Proyectos Pedagógicos Transversales',
    text: 'Diseñar, ejecutar y evaluar los proyectos de prevención del consumo de SPA/Vapeadores/Alcohol, prevención de la conducta suicida e ideación, Educación Integral en Sexualidad (EIS/PESCC), prevención de Violencias Basadas en Género (VBG) y prevención del Abuso Sexual Infantil (ASI).',
  },
  {
    term: '3. Formulación y Acompañamiento de Ajustes PIAR/DUA',
    text: 'Liderar la caracterización pedagógica, el diseño de los Planes Individuales de Ajustes Razonables (PIAR) y la aplicación del DUA para estudiantes con barreras para el aprendizaje.',
  },
  {
    term: '4. Orientación Vocacional y Profesional (Grado 9° a 11°)',
    text: 'Diseñar e implementar el programa de exploración vocacional para orientar a los educandos en la elección de énfasis de educación media y la construcción de su proyecto de vida universitario o laboral.',
  },
  {
    term: '5. Dirección del Programa Escuela de Padres y Alianza Familia-Escuela',
    text: 'Organizar y dictar los talleres obligatorios para acudientes (mínimo 3 anuales), abordando pautas de crianza amorosa, herramientas digitales y prevención de violencia intrafamiliar.',
  },
  {
    term: '6. Remisión y Articulación Intersectorial',
    text: 'Efectuar las remisiones oficiales e informes técnicos ante la red hospitalaria (EPS/IPS - atención en salud mental 24/7), ICBF, Comisaría de Familia, Policía de Infancia y Secretaría de Salud Municipal.',
  },
  {
    term: '7. Visitas Domiciliarias y Diagnóstico Familiar',
    text: 'Realizar el seguimiento a las condiciones sociofamiliares de los educandos mediante entrevistas, cuestionarios y visitas domiciliarias en casos de presunta vulneración de derechos o abandono.',
  },
  {
    term: '8. Asesoría a Docentes y Comisiones de Evaluación',
    text: 'Orientar a los profesores de aula y participar con voz en las Comisiones de Evaluación para prescribir pautas de manejo pedagógico e intervenciones grupales.',
  },
  {
    term: '9. Garantía de Confidencialidad y Secreto Profesional',
    text: 'Mantener la estricta reserva, secreto profesional y protección de datos sensibles en las historias escolares y registros de atención psicosocial.',
  },
];

export default function Cap5Orientador() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          5.6.6
        </span>
        <h2 className="section-title">
          Funciones del Docente Orientador
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          5.6.6
        </span>
        <h3 className="hz-head-title">
          Funciones del Docente Orientador
        </h3>
      </div>

      <p className="hz-p">
        El Docente Orientador depende de la Rectoría y lidera el{" "}
        <span className="hz-key">Servicio de Consejería Escolar y Bienestar Estudiantil</span>,
        brindando apoyo psicosocial e intersectorial a toda la comunidad educativa:
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