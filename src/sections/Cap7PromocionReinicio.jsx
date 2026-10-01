const REINICIO = [
  'Solicitud escrita del acudiente al finalizar el primer periodo del año de repitencia.',
  'Obtener Desempeño Superior de manera indispensable en las asignaturas o áreas que causaron la reprobación el año anterior, sin procesos de recuperación, y mínimo Desempeño Alto en las demás áreas, más excelente convivencia.',
  'Aprobar la prueba de suficiencia académica en las áreas reprobadas del año anterior con Desempeño Alto o Superior.',
  'Restricción de Ley: No aplica para estudiantes que estén reiniciando los grados 5° de Básica Primaria o 9° de Básica Secundaria.',
];

export default function Cap7PromocionReinicio() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          7.6.2
        </span>
        <h2 className="section-title">
          Promoción Anticipada por reprobar el año anterior (Estudiantes con reinicio de grado)
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          7.6.2
        </span>
        <h3 className="hz-head-title">
          Promoción Anticipada por reprobar el año anterior (Estudiantes con reinicio de grado)
        </h3>
      </div>

      <ul className="hz-list">
        {REINICIO.map((i) => (
          <li key={i}>
            <span className="hz-p">{i}</span>
          </li>
        ))}
      </ul>
    </>
  );
}