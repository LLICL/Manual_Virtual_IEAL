const PAUTAS = [
  {
    term: 'Hábitos de autocuidado',
    text: 'Desarrollar hábitos de higiene personal y asimilar conductas orientadas al autocuidado integral.',
  },
  {
    term: 'Presentación pulcra',
    text: 'Asistir a la institución con impecable aseo personal, portando el uniforme y los tenis blancos debidamente limpios.',
  },
  {
    term: 'Prevención de contagios',
    text: 'Evitar la propagación de enfermedades infectocontagiosas y parasitarias, observando las medidas preventivas apropiadas y garantizando el tratamiento médico pertinente bajo la responsabilidad del estudiante y de su representante legal.',
  },
  {
    term: 'Respeto e identidad',
    text: 'Generar una conciencia clara del respeto hacia sí mismo y hacia los demás integrantes de la comunidad educativa.',
  },
];

const MEDIDAS = [
  {
    term: 'Sintomatología febril',
    text: 'No se permitirá el ingreso de estudiantes que presenten fiebre, independientemente de la causa. El director de grupo o docente a cargo reportará la situación de inmediato a la coordinación para citar al acudiente y realizar la entrega formal del educando para su traslado al hogar.',
  },
  {
    term: 'Aislamiento preventivo y excusa médica',
    text: 'El acudiente se abstendrá de enviar a la institución a estudiantes con sintomatología infectocontagiosa (cuadros virales, gripales, eruptivos o alérgicos agudos) que pongan en riesgo el bienestar colectivo. Ante síntomas gripales, el estudiante permanecerá en casa por un período mínimo de tres (3) días para su recuperación. Al reintegrarse a clases, deberá presentar la certificación o alta médica correspondiente.',
  },
  {
    term: 'Atención y retiro oportuno',
    text: 'El acudiente acudirá a la institución a la mayor brevedad posible tan pronto se le comunique el estado de enfermedad de su acudido, garantizando la consulta médica y remitiendo el certificado correspondiente en caso de incapacidad.',
  },
  {
    term: 'Notificación a autoridades de salud',
    text: 'Todo caso confirmado de enfermedad infectocontagiosa de impacto epidemiológico será reportado por la institución a la Secretaría de Salud del Municipio de Sincelejo para el control sanitario correspondiente.',
  },
  {
    term: 'Control de pediculosis',
    text: 'Se realizarán revisiones periódicas durante el año escolar para prevenir y controlar la pediculosis (piojos), acompañadas de charlas formativas para los acudientes. Todo caso detectado será notificado al acudiente y el estudiante permanecerá en aislamiento preventivo hasta tanto se le brinde el tratamiento adecuado.',
  },
  {
    term: 'Campañas de vacunación',
    text: 'En articulación con la Secretaría de Salud del Municipio de Sincelejo, se llevarán a cabo esquemas y campañas de vacunación. Se exigirá el carné de vacunación actualizado a la totalidad de los estudiantes, de manera especial a los menores de cinco (5) años durante el proceso de matrícula.',
  },
];

export default function Cap4Higiene() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          3.2.1
        </span>
        <h2 className="section-title">
          Pautas de higiene y riesgo epidemiológico
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          3.2.1
        </span>
        <h3 className="hz-head-title">
          Pautas de higiene y riesgo epidemiológico
        </h3>
      </div>

      <ul className="hz-list">
        {PAUTAS.map((p) => (
          <li key={p.term}>
            <span className="hz-term">{p.term}</span> — {p.text}
          </li>
        ))}
      </ul>

      <p className="hz-p">
        Asimismo, teniendo en cuenta que en toda comunidad existe el riesgo de contagio
        epidemiológico, se exige a los padres de familia y/o acudientes el cumplimiento estricto de
        las siguientes medidas:
      </p>

      <ul className="hz-list">
        {MEDIDAS.map((m) => (
          <li key={m.term}>
            <span className="hz-term">{m.term}</span> — {m.text}
          </li>
        ))}
      </ul>
    </>
  );
}
