const PASOS = [
  {
    term: 'Paso 1. Identificación y recepción de alertas',
    text: 'Se inicia cuando un estudiante presenta señales físicas o conductuales de presunto consumo, cuando otra persona reporta el hecho, o cuando es sorprendido en flagrancia.',
  },
  {
    term: 'Paso 2. Abordaje inicial, conversación empática y descargos',
    text: 'El docente, directivo o docente orientador aborda al estudiante con serenidad y estricta confidencialidad. Queda prohibido juzgar, rotular o estigmatizar al educando. Se reciben los descargos de puño y letra del estudiante; está prohibido realizar interrogatorios directos por parte de los docentes.',
  },
  {
    term: 'Paso 3. Atención de urgencia en salud',
    text: 'Si el estudiante está consumiendo, bajo los efectos de sustancias o en crisis de salud, se solicita ayuda inmediata de urgencias (Línea 123 o red hospitalaria local). Un adulto escolar acompaña permanentemente al educando y se notifica de inmediato a la familia hasta que haga presencia el acudiente o el Defensor de Familia.',
  },
  {
    term: 'Paso 4. Remisión intersectorial, incautación y cadena de custodia',
    text: 'Si hay consumo o sospecha de vulneración familiar, se remite a la entidad de salud (EPS/IPS) y al ICBF. Si hay posesión, tenencia o comercialización, se incauta la sustancia o dispositivo en bolsa plástica transparente sellada (cadena de custodia) con acta; se aplica de inmediato el protocolo Tipo III y se remite el caso a la Policía de Infancia y Adolescencia o Comisaría de Familia si es mayor de 14 años, o al ICBF si es menor de 14 años.',
  },
  {
    term: 'Paso 5. Citación a la familia y examen toxicológico',
    text: 'La Coordinación de Convivencia cita presencialmente a los padres o acudientes. Se exige la práctica de un examen toxicológico certificado mediante la EPS. Sin flagrancia pero con sospecha fundada, se otorgan hasta quince (15) días hábiles para presentar el resultado.',
  },
  {
    term: 'Paso 6. Compromisos y tratamiento especializado',
    text: 'Se suscribe un acta de compromiso pedagógico y terapéutico con el estudiante y su acudiente. Si se confirma el consumo o adicción, el educando se vincula a un tratamiento médico y terapéutico (ambulatorio o internado) en la EPS o ICBF, prevaleciendo su derecho a la salud y resocialización sobre la escolaridad presencial.',
  },
  {
    term: 'Paso 7. Reporte oficial en el SIUCE',
    text: 'El Rector, como presidente del Comité Escolar de Convivencia, reporta el caso de manera obligatoria en el Sistema de Información Unificado de Convivencia Escolar (SIUCE).',
  },
  {
    term: 'Paso 8. Evaluación de cumplimiento e intervención del ICBF',
    text: 'Si la familia y el estudiante cumplen los compromisos, se continúa con el seguimiento pedagógico interno. Si la familia incumple o se niega al tratamiento o examen, se notifica formalmente al ICBF y a la Comisaría de Familia por presunta omisión, descuido o trato negligente.',
  },
  {
    term: 'Paso 9. Acciones preventivas con familias',
    text: 'Si no se confirman indicios de consumo, se firman acuerdos de prevención y pautas de crianza con los acudientes (casos descartados).',
  },
  {
    term: 'Paso 10. Seguimiento pedagógico y acompañamiento',
    text: 'Orientación Escolar mantiene actualizada la información sobre la evolución del estudiante y el acompañamiento del núcleo familiar.',
  },
  {
    term: 'Paso 11. Fortalecimiento de la prevención institucional',
    text: 'Se profundizan estrategias de prevención universal, selectiva e indicada en el aula y en los talleres de Escuela de Padres.',
  },
  {
    term: 'Paso 12. Cierre formal del caso en el SIUCE',
    text: 'Superada la situación de riesgo y verificado el restablecimiento de derechos del educando, se formaliza el cierre de la bitácora en la plataforma SIUCE.',
  },
];

export default function CapRutaProtocolosSPA() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.3.1
        </span>
        <h2 className="section-title">
          SPA, Vapeadores y Alcohol
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.3.1
        </span>
        <h3 className="hz-head-title">
          Protocolo y Ruta de Atención para Consumo, Porte, Tenencia y Comercialización de SPA,
          Vapeadores y Alcohol
        </h3>
      </div>

      <p className="hz-p">
        De acuerdo con los lineamientos oficiales del Ministerio de Educación Nacional y la regulación
        institucional, el abordaje pedagógico y la atención de casos de{' '}
        <span className="hz-key">consumo, porte, tenencia o comercialización</span> de sustancias
        psicoactivas, vapeadores y alcohol se ejecuta bajo un procedimiento estandarizado en{' '}
        <span className="hz-key">doce (12) pasos</span>:
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
    </>
  );
}