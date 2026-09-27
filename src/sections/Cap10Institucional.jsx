const COMPROMISOS = [
  'Cuidar el buen nombre de la Institución Educativa Antonio Lenis y representarla con dignidad.',
  'No utilizar teléfonos celulares ni dispositivos móviles durante las horas de clase, salvo autorización pedagógica expresa del docente.',
  'No portar, consumir, distribuir ni comercializar cigarrillos, vapeadores (cigarrillo electrónico), bebidas alcohólicas ni sustancias psicoactivas o estupefacientes dentro o en los alrededores del colegio.',
  'No ingresar ni portar armas de fuego, armas blancas, elementos cortopunzantes, artefactos pirotécnicos o sustancias peligrosas.',
  'No participar, mantener ni promover actos erótico-sexuales explícitos, obscenos o abusivos dentro del plantel o portando el uniforme.',
  'Abstenerse de portar o difundir material pornográfico físico, digital o virtual, ni realizar grabaciones o uso no autorizado de Inteligencia Artificial que lesionen la dignidad de las personas.',
  'No cometer fraudes, falsificación de firmas, ni adulteración de boletines, excusas o el observador del estudiante.',
  'No traer objetos de valor (tablet, cámaras, reproductores, patinetas) no solicitados pedagógicamente.',
  'Abstenerse de comprar alimentos a vendedores ambulantes o en sitios aledaños no autorizados, por razones de salud pública.',
];

export default function Cap10Institucional() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          3.5.4
        </span>
        <h2 className="section-title">
          Compromisos institucionales, de autocuidado y cumplimiento legal
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          3.5.4
        </span>
        <h3 className="hz-head-title">
          Compromisos institucionales, de autocuidado y cumplimiento legal
        </h3>
      </div>

      <p className="hz-p">Cada estudiante tiene el compromiso de:</p>

      <ol className="hz-letras">
        {COMPROMISOS.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ol>
    </>
  );
}
