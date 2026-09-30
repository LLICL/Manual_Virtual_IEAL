const PASOS = [
  {
    term: 'Atención médica y contención emocional inicial',
    text: 'Si la agresión causa daño físico o alteración emocional (sin incapacidad médica), se brindan de inmediato los primeros auxilios o se remite al servicio de salud (EPS/IPS), con acompañamiento permanente de Orientación Escolar.',
  },
  {
    term: 'Versión libre por escrito y recopilación de información',
    text: 'Se reúne a los involucrados y testigos para reconstruir los hechos. Los estudiantes redactan sus descargos de puño y letra en versión libre, y queda expresamente prohibido que los docentes realicen interrogatorios directos. Se adoptan medidas inmediatas de protección para evitar nuevas agresiones.',
  },
  {
    term: 'Notificación inmediata a las familias',
    text: 'La Coordinación de Convivencia cita presencial e inmediatamente a los padres de familia y/o acudientes de todos los estudiantes involucrados, para informar la situación de manera objetiva.',
  },
  {
    term: 'Mediación, diálogo restaurativo y compromisos',
    text: 'Se lidera un espacio de reunión con los padres de familia y estudiantes para analizar las causas, aplicar medidas restaurativas y firmar actas de compromiso pedagógico y de reparación de daños en la Coordinación de Convivencia.',
  },
  {
    term: 'Reporte obligatorio en el SIUCE',
    text: 'El Rector (Presidente del Comité Escolar de Convivencia) reporta la situación de manera obligatoria en el Sistema de Información Unificado de Convivencia Escolar (SIUCE).',
  },
  {
    term: 'Definición de medidas pedagógicas y disciplinarias',
    text: 'El Comité Escolar de Convivencia sugiere las medidas pedagógicas restaurativas o las sanciones proporcionales correspondientes, como la suspensión temporal con trabajo pedagógico en la biblioteca escolar por hasta 5 días o la matrícula en observación.',
  },
  {
    term: 'Seguimiento y evaluación del Comité',
    text: 'El Comité Escolar de Convivencia y Orientación Escolar realizan un seguimiento periódico al caso para verificar la efectividad de los acuerdos, garantizar la no repetición y proteger el clima escolar.',
  },
];

export default function CapRutaSituacionesTipo2() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.2.3
        </span>
        <h2 className="section-title">
          Protocolo para Situaciones Tipo II
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.2.3
        </span>
        <h3 className="hz-head-title">
          Protocolo para Situaciones Tipo II
        </h3>
      </div>

      <p className="hz-p">
        Frente a casos de agresión escolar recurrente, bullying o ciberbullying que no constituyan
        delito, la institución ejecuta la siguiente ruta en{' '}
        <span className="hz-key">siete (7) pasos</span>:
      </p>

      <ol className="hz-ol">
        {PASOS.map((p) => (
          <li key={p.term}>
            <span className="hz-term">{p.term}</span>
            <details className="hz-collapse hz-collapse--mini">
              <summary>Ver descripción</summary>
              <div className="hz-collapse-body">
                <p>{p.text}</p>
              </div>
            </details>
          </li>
        ))}
      </ol>
    </>
  );
}