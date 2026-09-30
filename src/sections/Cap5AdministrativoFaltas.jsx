const ITEMS = [
  {
    term: '1',
    title: 'Abandono o suspensión de actividades sin autorización previa',
    text: 'Abandonar o suspender sus actividades durante la jornada de trabajo sin autorización previa.',
  },
  {
    term: '2',
    title: 'Propaganda y proselitismo político o religioso en el plantel',
    text: 'Realizar propaganda y proselitismo político o religioso dentro del plantel.',
  },
  {
    term: '3',
    title: 'Portar armas dentro de las instalaciones',
  },
  {
    term: '4',
    title: 'Maltrato físico o psicológico contra la dignidad humana',
    text: 'Someter a los educandos o a cualquier compañero al maltrato físico o psicológico que atente contra la dignidad humana, integridad personal o el libre desarrollo de su personalidad.',
  },
  {
    term: '5',
    title: 'Uso de instalaciones o del nombre institucional para actividades ilícitas',
    text: 'Utilizar las instalaciones o el nombre de nuestra institución para actividades ilícitas.',
  },
  {
    term: '6',
    title: 'Venta de objetos o mercancías a los educandos',
  },
  {
    term: '7',
    title: 'Compra de objetos o mercancías a educandos o padres de familia',
  },
  {
    term: '8',
    title: 'Asistir en estado de embriaguez o bajo el influjo de sustancias prohibidas',
  },
  {
    term: '9',
    title: 'Solicitar préstamos de dinero a educandos o padres de familia',
  },
  {
    term: '10',
    title: 'Uso de documentos e información falsa para obtener nombramientos',
  },
  {
    term: '11',
    title: 'Desconocimiento del debido proceso y de la ruta de atención',
    text: 'Desconocer, incumplir y desobedecer el debido proceso y la ruta de atención que se debe aplicar a los educandos, especialmente las actas de debido proceso, desacatando la normativa aplicable a los menores de edad.',
  },
];

export default function Cap5AdministrativoFaltas() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          5.7.3
        </span>
        <h2 className="section-title">
          Faltas del personal administrativo y de servicio
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          5.7.3
        </span>
        <h3 className="hz-head-title">
          Faltas del personal administrativo y de servicio
        </h3>
      </div>

      <ul className="hz-list">
        {ITEMS.map((i) => (
          <li key={i.term}>
            <span className="hz-term">
              {i.term}. {i.title}
            </span>
            {i.text && (
              <details className="hz-collapse hz-collapse--mini">
                <summary>Ver descripción</summary>
                <div className="hz-collapse-body">
                  <p>{i.text}</p>
                </div>
              </details>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}