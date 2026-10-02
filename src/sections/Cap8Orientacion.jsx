const ITEMS = [
  {
    term: 'Ámbitos de atención',
    text: 'Acompañamiento en el desarrollo socioemocional, prevención de riesgos sociales (consumo de SPA, ideación suicida, VBG, acoso escolar), orientación vocacional e investigativa para estudiantes de grados 9°, 10° y 11°, mediación en conflictos convivenciales y seguimiento al proceso de educación inclusiva (PIAR/DUA).',
  },
  {
    term: 'Secreto profesional y confidencialidad',
    text: 'Las consultas y atenciones individuales brindadas por el Docente Orientador gozan del amparo de la reserva y confidencialidad profesional. La información recabada sólo podrá ser compartida con las instancias directivas, comités o autoridades administrativas/penales cuando exista un riesgo inminente para la vida, salud e integridad del estudiante o de terceros.',
  },
  {
    term: 'Procedimiento de remisión y acceso',
    text: 'Los estudiantes podrán acceder al servicio mediante remisión escrita del docente de aula, director de grupo o coordinador (utilizando el formato institucional de remisión), o por solicitud voluntaria directa. En todo caso, el Orientador(a) expedirá una constancia escrita de asistencia para el retorno al aula de clase.',
  },
];

export default function Cap8Orientacion() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          8.1
        </span>
        <h2 className="section-title">
          Servicio de orientación escolar
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          8.1
        </span>
        <h3 className="hz-head-title">
          Servicio de orientación escolar
        </h3>
      </div>

      <p className="hz-p">
        El Servicio de Orientación Escolar es una{' '}
        <span className="hz-key">
          dependencia pedagógica y psicosocial transversal
        </span>{' '}
        destinada al acompañamiento integral de los educandos, el fortalecimiento del bienestar
        socioemocional y la asesoría a familias y docentes:
      </p>

      <ul className="hz-list">
        {ITEMS.map((i) => (
          <li key={i.term}>
            <span className="hz-term">{i.term}</span>
            <details className="hz-collapse hz-collapse--mini">
              <summary>Ver descripción</summary>
              <div className="hz-collapse-body">
                <p>{i.text}</p>
              </div>
            </details>
          </li>
        ))}
      </ul>
    </>
  );
}