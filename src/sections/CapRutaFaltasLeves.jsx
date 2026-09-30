const CATALOGO = [
  'Ausentarse de las actividades pedagógicas o de aula sin causa justificada o sin autorización previa de la Coordinación.',
  'Inasistencia intencional o retardo a la primera hora de clase o a la hora del énfasis.',
  'Asumir actitudes o comportamientos inapropiados durante las clases que interrumpan la dinámica pedagógica.',
  'Asistir a clases sin el uniforme correspondiente o portando prendas o accesorios no autorizados (gorras, bufandas, buzos particulares, pañoletas, viseras o adornos extravagantes).',
  'Modificar el modelo oficial del uniforme único (entubar la sudadera, alterar el suéter o usar prendas distintas a las reglamentarias).',
  'Salir del aula de clase sin permiso del docente o durante los cambios de hora.',
  'Impuntualidad en el ingreso a la jornada escolar, en los cambios de clase o al finalizar los recesos.',
  'Ingerir alimentos o golosinas durante las horas de clase, formaciones o actos de comunidad.',
  'Inasistencia injustificada a un periodo específico de clase estando dentro del plantel.',
  'Fomentar el desaseo en el aula de clase, pasillos, patios o dependencias de la institución.',
  'No portar con respeto los elementos didácticos o el uniforme en eventos institucionales dentro o fuera del colegio.',
  'Incumplir de forma esporádica con las tareas, trabajos o materiales escolares requeridos.',
  'Presentarse al colegio con calzado abierto, chanclas, crocs o sandalias sin excusa médica justificada ante Coordinación.',
  'Practicar actividades deportivas en pasillos o frentes de salones durante las horas de clase.',
  'Jugar en áreas comunes con balones u objetos lanzados que puedan causar incomodidad o riesgos menores.',
  'Hacer uso indebido o tener comportamientos inadecuados en parques o zonas recreativas públicas durante salidas.',
  'Arrojar basuras o desechos fuera de las canecas destinadas para tal fin.',
  'Permanecer en el colegio en jornadas o áreas no correspondientes a su horario sin autorización.',
  'Traer al colegio juguetes, elementos de juego de azar o distractores no solicitados pedagógicamente.',
];

const SANCIONES = [
  'Amonestación verbal en privado y diálogo reflexivo entre el docente conocedor y el estudiante.',
  'Registro en el observador del estudiante (plataforma) y diligenciamiento del acta respectiva firmada por el estudiante y el docente.',
  'Trabajo escrito reflexivo y manuscrito de dos (2) páginas sobre el reconocimiento del error y la importancia de la norma.',
  'Acciones restaurativas de aula (reparación del daño, aseo del salón o disculpas privadas).',
];

export default function CapRutaFaltasLeves() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.2.5.1
        </span>
        <h2 className="section-title">
          Faltas leves
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.2.5.1
        </span>
        <h3 className="hz-head-title">
          Faltas leves
        </h3>
      </div>

      <p className="hz-p">
        <span className="hz-key">Definición:</span> Son faltas leves los incumplimientos menores a los
        deberes académicos o convivenciales estipulados en el Manual, cometidos por primera o única vez,
        que no alteran de forma grave el desarrollo de las actividades pedagógicas ni generan daños a la
        salud física, mental o moral de los integrantes de la comunidad educativa. Las siguiente
        conductas constituyen faltas leves cuando se presentan por primera o única vez:
      </p>

      <ol className="hz-ol">
        {CATALOGO.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ol>

      <h4 className="hz-sub">Procedimiento de atención y sanciones pedagógicas para faltas leves</h4>
      <ul className="hz-list">
        {SANCIONES.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </>
  );
}