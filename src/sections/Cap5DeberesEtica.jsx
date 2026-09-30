const ITEMS = [
  {
    term: '1. Ejemplo de conducta',
    text: 'Mantener una conducta pública y privada intachable que sirva de modelo ético para los educandos.',
  },
  {
    term: '2. Cuidado de bienes institucionales',
    text: 'Responder por el uso adecuado, mantenimiento y seguridad de las aulas, laboratorios, equipos de cómputo y materiales asignados.',
  },
  {
    term: '3. Asistencia a convocatorias',
    text: 'Asistir puntualmente a reuniones de profesores, comisiones de evaluación, capacitaciones y turnos de disciplina asignados.',
  },
  {
    term: '4. Respeto al descanso familiar y desconexión',
    text: 'Canalizar la información y los comunicados pedagógicos con las familias exclusivamente dentro de la jornada laboral e institucional, absteniéndose de enviar mensajes en horario nocturno o fines de semana, salvo avisos urgentes sobre alteraciones de la jornada o suspensión de clases.',
  },
];

export default function Cap5DeberesEtica() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          5.3.3
        </span>
        <h2 className="section-title">
          Deberes de ética, ejemplo e integridad institucional
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          5.3.3
        </span>
        <h3 className="hz-head-title">
          Deberes de ética, ejemplo e integridad institucional
        </h3>
      </div>

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