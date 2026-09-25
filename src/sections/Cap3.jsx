import { TabButton, TabPanel, Tabs } from '../components';

export default function Cap3() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          03
        </span>
        <h2 className="section-title">
          Perfil de los Actores
        </h2>
      </div>
      <div className="profile-tabs-container" style={{ marginTop: "0" }}>
        <Tabs ids={["tab-estudiante","tab-personero","tab-docente","tab-padre","tab-egresado"]} initial="tab-estudiante">
          <div className="profile-tabs-bar">
            <TabButton tab="tab-estudiante" className="profile-tab-btn">
              Estudiante
            </TabButton>
            {" "}
            <TabButton tab="tab-personero" className="profile-tab-btn">
              Personero
            </TabButton>
            {" "}
            <TabButton tab="tab-docente" className="profile-tab-btn">
              Docente
            </TabButton>
            {" "}
            <TabButton tab="tab-padre" className="profile-tab-btn">
              Padre de Familia
            </TabButton>
            {" "}
            <TabButton tab="tab-egresado" className="profile-tab-btn">
              Egresado
            </TabButton>
          </div>
          <TabPanel className="profile-tab-content" id="tab-estudiante">
            <p style={{ fontSize: "15px", lineHeight: "1.5", marginBottom: "12px" }}>
              El educando, de nuestra institución OFICIAL: I.E. ANTONIO LENIS, MUNICIPIO DE SINCELEJO, DEPARTAMENTO DE SUCRE; en su proceso de formación, debe caracterizarse por los valores que fundamentan el sentido de ser del plantel, como una institución orientada al desarrollo integro e integral del educando, teniendo en cuenta los siguientes valores sociales: Identidad propia, buen ciudadano, disciplinado, ético, comunicativo, participativo, solidario, productivo, ambientalista y analítico.
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.5", marginBottom: "16px" }}>
              Son educandos, comprometidos con la identidad de nuestra institución OFICIAL: I.E. ANTONIO LENIS, MUNICIPIO DE SINCELEJO, DEPARTAMENTO DE SUCRE; y cuyo compromiso de ejemplo en todo su proceder, a través del respeto, la disciplina, la dignidad, la amistad fraterna, la tolerancia, como ejes del desarrollo personal, social, espiritual e intelectual.
            </p>
            <ul style={{ listStyle: "none", paddingLeft: "20px", fontSize: "15px", lineHeight: "1.5" }}>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Líderes dinamizadores de la comunidad y comprometidos con su grupo social, buscando la cooperación, la concertación y el desarrollo de iniciativas.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Autónomos en el sentido intelectual y moral, capaces de auto educarse; de administrar su aprendizaje mediante el ejercicio responsable de la libertad, asumiendo las consecuencias de sus actos y sus decisiones, respondiendo a una madurez y formación de carácter.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Introspectivos: Íntegros al dirigir la mirada a su interior con lealtad y sinceridad para luego emplear ese autoconocimiento en beneficio y transformación de su entorno social.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Comunitarios: capaces de amar, compartir y de aceptar a sus pares y a los demás, construyendo una comunidad más amable mediante el ejercicio de la ciudadanía y la democracia.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Buscadores de la verdad, con miras a enriquecer su crecimiento integral, su auto superación de manera constante y su relación con el entorno y la comunidad.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Creativos, innovadores, investigativos y transformadores de su entorno.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ El o La estudiante además de las anteriores, tendrán que ser un ejemplo valioso positivo e imperativo para su entorno social.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Únicos e irrepetibles y alejados de la imitación irracional, de las modas vacías e inmaduras y coherentes con su edad, su carácter, sus saberes y su madurez conceptual.
              </li>
            </ul>
          </TabPanel>
          <TabPanel className="profile-tab-content" id="tab-personero">
            <p style={{ fontSize: "15px", lineHeight: "1.5" }}>
              El personero o Personera, debe ser un(a) líder con gran calidad humana comprometido con el mejoramiento de la convivencia y calidad de vida de toda la comunidad educativa.
            </p>
          </TabPanel>
          <TabPanel className="profile-tab-content" id="tab-docente">
            <p style={{ fontSize: "15px", lineHeight: "1.5", marginBottom: "12px" }}>
              El docente de la Institución Educativa Antonio Lenis, debe ser:
            </p>
            <ul style={{ listStyle: "none", paddingLeft: "20px", fontSize: "15px", lineHeight: "1.5" }}>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Conocedor del modelo pedagógico institucional, fundamentos de las teorías de aprendizaje y enfoques pedagógicos pertinentes.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Especializado en la disciplina a su cargo.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Comprometido con la calidad de la enseñanza y la educación.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Amable en su trato y firme en sus convicciones y criterios.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Activo en la construcción y ejecución del proyecto educativo local e institucional.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Líder que eduque con su buen ejemplo, dando testimonio de autogestión, protagonismo, compromiso, laboriosidad, participación democrática y creatividad.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Gestor de cambios permanentes, innovador en su quehacer pedagógico.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Poseedor de un amplio sentido de pertenencia con la institución.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Amante y facilitador de la paz y la convivencia armoniosa.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Generador en los estudiantes del juicio, de actitudes del modelo y de desarrollo cognitivo.
              </li>
            </ul>
          </TabPanel>
          <TabPanel className="profile-tab-content" id="tab-padre">
            <p style={{ fontSize: "15px", lineHeight: "1.5", marginBottom: "12px" }}>
              El padre de familia de la Institución Educativa Antonio Lenis, debe ser una persona:
            </p>
            <ul style={{ listStyle: "none", paddingLeft: "20px", fontSize: "15px", lineHeight: "1.5" }}>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Conocedora de los proyectos educativos institucionales
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Proveedora de los elementos necesarios para el buen desarrollo de las actividades académica de sus hijos
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Facilitadora en los procesos de aprendizaje de sus hijos.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Formadora permanente de los más altos valores que exige la sociedad.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Comprometida con el desarrollo integral de su núcleo familiar.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Fomentadora y dinamizadora de las políticas y objetivos institucionales.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Con alto sentido de pertenencia con la institución, con espíritu de servicio y lealtad.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Participante, activa y visionaria en los distintos entes del gobierno escolar.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Respetuosa con los miembros de la comunidad educativa.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Amante de la paz y el progreso de su región.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Comprometida con la calidad de la enseñanza, la educación nacional y en particular de la institución.
              </li>
            </ul>
          </TabPanel>
          <TabPanel className="profile-tab-content" id="tab-egresado">
            <p style={{ fontSize: "15px", lineHeight: "1.5", marginBottom: "12px" }}>
              El egresado de la Institución Educativa Antonio Lenis, debe ser una persona.
            </p>
            <ul style={{ listStyle: "none", paddingLeft: "20px", fontSize: "15px", lineHeight: "1.5" }}>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Respetuosa de los derechos humanos.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Restauradora y conservadora del medio ambiente.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Con altas capacidades analíticas, críticas, reflexivas, comunicativas, laborioso.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Con gran sentido de superación y progreso mediante el esfuerzo y el trabajo.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Amante y defensor de la cultura local, regional, nacional y universal.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Líder en la participación ciudadana en lo que tiene que ver con las decisiones políticas, económicas y sociales del país.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Gestora del desarrollo del núcleo familiar, comunidad y región.
              </li>
              <li style={{ marginBottom: "8px" }}>
                ⮚ Con gran sentido de pertenencia con la institución.
              </li>
            </ul>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}
