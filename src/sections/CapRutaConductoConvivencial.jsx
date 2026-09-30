const INSTANCIAS = [
  {
    term: '1. Docente de aula o primer respondiente',
    text: 'Profesor que presencie, reciba la alerta o tenga conocimiento inicial del conflicto o agresión. Realiza la intervención pedagógica inmediata y el diálogo reflexivo inicial.',
  },
  {
    term: '2. Director(a) de Grupo / Grado',
    text: 'Docente encargado del acompañamiento del curso. Lidera la mediación pedagógica de Situaciones Tipo I o faltas leves, notifica a la familia y consigna el seguimiento en el Observador del Estudiante.',
  },
  {
    term: '3. Coordinación de Convivencia (o de Sede)',
    text: 'Compente para tramitar Situaciones Tipo I reincidentes y Situaciones Tipo II (agresión escolar, bullying, ciberbullying). Suscribe actas de compromiso con los acudientes e impone medidas restaurativas como biblioteca escolar o Matrícula en Observación.',
  },
  {
    term: '4. Orientación Escolar / Consejería Escolar',
    text: 'Brinda contención psicosocial inicial, acompaña a víctimas y agresores y realiza remisiones intersectoriales de apoyo (EPS/IPS, ICBF, Comisaría de Familia).',
  },
  {
    term: '5. Comité Escolar de Convivencia',
    text: 'Órgano colegiado encargado de analizar las Situaciones Tipo II y Tipo III, sugerir al Consejo Directivo las sanciones o medidas de protección, evaluar el clima escolar y coordinar la Ruta de Atención Integral.',
  },
  {
    term: '6. Consejo Directivo',
    text: 'Máxima instancia directiva colegiada. Juzga en última instancia las faltas gravísimas o Situaciones Tipo III, evalúa el expediente disciplinario y determina la cancelación unilateral del contrato de matrícula o la Matrícula en Observación.',
  },
  {
    term: '7. Rectoría',
    text: 'Representante legal e instancia ejecutiva. Emite la Resolución Rectoral motivada de fondo, efectúa las denuncias obligatorias en 24 horas ante las autoridades penales/policivas y realiza los reportes oficiales en la plataforma SIUCE.',
  },
];

export default function CapRutaConductoConvivencial() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.2.7.1
        </span>
        <h2 className="section-title">
          Conducto regular para la mediación convivencial
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.2.7.1
        </span>
        <h3 className="hz-head-title">
          Conducto regular para la mediación convivencial y manejo de conflictos
        </h3>
      </div>

      <p className="hz-p">
        Para la atención, mediación pedagógica y solución de situaciones o conflictos que afecten la
        convivencia escolar (Situaciones <span className="hz-key">Tipo I, Tipo II y Tipo III</span>),
        la comunidad educativa deberá seguir el <span className="hz-key">orden jerárquico de siete (7)
        instancias de atención</span>:
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