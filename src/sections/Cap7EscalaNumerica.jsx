const ESCALA = [
  {
    nacional: 'DESEMPEÑO SUPERIOR',
    rango: '95% – 100%',
    numerica: '4.6 – 5.0',
    descripcion:
      'Trasciende los indicadores propuestos, demuestra liderazgo pedagógico, alta capacidad analítica e investigativa, excelente convivencia e inasistencias únicamente justificadas.',
  },
  {
    nacional: 'DESEMPEÑO ALTO',
    rango: '80% – 94.9%',
    numerica: '4.0 – 4.5',
    descripcion:
      'Alcanza todos los indicadores de desempeño sin dificultades, demuestra responsabilidad constante, excelente comportamiento social y participación activa.',
  },
  {
    nacional: 'DESEMPEÑO BÁSICO',
    rango: '60% – 79.9%',
    numerica: '3.0 – 3.9',
    descripcion:
      'Alcanza los indicadores mínimos requeridos con algunas dificultades o tras cumplir las nivelaciones periódicas. Límite de aprobación institucional.',
  },
  {
    nacional: 'DESEMPEÑO BAJO',
    rango: '20% – 59.9%',
    numerica: '1.0 – 2.9',
    descripcion:
      'No alcanza los indicadores mínimos del área aún después de agotar las actividades de nivelación, presenta ausentismo injustificado o incumplimiento de deberes.',
  },
];

export default function Cap7EscalaNumerica() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          7.4.2
        </span>
        <h2 className="section-title">
          Escala numérica oficial (básica primaria, secundaria y media - 1.0 a 5.0)
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          7.4.2
        </span>
        <h3 className="hz-head-title">
          Escala numérica oficial (básica primaria, secundaria y media - 1.0 a 5.0)
        </h3>
      </div>

      <p className="hz-p">
        Las instituciones educativas del municipio de Sincelejo expresan sus resultados académicos
        numéricamente en la <span className="hz-key">escala de 1.0 a 5.0</span> con equivalencia en
        la Escala Nacional de Desempeños:
      </p>

      <p className="hz-sub">
        Tabla 7.3. Escala de Valoración Numérica Institucional y Equivalencia Nacional (SIEE)
      </p>

      <div className="hz-table-wrap">
        <table className="infraction-table">
          <thead>
            <tr>
              <th>Desempeño Nacional</th>
              <th>Rango Porcentual</th>
              <th>Escala Numérica</th>
              <th>Descriptores y Criterios Evaluativos Institucionales</th>
            </tr>
          </thead>
          <tbody>
            {ESCALA.map((e) => (
              <tr key={e.nacional}>
                <td>
                  <span className="hz-term">{e.nacional}</span>
                </td>
                <td>{e.rango}</td>
                <td>{e.numerica}</td>
                <td>{e.descripcion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="hz-note">
        <strong>
          Parágrafo 15. Reporte de convivencia, anotaciones positivas y seguimiento formativo en el
          informe periódico:
        </strong>{" "}
        en los informes periódicos de evaluación no se utilizará una escala cualitativa abstracta
        (como Excelente, Buena o Aceptable) para calificar la disciplina. En su lugar, el
        Observador del Estudiante se constituye en un instrumento formativo integral y
        bidireccional, destinado a registrar tanto las anotaciones positivas, reconocimientos por
        buen comportamiento, vivencia ejemplar de valores, liderazgo, espíritu de colaboración y
        superación personal, como los llamados de atención, acuerdos y compromisos convivenciales.
        De forma posterior al reporte de valoraciones académicas en el boletín periódico, se
        consolidarán y relacionarán en estricto orden cronológico la totalidad de las situaciones
        convivenciales y las anotaciones positivas registradas y subidas a la plataforma
        institucional durante el periodo escolar correspondiente, garantizando la fidelidad,
        equilibrio y transparencia del proceso formativo para los estudiantes, padres de familia y
        acudientes.
      </div>
    </>
  );
}