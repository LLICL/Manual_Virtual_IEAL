const ITEMS = [
  {
    term: 'a. Reserva e ingreso',
    text: 'Las salas serán solicitadas únicamente por los docentes con un mínimo de tres (3) días hábiles de anticipación, contando con el visto bueno del docente encargado de la sala y la Coordinación Académica.',
  },
  {
    term: 'b. Pautas de manejo y responsabilidad',
    text: 'Al ingresar, cada estudiante ocupará el equipo asignado por el docente y verificará su estado inicial. Se prohíbe retirar, cambiar o alterar componentes (mouse, teclados, filtros o cables). Toda memoria USB debe ser escaneada previamente. Los archivos personales deben guardarse en dispositivos propios, ya que los discos duros locales son limpiados periódicamente.',
  },
  {
    term: 'c. Restricciones y faltas específicas',
    text: 'Queda categóricamente prohibido el ingreso o consumo de alimentos o bebidas dentro de las salas. El acceso no autorizado a redes sociales, salas de chat, páginas pornográficas, juegos en línea o la instalación de software no pedagógico durante las horas de clase será sancionado como falta grave / Situación Tipo II y afectará la valoración cualitativa y cuantitativa en la asignatura.',
  },
];

export default function Cap8SalasTecnologia() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          8.3
        </span>
        <h2 className="section-title">
          Salas de tecnología, informática y medios audiovisuales
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          8.3
        </span>
        <h3 className="hz-head-title">
          Salas de tecnología, informática y medios audiovisuales
        </h3>
      </div>

      <p className="hz-p">
        Las salas de informática y recursos digitales están destinadas exclusivamente al{' '}
        <span className="hz-key">
          desarrollo de competencias digitales, investigación académica e incorporación de TICs en el
          aula
        </span>
        :
      </p>

      <ul className="hz-list">
        {ITEMS.map((i) => (
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
      </ul>
    </>
  );
}