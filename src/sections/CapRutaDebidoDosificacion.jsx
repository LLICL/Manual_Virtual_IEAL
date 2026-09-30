const CRITERIOS = [
  'La edad cronológica del infractor y su grado de madurez psicológica y cognitiva.',
  'El contexto situacional, social y familiar que rodeó la comisión de la infracción.',
  'Las condiciones personales, socioeconómicas y los antecedentes formativos del estudiante.',
  'La existencia previa o ausencia de medidas de orientación pedagógica o psicosocial adoptadas por el colegio.',
  'Los efectos pedagógicos y la trascendencia de la sanción para el proyecto formativo y el futuro del estudiante.',
  'La obligación de propender por la permanencia del menor en el sistema educativo, límite que cede ante la necesidad prevalente de proteger la vida, la integridad física o la libertad sexual de las víctimas.',
];

export default function CapRutaDebidoDosificacion() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.2.6.3
        </span>
        <h2 className="section-title">
          Criterios de dosificación y proporcionalidad
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.2.6.3
        </span>
        <h3 className="hz-head-title">
          Criterios de dosificación y proporcionalidad
        </h3>
      </div>

      <p className="hz-p">
        Para imponer una sanción por faltas graves o gravísimas, la autoridad competente pondera de
        manera obligatoria los siguientes <span className="hz-key">seis (6) criterios</span>:
      </p>

      <ol className="hz-ol">
        {CRITERIOS.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ol>
    </>
  );
}