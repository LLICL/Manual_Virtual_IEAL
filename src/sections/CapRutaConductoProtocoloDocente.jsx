const PASOS = [
  {
    term: 'Paso 1. Recepción, contención emocional y registro objetivo de la queja',
    text: 'El Coordinador(a) recibe al acudiente o estudiante en un espacio privado y reservado, con contención emocional y escucha atenta. Solicita radicar la versión por escrito (Formato PQRS / Reporte Convivencial) con hechos, fechas y evidencias. La Coordinación se abstiene de emitir juicios de valor o validar acusaciones contra el docente antes de escucharlo.',
  },
  {
    term: 'Paso 2. Notificación formal y traslado de la queja al docente (24 a 48 horas hábiles)',
    text: 'Dentro de las 24 a 48 horas hábiles siguientes a la recepción, el Coordinador notifica formalmente al docente mediante comunicación escrita o reunión privada, entregándole copia del escrito o un resumen de los hechos. Esta actuación garantiza la publicidad, la lealtad procesal y la presunción de inocencia del educador.',
  },
  {
    term: 'Paso 3. Recepción de versión libre y descargos del docente (3 días hábiles)',
    text: 'Se otorga al docente tres (3) días hábiles para presentar su versión libre por escrito, contextualización pedagógica y evidencias probatorias (observador, planillas de notas, citaciones previas). Queda prohibido imponer amonestaciones al docente sin haber valorado previamente sus descargos.',
  },
  {
    term: 'Paso 4. Citación a mesa de mediación y concertación tripartita',
    text: 'Conocidos los descargos, la Coordinación cita una reunión presencial de mediación con el Coordinador(a) como moderador imparcial, el docente involucrado y el padre de familia/acudiente (con Orientación Escolar si la situación lo amerita). Se exponen los puntos de vista, se resuelven malentendidos y se conciertan soluciones de beneficio mutuo.',
  },
  {
    term: 'Paso 5. Suscripción de compromisos y plan de seguimiento',
    text: 'Se levanta Acta de Mediación Convivencial/Académica con los acuerdos suscritos entre docente y familia (canales formales de comunicación, pautas de evaluación, seguimiento pedagógico). La Coordinación realiza seguimiento a los 15 y 30 días para verificar la efectividad de los acuerdos y la restauración del clima de confianza.',
  },
  {
    term: 'Paso 6. Falta disciplinaria o impasse irresoluble (escalamiento institucional)',
    text: 'Si las partes se niegan a conciliar, o la indagación inicial evidencia una presunta falta disciplinaria laboral, la Coordinación se abstiene de imponer sanciones y remite el expediente documentado a la Rectoría, que determina la remisión a la Secretaría de Educación Municipal (Control Interno Disciplinario) o las medidas administrativas correspondientes.',
  },
];

export default function CapRutaConductoProtocoloDocente() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.2.7.5.1
        </span>
        <h2 className="section-title">
          Protocolo de atención, mediación y garantías del proceso docente
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.2.7.5.1
        </span>
        <h3 className="hz-head-title">
          Protocolo específico de atención, mediación y garantías del debido proceso docente
        </h3>
      </div>

      <p className="hz-p">
        Cuando sea atendida una queja directa contra un docente, se aplica el siguiente{' '}
        <span className="hz-key">protocolo de seis (6) pasos</span>:
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