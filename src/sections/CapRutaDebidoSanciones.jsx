const SANCIONES = [
  {
    term: '1. Cancelación unilateral del contrato de matrícula (exclusión definitiva)',
    text: 'Máxima sanción disciplinaria, de competencia exclusiva del Rector en primera instancia y del Consejo Directivo en segunda. Procede ante conductas que fracturen de forma insalvable la convivencia, pongan en peligro inminente la vida, la integridad física o la libertad e integridad sexual, o constituyan infracciones graves (Situaciones Tipo III).',
  },
  {
    term: '2. Matrícula en observación con suspensión preventiva y trabajo académico en biblioteca',
    text: 'Última oportunidad formativa, condicionada y transitoria, cuando por edad, condición sociofamiliar o ausencia de antecedentes sea viable en lugar de la exclusión. Implica matrícula condicionada en observación y suspensión temporal de asistencia al aula de tres (3) a cinco (5) días hábiles curriculares, garantizando el derecho a la educación con talleres, módulos y guías pedagógicas evaluados bajo los estándares del SIEE.',
  },
  {
    term: '3. Acción formativa y pedagógica restaurativa',
    text: 'Conjuntamente con la matrícula en observación, el estudiante desarrolla un proyecto pedagógico reflexivo (investigación y ensayo analítico guiado por Orientación Escolar o Ciencias Sociales) sobre el valor ético quebrantado y su impacto en la convivencia. Queda prohibida la interacción, socialización o contacto visual entre el agresor y la víctima, y la sustentación se efectúa en audiencia privada ante Orientación y Coordinación de Convivencia.',
  },
];

export default function CapRutaDebidoSanciones() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.2.6.2
        </span>
        <h2 className="section-title">
          Catálogo graduado de sanciones para faltas gravísimas
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.2.6.2
        </span>
        <h3 className="hz-head-title">
          Catálogo graduado de sanciones para faltas gravísimas
        </h3>
      </div>

      <p className="hz-p">
        Comprobada la responsabilidad del estudiante en una falta gravísima, tras agotar el debido
        proceso, el <span className="hz-key">Rector impone la sanción en primera instancia</span> y el
        Consejo Directivo la revisa en segunda, según la gravedad, lesividad y reiteración de la
        conducta:
      </p>

      <ol className="hz-ol">
        {SANCIONES.map((s) => (
          <li key={s.term}>
            <span className="hz-term">{s.term}</span>
            <details className="hz-collapse hz-collapse--mini">
              <summary>Ver descripción</summary>
              <div className="hz-collapse-body">
                <p>{s.text}</p>
              </div>
            </details>
          </li>
        ))}
      </ol>

      <ul className="hz-list">
        <li>
          <span className="hz-key">Competencia privativa:</span> la cancelación corresponde de manera
          exclusiva al Rector en primera instancia y al Consejo Directivo en segunda, mediante
          Resolución motivada.
        </li>
        <li>
          <span className="hz-key">Deslinde del Comité Escolar de Convivencia:</span> no sanciona ni
          emite fallos de culpabilidad; se limita al seguimiento de la Ruta de Atención, la activación
          de medidas protectoras y el reporte ante autoridades externas.
        </li>
      </ul>
    </>
  );
}