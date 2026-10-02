const ESTIMULOS = [
  {
    term: 'Matrícula de honor',
    text: 'Al cierre del año lectivo, a estudiantes de 1° a 10° con desempeño ALTO o SUPERIOR en todos los periodos y distinguidos por su comportamiento ejemplar.',
  },
  {
    term: 'Reconocimiento público y medallas',
    text: 'A estudiantes que representen con éxito a la institución, municipio o departamento en certámenes académicos, culturales, científicos o deportivos.',
  },
  {
    term: 'Premio al resultado Saber 11',
    text: 'En la graduación, a los estudiantes de 11° que obtengan puntajes destacados en las pruebas SABER o se ubiquen en los primeros puestos institucionales.',
  },
  {
    term: 'Izada de bandera',
    text: 'Distinción periódica para los estudiantes que destaquen por su rendimiento académico, liderazgo o valores de convivencia.',
  },
  {
    term: 'Reconocimiento por puesto grupal e individual',
    text: 'Diplomas al final de cada periodo para los tres primeros puestos por curso y estímulos para las aulas que alcancen estándares grupales superiores de rendimiento y disciplina.',
  },
  {
    term: 'Anotaciones positivas en el observador del estudiante',
    text: 'Registro en la plataforma institucional de elogios, felicitaciones y méritos por excelente comportamiento, compañerismo, actitud colaborativa, civismo y superación personal, reflejados cronológicamente en los informes periódicos entregados a los acudientes.',
  },
  {
    term: 'Estímulos por participación en Centros de Interés',
    text: 'Menciones de honor, valoraciones académicas favorables en áreas afines y reconocimientos de liderazgo por la participación destacada en muestras, fanzines, torneos y proyectos de los Centros de Interés.',
  },
];

export default function Cap9Estimulos() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          3.4.2
        </span>
        <h2 className="section-title">
          Sistema de estímulos y reconocimientos institucionales
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          3.4.2
        </span>
        <h3 className="hz-head-title">
          Sistema de estímulos y reconocimientos institucionales
        </h3>
      </div>

      <p className="hz-p">
        El mayor estímulo es la satisfacción propia del cumplimiento de sus propios deberes, para
        convertirse en icono y ejemplo de la identidad institucional frente a la comunidad.
      </p>

      <p className="hz-p">
        La institución otorgará estímulos y distinciones a los educandos que se destaquen por su
        identidad, la promoción de los valores y su excelente comportamiento curricular, así como a
        quienes representen con gallardía y orgullo a la institución en actividades sociales, lúdicas y
        recreativas-deportivas. Entre estos estímulos se resaltan los siguientes:
      </p>

      <ul className="hz-list">
        {ESTIMULOS.map((e) => (
          <li key={e.term}>
            <span className="hz-term">{e.term}</span> — {e.text}
          </li>
        ))}
      </ul>
    </>
  );
}
