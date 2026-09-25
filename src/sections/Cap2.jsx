import { TabButton, TabPanel, Tabs } from '../components';

export default function Cap2() {
  return (
    <>
      <Tabs ids={["mision-tab","vision-tab"]} initial="mision-tab">
        <div className="section-header">
          <h2 className="section-title">
            Símbolos Institucionales
          </h2>
        </div>
        <p className="section-intro">
          La Institución Educativa Antonio Lenis cuenta con símbolos que representan su identidad, historia y valores.
        </p>
        <div className="tipo-tabs-bar" style={{ marginTop: "24px" }}>
          <TabButton tab="mision-tab" className="tipo-tab-btn">
            Misión
          </TabButton>
          {" "}
          <TabButton tab="vision-tab" className="tipo-tab-btn">
            Visión
          </TabButton>
        </div>
        <TabPanel id="mision-tab" className="tipo-tab-content">
          <p style={{ fontSize: "15px" }}>
            Formar integralmente ciudadanos críticos, reflexivos y comprometidos con la transformación social, mediante una educación de calidad que promueva el desarrollo de competencias académicas, ciudadanas y laborales, en un ambiente de inclusión, respeto y participación comunitaria.
          </p>
        </TabPanel>
        <TabPanel id="vision-tab" className="tipo-tab-content">
          <p style={{ fontSize: "15px" }}>
            Para el 2030, la Institución Educativa Antonio Lenis será líder en la región por su excelencia académica, formación en valores ciudadanos y compromiso con el desarrollo sostenible, generando egresados capaces de transformar su entorno con ética, innovación y responsabilidad social.
          </p>
        </TabPanel>
        <div className="two-columns">
          <div className="column" style={{ textAlign: "center", background: "white", padding: "30px 20px", borderRadius: "10px", boxShadow: "var(--shadow)" }}>
            <div style={{ width: "200px", height: "200px", margin: "0 auto 16px", borderRadius: "50%", overflow: "hidden", boxShadow: "var(--shadow)" }}>
              <img src="images/escudo_ieal.jpeg" alt="Escudo Institucional" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: "700", color: "var(--green)" }}>
              Escudo
            </h3>
          </div>
          <div className="column" style={{ textAlign: "center", background: "white", padding: "30px 20px", borderRadius: "10px", boxShadow: "var(--shadow)" }}>
            <div style={{ width: "200px", height: "auto", margin: "0 auto 16px", borderRadius: "10px", overflow: "hidden", boxShadow: "var(--shadow)" }}>
              <img src="images/bandera.png" alt="Bandera Institucional" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: "700", color: "var(--red)" }}>
              Bandera
            </h3>
          </div>
        </div>
        <div className="song-container">
          <h3 className="song-title" style={{ textAlign: "center", marginTop: "24px" }}>
            <a style={{ textDecoration: "none", color: "inherit" }}>
              HIMNO INSTITUCIONAL
            </a>
          </h3>
          <audio controls style={{ display: "block", margin: "16px auto", width: "100%", maxWidth: "400px" }}>
            <source src="music/HIMNO_LENIS.mp3" type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>
          <div className="verse" style={{ textAlign: "center", margin: "16px 0" }}>
            <p>
              Colegio Lenis centro formador
            </p>
            <p>
              de juventudes con tesón
            </p>
            <p>
              tu experiencia en la educación
            </p>
            <p>
              la recebimos con honor.
            </p>
          </div>
          <div className="verse" style={{ textAlign: "center", margin: "16px 0" }}>
            <p>
              Llevas el nombre de un gran educador
            </p>
            <p>
              que a Sincelejo su talento dio
            </p>
            <p>
              Antonio Lenis maestro de gran valor
            </p>
            <p>
              con su experiencia la niñez guió.
            </p>
          </div>
          <div className="verse" style={{ textAlign: "center", margin: "16px 0" }}>
            <p>
              Eres la voz de un pueblo luchador
            </p>
            <p>
              que con esfuerzo has logrado encauzar
            </p>
            <p>
              y la ignorancia has derrotado,
            </p>
            <p>
              guardas la ciencia en tus claustros queridos
            </p>
            <p>
              pues la enseñanza ha sido tu misión.
            </p>
          </div>
          <div className="verse" style={{ textAlign: "center", margin: "16px 0" }}>
            <p>
              Compañero Lenista, adelante,
            </p>
            <p>
              avancemos con fe y lealtad
            </p>
            <p>
              demostremos que somos capaces,
            </p>
            <p>
              de nuestras metas conquistar.
            </p>
          </div>
          <div className="verse" style={{ textAlign: "center", margin: "16px 0" }}>
            <p>
              Victorioso será nuestro grito,
            </p>
            <p>
              como emblema de libertad
            </p>
            <p>
              debemos todos cantar este coro
            </p>
            <p>
              la educación sea popular.
            </p>
          </div>
          <p className="song-author" style={{ textAlign: "center", marginTop: "24px" }}>
            Autor: Marco Saúl Herrera Aguas (Q.E.P.D)
          </p>
        </div>
      </Tabs>
    </>
  );
}
