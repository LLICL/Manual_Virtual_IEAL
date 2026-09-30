const REGLAS = [
  {
    term: '1. No sustitución de la denuncia penal',
    text: 'Cuando la falta grave investigada configure, a la vez, una presunta conducta delictiva (Situación Tipo III), la instrucción disciplinaria escolar no podrá suspender, obstaculizar ni sustituir la inmediata denuncia penal, ni incurrir en encubrimiento o retraso de las remisiones a las autoridades competentes.',
  },
  {
    term: '2. Término perentorio de reporte',
    text: 'El Rector traslada la noticia criminal o denuncia en un lapso nunca superior a veinticuatro (24) horas ante la Fiscalía General de la Nación y el ICBF/Comisaría de Familia.',
  },
  {
    term: '3. Prohibición de autotutela judicial',
    text: 'El colegio se abstiene de practicar actos propios de policía judicial o valoraciones médico-legales, en extralimitación de funciones.',
  },
  {
    term: '4. Garantía de no revictimización',
    text: 'En ningún momento del trámite disciplinario interno se llamará a declarar o confrontar a la presunta víctima frente al estudiante investigado, ni se promoverán mecanismos de mediación escolar; su incumplimiento acarrea nulidad procesal absoluta y responsabilidad penal directa del funcionario responsable.',
  },
];

export default function CapRutaDebidoPrevalencia() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.2.6.5
        </span>
        <h2 className="section-title">
          Prevalencia penal y prohibición de retención judicial (Tipo III)
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.2.6.5
        </span>
        <h3 className="hz-head-title">
          Prevalencia penal y prohibición de retención judicial (Tipo III)
        </h3>
      </div>

      <p className="hz-p">
        Regla especial aplicable a las Situaciones Tipo III: la investigación disciplinaria interna{' '}
        <span className="hz-key">no sustituye la jurisdicción penal</span>:
      </p>

      <ol className="hz-ol">
        {REGLAS.map((r) => (
          <li key={r.term}>
            <span className="hz-term">{r.term}</span>
            <details className="hz-collapse hz-collapse--mini">
              <summary>Ver descripción</summary>
              <div className="hz-collapse-body">
                <p>{r.text}</p>
              </div>
            </details>
          </li>
        ))}
      </ol>
    </>
  );
}