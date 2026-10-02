const JORNADAS = [
  {
    term: 'Transición',
    text: 'Cuatro (4) horas de cincuenta y cinco (55) minutos cada una y un período de descanso de veinte (20) minutos. Matinal de 7:00 a 11:00 a.m. Vespertina de 1:00 a 5:00 p.m.',
  },
  {
    term: 'Básica primaria',
    text: 'Cinco (5) horas de cincuenta y cinco (55) minutos cada una y un período de descanso de veinticinco (25) minutos. Matinal de 7:00 a 12:00 m. Vespertina de 1:00 a 6:00 p.m.',
  },
  {
    term: 'Media académica con énfasis',
    text: 'Siete (7) horas de cincuenta y cinco (55) minutos cada una y dos (2) períodos de descansos de quince (15) minutos cada uno. Matinal de 6:00 a 12:45 p.m. Vespertina de 1:00 a 7:45 p.m.',
  },
  {
    term: 'Jornada escolar sabatina (educación para adultos)',
    text: 'Se desarrollará en diez (10) horas de cuarenta y cinco (45) minutos cada una. En la mañana seis periodos con un descanso de 15 minutos y en la tarde cuatro (4) periodos y un intermedio de una hora entre las dos jornadas para almuerzo.',
  },
];

export default function CapJornadasHorarios() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          3.3.1
        </span>
        <h2 className="section-title">
          Intensidad horaria y horarios oficiales
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          3.3.1
        </span>
        <h3 className="hz-head-title">
          Intensidad horaria y horarios oficiales
        </h3>
      </div>

      <ul className="hz-list">
        {JORNADAS.map((j) => (
          <li key={j.term}>
            <span className="hz-term">{j.term}</span> — {j.text}
          </li>
        ))}
      </ul>

      <details className="hz-collapse">
        <summary>Parágrafo 9</summary>
        <div className="hz-collapse-body">
          Las labores académicas iniciarán según el horario establecido en cada una de las jornadas
          matinal, vespertina y sabatina respectivamente; para tal fin, diez (10) minutos antes de las
          horas estipuladas, se dará la entrada de estudiantes. Se dará un tiempo adicional de diez
          (10) minutos después de iniciada la jornada, cumplido este tiempo se cierra la puerta. A la
          salida la puerta se abrirá a la hora correspondiente en que finaliza el horario escolar.
          Para las primarias como los menores de 14 años no se van solos estos deben ser recogidos por
          su acudiente en un tiempo máximo de 15 minutos de finalizada la jornada seria 12 y 15 para
          la matinal y 6 y 15 para la vespertina. En ambos casos se hará seguimiento y reporte por
          parte del coordinador o docente director de grupo en el observador del estudiante (plataforma
          institucional).
        </div>
      </details>
    </>
  );
}
