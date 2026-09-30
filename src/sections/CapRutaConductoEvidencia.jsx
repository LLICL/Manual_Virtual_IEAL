const EVIDENCIAS = [
  'Actas de reunión firmadas por los intervinientes.',
  'Descargos redactados de puño y letra por los educandos (versión libre).',
  'Formatos institucionales de citación.',
  'Anotaciones refrendadas en el Observador del Estudiante (plataforma institucional).',
  'Informes técnicos de Orientación Escolar.',
  'Remisiones oficiales intersectoriales (EPS/IPS, ICBF, Comisaría de Familia, Fiscalía).',
  'Actas de compromisos y/o Resoluciones Rectorales motivadas.',
];

export default function CapRutaConductoEvidencia() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.2.7.6
        </span>
        <h2 className="section-title">
          Obligatoriedad de evidencia escrita y registro documental
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.2.7.6
        </span>
        <h3 className="hz-head-title">
          Obligatoriedad de evidencia escrita y registro documental en actuaciones convivenciales
        </h3>
      </div>

      <p className="hz-p">
        Todo procedimiento, atención, mediación, citación, descargo, acuerdo restaurativo, sanción o
        intervención realizada en el marco de los protocolos de atención, las rutas de atención
        integral, los protocolos específicos de riesgo (SPA, ideación suicida, VBG, ciberacoso) y las
        etapas del conducto regular{' '}
        <span className="hz-key">deberá contar con evidencia escrita y registro documental
        completo</span>, por el principio de <span className="hz-key">publicidad y trazabilidad
        procesal</span>.
      </p>

      <p className="hz-p">Dicha evidencia se consolida mediante:</p>
      <ul className="hz-list">
        {EVIDENCIAS.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>

      <ul className="hz-list">
        <li>
          Queda categóricamente <span className="hz-key">prohibido</span> a directivos, docentes y
          comités adelantar, decidir o dar por cerrado cualquier procedimiento{' '}
          <span className="hz-key">de manera verbal</span> sin dejar la correspondiente constancia
          escrita, física o digital, en el expediente e historia convivencial del estudiante.
        </li>
      </ul>
    </>
  );
}