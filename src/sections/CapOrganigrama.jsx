const NIVELES = [
  {
    nivel: '1. Nivel superior de dirección y gobierno escolar',
    items: [
      ['Consejo Directivo', 'Máxima instancia de dirección estratégica y administrativa'],
      ['Rectoría', 'Representación legal, dirección ejecutiva y administración'],
      ['Consejo Académico', 'Instancia superior de orientación pedagógica y curricular'],
    ],
  },
  {
    nivel: '2. Órganos consultivos y de apoyo especializado',
    items: [
      ['Comité Escolar de Convivencia', 'Líder de la Ruta de Atención Integral y mediación'],
      ['Comisiones de Evaluación y Promoción', 'Análisis y seguimiento del rendimiento por grado'],
      ['Orientación Escolar', ''],
    ],
  },
  {
    nivel: '3. Estamentos de participación democrática y control estudiantil',
    items: [
      ['Personero(a) Estudiantil', 'Promoción y defensa de derechos y deberes'],
      ['Contralor(a) Estudiantil y Comité de Control Social', ''],
      ['Consejo de Estudiantes', 'Voceros de grupo de cada grado'],
    ],
  },
  {
    nivel: '4. Estamentos de Participación Familiar y Comunidad',
    items: [
      ['Asamblea General y Consejo de Padres de Familia', 'Representación de acudientes'],
      ['Asociación de Padres de Familia', 'Entidad privada de apoyo a la gestión'],
      ['Asociación de Exalumnos y Representante del Sector Productivo', ''],
    ],
  },
  {
    nivel: '5. Nivel Operativo Académico y Convivencial',
    items: [
      ['Coordinación Académica', 'Sede Principal y Coordinadores de Sedes de Primaria'],
      ['Coordinación de Convivencia y formación', 'Gestión del clima escolar y disciplinario'],
      ['Jefes de Departamento / Área', ''],
    ],
  },
  {
    nivel: '6. Nivel Ejecutor y de Apoyo Logístico',
    items: [
      ['Docentes de Aula y directores de Grupo', 'Ejecución curricular y acompañamiento'],
      ['Personal Administrativo', 'Pagaduría, Secretaría, Biblioteca'],
      ['Personal de Servicios Generales y Seguridad', 'Mantenimiento y custodia'],
    ],
  },
];

export default function CapOrganigrama() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          2.1
        </span>
        <h2 className="section-title">
          Organigrama Estructural de la Institución
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          2.1
        </span>
        <h3 className="hz-head-title">
          Organigrama estructural de la Institución
        </h3>
      </div>

      <p className="hz-p">
        La estructura orgánica y jerárquica de la Institución Educativa Antonio Lenis articula las
        instancias de dirección, orientación académica, apoyo especializado, participación
        democrática y ejecución operativa, asegurando el{' '}
        <strong className="hz-key">direccionamiento participativo del servicio educativo</strong>:
      </p>

      <div className="org-wrap">
        <table className="org-table">
          <thead>
            <tr>
              <th scope="col">Nivel Jerárquico / Instancia</th>
              <th scope="col">Órganos, Estamentos y responsables Institucionales</th>
            </tr>
          </thead>
          <tbody>
            {NIVELES.map((fila) => (
              <tr key={fila.nivel}>
                <td data-label="Nivel Jerárquico / Instancia">{fila.nivel}</td>
                <td data-label="Órganos, Estamentos y responsables Institucionales">
                  <ul className="org-list">
                    {fila.items.map(([nombre, detalle]) => (
                      <li key={nombre}>
                        <strong className="org-name">{nombre}</strong>
                        {detalle && <span className="org-detalle"> ({detalle})</span>}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
