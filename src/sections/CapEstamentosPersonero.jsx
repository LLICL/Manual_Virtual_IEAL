const REQUISITOS = [
  'Ser educando regular y legalmente matriculado.',
  'Estar cursando el grado undécimo (11º) si su matrícula corresponde a la jornada matinal o vespertina o el quinto Clei (Grado 25º) si su matrícula corresponde a la jornada sabatina.',
  'Tener como mínimo dos (2) años de antigüedad en la institución al momento de su postulación.',
  'Tener cualidades de líder en la comunidad, como: ser dinámico, participativo, comprometido, responsable, respetuoso y sociable.',
  'Observar en todo momento, dentro y fuera de la Institución, buena disciplina y conducta.',
  'Tener excelente convivencia y sentido de pertenencia con la Institución.',
  'No haber sido sancionado(a) disciplinariamente en el año inmediatamente anterior.',
  'Evidenciar un buen rendimiento académico.',
];

export default function CapEstamentosPersonero() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          2.3.2
        </span>
        <h2 className="section-title">
          Personero(a) Estudiantil
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          2.3.2
        </span>
        <h3 className="hz-head-title">
          Personero(a) Estudiantil
        </h3>
      </div>

      <p className="hz-p">
        Estudiante del último grado que ofrezca la institución (11º en diurna o CLEI 5 en sabatina)
        elegido por voto secreto dentro de los primeros 30 días del calendario lectivo. Su función
        es promover y defender el ejercicio de los{' '}
        <strong className="hz-key">derechos y deberes estudiantiles</strong> contemplados en la
        Constitución y el Manual de Convivencia.
      </p>

      <p className="hz-p">
        La Institución Educativa Antonio Lenis, en cada una de las jornadas que ofrece la institución
        (Matinal, Vespertina y Sabatina) elegirá un (1) Personero Estudiantil quien deberá reunir los
        siguientes requisitos:
      </p>

      <h4 className="hz-sub">Requisitos para la inscripción del personero en nuestra institución</h4>

      <ol className="hz-ol">
        {REQUISITOS.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ol>
    </>
  );
}
