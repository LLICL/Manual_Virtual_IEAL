const PASOS = [
  {
    term: 'Intervención e interrupción inmediata',
    text: 'El docente, director de grupo o primer respondiente interviene de manera inmediata para detener la situación y evitar el escalamiento de la agresión.',
  },
  {
    term: 'Mediación pedagógica y diálogo reflexivo',
    text: 'Se reúne a las partes involucradas en un espacio tranquilo y confidencial para escuchar sus versiones, facilitando un diálogo reflexivo sobre las causas del conflicto, el reconocimiento del error y el respeto mutuo.',
  },
  {
    term: 'Concertación de acuerdos de convivencia y reparación',
    text: 'Se concilian alternativas de solución equitativas e imparciales, estableciendo compromisos por escrito de no reincidencia y medidas restaurativas de aula o pedagógicas, como disculpas privadas o públicas, reflexiones escritas o reparación simbólica del daño.',
  },
  {
    term: 'Registro de evidencia en la plataforma',
    text: 'Se consigna el llamado de atención, la descripción de los hechos y el compromiso firmado por los estudiantes en el observador del estudiante (plataforma institucional).',
  },
  {
    term: 'Seguimiento y verificación',
    text: 'El docente o director de grupo realiza un seguimiento periódico para verificar el cumplimiento de los acuerdos y el restablecimiento del clima de convivencia en el aula.',
  },
];

export default function CapRutaSituacionesTipo1() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.2.2
        </span>
        <h2 className="section-title">
          Protocolo para Situaciones Tipo I
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.2.2
        </span>
        <h3 className="hz-head-title">
          Protocolo para Situaciones Tipo I
        </h3>
      </div>

      <p className="hz-p">
        Para la atención inmediata y pedagógica de las{' '}
        <span className="hz-key">Situaciones Tipo I</span>, la institución aplica el siguiente
        procedimiento estandarizado en <span className="hz-key">cinco (5) pasos</span>:
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