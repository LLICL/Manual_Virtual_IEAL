const CLASIFICACION = [
  {
    term: 'Ideación suicida pasiva',
    text: 'Pensamiento o deseo de poner fin a la vida sin método, medios ni plan concreto.',
  },
  {
    term: 'Ideación suicida activa',
    text: 'Pensamientos persistentes con planificación detallada, selección de medios o intencionalidad estructurada.',
  },
  {
    term: 'Intento de suicidio',
    text: 'Conducta no habitual con resultado no letal, iniciada deliberadamente para causarse autolesión o ingesta de medicamentos o sustancias en dosis superiores a las terapéuticas.',
  },
  {
    term: 'Suicidio consumado',
    text: 'Acto deliberado de quitarse la vida con expectativa de desenlace fatal.',
  },
];

const PASOS = [
  {
    term: '1. Activación comunitaria e institucional inmediata',
    text: 'Notificación de urgencia a la Línea de Emergencia Territorial (123 / Línea de Salud Mental 24/7 / Teleorientación) y a la red prestadora de la EPS/IPS del estudiante. Queda prohibida toda dilación o trámite administrativo interno.',
  },
  {
    term: '2. Clasificación de triage y tiempos de atención sanitaria',
    text: 'Triage I (Emergencia Vital / Intento de Suicidio): remisión e ingreso inmediato al servicio de urgencias hospitalarias para intervención clínica y psiquiátrica. Triage II (Urgencia de Salud Mental / ideación activa con plan estructurado o autolesiones agudas): atención e ingreso prioritario en urgencias psiquiátricas. Consulta externa prioritaria: para ideación pasiva o específica sin plan inmediato, la EPS garantiza cita prioritaria por psicología/psiquiatría en un plazo no mayor a 48 horas.',
  },
  {
    term: '3. Cero barreras administrativas y estabilización somática',
    text: 'La atención médica en urgencias se brinda de forma gratuita, inmediata y sin requerimiento de autorizaciones previas ni copagos. Previa o simultáneamente al abordaje psiquiátrico se garantiza la evaluación clínico-somática para descartar o tratar afectaciones orgánicas (intoxicaciones o traumas).',
  },
  {
    term: '4. Herramientas de tamizaje y diagnóstico clínico',
    text: 'Aplicación de pruebas validadas (Escala Columbia C-SSRS, Escala Plutchik, SAD PERSONS, SRQ/RQC) y registro en la historia clínica.',
  },
  {
    term: '5. Trazabilidad, notificación obligatoria y SIUCE',
    text: 'Reporte diario obligatorio en la Ficha SIVIGILA 356 (Intento de Suicidio) ante el Instituto Nacional de Salud (INS) y cargue inmediato en la plataforma SIUCE de la institución.',
  },
  {
    term: '6. Acompañamiento escolar y red de apoyo familiar',
    text: 'Acompañamiento permanente de un adulto escolar hasta la entrega formal al acudiente. Si existe negligencia o renuencia parental para asistir a las rutas clínicas de salud mental, se denuncia de inmediato ante la Comisaría de Familia o el ICBF para la apertura del Proceso Administrativo de Restablecimiento de Derechos (PARD).',
  },
  {
    term: '7. Seguimiento por el comité especializado de salud mental',
    text: 'Adaptaciones curriculares (PIAR), guía de estudio en casa/biblioteca y monitoreo socioemocional, sin estigmatización ni afectación de las notas académicas.',
  },
];

export default function CapRutaProtocolosDorado() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.3.2
        </span>
        <h2 className="section-title">
          Código Dorado: salud mental y conducta suicida
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.3.2
        </span>
        <h3 className="hz-head-title">
          Protocolo de salud mental, autolesiones, ideación suicida y Código Dorado nacional
        </h3>
      </div>

      <p className="hz-p">
        Ante señales de alerta en salud mental, la institución formaliza el fomento de competencias
        socioemocionales y la <span className="hz-key">atención inmediata de emergencias bajo el
        protocolo nacional Código Dorado</span>.
      </p>

      <h4 className="hz-sub">I. Clasificación técnica de la conducta suicida</h4>
      <ul className="hz-list">
        {CLASIFICACION.map((c) => (
          <li key={c.term}>
            <span className="hz-term">{c.term}:</span> {c.text}
          </li>
        ))}
      </ul>

      <h4 className="hz-sub">II. Protocolo de activación y ruta operativa del Código Dorado</h4>
      <p className="hz-p">
        Ante cualquier señal de alerta, conducta de automutilación (cutting), ideación activa o intento
        de suicidio, los docentes, directivos y el Orientador Escolar (primeros respondientes
        entrenados en Primeros Auxilios Psicológicos - PAP) ejecutan el siguiente procedimiento
        ineludible:
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

      <h4 className="hz-sub">III. Prevención del efecto contagio y manejo de la información</h4>
      <ul className="hz-list">
        <li>
          <span className="hz-key">Prohibición de ritos de romantización:</span> queda prohibido erigir
          altares, oratorios masivos o conmemoraciones que idealicen la conducta o desencadenen el
          "efecto contagio" (efecto Werther).
        </li>
        <li>
          <span className="hz-key">Reserva probatoria y vocería única:</span> la comunicación oficial
          corresponde en exclusiva a la Rectoría, manteniendo estricta reserva sobre métodos, cartas o
          datos íntimos del educando.
        </li>
      </ul>
    </>
  );
}