const TABLA_71 = {
  titulo: 'Tabla 7.1. Ponderaciones Porcentuales Específicas en Matemáticas y Humanidades (Educación Media)',
  cabeceras: ['Área del Conocimiento', 'Modalidad / Énfasis del Grupo', 'Asignatura 1 (Ponderación)', 'Asignatura 2 (Ponderación)'],
  filas: [
    ['Matemáticas', 'Media (Grados 10° y 11°)', 'Trigonometría / Cálculo (80%)', 'Investigación / Estadística (20%)'],
    ['Humanidades', 'Cursos Regulares / General', 'Lengua Castellana (60%)', 'Idioma Extranjero - Inglés (40%)'],
    ['Humanidades', 'Énfasis en Inglés (Media)', 'Idioma Extranjero - Inglés (60%)', 'Lengua Castellana (40%)'],
  ],
};

const TABLA_72 = {
  titulo: 'Tabla 7.2. Ponderaciones Porcentuales en Ciencias Naturales según Énfasis del Grupo (Educación Media)',
  cabeceras: ['Énfasis del Grupo en Media', 'Química (%)', 'Física (%)', 'Biología (%)', 'Ecología (%)', 'Total (%)'],
  filas: [
    ['Énfasis en Matemáticas', '40%', '50%', '10%', 'No aplica', '100%'],
    ['Énfasis en Ciencias Sociales', '45%', '45%', '10%', 'No aplica', '100%'],
    ['Énfasis en Ciencias Naturales', '40%', '35%', '15%', '10%', '100%'],
    ['Énfasis en Castellano', '45%', '45%', '10%', 'No aplica', '100%'],
    ['Énfasis en Inglés', '45%', '45%', '10%', 'No aplica', '100%'],
  ],
};

function Tabla({ titulo, cabeceras, filas }) {
  return (
    <>
      <p className="hz-sub">{titulo}</p>
      <div className="hz-table-wrap">
        <table className="infraction-table">
          <thead>
            <tr>
              {cabeceras.map((c) => (
                <th key={c}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filas.map((f) => (
              <tr key={f.join('|')}>
                {f.map((celda, i) => (
                  <td key={i}>{celda}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default function Cap7PonderacionesMedia() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          7.3.1
        </span>
        <h2 className="section-title">
          Ponderaciones Porcentuales Específicas en Educación Media (Grados 10° y 11°)
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          7.3.1
        </span>
        <h3 className="hz-head-title">
          Ponderaciones Porcentuales Específicas en Educación Media (Grados 10° y 11°)
        </h3>
      </div>

      <p className="hz-p">
        De conformidad con las disposiciones aprobadas por el Consejo Académico y el SIEE
        institucional, la <span className="hz-key">nota definitiva de cada área</span> en el
        periodo resulta de la sumatoria ponderada de sus asignaturas constitutivas. A continuación
        se presentan las{" "}
        <span className="hz-key">ponderaciones porcentuales oficiales</span>:
      </p>

      <Tabla {...TABLA_71} />
      <Tabla {...TABLA_72} />

      <div className="hz-note">
        <strong>Parágrafo 13. Inicio de periodo:</strong> al iniciar cada periodo académico todo
        estudiante parte con una valoración de Desempeño Alto, estimulándose a quienes sobresalgan
        hacia el Desempeño Superior y reorientando a quienes presenten dificultades hacia Básico o
        Bajo.
      </div>

      <div className="hz-note">
        <strong>Parágrafo 14. Plan de acompañamiento en desempeño bajo:</strong> en caso de obtener
        Desempeño Bajo en un periodo, el docente citará formalmente al acudiente para firmar un Acta
        de Compromiso Académico anexa al Observador del Estudiante.
      </div>
    </>
  );
}