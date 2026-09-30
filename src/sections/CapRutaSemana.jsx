const EJES = [
  'Prevención del acoso escolar (bullying) y del ciberacoso (ciberbullying).',
  'Ejercicio activo y vivencial de los derechos humanos.',
  'Educación integral para la sexualidad y orientación sexual respetuosa.',
  'Mitigación y erradicación de las violencias escolares.',
  'Prevención del abuso sexual infantil (ASI) y de las violencias basadas en género.',
];

const EXPRESIONES = [
  'Concursos de expresión escrita y plástica: caricatura, cuento, dibujo/pintura, poesía, declamación y carteleras informativas.',
  'Artes escénicas y musicales: obras de teatro, declamaciones, canciones inéditas y muestras culturales.',
  'Producción audiovisual y medios institucionales: micro-mensajes en video, filminutos, crónicas de prevención y piezas digitales transmitidas por el Sistema de Comunicación Interno (SICI), las redes sociales y los medios de comunicación locales.',
];

export default function CapRutaSemana() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.1.2
        </span>
        <h2 className="section-title">
          Semana de la Dignidad
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.1.2
        </span>
        <h3 className="hz-head-title">
          Semana de la Dignidad
        </h3>
      </div>

      <p className="hz-p">
        Como máxima estrategia pedagógica e institucional de prevención, formación en valores y
        socialización de la Ruta de Atención Integral, la I.E. Antonio Lenis desarrolla anualmente la{' '}
        <span className="hz-key">Semana de la Dignidad</span>, convocando a estudiantes de todas las
        sedes y jornadas, docentes, directivos, padres de familia e instituciones aliadas.
      </p>

      <ol className="hz-letras">
        <li>
          <span className="hz-term">Ejes temáticos centrales</span>
          <ul className="hz-list hz-list--sub">
            {EJES.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </li>
        <li>
          <span className="hz-term">Expresiones artísticas, culturales y concursos</span>
          La comunidad educativa participa a través de creaciones guiadas por los docentes de
          humanidades, artes y directores de grupo, en las siguientes modalidades:
          <ul className="hz-list hz-list--sub">
            {EXPRESIONES.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </li>
        <li>
          <span className="hz-term">Participación comunitaria e intersectorial</span>{' '}
          Cuenta con la presencia activa de las familias (Escuela de Padres) y la articulación con las
          entidades del Sistema Nacional de Convivencia Escolar (Comisaría de Familia, ICBF, Personería
          Municipal, Secretaría de Educación, Alcaldía y Policía de Infancia y Adolescencia), así como
          con delegados de otros establecimientos educativos y medios de comunicación.
        </li>
        <li>
          <span className="hz-term">Estímulos y reconocimientos</span>{' '}
          Todas las muestras pedagógicas reciben valoración académica favorable en las áreas
          correspondientes; además, el Consejo Directivo y el Comité de Convivencia otorgan
          distinciones, menciones de honor y premios especiales a los primeros puestos por modalidad,
          promoviendo la réplica comunitaria y la transmisión de los mejores mensajes preventivos.
        </li>
      </ol>
    </>
  );
}