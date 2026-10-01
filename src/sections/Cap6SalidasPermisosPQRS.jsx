const ITEMS = [
  {
    term: '1',
    title: 'Margen de tolerancia para recogida en primaria',
    text: 'Para los estudiantes de educación inicial y básica primaria (Sedes Carrenales y Mercedes Ábrego), los acudientes disponen de un plazo máximo de quince (15) minutos tras finalizar la jornada (12:15 p.m. matinal / 6:15 p.m. vespertina) para la recogida presencial. Incurrir en más de tres (3) retardos generará citación a coordinación e informe al observador. Todo retardo es reportado en la plataforma institucional.',
  },
  {
    term: '2',
    title: 'Prohibición de ingreso a las aulas de clase',
    text: 'Por razones de seguridad y desarrollo pedagógico, los padres de familia que acudan al colegio esperarán en las oficinas de Coordinación. Queda categóricamente prohibido el ingreso de acudientes a los salones durante la jornada escolar.',
  },
  {
    term: '3',
    title: 'Límite y trámite de permisos de salida',
    text: 'Se otorgarán máximo cinco (5) permisos especiales de salida al año por estudiante. Toda solicitud debe realizarse presencialmente con firma y cédula del acudiente en Coordinación. No se autorizarán salidas mediante llamadas telefónicas.',
  },
  {
    term: '4',
    title: 'Procedimiento para Peticiones, Quejas, Reclamos y Sugerencias (PQRS)',
    text: 'Todo reclamo académico o convivencial se radicará en la oficina correspondiente en lenguaje respetuoso. Se atenderán en primera instancia con el docente titular, segunda instancia Coordinación, tercera instancia Consejo Académico y cuarta instancia Consejo Directivo, en un plazo de respuesta de hasta 8 días para quejas, 15 días para derechos de petición y 25 días para consultas.',
  },
];

export default function Cap6SalidasPermisosPQRS() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          6.7
        </span>
        <h2 className="section-title">
          Regulaciones de salida, permisos, retardos en recogida y procedimiento PQRS
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          6.7
        </span>
        <h3 className="hz-head-title">
          Regulaciones de salida, permisos, retardos en recogida y procedimiento PQRS
        </h3>
      </div>

      <ul className="hz-list">
        {ITEMS.map((i) => (
          <li key={i.term}>
            <span className="hz-term">
              {i.term}. {i.title}
            </span>
            {i.text && (
              <details className="hz-collapse hz-collapse--mini">
                <summary>Ver descripción</summary>
                <div className="hz-collapse-body">
                  <p>{i.text}</p>
                </div>
              </details>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}