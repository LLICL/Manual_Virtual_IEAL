const PASOS = [
  {
    term: '1. Inmovilización del acto y principio de no intervención',
    text: 'Al conocer en flagrancia un dispositivo tecnológico (celular, computadora, tableta) utilizado para la comisión o almacenamiento de material relacionado con violencia sexual digital, sextorsión, pornografía infantil o ciberacoso grave, el docente o directivo exigirá al estudiante suspender de inmediato toda interacción táctil o remota con el equipo.',
  },
  {
    term: '2. Prohibición absoluta de alteración y respeto a la intimidad',
    text: 'Rectores, coordinadores, orientadores y docentes tienen terminantemente prohibido manipular el contenido interno del dispositivo. No podrán abrir aplicaciones, leer mensajes, explorar galerías, reenviar archivos ni intentar descubrir contraseñas: primero, para evitar la contaminación de la prueba (modificación de metadatos, alteración del hash o escritura de registros); y segundo, para prevenir la violación ilícita de comunicaciones o la vulneración del derecho a la intimidad.',
  },
  {
    term: '3. Aislamiento y fijación tecnológica',
    text: 'El dispositivo se aísla inmediatamente para evitar borrados remotos (wiping) o alteración a través de redes inalámbricas. Se apaga el equipo o se coloca en "Modo Avión" si la pantalla se encuentra desbloqueada.',
  },
  {
    term: '4. Embalaje y rotulado',
    text: 'El dispositivo se introduce en una bolsa plástica transparente de seguridad (preferiblemente antiestática o tipo Faraday), sellada de manera inviolable con cinta o precinto, impidiendo su apertura sin dejar rastro de fractura física.',
  },
  {
    term: '5. Registro documental de cadena de custodia (Acta de Primer Respondiente)',
    text: 'Se diligencia un formulario estandarizado que indique con precisión: fecha y hora exacta de retención; lugar específico de los hechos; descripción física del dispositivo (marca, modelo, color, desgaste, forro, IMEI visible); identificación plena del estudiante portador; y nombre, cargo y firma del docente o directivo que asume la custodia.',
  },
  {
    term: '6. Traslado a autoridad competente',
    text: 'El dispositivo sellado y el registro documental se resguardan en la Rectoría y se entregan única y exclusivamente a los investigadores de la Policía de Infancia y Adolescencia o al CTI de la Fiscalía (previo constancia firmada de recibido). Nunca se entrega el dispositivo a los padres de familia si contiene presunta evidencia de un delito.',
  },
];

export default function CapRutaProtocolosCiberEvidencia() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.3.4.2
        </span>
        <h2 className="section-title">
          Aseguramiento de evidencia digital
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.3.4.2
        </span>
        <h3 className="hz-head-title">
          Aseguramiento de la evidencia digital en el entorno escolar
        </h3>
      </div>

      <p className="hz-p">
        La tipificación de conductas de violencia en el entorno digital (grooming, sextorsión, sexting,
        stalking, happy slapping, difusión no consentida de material íntimo, entre otras) exige el{' '}
        <span className="hz-key">aseguramiento inmediato y riguroso de las pruebas tecnológicas</span>.
        Aunque directivos y docentes no ostentan funciones de policía judicial, el ordenamiento los
        instituye como <span className="hz-key">primeros respondientes</span> ante el hallazgo de un
        elemento material probatorio en el entorno escolar. Su deber es{' '}
        <span className="hz-key">evitar la destrucción, alteración, ocultamiento o pérdida</span> de la
        evidencia digital:
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