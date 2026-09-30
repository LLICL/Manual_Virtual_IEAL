const CAUSALES = [
  {
    term: 'Antecedentes de falta de respuesta o escucha',
    text: 'El acudiente ya intentó el diálogo con el docente sin obtener solución, respuesta ni haber sido escuchado.',
  },
  {
    term: 'Alta tensión emocional o estado de prevención/enojo',
    text: 'El acudiente se presenta alterado, lo que dificulta un diálogo sereno y directo con el docente en ese momento.',
  },
  {
    term: 'Temor fundado a represalias o prevención',
    text: 'Se manifiesta temor de que el reclamo directo genere actitudes preventivas o consecuencias negativas en la valoración o el trato del educando.',
  },
  {
    term: 'Ruptura de canales de comunicación',
    text: 'Existe un bloqueo total en la relación interpersonal entre las partes que imposibilita la concertación informal.',
  },
  {
    term: 'Gravedad de los hechos imputados',
    text: 'La queja versa sobre tratos desobligantes, discriminación, acoso escolar, maltrato verbal o físico, u otras faltas que requieran la intervención formal del directivo docente.',
  },
];

export default function CapRutaConductoExcepcion() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.2.7.5
        </span>
        <h2 className="section-title">
          Excepción justificada al primer nivel del conducto regular
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.2.7.5
        </span>
        <h3 className="hz-head-title">
          Excepción justificada al primer nivel y atención de quejas directas contra docentes
        </h3>
      </div>

      <p className="hz-p">
        Cuando un padre, madre de familia, acudiente o estudiante acuda{' '}
        <span className="hz-key">directamente ante la Coordinación</span> (de Convivencia, Académica o
        de Sede) manifestando una queja o inconformidad respecto a la labor de un docente y exprese
        explícitamente <span className="hz-key">su negativa de dirigirse en primera instancia a dicho
        docente</span>, la Coordinación <span className="hz-key">no podrá rechazar la atención ni
        desatender</span> a la persona.
      </p>

      <h4 className="hz-sub">Causales justificadas para la excepción</h4>
      <p className="hz-p">
        Se consideran causales justificadas para omitir el primer nivel del conducto regular las
        siguientes situaciones:
      </p>
      <ol className="hz-ol">
        {CAUSALES.map((c) => (
          <li key={c.term}>
            <span className="hz-term">{c.term}:</span> {c.text}
          </li>
        ))}
      </ol>
    </>
  );
}