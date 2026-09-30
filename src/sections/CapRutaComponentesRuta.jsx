const COMPONENTES = [
  {
    term: 'Promoción',
    text: 'Fomenta el clima escolar positivo, el desarrollo socioemocional y ciudadano, la participación estudiantil activa, los estilos de vida saludables, la educación integral en sexualidad, el reconocimiento y valoración de la diversidad y el fortalecimiento de la Alianza Familia-Escuela.',
  },
  {
    term: 'Prevención',
    text: 'Interviene de manera temprana sobre los factores de riesgo individuales, familiares y sociales que puedan afectar los derechos humanos, sexuales y reproductivos, mediante estrategias pedagógicas continuas de sensibilización y formación comunitaria.',
  },
  {
    term: 'Atención',
    text: 'Asiste de manera inmediata, confidencial y pedagógica a las personas involucradas en situaciones de convivencia, coordinando la atención en salud, la protección y el restablecimiento de derechos con la red intersectorial (ICBF, Comisaría de Familia, Policía de Infancia, Fiscalía y EPS).',
  },
  {
    term: 'Seguimiento',
    text: 'Evalúa periódicamente la efectividad de las medidas adoptadas, garantiza la permanencia y la trayectoria educativa completa del estudiante y realiza el reporte oficial en el Sistema de Información Unificado de Convivencia Escolar (SIUCE).',
  },
];

export default function CapRutaComponentesRuta() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.1.1
        </span>
        <h2 className="section-title">
          Componentes de la Ruta de Atención Integral
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.1.1
        </span>
        <h3 className="hz-head-title">
          Componentes de la Ruta de Atención Integral
        </h3>
      </div>

      <ol className="hz-ol">
        {COMPONENTES.map((c) => (
          <li key={c.term}>
            <span className="hz-term">{c.term}:</span> {c.text}
          </li>
        ))}
      </ol>
    </>
  );
}