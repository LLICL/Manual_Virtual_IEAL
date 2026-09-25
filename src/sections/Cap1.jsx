export default function Cap1() {
  return (
    <>
      <div className="section-header">
        <h2 className="section-title" style={{ textAlign: "center" }}>
          INSTITUCIÓN EDUCATIVA ANTONIO LENIS
        </h2>
      </div>
      <div className="profile-card" style={{ background: "white", color: "#333", borderRadius: "16px", padding: "30px", margin: "20px 0", boxShadow: "0 8px 32px rgba(0,0,0,0.15)", border: "2px solid #239c5a", overflow: "hidden" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", flex: "0 0 auto" }}>
            <img src="images/rector_ieal.jpeg" alt="Rector" style={{ width: "140px", height: "140px", borderRadius: "50%", objectFit: "cover", border: "4px solid #239c5a", boxShadow: "0 4px 16px rgba(0,0,0,0.2)" }} />
          </div>
          <div style={{ flex: "1 1 280px", minWidth: "0" }}>
            <h3 style={{ color: "#239c5a", marginBottom: "8px", fontSize: "16px" }}>
              RECTOR
            </h3>
            <h2 style={{ margin: "0 0 12px 0", fontSize: "18px", fontWeight: "600", wordBreak: "break-word" }}>
              UBALDO JOSÉ BUELVAS SOLORZANO
            </h2>
            <p style={{ margin: "4px 0", fontSize: "15px", wordBreak: "break-all" }}>
              <strong>
                Correo:
              </strong>
              {" "}
              ubaldo.buelvas43@sincelejoaprende.edu.co
            </p>
          </div>
          <div style={{ flex: "1 1 280px", minWidth: "0", borderLeft: "2px solid #239c5a", paddingLeft: "20px" }}>
            <h3 style={{ color: "#239c5a", marginBottom: "12px", fontSize: "16px" }}>
              INFORMACIÓN INSTITUCIONAL
            </h3>
            <p style={{ margin: "6px 0", fontSize: "15px" }}>
              <strong>
                NIT:
              </strong>
              {" "}
              892200156-5
            </p>
            <p style={{ margin: "6px 0", fontSize: "15px", wordBreak: "break-all" }}>
              <strong>
                Correo:
              </strong>
              {" "}
              ee170001000180@sincelejoaprende.edu.co
            </p>
            <p style={{ margin: "6px 0", fontSize: "15px" }}>
              <strong>
                Web:
              </strong>
              {" "}
              <a href="https://www.antoniolenis.edu.co/" target="_blank" style={{ color: "#239c5a" }}>
                www.antoniolenis.edu.co
              </a>
            </p>
            <p style={{ margin: "6px 0", fontSize: "15px" }}>
              <strong>
                Aprobación y PEI:
              </strong>
              {" "}
              Resolución de Aprobación N° 1085 del 25 de mayo de 2022
            </p>
          </div>
        </div>
      </div>
      <div className="cards-grid dane-cards">
        <div className="card dane-card">
          <h5 className="sede-name">
            Sede Principal
          </h5>
          <h3 className="dane-label">
            Código DANE
          </h3>
          <p className="dane-code">
            170001000180
          </p>
        </div>
        <div className="card dane-card">
          <h5 className="sede-name">
            Sede Carrenales
          </h5>
          <h3 className="dane-label">
            Código DANE
          </h3>
          <p className="dane-code">
            170001000210
          </p>
        </div>
        <div className="card dane-card">
          <h5 className="sede-name">
            Sede Mercedes Abrego
          </h5>
          <h3 className="dane-label">
            Código DANE
          </h3>
          <p className="dane-code">
            170001000341
          </p>
        </div>
      </div>
      <div className="card" style={{ background: "#f8f9fa", padding: "20px", borderRadius: "10px", marginTop: "16px", boxShadow: "var(--shadow)", borderLeft: "4px solid var(--green)" }}>
        <h3 style={{ color: "var(--green)", marginBottom: "12px" }}>
          Política de Calidad
        </h3>
        <p style={{ fontSize: "15px", lineHeight: "1.5" }}>
          La Institución Educativa Antonio Lenis, ente público, presta un servicio educativo en los niveles preescolar, básica primaria, básica secundaria y media académica con el apoyo y orientación de talento humano calificado y comprometido con el mejoramiento continuo de los procesos, respondiendo a las necesidades y expectativas de la comunidad educativa.
        </p>
      </div>
    </>
  );
}
