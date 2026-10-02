const COMPROMISOS = [
  'Tratar con respeto, cordialidad, amabilidad y lenguaje decoroso a docentes, directivos, compañeros, administrativos y personal de servicios.',
  'Respetar las opiniones, creencias, credo e identidad de todos los integrantes de la comunidad educativa, sin promover discriminaciones.',
  'Esperar al docente dentro del aula de clase guardando el orden y la compostura.',
  'Observar un comportamiento decoroso y ejemplar tanto dentro del plantel como en la calle, medios de transporte y lugares públicos al portar el uniforme.',
  'Informar de carácter inmediato ante docentes o directivos cualquier situación anómala, daño o riesgo que amenace a la comunidad.',
  'Abstenerse de participar en bromas, burlas, apodos, calumnias, injurias u hostigamientos que constituyan acoso escolar.',
  'Enaltecer los valores culturales, nacionales e institucionales y entonar los himnos con la postura correcta.',
  'Decir estrictamente la verdad en sus descargos, declaraciones y actuaciones procesales.',
  'Representar dignamente a la institución en eventos culturales, sociales y deportivos, preservando su buen nombre.',
  'Respetar las normas específicas de uso de la biblioteca, laboratorios, salas de informática, tienda escolar, comedor, baños y áreas comunes.',
  'Ser solidarios ante calamidades, dificultades o accidentes que afecten a cualquier integrante de la comunidad.',
];

export default function Cap10Convivencia() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          3.5.2
        </span>
        <h2 className="section-title">
          Compromisos convivenciales y de relaciones interpersonales
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          3.5.2
        </span>
        <h3 className="hz-head-title">
          Compromisos convivenciales y de relaciones interpersonales
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
