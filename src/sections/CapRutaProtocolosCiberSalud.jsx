const PASOS = [
  {
    term: 'Paso 1. Detección, identificación y reporte inmediato',
    text: 'Ante la detección, denuncia o sospecha fundada de violencia digital (ciberbullying, grooming, sextorsión, ciberacoso persistente o stalking, happy slapping, sexting), cualquier miembro de la comunidad educativa informa a la Coordinación de Convivencia. Se reporta de inmediato al Comité Escolar de Convivencia y se realiza el cargue obligatorio e inmediato en la plataforma SIUCE.',
  },
  {
    term: 'Paso 2. Priorización y atención urgente en salud mental',
    text: 'Eje central: se activa sin dilaciones la ruta intersectorial de salud. La institución genera la remisión inmediata y prioritaria de la víctima (y del presunto agresor, si la evaluación psico-orientadora lo sugiere) a su EPS o al servicio de urgencias médicas y psicológicas, exigiendo el cumplimiento de las directrices del Ministerio de Salud para la valoración clínica y la mitigación del trauma emocional y posibles ideaciones suicidas. Se cumple de inmediato el Código Dorado.',
  },
  {
    term: 'Paso 3. Notificación familiar y restablecimiento de derechos',
    text: 'Se convoca de manera urgente y presencial a los padres o representantes legales de todas las partes, garantizando la confidencialidad. En paralelo se comunica la situación al ICBF para la apertura del Proceso Administrativo de Restablecimiento de Derechos (PARD) en menores de 14 años, o a la Policía de Infancia y Adolescencia y la Fiscalía en adolescentes mayores de 14 años sujetos al SRPA por presunta comisión de delitos virtuales.',
  },
  {
    term: 'Paso 4. Medidas de contención pedagógica y no revictimización',
    text: 'El Comité Escolar de Convivencia adopta medidas de separación provisional para proteger a la víctima del escarnio público y cortar el ciclo de ciberviolencia, garantizando que no comparta espacios físicos o virtuales no supervisados con el presunto agresor. Estas medidas no afectan el derecho a la educación del investigado (p. ej. asignación temporal a estudio remoto o guías en biblioteca) mientras se adelanta el debido proceso y se profiere fallo disciplinario de fondo en un máximo de 15 días hábiles, bajo la presunción de inocencia y el interés superior del menor.',
  },
];

export default function CapRutaProtocolosCiberSalud() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.3.4.3
        </span>
        <h2 className="section-title">
          Violencia digital y salud mental
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.3.4.3
        </span>
        <h3 className="hz-head-title">
          Violencia digital y salud mental
        </h3>
      </div>

      <p className="hz-p">
        Ante incidentes digitales, la Ruta de Atención Integral se activa de manera{' '}
        <span className="hz-key">prioritaria y especializada</span>, focalizando los esfuerzos en la
        preservación, atención y mitigación del daño a la <span className="hz-key">salud mental</span>{' '}
        de los menores involucrados:
      </p>

      <ol className="hz-ol">
        {PASOS.map((p) => (
          <li key={p.term}>
            <span className="hz-term">{p.term}</span>
            <details className="hz-collapse hz-collapse--mini">
              <summary>Ver descripción</summary>
              <div className="hz-collapse-body">
                <p>{p.text}</p>
              </div>
            </details>
          </li>
        ))}
      </ol>

      <h4 className="hz-sub">Responsabilidad, límites y enfoque de salud</h4>
      <ul className="hz-list">
        <li>
          <span className="hz-key">Responsabilidad penal:</span> el educando{' '}
          <span className="hz-key">mayor de 14 y menor de 18 años</span> que cometa, instigue o
          difunda delitos virtuales (Tipo III) es sujeto pleno y responsable ante el{' '}
          <span className="hz-key">SRPA</span>.
        </li>
        <li>
          <span className="hz-key">No inquisición:</span> la institución solo {' '}
          <span className="hz-key">denuncia, contiene, protege la evidencia y activa el SIUCE</span>;
          le está vedado investigar, interrogar, hacer careos o fungir como policía judicial (competencia
          exclusiva de la Fiscalía y la Defensoría de Familia).
        </li>
        <li>
          <span className="hz-key">Salud mental digital es derecho</span>: la violencia digital es un
          vector patológico grave (no una contravención), por lo que se{' '}
          <span className="hz-key">exige remisión clínica por EPS</span> de víctima y victimario, con los
          protocolos del <span className="hz-key">Plan Decenal de Salud Pública</span> y el{' '}
          <span className="hz-key">Código Dorado</span> cuando sea necesario.
        </li>
        <li>
          <span className="hz-key">Remisión al Bloque 2:</span> la doctrina sobre orientación sexual,
          la protección de menores de 14 años, la prohibición de coerción y la corresponsabilidad
          parental para noviazgos en mayores de 14 años se codifican en la{' '}
          <span className="hz-key">Sección A.2 del Bloque 2</span>, que junto con el Bloque 1 forma una{' '}
          <span className="hz-key">unidad indivisible</span> de obligatorio cumplimiento.
        </li>
      </ul>
    </>
  );
}