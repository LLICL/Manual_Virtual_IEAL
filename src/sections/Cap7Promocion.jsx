export default function Cap7Promocion() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          7.5
        </span>
        <h2 className="section-title">
          Criterios de promoción escolar y causales de no promoción
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          7.5
        </span>
        <h3 className="hz-head-title">
          Criterios de promoción escolar y causales de no promoción
        </h3>
      </div>

      <ul className="hz-list">
        <li>
          <span className="hz-term">Promoción en Preescolar:</span>
          <span className="hz-p">
            {" "}
            los grados de preescolar no se reprueban. Los niños avanzan continuamente en su
            desarrollo integral sin ceremonia de graduación.
          </span>
        </li>
        <li>
          <span className="hz-term">Criterios de Promoción en básica y media:</span>
          <span className="hz-p">
            {" "}
            será promovido al grado siguiente el estudiante que obtenga valoración final en{" "}
            <span className="hz-key">Desempeño Básico, Alto o Superior</span> en la totalidad de las
            áreas y asignaturas del plan de estudios y en convivencia escolar.
          </span>
        </li>
      </ul>
    </>
  );
}