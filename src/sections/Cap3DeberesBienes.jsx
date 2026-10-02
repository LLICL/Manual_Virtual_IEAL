const COMPROMISOS = [
  'Cuidar y preservar las sillas, mesas, aulas, laboratorios, biblioteca, equipos de cómputo y demás bienes muebles e inmuebles del colegio.',
  'Responder y reparar los daños que cause intencional o culposamente en la planta física, el mobiliario o el material didáctico.',
  'Mantener el orden y aseo de las aulas, patios y dependencias, depositando las basuras en las canecas destinadas para tal fin.',
  'No escribir grafitis, leyendas o mensajes obscenos en muros, paredes, puertas, tableros, sillas o pupitres.',
  'Usar adecuadamente los recursos naturales y sanitarios (agua y energía) sin desperdiciarlos.',
  'Respetar y cuidar los bienes ajenos de compañeros, docentes y funcionarios.',
];

export default function Cap10Bienes() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          3.5.3
        </span>
        <h2 className="section-title">
          Compromisos sobre cuidado de bienes, instalaciones y entorno
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          3.5.3
        </span>
        <h3 className="hz-head-title">
          Compromisos sobre cuidado de bienes, instalaciones y entorno
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
