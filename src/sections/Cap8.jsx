const NORMAS = [
  'Asistir puntualmente a la Institución según el horario correspondiente.',
  'Permanecer en todas las clases y participar, presentándose oportunamente, en todos los actos de la comunidad; salvo que el educando haya sido excusado, citado o remitido a otras dependencias. En cualquier caso, contar con el permiso escrito de la respectiva coordinación o área a la que se remita.',
];

export default function Cap8() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          3.3
        </span>
        <h2 className="section-title">
          Jornadas escolares
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          3.3
        </span>
        <h3 className="hz-head-title">
          Jornadas escolares
        </h3>
      </div>

      <p className="hz-p">
        Teniendo en cuenta los elementos básicos del pleno derecho a la educación y considerando que
        se presentan dificultades reincidentes en cuanto a inasistencias e incumplimiento del
        horario de clases, impidiendo que se favorezca de esta manera el normal desarrollo de las
        actividades en pro del avance en la formación cognitiva e integral de los educandos.
      </p>

      <p className="hz-p">
        La institución espera la asistencia puntual de los educandos a sus respectivas clases y a
        todas y cada una de las actividades académicas y extracurriculares de acuerdo con el
        calendario y los horarios académicos establecidos. Se define como falta de asistencia la
        ausencia de un educando a las clases correspondientes a una jornada completa, o a una hora de
        clase, o a la actividad académica o extracurricular que se programe en el desarrollo de una
        asignatura. Se ha decidido establecer las siguientes normas al respecto:
      </p>

      <ul className="hz-list">
        {NORMAS.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </>
  );
}
