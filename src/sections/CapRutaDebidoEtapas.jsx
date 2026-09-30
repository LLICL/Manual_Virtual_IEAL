const ETAPAS = [
  'Comunicación formal de apertura: notificación por escrito al estudiante y a sus acudientes del inicio formal del proceso disciplinario.',
  'Formulación precisa de cargos: pliego escrito con la conducta investigada, circunstancias de tiempo, modo y lugar, normas presuntamente infringidas y calificación provisional de la falta (leve, grave o gravísima).',
  'Traslado probatorio: puesta a disposición del investigado y sus representantes de todas las pruebas del expediente.',
  'Término para descargos y controversia: plazo no inferior a tres (3) días hábiles para rendir descargos escritos o verbales, aportar y controvertir pruebas.',
  'Decisión motivada y congruente: pronunciamiento formal del Rectoría o Consejo Directivo que valora descargos y pruebas, con congruencia con los cargos formulados.',
  'Imposición de sanción proporcional: medida correctiva prevista y dosificada según atenuantes o agravantes.',
  'Garantía de contradicción y doble instancia: notificación del acto sancionatorio indicando reposición (ante el Rector) y apelación (ante el Consejo Directivo), interponibles dentro de los cinco (5) días hábiles siguientes.',
];

export default function CapRutaDebidoEtapas() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.2.6.1
        </span>
        <h2 className="section-title">
          Etapas del proceso disciplinario
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.2.6.1
        </span>
        <h3 className="hz-head-title">
          Etapas del proceso disciplinario
        </h3>
      </div>

      <p className="hz-p">
        La potestad disciplinaria de la institución se somete a{' '}
        <span className="hz-key">siete (7) etapas procesales obligatorias</span>:
      </p>

      <ol className="hz-ol">
        {ETAPAS.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ol>
    </>
  );
}