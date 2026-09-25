import { TabButton, TabPanel, Tabs } from '../components';

export default function Cap11() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          11
        </span>
        <h2 className="section-title">
          Inscripcion-Admisión-Matricula
        </h2>
      </div>
      <p className="section-intro">
        Proceso de ingreso y admisión a la Institución Educativa Antonio Lenis.
      </p>
      <div className="process-tabs-container">
        <Tabs ids={["tab-inscripcion","tab-matricula","tab-permanencia"]} initial="tab-inscripcion">
          <div className="process-tabs-bar">
            <TabButton tab="tab-inscripcion" className="process-tab-btn">
              Inscripción - Admisión
            </TabButton>
            {" "}
            <TabButton tab="tab-matricula" className="process-tab-btn">
              Matrícula - Renovación
            </TabButton>
            {" "}
            <TabButton tab="tab-permanencia" className="process-tab-btn">
              Condiciones Permanencia
            </TabButton>
          </div>
          <TabPanel className="process-tab-content" id="tab-inscripcion">
            <h3 style={{ color: "var(--green)", marginBottom: "16px", fontSize: "18px" }}>
              Pasos para la Inscripción - Admisión
            </h3>
            <p style={{ fontSize: "15px", lineHeight: "1.5", marginBottom: "16px" }}>
              Puede entrar desde la página
              {" "}
              <a href="https://antoniolenis.edu.co/" target="_blank" style={{ color: "var(--green)" }}>
                https://antoniolenis.edu.co/
              </a>
              , o puede ir directamente a
              {" "}
              <a href="https://plana.a2hosted.com/preinscripcion" target="_blank" style={{ color: "var(--green)" }}>
                https://plana.a2hosted.com/preinscripcion
              </a>
            </p>
            <div className="steps" style={{ marginBottom: "20px" }}>
              <div className="step">
                <div className="step-number">
                  1
                </div>
                <div className="step-content">
                  <h3>
                    Diligenciar formulario
                  </h3>
                  <p>
                    Diligenciar el formulario de inscripción con todos los datos solicitados
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">
                  2
                </div>
                <div className="step-content">
                  <h3>
                    Cargar documentos
                  </h3>
                  <p>
                    Cargar o subir los documentos solicitados en formato PDF. Como son:
                  </p>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", margin: "20px 0" }}>
              <div className="doc-box" style={{ padding: "12px 16px", border: "2px solid #333", borderRadius: "8px", flex: "1 1 300px", minWidth: "250px", transition: "all 0.3s" }} onMouseOver={(e) => Object.assign(e.currentTarget.style, { backgroundColor: "#d4edda", borderColor: "var(--green)" })} onMouseOut={(e) => Object.assign(e.currentTarget.style, { backgroundColor: "white", borderColor: "#333" })}>
                <p style={{ margin: "0", fontSize: "15px" }}>
                  Registro civil de nacimiento del aspirante (menores de 7 años)
                </p>
              </div>
              <div className="doc-box" style={{ padding: "12px 16px", border: "2px solid #333", borderRadius: "8px", flex: "1 1 300px", minWidth: "250px", transition: "all 0.3s" }} onMouseOver={(e) => Object.assign(e.currentTarget.style, { backgroundColor: "#d4edda", borderColor: "var(--green)" })} onMouseOut={(e) => Object.assign(e.currentTarget.style, { backgroundColor: "white", borderColor: "#333" })}>
                <p style={{ margin: "0", fontSize: "15px" }}>
                  Documento de identidad del estudiante (aspirante) (tarjeta de identidad para mayores de 7 años y cédula de ciudadanía para mayores de 18 años)
                </p>
              </div>
              <div className="doc-box" style={{ padding: "12px 16px", border: "2px solid #333", borderRadius: "8px", flex: "1 1 300px", minWidth: "250px", transition: "all 0.3s" }} onMouseOver={(e) => Object.assign(e.currentTarget.style, { backgroundColor: "#d4edda", borderColor: "var(--green)" })} onMouseOut={(e) => Object.assign(e.currentTarget.style, { backgroundColor: "white", borderColor: "#333" })}>
                <p style={{ margin: "0", fontSize: "15px" }}>
                  Documento de identificación para extranjeros (visa o cédula de extranjería o Permiso especial de permanencia para el sector educación, permiso especial de permanencia para la formación y reconociendo de aprendizajes previos, Tarjeta de movilidad fronteriza, permiso de protección especial (PPT))
                </p>
              </div>
              <div className="doc-box" style={{ padding: "12px 16px", border: "2px solid #333", borderRadius: "8px", flex: "1 1 300px", minWidth: "250px", transition: "all 0.3s" }} onMouseOver={(e) => Object.assign(e.currentTarget.style, { backgroundColor: "#d4edda", borderColor: "var(--green)" })} onMouseOut={(e) => Object.assign(e.currentTarget.style, { backgroundColor: "white", borderColor: "#333" })}>
                <p style={{ margin: "0", fontSize: "15px" }}>
                  Documento de identidad padre y/o madre
                </p>
              </div>
              <div className="doc-box" style={{ padding: "12px 16px", border: "2px solid #333", borderRadius: "8px", flex: "1 1 300px", minWidth: "250px", transition: "all 0.3s" }} onMouseOver={(e) => Object.assign(e.currentTarget.style, { backgroundColor: "#d4edda", borderColor: "var(--green)" })} onMouseOut={(e) => Object.assign(e.currentTarget.style, { backgroundColor: "white", borderColor: "#333" })}>
                <p style={{ margin: "0", fontSize: "15px" }}>
                  Documento de identidad acudiente si es diferente al padre y/o madre
                </p>
              </div>
              <div className="doc-box" style={{ padding: "12px 16px", border: "2px solid #333", borderRadius: "8px", flex: "1 1 300px", minWidth: "250px", transition: "all 0.3s" }} onMouseOver={(e) => Object.assign(e.currentTarget.style, { backgroundColor: "#d4edda", borderColor: "var(--green)" })} onMouseOut={(e) => Object.assign(e.currentTarget.style, { backgroundColor: "white", borderColor: "#333" })}>
                <p style={{ margin: "0", fontSize: "15px" }}>
                  Observador del estudiante o certificación de comportamiento y disciplina (Es opcional y no aplica para transición)
                </p>
              </div>
              <div className="doc-box" style={{ padding: "12px 16px", border: "2px solid #333", borderRadius: "8px", flex: "1 1 300px", minWidth: "250px", transition: "all 0.3s" }} onMouseOver={(e) => Object.assign(e.currentTarget.style, { backgroundColor: "#d4edda", borderColor: "var(--green)" })} onMouseOut={(e) => Object.assign(e.currentTarget.style, { backgroundColor: "white", borderColor: "#333" })}>
                <p style={{ margin: "0", fontSize: "15px" }}>
                  Informe o notas de los periodos académicos cursados a la fecha o el boletín final (no aplica transición)
                </p>
              </div>
              <div className="doc-box" style={{ padding: "12px 16px", border: "2px solid #333", borderRadius: "8px", flex: "1 1 300px", minWidth: "250px", transition: "all 0.3s" }} onMouseOver={(e) => Object.assign(e.currentTarget.style, { backgroundColor: "#d4edda", borderColor: "var(--green)" })} onMouseOut={(e) => Object.assign(e.currentTarget.style, { backgroundColor: "white", borderColor: "#333" })}>
                <p style={{ margin: "0", fontSize: "15px" }}>
                  Carnet de salud o certificado de afiliación a salud
                </p>
              </div>
              <div className="doc-box" style={{ padding: "12px 16px", border: "2px solid #333", borderRadius: "8px", flex: "1 1 300px", minWidth: "250px", transition: "all 0.3s" }} onMouseOver={(e) => Object.assign(e.currentTarget.style, { backgroundColor: "#d4edda", borderColor: "var(--green)" })} onMouseOut={(e) => Object.assign(e.currentTarget.style, { backgroundColor: "white", borderColor: "#333" })}>
                <p style={{ margin: "0", fontSize: "15px" }}>
                  Carnet de vacunación (solo para transición)
                </p>
              </div>
              <div className="doc-box" style={{ padding: "12px 16px", border: "2px solid #333", borderRadius: "8px", flex: "1 1 300px", minWidth: "250px", transition: "all 0.3s" }} onMouseOver={(e) => Object.assign(e.currentTarget.style, { backgroundColor: "#d4edda", borderColor: "var(--green)" })} onMouseOut={(e) => Object.assign(e.currentTarget.style, { backgroundColor: "white", borderColor: "#333" })}>
                <p style={{ margin: "0", fontSize: "15px" }}>
                  Documento de Crecimiento y desarrollo (solo para transición)
                </p>
              </div>
            </div>
            <div style={{ backgroundColor: "#ffe6e6", border: "2px solid red", borderRadius: "8px", padding: "16px", marginTop: "20px" }}>
              <p style={{ margin: "0", color: "red", fontSize: "15px", lineHeight: "1.5" }}>
                <strong>
                  NOTA:
                </strong>
                {" "}
                La admisión es el proceso mediante el cual, la institución selecciona de la población estudiantil que solicita ingreso por traslado o inscripción para los diferentes grados, a quienes podrán ser matriculados. En ningún caso la admisión de estudiantes estará sujeta a consideraciones de etnia, filiación política, religión, sexo, condición social o económica sobre el aspirante.
              </p>
            </div>
          </TabPanel>
          <TabPanel className="process-tab-content" id="tab-permanencia">
            <h3 style={{ color: "var(--green)", marginBottom: "16px", fontSize: "18px" }}>
              Condiciones de Permanencia
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ background: "#f8f9fa", borderLeft: "4px solid var(--green)", borderRadius: "8px", padding: "14px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5" }}>
                  <strong>
                    1.
                  </strong>
                  {" "}
                  Según el artículo 9 del Decreto No.
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=32793" target="_blank" style={{ color: "var(--green)" }}>
                    3788 de 1986
                  </a>
                  , y el artículo 34 y 39 de la ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=80538" target="_blank" style={{ color: "var(--green)" }}>
                    1801 de 2016
                  </a>
                  {" "}
                  o ley de convivencia ciudadana, se prohíbe el porte y el consumo de estupefacientes y sustancias psicotrópicas, así como el uso o porte indebido de armas u objetos intimidatorios. Después de dar cumplimiento al debido proceso y al Decreto No.
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=32793" target="_blank" style={{ color: "var(--green)" }}>
                    3788 de 1986
                  </a>
                  , se excluirá del establecimiento a quien infrinja estas normas. Ver artículo 19 de ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098 de 2006
                  </a>
                  . Y ver artículo 381 del
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6388" target="_blank" style={{ color: "var(--green)" }}>
                    código penal
                  </a>
                  , si llegare a aplicar, para el suministro de sustancias a otros educandos o estudiantes.
                </p>
              </div>
              <div style={{ background: "#f8f9fa", borderLeft: "4px solid var(--green)", borderRadius: "8px", padding: "14px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5" }}>
                  <strong>
                    2.
                  </strong>
                  {" "}
                  Inasistencia habitual injustificada según Artículo 6, Decreto
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=35954" target="_blank" style={{ color: "var(--green)" }}>
                    1290
                    {" "}
                  </a>
                  del 16 de mayo de 2009.
                </p>
              </div>
              <div style={{ background: "#f8f9fa", borderLeft: "4px solid var(--green)", borderRadius: "8px", padding: "14px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5" }}>
                  <strong>
                    3.
                  </strong>
                  {" "}
                  Cancelación voluntaria de la matrícula por mutuo acuerdo.
                </p>
              </div>
              <div style={{ background: "#f8f9fa", borderLeft: "4px solid var(--green)", borderRadius: "8px", padding: "14px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5" }}>
                  <strong>
                    4.
                  </strong>
                  {" "}
                  La inasistencia del padre o acudiente a tres (3) de las reuniones programadas por nuestra Institución educativa oficial, o cuando se requiera de su presencia según se establece en el contrato de matrícula. Y NO acuda, sin excusa o sin motivación real y coherente. Ver ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=136893" target="_blank" style={{ color: "var(--green)" }}>
                    2025 de 2020
                  </a>
                  . Ver artículo 20 literal 1 de ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098 de 2006
                  </a>
                  .
                </p>
              </div>
              <div style={{ background: "#f8f9fa", borderLeft: "4px solid var(--green)", borderRadius: "8px", padding: "14px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5" }}>
                  <strong>
                    5.
                  </strong>
                  {" "}
                  Falta de acompañamiento de los padres. Ver artículo 2.3.4.3. del decreto
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77913" target="_blank" style={{ color: "var(--green)" }}>
                    1075 de 2015
                  </a>
                  .
                </p>
              </div>
              <div style={{ background: "#f8f9fa", borderLeft: "4px solid var(--green)", borderRadius: "8px", padding: "14px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5" }}>
                  <strong>
                    6.
                  </strong>
                  {" "}
                  Perfil inadecuado del educando en el área disciplinaria o actitudinal, luego del acompañamiento de apoyo y concertación de compromisos, que incumpla reiteradamente.
                </p>
              </div>
              <div style={{ background: "#f8f9fa", borderLeft: "4px solid var(--green)", borderRadius: "8px", padding: "14px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5" }}>
                  <strong>
                    7.
                  </strong>
                  {" "}
                  Incumplimiento de los acuerdos pactados entre el educando, acudiente y nuestra Institución educativa oficial.
                </p>
              </div>
              <div style={{ background: "#f8f9fa", borderLeft: "4px solid var(--green)", borderRadius: "8px", padding: "14px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5" }}>
                  <strong>
                    8.
                  </strong>
                  {" "}
                  Incumplimiento reincidente de las normas establecidas en el presente Manual de Convivencia.
                </p>
              </div>
              <div style={{ background: "#f8f9fa", borderLeft: "4px solid var(--green)", borderRadius: "8px", padding: "14px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5" }}>
                  <strong>
                    9.
                  </strong>
                  {" "}
                  Cuando el educando, repruebe un año académico por segunda vez.
                </p>
              </div>
              <div style={{ background: "#f8f9fa", borderLeft: "4px solid var(--green)", borderRadius: "8px", padding: "14px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5" }}>
                  <strong>
                    10.
                  </strong>
                  {" "}
                  Cuando el educando, haya firmado acta de compromiso comportamental o por bajo rendimiento académico, durante dos años consecutivos incumpliendo, sus compromisos adquiridos.
                </p>
              </div>
              <div style={{ background: "#f8f9fa", borderLeft: "4px solid var(--green)", borderRadius: "8px", padding: "14px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5" }}>
                  <strong>
                    11.
                  </strong>
                  {" "}
                  Cualquier tipo de irrespeto verbal o físico, o amenazas o agresiones, de parte de los padres o acudientes del educando, familiares o y hasta tercer grado de consanguinidad o de cercanos, que obre en contra de la vida, la honra, el buen nombre, la dignidad humana, y la salud y la integridad personal de cualquier miembro de nuestra comunidad. Sin perjuicio de la denuncia penal, por el presunto delito de VIOLENCIA CONTRA SERVIDOR PÚBLICO:
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6388" target="_blank" style={{ color: "var(--green)" }}>
                    Código Penal
                  </a>
                  . Artículo 429. Violencia contra servidor público. El que ejerza violencia contra servidor público, por razón de sus funciones o para obligarlo a ejecutar u omitir algún acto propio de su cargo o a realizar uno contrario a sus deberes oficiales, incurrirá en prisión de cuatro (4) a ocho (8) años.
                </p>
              </div>
              <div style={{ background: "#f8f9fa", borderLeft: "4px solid var(--green)", borderRadius: "8px", padding: "14px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5" }}>
                  <strong>
                    12.
                  </strong>
                  {" "}
                  Retiro voluntario por parte de la familia, presentando carta a rectoría especificando las causas del mismo; y obviamente garantizando el estar a paz y salvo, por todo concepto, con nuestra Institución educativa oficial.
                </p>
              </div>
              <div style={{ background: "#f8f9fa", borderLeft: "4px solid var(--green)", borderRadius: "8px", padding: "14px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5" }}>
                  <strong>
                    13.
                  </strong>
                  {" "}
                  No firmar la matrícula, dentro de las fechas estipuladas para tales fines, y con el lleno de los requisitos establecidos por nuestra institución OFICIAL: I.E. ANTONIO LENIS, MUNICIPIO DE SINCELEJO, DEPARTAMENTO DE SUCRE.
                </p>
              </div>
              <div style={{ background: "#f8f9fa", borderLeft: "4px solid var(--green)", borderRadius: "8px", padding: "14px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5" }}>
                  <strong>
                    14.
                  </strong>
                  {" "}
                  Cuando nuestra Institución educativa oficial, compruebe falsedad u omisión en la documentación presentada para el ingreso del educando, en su matrícula, se declara nula esa matrícula.
                </p>
              </div>
              <div style={{ background: "#f8f9fa", borderLeft: "4px solid var(--green)", borderRadius: "8px", padding: "14px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5" }}>
                  <strong>
                    15.
                  </strong>
                  {" "}
                  Cuando se ordene, la cancelación de la matrícula, por mandato del Consejo Directivo de nuestra Institución educativa oficial, previo cumplimiento del conducto regular y agotamiento del debido proceso.
                </p>
              </div>
              <div style={{ background: "#f8f9fa", borderLeft: "4px solid var(--green)", borderRadius: "8px", padding: "14px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5" }}>
                  <strong>
                    16.
                  </strong>
                  {" "}
                  Cuando los padres de familia y/o acudientes, que han firmado la matrícula; acuden en una ocasión o acuden de manera reiterativa, o grotesca o grosera, o no estén reiterativamente de acuerdo con las normas de nuestra institución educativa pública y oficial, y se conviertan en un obstáculo, frente al proceso de formación integral estipulado por nuestra institución OFICIAL: I.E. ANTONIO LENIS, MUNICIPIO DE SINCELEJO, DEPARTAMENTO DE SUCRE.
                </p>
              </div>
              <div style={{ background: "#f8f9fa", borderLeft: "4px solid var(--green)", borderRadius: "8px", padding: "14px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5" }}>
                  <strong>
                    17.
                  </strong>
                  {" "}
                  Cuando los padres o acudientes incumplan con los deberes estipulados en el presente Manual de Convivencia, sobre todo, lo atinente a sus deberes de asistencia a las citaciones, y reuniones de padres de familia de carácter obligatorio, a voces de la ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=136893" target="_blank" style={{ color: "var(--green)" }}>
                    2025 de 2020
                  </a>
                  . Dado que, dicha ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=136893" target="_blank" style={{ color: "var(--green)" }}>
                    2025 de 2020
                  </a>
                  , declara taxativo que, es OBLIGATORIA LA ASISTENCIA DE LOS PADRES DE FAMILIA A LOS TALLERES DE PADRES, conexo con el artículo 18 y 20 numeral 1 de la ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                    1098 de 2006
                  </a>
                  . Y artículos 02 y 04 de la ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=136893" target="_blank" style={{ color: "var(--green)" }}>
                    2025 de 2020
                  </a>
                  .
                </p>
              </div>
              <div style={{ background: "#f8f9fa", borderLeft: "4px solid var(--green)", borderRadius: "8px", padding: "14px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5" }}>
                  <strong>
                    18.
                  </strong>
                  {" "}
                  El incumplimiento reiterativo y constante, de las normas, deberes y compromisos, que aparecen taxativos en el presente texto de manual de convivencia escolar y que se acogen a lo pactado en el Contrato de Cooperación Educativa del Colegio o matrícula; ver artículos 87 y 96 de ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=292" target="_blank" style={{ color: "var(--green)" }}>
                    115 de 1994
                  </a>
                  . Ley
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=292" target="_blank" style={{ color: "var(--green)" }}>
                    115 de 1994
                  </a>
                  . Artículo 96º.- Permanencia en el establecimiento educativo. El reglamento interno de la institución educativa establecerá las condiciones de permanencia del alumno en el plantel y el procedimiento en caso de exclusión.
                </p>
              </div>
              <div style={{ background: "#f8f9fa", borderLeft: "4px solid var(--green)", borderRadius: "8px", padding: "14px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5" }}>
                  <strong>
                    19.
                  </strong>
                  {" "}
                  Cuando los padres de familia, acudientes y cuidadores, violen, inapliquen, incumplan y desatiendan reiterativa y sistemáticamente, el proceso de familia – escuela. Del decreto
                  {" "}
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=237555" target="_blank" style={{ color: "var(--green)" }}>
                    0459
                  </a>
                  {" "}
                  del 10 de abril de 2024.
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel className="process-tab-content" id="tab-matricula">
            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", marginBottom: "16px", flexWrap: "wrap" }}>
              <div style={{ flex: "1" }}>
                <h3 style={{ color: "var(--green)", marginBottom: "12px", fontSize: "18px" }}>
                  Matrícula y Renovación
                </h3>
                <p style={{ fontSize: "15px", lineHeight: "1.5" }}>
                  Para la matrícula o su renovación, se realizará a través de la página web
                  {" "}
                  <a href="https://www.antoniolenis.edu.co/" target="_blank" style={{ color: "var(--green)" }}>
                    www.antoniolenis.edu.co
                  </a>
                  .
                </p>
              </div>
            </div>
            <p style={{ fontSize: "15px", lineHeight: "1.5", marginBottom: "12px" }}>
              Los estudiantes nuevos diligenciaran el formulario de matrícula y aceptaran las condiciones institucionales contempladas en el presente Manual de Convivencia, a través de una ventana emergente que aparecerá durante el proceso al momento de legalizar, generando dos documentos automáticos como son el
              {" "}
              <strong>
                ACTA DE COMPROMISO
              </strong>
              {" "}
              y la
              {" "}
              <strong>
                DECLARATORIA PUBLICA
              </strong>
              .
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.5", marginBottom: "12px" }}>
              Tanto para la matrícula como para la renovación, el acudiente descargará el formulario respectivo, lo imprimirá, lo firmará y deberá presentarse a la institución con el estudiante para legalizar la matricula en las fechas y horario estipulados por la institución. En ese momento deberá tomar el seguro de accidentes escolares. El seguro de accidentes,
              {" "}
              <strong>
                NO es optativo
              </strong>
              , ver artículos 10, 14, 17, 18, 20 numeral 1 y 39 literal 1 de ley
              {" "}
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22106" target="_blank" style={{ color: "var(--green)" }}>
                1098 de 2006
              </a>
              .
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.5", marginBottom: "12px" }}>
              Para finalizar deberá terminar de cargar en formato PDF en el módulo correspondiente:
            </p>
            <ul style={{ listStyle: "none", paddingLeft: "20px", fontSize: "15px", lineHeight: "1.5" }}>
              <li style={{ marginBottom: "6px" }}>
                - Certificados estudios cursados
              </li>
              <li style={{ marginBottom: "6px" }}>
                - Carnet de salud o certificado de afiliación a salud
              </li>
              <li style={{ marginBottom: "6px" }}>
                - Liberación del SIMAT (Opcional)
              </li>
            </ul>
            <p style={{ fontSize: "15px", lineHeight: "1.5", marginBottom: "12px" }}>
              Para la renovación de matrícula los estudiantes antiguos actualizarán en la plataforma la información personal y familiar y los documentos que haya lugar si hay cambio en el documento de identificación y/o afiliación a salud.
            </p>
            <div style={{ background: "#fff3cd", border: "2px solid #ffc107", borderRadius: "8px", padding: "14px", margin: "16px 0" }}>
              <p style={{ margin: "0", color: "#856404", fontSize: "15px", lineHeight: "1.5" }}>
                <strong>
                  PARÁGRAFO:
                </strong>
                {" "}
                Los estudiantes que tengan diagnósticos especializados de discapacidad o necesidades educativas especiales, deberán presentar la correspondiente historia clínica, en la primera semana de actividades académicas
              </p>
            </div>
            <h4 style={{ color: "var(--green)", margin: "20px 0 12px", fontSize: "16px" }}>
              Traslado de Matrícula
            </h4>
            <p style={{ fontSize: "15px", lineHeight: "1.5", marginBottom: "12px" }}>
              Se entiende por TRASLADO DE MATRÍCULA cualquiera de las siguientes situaciones:
            </p>
            <ul style={{ listStyle: "none", paddingLeft: "20px", fontSize: "15px", lineHeight: "1.5" }}>
              <li style={{ marginBottom: "6px" }}>
                <strong>
                  a.
                </strong>
                {" "}
                Cambio de un estudiante de la jornada Matinal a la Vespertina o viceversa en la misma sede o el cambio de un estudiante de una a otra sede en la institución.
              </li>
              <li style={{ marginBottom: "6px" }}>
                <strong>
                  b.
                </strong>
                {" "}
                Cambio de profundización, en el primer nivel de media, de un estudiante en la misma jornada o hacia otra jornada.
              </li>
              <li style={{ marginBottom: "6px" }}>
                <strong>
                  c.
                </strong>
                {" "}
                Cambio de un estudiante de un grupo a otro dentro del mismo grado y jornada.
              </li>
              <li style={{ marginBottom: "6px" }}>
                <strong>
                  d.
                </strong>
                {" "}
                Cambio de un estudiante de una institución educativa OFICIAL, ubicada en el municipio de Sincelejo, a esta institución o viceversa
              </li>
            </ul>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}
