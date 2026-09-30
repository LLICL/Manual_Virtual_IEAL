const ACCIONES = [
  {
    term: '1. Garantía de presencialidad, no discriminación y protección reforzada',
    text: 'La estudiante gestante tiene el derecho inalienable a continuar su proceso formativo en el aula, en su jornada y grupo habitual. Queda proscrita cualquier medida sancionatoria, segregación o desescolarización arbitraria motivada por el estado de embarazo. La presencialidad se mantiene como regla general, salvo concepto médico expreso de la EPS/IPS que prescriba reposo o califique el embarazo como de alto riesgo obstétrico.',
  },
  {
    term: '2. Certificación médica oficial EPS/IPS y evaluación de riesgo al 4° mes (semana 16)',
    text: 'Desde que se conoce la gestación, el acudiente y la estudiante aportan ante Orientación Escolar o Coordinación de Convivencia el certificado del médico tratante (semanas de gestación, fecha probable de parto y recomendaciones de autocuidado). Al cumplirse el 4° mes se activa el mecanismo de protección al nasciturus con un concepto médico actualizado: embarazo de bajo riesgo (presencial con ajustes razonables de infraestructura y desplazamiento); embarazo de alto riesgo u orden de reposo (activación inmediata del Plan de Apoyo Académico Individualizado - PAA en modalidad flexible/asincrónica con trabajo guiado en casa), garantizando la educación sin exponer al binomio madre-hijo.',
  },
  {
    term: '3. Suscripción obligatoria del acta tripartita de corresponsabilidad (Modelo 7)',
    text: 'Para formalizar garantías y compromisos se suscribe de manera imperativa el Modelo 7 (Acta Oficial Preimpresa de Consentimiento Informado, Compromiso de Autocuidado y Protección a Estudiantes Gestantes y Lactantes) entre la estudiante, su acudiente, la Coordinación de Convivencia y la Orientación Escolar.',
  },
  {
    term: '4. Adaptación curricular y exención de riesgos en educación física',
    text: 'Se expide un acta pedagógica interna para eximir a la estudiante de deportes de contacto, juegos con balón, ejercicios de fuerza, carreras o actividades con riesgo de caídas o traumatismos abdominales. La asignatura de Educación Física se evalúa mediante guías teóricas, proyectos de hábitos saludables, investigación en nutrición o actividades adaptadas de bajo impacto avaladas por su EPS/IPS.',
  },
  {
    term: '5. Ajustes razonables de infraestructura y prevención institucional',
    text: 'La Coordinación reubica el grupo de clases de la estudiante en el primer nivel de la sede para eliminar el uso de escaleras y prevenir caídas. Se concede permiso especial de 5 minutos de flexibilidad al ingreso, salida y recesos para evitar aglomeraciones en pasillos y puertas. Se verifica el estado activo de la estudiante en la EPS y en la Póliza de Seguro de Accidentes Escolares del plantel.',
  },
  {
    term: '6. Bitácora de salud, licencia de maternidad y lactancia materna',
    text: 'Ante cualquier malestar se presta auxilio primario, se notifica al acudiente y a la EPS para traslado si se requiere, registrando la novedad en la bitácora convivencial. Se garantiza receso académico equivalente al periodo de licencia médica posparto (40 días o prescripción médica), con retorno mediante el PAA y sin pérdidas automáticas por inasistencias médicas justificadas. Se acondiciona un espacio higiénico y privado en la sede principal para la lactancia o extracción de leche materna, con los permisos de jornada correspondientes.',
  },
];

export default function CapRutaProtocolosGestantes() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.3.6
        </span>
        <h2 className="section-title">
          Gestantes y lactantes
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.3.6
        </span>
        <h3 className="hz-head-title">
          Protocolo operativo integral para la garantía de permanencia escolar, protección al
          nasciturus, autocuidado, adaptación curricular y seguimiento intersectorial de estudiantes
          gestantes y lactantes
        </h3>
      </div>

      <p className="hz-p">
        La institución ejecuta una ruta unificada de{' '}
        <span className="hz-key">atención, autocuidado, adaptación curricular y protección al
        nasciturus</span> de las estudiantes en estado de embarazo o lactancia, garantizando su{' '}
        <span className="hz-key">permanencia escolar sin discriminación</span>:
      </p>

      <ol className="hz-ol">
        {ACCIONES.map((a) => (
          <li key={a.term}>
            <span className="hz-term">{a.term}</span>
            <details className="hz-collapse hz-collapse--mini">
              <summary>Ver descripción</summary>
              <div className="hz-collapse-body">
                <p>{a.text}</p>
              </div>
            </details>
          </li>
        ))}
      </ol>
    </>
  );
}