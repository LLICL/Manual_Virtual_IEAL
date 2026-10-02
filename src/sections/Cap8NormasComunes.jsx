const ITEMS = [
  {
    term: 'Aulas de clase',
    text: 'Ingreso puntual, postura corporal adecuada, respeto al turno de palabra, conservación del orden y aseo. Al inicio del año escolar, cada director de grupo asignará un silla a cada estudiante mediante inventario escrito, siendo el estudiante responsable de devolverlo en perfecto estado al final del año. En las aulas con aire acondicionado, las puertas y ventanas permanecerán cerradas durante las clases y la unidad se apagará al salir.',
  },
  {
    term: 'Servicios sanitarios (Baños)',
    text: 'Su uso se realizará preferentemente durante los descansos. Se exige el uso racional del agua, vaciado de sanitarios y depósito de papel en las canecas. Queda estrictamente prohibido utilizar los baños para juegos, reuniones no autorizadas o escribir grafitis, leyendas u ofensas en paredes o puertas (conducta tipificada como falta grave / Situación Tipo II con obligación de reparación física de la pintura).',
  },
  {
    term: 'Patios y zonas comunes',
    text: 'Desplazamientos en calma, prohibición de juegos bruscos o de balones en pasillos, jardineras o frentes de aulas.',
  },
];

export default function Cap8NormasComunes() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          8.7
        </span>
        <h2 className="section-title">
          Normas generales de comportamiento en aulas, sanitarios y espacios comunes
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          8.7
        </span>
        <h3 className="hz-head-title">
          Normas generales de comportamiento en aulas, sanitarios y espacios comunes
        </h3>
      </div>

      <p className="hz-p">
        La convivencia armónica y el cuidado del ambiente escolar se rigen por las siguientes pautas
        de conducta cotidiana:
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