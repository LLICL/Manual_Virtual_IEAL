// @manual — los modales (antes openModal/closeModal en script.js) ahora son estado de React.
import { useState } from 'react';

const bulletItem = { marginBottom: '10px', paddingLeft: '20px', position: 'relative' };

const MODALS = {
  higiene: {
    title: 'Higiene Ambiental',
    body: (
      <p>
        Nuestra institución OFICIAL: I.E. ANTONIO LENIS, MUNICIPIO DE SINCELEJO, DEPARTAMENTO DE SUCRE; cuenta con el proyecto obligatorio Ambiental, que vela por mantener, las instalaciones físicas, con las adecuadas condiciones higiénicas para el sano desarrollo del personal en general y la planta docente y obviamente de los educandos.
      </p>
    ),
  },
  epidemiologico: {
    title: 'Prevención de Riesgo Epidemiológico',
    body: (
      <>
        <p>Teniendo en cuenta, que en toda comunidad existe el riesgo de contagio epidemiológico solicitamos a los padres cumplir con las siguientes medidas:</p>
        <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '12px' }}>
          {[
            'No podrá ingresar ningún educando con fiebre, sea por la causa que fuere, por lo que el director de Grupo, está en la obligación de reportarlo a la coordinación para que se llame el padre de familia y devolverlo a su hogar, entregándolo a su familiar o acudiente.',
            'Enviar al niño(a) sin enfermedades (gripes, alergias, virales y o eruptivas) entre otras, ya que se atenta contra su bienestar y el de los demás, generando un riesgo de epidemia. El niño(a) deberá presentar el alta médica el mismo día que se reintegre a clases. Si su hijo presenta sintomatología gripal déjelo en casa por un lapso mínimo de tres días, esto le permitirá una recuperación completa y evitará el contagio de los demás educandos al interior de la escuela.',
            'Recoger, lo más pronto posible al niño o niña, cuando Nuestra Institución educativa oficial, comunique su estado de enfermedad; remitirlo al pediatra y enviar el certificado médico en caso de incapacidad.',
            'Toda enfermedad infectocontagiosa, será reportada a la Secretaria de Salud del MUNICIPIO DE SINCELEJO; con el fin de llevar el control epidemiológico.',
            'Se realizarán revisiones durante el año escolar con el fin de evitar la pediculosis (piojos) y se realizaran charlas para que el padre o acudiente atienda la situación. Todo caso positivo será reportado al acudiente y aislado hasta que se le brindé el tratamiento adecuado y oportuno.',
            'En conjunto con la Secretaria de Salud del MUNICIPIO DE SINCELEJO; se realizarán campañas de vacunación, durante el año escolar, y se exigirá el carné de vacunación a todo educando.',
            'Se solicitará, carné de vacunación a los menores de cinco años dentro del proceso de matrícula',
          ].map((text) => (
            <li key={text} style={bulletItem}>
              {'• '}
              {text}
            </li>
          ))}
        </ul>
      </>
    ),
  },
};

export default function Cap4() {
  const [modal, setModal] = useState(null);
  const openModal = setModal;
  const closeModal = () => setModal(null);

  return (
    <>
      <div className="section-header">
        <span className="section-num">
          04
        </span>
        <h2 className="section-title">
          Reglas de Presentación
        </h2>
      </div>
      <div style={{ fontSize: "15px", lineHeight: "1.5", marginBottom: "20px" }}>
        <ol style={{ paddingLeft: "20px", margin: "0" }}>
          <li style={{ marginBottom: "8px" }}>
            Desarrollar hábitos de higiene personal y asimilación de conductas orientadas al auto cuidado.
          </li>
          <li style={{ marginBottom: "8px" }}>
            Asistir al colegio pulcramente vestido, con el uniforme debidamente lavado, planchado y los tenis limpios.
          </li>
          <li style={{ marginBottom: "8px" }}>
            Evitar la propagación de enfermedades infectocontagiosas y parasitarias, observando medidas preventivas apropiadas y el tratamiento pertinente, bajo la responsabilidad del estudiante y representante legal.
          </li>
          <li style={{ marginBottom: "8px" }}>
            Adicional a lo expuesto anteriormente, generar una conciencia clara del respeto propio y el respeto por el otro; lo cual, se encuentra parametrizado en el proyecto transversal de Educación Sexual.
            {" "}
            <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=52287" target="_blank" style={{ color: "var(--green)" }}>
              Artículo 20 de ley 1620 de 2013
            </a>
            .
          </li>
        </ol>
      </div>
      <div style={{ display: "flex", gap: "24px", marginTop: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
          <button onClick={() => openModal('higiene')} style={{ width: "200px", height: "200px", background: "#632727", border: "3px solid #632727", borderRadius: "16px", cursor: "pointer", transition: "all 0.3s", display: "flex", alignItems: "center", justifyContent: "center", padding: "12px" }} onMouseOver={(e) => Object.assign(e.currentTarget.style, { backgroundColor: "#7a2e2e", borderColor: "#7a2e2e" })} onMouseOut={(e) => Object.assign(e.currentTarget.style, { backgroundColor: "#632727", borderColor: "#632727" })}>
            <img src="images/recoger_basura.png" alt="Higiene Ambiental" style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "8px", objectFit: "contain" }} />
          </button>
          {" "}
          <span style={{ fontSize: "15px", fontWeight: "600", color: "var(--green)", textAlign: "center" }}>
            Higiene Ambiental
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
          <button onClick={() => openModal('epidemiologico')} style={{ width: "200px", height: "200px", background: "#632727", border: "3px solid #632727", borderRadius: "16px", cursor: "pointer", transition: "all 0.3s", display: "flex", alignItems: "center", justifyContent: "center", padding: "12px" }} onMouseOver={(e) => Object.assign(e.currentTarget.style, { backgroundColor: "#7a2e2e", borderColor: "#7a2e2e" })} onMouseOut={(e) => Object.assign(e.currentTarget.style, { backgroundColor: "#632727", borderColor: "#632727" })}>
            <img src="images/riesgo_epidemologico.png" alt="Prevención Epidemiológico" style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "8px", objectFit: "contain" }} />
          </button>
          {" "}
          <span style={{ fontSize: "15px", fontWeight: "600", color: "var(--green)", textAlign: "center" }}>
            Prevención Epidemiológico
          </span>
        </div>
      </div>
      {modal && (
        <div
          style={{ display: "flex", position: "fixed", top: "0", left: "0", width: "100%", height: "100%", background: "rgba(0,0,0,0.6)", zIndex: "9999", alignItems: "center", justifyContent: "center" }}
          onClick={closeModal}
        >
          <div
            style={{ background: "white", borderRadius: "12px", maxWidth: "600px", width: "90%", maxHeight: "80vh", overflowY: "auto", padding: "28px", boxShadow: "0 8px 32px rgba(0,0,0,0.2)", position: "relative" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal} style={{ position: "absolute", top: "12px", right: "16px", background: "none", border: "none", fontSize: "28px", cursor: "pointer", color: "#666", lineHeight: "1" }}>
              ×
            </button>
            <h3 style={{ color: "var(--green)", fontSize: "18px", marginBottom: "16px", paddingRight: "30px" }}>{MODALS[modal].title}</h3>
            <div style={{ fontSize: "15px", lineHeight: "1.5", color: "#333" }}>{MODALS[modal].body}</div>
          </div>
        </div>
      )}
    </>
  );
}
