const TIPOS = [
  {
    term: 'Situaciones Tipo I',
    text: 'Conflictos manejados inadecuadamente y situaciones esporádicas que inciden negativamente en el clima escolar y que, en ningún caso, generan daños al cuerpo o a la salud.',
  },
  {
    term: 'Situaciones Tipo II',
    text: 'Agresión escolar, acoso escolar (bullying) y ciberacoso (ciberbullying) que no revistan las características de un delito y que se presenten de manera repetida o sistemática, o que causen daños al cuerpo o a la salud sin generar incapacidad médica para cualquiera de los involucrados.',
  },
  {
    term: 'Situaciones Tipo III',
    text: 'Agresión escolar constitutiva de presuntos delitos contra la libertad, integridad y formación sexual; lesiones personales con incapacidad; porte o comercialización de sustancias psicoactivas; porte de armas u otros delitos establecidos en la ley penal colombiana vigente.',
  },
];

export default function CapRutaSituacionesTipos() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.2.1
        </span>
        <h2 className="section-title">
          Definición y clasificación de las situaciones
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.2.1
        </span>
        <h3 className="hz-head-title">
          Definición y clasificación de las situaciones
        </h3>
      </div>

      <p className="hz-p">
        Las situaciones que afectan la convivencia escolar y el ejercicio de los derechos humanos,
        sexuales y reproductivos se clasifican en{' '}
        <span className="hz-key">tres tipos</span>:
      </p>

      <ol className="hz-ol">
        {TIPOS.map((t) => (
          <li key={t.term}>
            <span className="hz-term">{t.term}:</span> {t.text}
          </li>
        ))}
      </ol>
    </>
  );
}