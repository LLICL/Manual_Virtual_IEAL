const PASOS = [
  {
    term: 'Paso 1. Identificación temprana y recepción de alertas en aula',
    text: 'Se activa cuando un docente, directivo, orientador o funcionario detecta señales físicas o actitudinales atípicas, o cuando el educando realiza una revelación o reporte directo. Se actúa con serenidad, reserva y empatía. Queda prohibido dudar, juzgar, estigmatizar o desestimar el relato de la persona menor de edad.',
  },
  {
    term: 'Paso 2. Contención emocional y versión libre por escrito',
    text: 'Se brinda un espacio seguro e individual y se recibe la versión libre redactada de puño y letra por el educando. Queda estrictamente prohibido a docentes y directivos realizar interrogatorios directos, indagaciones incriminatorias o confrontaciones que provoquen la revictimización del estudiante.',
  },
  {
    term: 'Paso 3. Atención médica inmediata de urgencia en salud (24/7)',
    text: 'Si se presentan afectaciones recientes a la salud física, signos de agresión o crisis emocionales agudas, se remite de inmediato al servicio de urgencias de la IPS/Hospital de la red pública o EPS (Línea 123), con atención médica y contención psicosocial sin costo ni barrera. Un adulto escolar acompaña permanentemente al estudiante hasta la llegada del acudiente o del Defensor de Familia del ICBF.',
  },
  {
    term: 'Paso 4. Notificación presencial inmediata a acudientes',
    text: 'La Coordinación de Convivencia o Rectoría cita de forma urgente y presencial a la familia o acudientes. Excepción imperativa: si hay indicios de que el presunto agresor pertenece al núcleo familiar del menor, se omite la citación parental y se notifica directamente al ICBF o Comisaría de Familia para evitar riesgos adicionales o presiones al educando.',
  },
  {
    term: 'Paso 5. Denuncia penal e informe obligatorio en menos de 24 horas',
    text: 'El Rector (o el docente/orientador conocedor) formaliza la denuncia penal e informe escrito ante la Fiscalía General de la Nación, la Policía de Infancia y Adolescencia, la Comisaría de Familia o el ICBF, dentro de las veinticuatro (24) horas siguientes al conocimiento de los hechos, aportando la documentación bajo estricta reserva probatoria.',
  },
  {
    term: 'Paso 6. Medidas administrativas de protección e intangibilidad',
    text: 'La institución garantiza la intangibilidad del educando con flexibilizaciones académicas, acompañamiento socioemocional y no confrontación con el agresor. Si el presunto agresor es docente, directivo o funcionario del colegio, se notifica de inmediato a la Secretaría de Educación Municipal (Control Interno Disciplinario) y se aplica el apartamiento preventivo transitorio de las actividades con interacción directa con estudiantes, mientras se surte el debido proceso.',
  },
  {
    term: 'Paso 7. Reporte obligatorio en SIUCE y seguimiento intersectorial',
    text: 'El Rector registra obligatoriamente la Situación Tipo III en la plataforma SIUCE. La Orientación Escolar mantiene el seguimiento psicosocial personalizado y coordina con las autoridades administrativas para el restablecimiento total de derechos y la garantía de la trayectoria educativa completa del educando.',
  },
];

export default function CapRutaProtocolosASI() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.3.5
        </span>
        <h2 className="section-title">
          Abuso Sexual Infantil (ASI)
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.3.5
        </span>
        <h3 className="hz-head-title">
          Protocolo para la prevención, detección temprana y atención de la presunción de Abuso Sexual
          Infantil (ASI)
        </h3>
      </div>

      <p className="hz-p">
        La institución ejecuta una ruta estandarizada en{' '}
        <span className="hz-key">siete (7) pasos</span> para el abordaje de presunciones o indicios de
        abuso o violencia sexual infantil, bajo la{' '}
        <span className="hz-key">primacía del interés superior del menor</span> y la intangibilidad e
        indemnidad sexual:
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