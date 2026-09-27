const PAUTAS = [
  {
    term: 'Legitimación exclusiva del acudiente',
    text: 'Solo el padre, madre de familia y/o acudiente legal registrado podrá solicitar el permiso de salida. No se aceptan solicitudes de los estudiantes ni de terceros no autorizados.',
  },
  {
    term: 'Prohibición de permisos telefónicos',
    text: 'Por seguridad y prevención del riesgo, bajo ningún concepto se autorizan permisos de salida mediante llamadas telefónicas.',
  },
  {
    term: 'Trámite presencial y diligenciamiento de formato',
    text: 'La solicitud es presencial ante la Coordinación (Convivencia en la Sede Principal o de Sede), en el Formato de Salida con fecha, hora, motivo justificado, firma y cédula de la acudiente.',
  },
  {
    term: 'Autorización previa para el retiro por terceros',
    text: 'Si lo recoge una persona distinta al padre, la madre o el acudiente registrado, este deberá remitir autorización escrita con firma y cédula, adjuntando copia del documento de identidad del adulto autorizado.',
  },
  {
    term: 'Procedimiento interno y control de portería',
    text: 'La Coordinación de Convivencia tramita la autorización con el formato institucional, lo envía al aula respectiva y entrega la orden de salida para el control de portería.',
  },
  {
    term: 'Límite máximo anual de permisos',
    text: 'Se autorizan máximo cinco (5) permisos de salida anuales por estudiante, salvo situaciones de salud comprobadas mediante soporte médico.',
  },
  {
    term: 'Permanencia en Coordinación y prohibición de ingreso a salones',
    text: 'Los acudientes que retiran a sus hijos deben dirigirse a la oficina de Coordinación (Convivencia en la Sede Principal) y esperar allí a que el estudiante sea llamado. No pueden ingresar a las aulas durante la jornada escolar.',
  },
  {
    term: 'Restricción absoluta para el retiro autónomo en primaria',
    text: 'En educación inicial y básica primaria (Sedes Carrenales y Mercedes Ábrego) no se permite, de manera absoluta, que el menor salga solo de la institución, ni al finalizar la jornada ni durante ella; no se admiten autorizaciones verbales ni escritas de los padres o acudientes para retirarlo sin la presencia presencial de un adulto responsable acreditado.',
  },
];

export default function Cap8Permisos() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          3.3.4
        </span>
        <h2 className="section-title">
          Solicitud y trámite de permisos de salida de estudiantes
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          3.3.4
        </span>
        <h3 className="hz-head-title">
          Solicitud y trámite de permisos de salida de estudiantes
        </h3>
      </div>

      <p className="hz-p">
        El retiro de estudiantes durante la jornada escolar se regirá por las siguientes pautas
        institucionales y de seguridad:
      </p>

      <ol className="hz-steps">
        {PAUTAS.map((p) => (
          <li className="hz-step" key={p.term}>
            <span className="hz-step-num">
              <span className="hz-step-dot" />
              <span className="hz-step-line" />
            </span>
            <span className="hz-step-body">
              <span className="hz-step-term">{p.term}</span>
              <span className="hz-step-text">{p.text}</span>
            </span>
          </li>
        ))}
      </ol>
    </>
  );
}
