const PASOS = [
  {
    term: 'Atención médica de urgencia en salud',
    text: 'Remisión inmediata de la víctima a la red hospitalaria o al servicio de urgencias de la EPS/IPS (o llamada a la Línea 123) para la atención física y mental, con acompañamiento permanente de un adulto escolar.',
  },
  {
    term: 'Recepción de versión libre por escrito',
    text: 'Se reciben los descargos redactados de puño y letra por los educandos involucrados, y queda estrictamente prohibido realizar interrogatorios directos por parte de los docentes.',
  },
  {
    term: 'Denuncia e informe penal obligatorio en 24 horas',
    text: 'La institución denuncia el hecho ante la Fiscalía General de la Nación, la Policía de Infancia y Adolescencia, la Comisaría de Familia o el ICBF, dentro de las veinticuatro (24) horas siguientes al conocimiento del caso.',
  },
  {
    term: 'Notificación presencial inmediata a acudientes',
    text: 'Se cita de forma urgente a los padres de familia o acudientes para informarles de las acciones legales e intersectoriales adoptadas en el marco del restablecimiento de derechos.',
  },
  {
    term: 'Reporte inmediato en el SIUCE',
    text: 'El Rector registra obligatoriamente la situación Tipo III en el Sistema de Información Unificado de Convivencia Escolar (SIUCE).',
  },
  {
    term: 'Medidas de protección e intangibilidad para la víctima',
    text: 'Implementación inmediata de flexibilizaciones académicas, cambio de grupo o jornada, si se requiere, y medidas administrativas que garanticen que la víctima no sea confrontada ni revictimizada con el presunto agresor.',
  },
  {
    term: 'Sesión del Comité y juzgamiento en el Consejo Directivo',
    text: 'Convocatoria extraordinaria del Comité Escolar de Convivencia para analizar el caso y remisión del expediente al Consejo Directivo, autoridad competente para tramitar el debido proceso disciplinario sancionatorio (matrícula en observación o cancelación unilateral del contrato de matrícula mediante Resolución Rectoral motivada).',
  },
  {
    term: 'Seguimiento intersectorial y garantía de trayectoria educativa',
    text: 'Seguimiento continuo en articulación con las autoridades administrativas y de salud para verificar el restablecimiento total de los derechos de la víctima y coordinar con la Secretaría de Educación Municipal la continuidad de la trayectoria educativa de los estudiantes.',
  },
];

export default function CapRutaSituacionesTipo3() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.2.4
        </span>
        <h2 className="section-title">
          Protocolo para Situaciones Tipo III
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.2.4
        </span>
        <h3 className="hz-head-title">
          Protocolo para Situaciones Tipo III
        </h3>
      </div>

      <p className="hz-p">
        Frente a agresiones constitutivas de presuntos delitos (delitos sexuales, lesiones personales
        con incapacidad, porte o comercialización de SPA, porte de armas, extorsión digital, entre
        otros), la institución ejecuta de forma inmediata y obligatoria la siguiente ruta en{' '}
        <span className="hz-key">ocho (8) pasos</span>:
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