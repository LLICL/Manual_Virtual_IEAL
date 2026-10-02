const ITEMS = [
  {
    term: 'Usuarios y requisitos',
    text: 'La atención presencial exige la presentación del carné estudiantil e institucional actualizado. Los exalumnos requerirán autorización escrita expedida por la Rectoría.',
  },
  {
    term: 'Reglas de préstamo y consulta',
    text: 'Las obras generales, enciclopedias y diccionarios son de consulta interna exclusiva en sala. El préstamo externo de textos de consulta y guías se otorgará hasta por dos (2) días hábiles, mientras que las obras literarias se prestarán por un plazo de hasta cinco (5) días hábiles, renovables previa presentación física del material. El cupo máximo por usuario es de tres (3) libros simultáneos.',
  },
  {
    term: 'Sanciones por deterioro, mutilación o pérdida',
    text: 'Todo usuario es responsable del cuidado del material asignado. En caso de extravío o deterioro grave, el usuario deberá reponer una copia idéntica del mismo título (no se acepta dinero en efectivo). La mutilación intencional o el intento de sustracción no autorizada dará lugar a la suspensión del servicio por un (1) semestre escolar, sin perjuicio de la sanción convivencial correspondiente (falta grave / Situación Tipo II).',
  },
  {
    term: 'Expedición de paz y salvo de biblioteca',
    text: 'La emisión del Paz y Salvo de Biblioteca es un requisito indispensable para la renovación de matrícula, trámite de traslados, entrega de certificados y la proclamación de graduación de Bachilleres.',
  },
];

export default function Cap8Biblioteca() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          8.2
        </span>
        <h2 className="section-title">
          Servicios de biblioteca escolar y material bibliográfico
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          8.2
        </span>
        <h3 className="hz-head-title">
          Servicios de biblioteca escolar y material bibliográfico
        </h3>
      </div>

      <p className="hz-p">
        La Biblioteca Escolar es el{" "}
        <span className="hz-key">
          centro de recursos para el aprendizaje y la investigación formativa
        </span>{' '}
        de la institución, abierto a docentes, estudiantes, directivos, administrativos y exalumnos
        formalmente acreditados:
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