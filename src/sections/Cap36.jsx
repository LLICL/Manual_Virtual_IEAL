import { TabButton, TabPanel, Tabs } from '../components';

export default function Cap36() {
  return (
    <>
      <Tabs ids={["inasist-permisos","inasist-retardos"]} initial="inasist-permisos">
        <div className="section-header">
          <span className="section-num">
            36
          </span>
          <h2 className="section-title">
            Manejo de Inasistencias
          </h2>
        </div>
        <p className="subtitle-green">
          MANEJO DE INASISTENCIAS
        </p>
        <div className="tipo-para">
          <p>
            Toda inasistencia de un estudiante a las actividades escolares programadas por la institución, deberán comunicarse de manera oportuna al padre de familia. Cuando el estudiante acumule dos (2) faltas, continúas o discontinuas, en un mes, sin las debidas justificaciones, el Director de Grupo procederá, en forma inmediata, a citar al padre de familia o acudiente para informarlo de la situación y acordar los correctivos del caso; de esta práctica deberán quedar las respectivas evidencias.
          </p>
          <p>
            Si se establece que el responsable de las ausencias del estudiante es el padre o acudiente, el Coordinación de convivencia informará al Rector quien dará traslado del caso a la autoridad competente para que se apliquen los correctivos o medidas correspondientes.
          </p>
          <p>
            Si el responsable fuere el estudiante, se le amonestará de conformidad con lo establecido en el presente manual; si persiste la conducta, el departamento de trabajo social y consejería escolar remitirá al estudiante al Defensor de Familia o a la instancia competente, con el objeto de que se adelanten las medidas de protección inmediatas.
          </p>
        </div>
        <div className="tipo-para">
          <p>
            Los padres de familia deberán reportar por escrito en medio físico a coordinación (convivencia en la principal) la inasistencia del estudiante, anexando incapacidad médica en caso de enfermedad.
          </p>
          <p>
            Solamente se podrá justificar la inasistencia al colegio en las siguientes circunstancias:
          </p>
        </div>
        <ul style={{ paddingLeft: "20px" }}>
          <li>
            <p>
              Caso fortuito o fuerza mayor. Calamidad doméstica.
            </p>
          </li>
          <li>
            <p>
              Enfermedad debidamente comprobada.
            </p>
          </li>
        </ul>
        <div className="tipo-para">
          <p>
            El estudiante que falte al colegio deberá cumplir los siguientes trámites:
          </p>
        </div>
        <ol className="derechos-list">
          <li>
            <p>
              Entregar de manera personal la incapacidad médica a la coordinación (coordinación de convivencia en la sede principal)
            </p>
          </li>
          <li>
            <p>
              Coordinación de convivencia refrendara con su firma y se enviara al salón para notificar a los docentes de la justificación de la inasistencia del estudiante.
            </p>
          </li>
          <li>
            <p>
              Una vez Justificada la inasistencia el estudiante deberá adelantar las actividades, clases realizadas el día de su ausencia.
            </p>
          </li>
          <li>
            <p>
              En caso de faltar el día de una evaluación ésta le será reprogramada por el docente en competencia.
            </p>
          </li>
          <li>
            <p>
              Solamente se aceptarán excusas que se presenten dentro de las 24 horas siguientes a la inasistencia del estudiante.
            </p>
          </li>
          <li>
            <p>
              Cualquier estudiante que tenga un número de fallas superior al 10% de la asistencia total del año escolar automáticamente perderá el año.
            </p>
          </li>
        </ol>
        <div className="tipo-para">
          <p>
            En caso de ausencia no justificada el estudiante perderá el derecho a que se le practiquen las evaluaciones que se hubiesen llevado a cabo; si asiste en la fecha programada para las recuperaciones podrá presentarlas debidamente.
          </p>
          <p>
            Los acudientes podrán solicitar permisos de ausencia por casos fortuitos. Mediante solicitud escrita con firma y huella, a la coordinación académica, esta autorizará la ausencia e informará a coordinación de convivencia, quien seguirá el procedimiento regular.
          </p>
          <p>
            En estos casos el cumplimiento de los procesos académicos será responsabilidad del educando, quien deberá presentar los trabajos y evaluaciones en las fechas asignadas por los docentes.
          </p>
        </div>
        <div className="tipo-tabs-bar mini">
          <TabButton tab="inasist-permisos" className="tipo-tab-btn">
            Solicitud de Permisos de Salida
          </TabButton>
          {" "}
          <TabButton tab="inasist-retardos" className="tipo-tab-btn">
            Retardos
          </TabButton>
        </div>
        <TabPanel className="tipo-tab-content mini" id="inasist-permisos">
          <p className="subtitle-green">
            SOLICITUD DE PERMISOS DE SALIDA.
          </p>
          <div className="tipo-para">
            <p>
              El padre o acudiente debe solicitar ante la Coordinación (Convivencia para la sede principal) el permiso de salida, debe diligenciar el formato de salida donde se indica motivo de salida, fecha, hora, y la firma del adulto que tramita con firma y cedula. Si el educando será recogido por una persona diferente a los padres, madre o acudiente debe enviar por escrito la autorización con firma y cedula.
            </p>
            <p>
              Coordinación de Convivencia, gestionará el formato de autorización de salida de educandos el cual se enviará al salón respectivo y entregará una orden de salida para la portería.
            </p>
            <p>
              Solamente el padre o acudiente puede solicitar el permiso de salida, no se aceptarán solicitudes por parte de los educandos.
            </p>
            <p>
              Por ningún motivo se otorgarán permisos por teléfono.
            </p>
            <p>
              Se autorizarán máximo, cinco (5) permisos de salida anuales por educando, con el fin de no entorpecer el proceso académico. Salvo situaciones de salud, comprobadas.
            </p>
            <p>
              Los padres de familia que asistan al colegio para retirar a sus hijos deben dirigirse a la oficina de Coordinación (Convivencia en la sede principal) y esperar a que su hijo(a) sea llamado, por ningún motivo un padre de familia puede ingresar a los salones de clase.
            </p>
          </div>
        </TabPanel>
        <TabPanel className="tipo-tab-content mini" id="inasist-retardos">
          <p className="subtitle-green">
            RETARDOS.
          </p>
          <div className="tipo-para">
            <p>
              Se considera retardo todo ingreso posterior a 10 minutos después de la hora estipulada de inicio de clases. Cuando un educando, llegue tarde al colegio, debe dirigirse a coordinación (convivencia sede principal), sólo o en compañía de su acudiente, y notificar la razón de su retardo quien expedirá la autorización de ingreso.
            </p>
            <p>
              Si el educando está sólo, coordinación de convivencia notificará a sus acudientes del retardo del educando, por vía telefónica y dejando registro por escrito en la plataforma institucional.
            </p>
            <p>
              Coordinación de Convivencia realizará seguimiento de los retardos y los educandos, que incurran más de tres (3) veces en esta falta; serán citados para generar compromiso de cumplimiento del horario del colegio.
            </p>
            <p>
              En este caso se generará al educando, un llamado de atención por Retardo y a partir de éste, se seguirá el debido proceso (procedimiento para sanciones). El estudiante debe presentar la autorización de ingreso al docente. De reincidir, se cancelará la matrícula por incumplimiento de los deberes y compromisos del educando y por vulneración al contrato civil de matrícula.
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=292" target="_blank" style={{ color: "var(--green)" }}>
                Artículo 87 y 96 de ley 115 de 1994
              </a>
              .
            </p>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}
