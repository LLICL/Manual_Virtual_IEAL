const NIVELES = [
  {
    term: 'Nivel Crítico (Recuperar y Sostener)',
    text: 'Prioriza proteger la vida, sostener vínculos afectivos y brindar contención emocional con actividades cortas y flexibles en caso de emergencias o duelo agudo.',
  },
  {
    term: 'Nivel Moderado (Recuperar y Fortalecer)',
    text: 'Promueve la reconstrucción paulatina de rutinas, proyectos integrados y el trabajo colaborativo en el aula.',
  },
  {
    term: 'Alerta Preventiva (Profundizar y Preparar)',
    text: 'Enfocado en la gestión del riesgo socioemocional, la educación ciudadana y el fortalecimiento de la resiliencia comunitaria.',
  },
];

export default function CapRutaProtocolosPAPNiveles() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.3.7.4
        </span>
        <h2 className="section-title">
          Acompañamiento gradual en tres niveles
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.3.7.4
        </span>
        <h3 className="hz-head-title">
          Acompañamiento gradual en tres (3) niveles de afectación
        </h3>
      </div>

      <ol className="hz-ol">
        {NIVELES.map((n) => (
          <li key={n.term}>
            <span className="hz-term">{n.term}</span>
            <details className="hz-collapse hz-collapse--mini">
              <summary>Ver descripción</summary>
              <div className="hz-collapse-body">
                <p>{n.text}</p>
              </div>
            </details>
          </li>
        ))}
      </ol>
    </>
  );
}