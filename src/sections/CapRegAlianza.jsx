const ALIANZAS = [
  {
    term: 'Obligatoriedad de asistencia',
    text: 'La asistencia de los padres de familia y/o acudientes a las jornadas de Escuela de Padres y talleres de formación es de carácter obligatorio.',
  },
  {
    term: 'Sanciones pedagógicas por inasistencia',
    text: 'La falta no justificada a un taller dará lugar a la asignación de una sanción pedagógica consistente en la elaboración manuscrita de un trabajo reflexivo sobre pautas de crianza y responsabilidad parental.',
  },
  {
    term: 'Consecuencia por inasistencia reiterada',
    text: 'La inasistencia injustificada a tres (3) convocatorias consecutivas o discontinuas durante el año escolar se tipificará como abandono y trato negligente, procediendo el reporte formal ante la Comisaría de Familia o el ICBF y la no renovación del contrato de matrícula para el siguiente año lectivo.',
  },
];

export default function CapRegAlianza() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          3.6.7
        </span>
        <h2 className="section-title">
          Alianza Familia-Escuela
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          3.6.7
        </span>
        <h3 className="hz-head-title">
          Alianza Familia-Escuela
        </h3>
      </div>

      <p className="hz-p">
        <span className="hz-key">Obligatoriedad de las Escuelas de Padres</span> y de los talleres de
        formación para las familias.
      </p>

      <ol className="hz-letras">
        {ALIANZAS.map((a) => (
          <li key={a.term}>
            <span className="hz-term">{a.term}:</span> {a.text}
          </li>
        ))}
      </ol>
    </>
  );
}
