export default function Cap6() {
  return (
    <>
      <div className="section-header">
        <h2 className="section-title">
          Decomisación de bienes
        </h2>
      </div>
      <p style={{ marginBottom: "16px" }}>
        Según lo estipulado por el contrato de matrícula, un bien personal de un estudiante podrá ser decomisado por docentes o coordinadores de nuestra institución cuando se haga mal uso de este. Es decir, cuando viole una norma establecida, interfiera con las actividades regulares tanto académicas como no académicas de nuestra institución, sea utilizada para cometer copia o fraude, causar daño a terceros, atentar contra el buen nombre de otros o de nuestra institución, causar indisciplina, sabotear eventos grupales o fomentar el desorden, entre otros.
      </p>
      <div style={{ background: "#fff3cd", borderLeft: "4px solid #ffc107", padding: "12px 16px", marginBottom: "16px", borderRadius: "4px", fontSize: "15px" }}>
        <strong style={{ color: "#856404" }}>
          Procedimiento aplica para:
        </strong>
        {" "}
        celulares y dispositivos móviles en general.
      </div>
      <p style={{ marginBottom: "16px", fontWeight: "600", color: "var(--green)" }}>
        El procedimiento estipulado para decomisar bienes, es el siguiente:
      </p>
      <div className="steps">
        <div className="step">
          <div className="step-number">
            1
          </div>
          <div className="step-content">
            <h3>
              Decomiso y entrega
            </h3>
            <p>
              El docente o coordinador decomisará el bien que esté siendo mal utilizado y lo entregará a la persona responsable, según corresponda, preescolar, primaria o bachillerato.
            </p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">
            2
          </div>
          <div className="step-content">
            <h3>
              Primera vez
            </h3>
            <p>
              Si el bien es decomisado por primera vez, será devuelto al estudiante ese mismo día, al finalizar la jornada escolar con llamado de atención y con notificación a sus acudientes.
            </p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">
            3
          </div>
          <div className="step-content">
            <h3>
              Segunda vez
            </h3>
            <p>
              Si el bien es decomisado por segunda vez, será devuelto al estudiante, a los ocho días, acompañado de un llamado de atención verbal y con notificación a sus acudientes.
            </p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">
            4
          </div>
          <div className="step-content">
            <h3>
              Tercera vez
            </h3>
            <p>
              El educando será citado junto con sus acudientes a reunión con Coordinación (de Convivencia sede principal), en la cual, el bien le será entregado y se firmará el compromiso de no volver a traer a la institución dicho bien, durante todo el año escolar como consecuencia de su mal uso.
            </p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">
            5
          </div>
          <div className="step-content">
            <h3>
              Incumplimiento del compromiso
            </h3>
            <p>
              Si el estudiante incumple el compromiso acordado anteriormente, el bien será decomisado por Coordinación (de Convivencia sede principal) durante todo el año escolar y será entregado al final de este a sus acudientes, salvo acuerdo con el acudiente.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
