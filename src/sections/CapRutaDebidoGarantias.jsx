const INSTANCIAS = [
  {
    term: '1. Indagación y formulación de cargos',
    text: 'A cargo de la Coordinación de Convivencia: tras recibir la queja o el reporte, recauda el material probatorio, escucha la versión libre del educando (siempre en presencia de su acudiente) y, de encontrar mérito, formula los cargos de manera clara y circunstanciada (modo, tiempo y lugar), indicando la norma del manual presuntamente vulnerada.',
  },
  {
    term: '2. Concepto consultivo del Comité Escolar de Convivencia',
    text: 'El expediente se remite al Comité, que actúa como órgano asesor y consultor bajo el enfoque de justicia restaurativa. Analiza los hechos y emite un concepto técnico-pedagógico no vinculante, pero de obligatorio recaudo, sugiriendo la medida correctiva proporcional ante el Rector.',
  },
  {
    term: '3. Fallo de primera instancia (A quo): Rectoría',
    text: 'El conocimiento y la emisión del fallo sancionatorio recaen de manera exclusiva en la Rectoría. La decisión se motiva en derecho y en pedagogía, valorando pruebas y descargos, y se notifica personalmente por escrito, en documento de resolución foliado, indicando los recursos: reposición ante el Rector en tres (3) días hábiles y apelación ante el Consejo Directivo en cinco (5) días hábiles.',
  },
  {
    term: '4. Fallo de segunda instancia (Ad quem): Consejo Directivo',
    text: 'La apelación se interpone y sustenta por escrito dentro de los cinco (5) días hábiles siguientes a la respuesta de la reposición y es resuelta de fondo por el Consejo Directivo. El Rector, por haber fallado en primera instancia, se declara impedido y se abstiene de participar, deliberar o votar, pues no puede ser juez y parte. La interposición del recurso suspende los efectos de la sanción hasta que la decisión quede en firme.',
  },
];

export default function CapRutaDebidoGarantias() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.2.6.4
        </span>
        <h2 className="section-title">
          Debido proceso sancionatorio y doble instancia
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.2.6.4
        </span>
        <h3 className="hz-head-title">
          Debido proceso sancionatorio y doble instancia
        </h3>
      </div>

      <p className="hz-p">
        La institución garantiza a todos los educandos,{' '}
        <span className="hz-key">sin discriminación y sin importar la gravedad de la falta</span>, el
        respeto irrestricto de las garantías del debido proceso. Todo proceso que pueda culminar con
        sanciones restrictivas de derechos —<span className="hz-key">suspensión de la jornada,
        matrícula en observación o cancelación unilateral de la matrícula</span>— se tramita bajo los
        principios de <span className="hz-key">legalidad, tipicidad, contradicción, presunción de
        inocencia y doble instancia</span>, con una estricta separación de roles que asegura la
        imparcialidad del juzgador:
      </p>
      <ol className="hz-ol">
        {INSTANCIAS.map((i) => (
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
      </ol>
    </>
  );
}