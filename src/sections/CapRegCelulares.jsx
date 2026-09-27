const PASOS = [
  {
    term: 'Primera infracción',
    text: 'El docente o coordinador solicitará al estudiante apagar el equipo. El dispositivo será resguardado en la Coordinación de Convivencia, en un sobre marcado, y se devolverá al estudiante al finalizar la jornada académica, previa amonestación y registro en la plataforma.',
  },
  {
    term: 'Segunda infracción',
    text: 'El dispositivo será retenido en la Coordinación de Convivencia y se entregará únicamente de forma presencial al padre de familia y/o acudiente, con quien se suscribirá un acta de compromiso pedagógico en el observador del estudiante.',
  },
  {
    term: 'Tercera infracción o reincidencia continua',
    text: 'Constituirá falta grave. El dispositivo será retenido para entrega exclusiva al acudiente, se citará ante el Comité de Convivencia y se impondrá la prohibición de ingreso del equipo al plantel durante el resto del año lectivo.',
  },
];

export default function CapRegCelulares() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          3.6.1
        </span>
        <h2 className="section-title">
          De los celulares
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          3.6.1
        </span>
        <h3 className="hz-head-title">
          De los celulares
        </h3>
      </div>

      <p className="hz-p">
        <span className="hz-key">Prohibición general y regulación del uso de celulares</span> y
        dispositivos electrónicos.
      </p>

      <p className="hz-p">
        Por decisión concertada y consensuada en la Asamblea General de Padres de Familia y ratificada
        por el Consejo Directivo en ejercicio de la autonomía escolar, se establece la{' '}
        <span className="hz-key">prohibición general del uso, porte activo e ingreso no autorizado</span>{' '}
        de teléfonos celulares, relojes inteligentes, tabletas y dispositivos de comunicación para
        todos los estudiantes de la Institución Educativa Antonio Lenis, abarcando todas sus sedes y
        niveles (Primera Infancia, Básica Primaria, Básica Secundaria, Media y Sabatina).
      </p>

      <p className="hz-p">
        Esta norma busca salvaguardar la salud mental, prevenir los riesgos del ciberacoso, eliminar
        los factores de distracción en el aula y fortalecer los procesos de aprendizaje y socialización
        presencial.
      </p>

      <h4 className="hz-sub">Alcance de la prohibición por sedes y niveles</h4>
      <ul className="hz-list">
        <li>
          <span className="hz-term">Sedes de Primaria (Carrenales y Mercedes Ábrego)</span> Se
          ratifica de manera absoluta la prohibición de ingreso y uso de celulares por parte de los
          niños y niñas de educación inicial y básica primaria.
        </li>
        <li>
          <span className="hz-term">Sede Principal (Básica Secundaria y Media)</span> Se prohíbe el
          uso, encendido o manipulación de teléfonos celulares durante toda la jornada escolar (horas
          de clase, cambios de clase, formaciones, actos cívicos y descansos). Los equipos deberán
          permanecer apagados y guardados en los bolsos.
        </li>
      </ul>

      <h4 className="hz-sub">Excepciones expresas</h4>
      <ul className="hz-list">
        <li>
          <span className="hz-term">Uso pedagógico autorizado</span> Únicamente se permitirá el uso del
          dispositivo dentro del aula cuando el docente de la asignatura lo solicite y autorice
          expresamente para una actividad académica o de investigación previamente planificada en la
          guía de clase.
        </li>
        <li>
          <span className="hz-term">Fuerza mayor o salud</span> Los casos excepcionales por razones de
          salud o emergencias familiares deberán ser notificados previamente por el acudiente ante la
          Coordinación de Convivencia, instancia que gestionará la comunicación con el educando.
        </li>
      </ul>

      <h4 className="hz-sub">Protocolo formativo y devolutivo ante el incumplimiento</h4>
      <ol className="hz-steps">
        {PASOS.map((p) => (
          <li className="hz-step" key={p.term}>
            <div className="hz-step-dot" />
            <div className="hz-step-body">
              <span className="hz-step-term">{p.term}</span>
              <span className="hz-step-text">{p.text}</span>
            </div>
          </li>
        ))}
      </ol>

      <h4 className="hz-sub">Uso indebido, protección a la intimidad y delitos digitales</h4>
      <p className="hz-p">
        Queda <span className="hz-key">estrictamente prohibido fotografiar, grabar audio o video o realizar transmisiones en vivo (streaming)</span>{' '}
        dentro del colegio o portando el uniforme, sin autorización previa. El uso de celulares para
        crear o difundir memes, contenidos difamatorios o ejecutar acoso escolar (ciberbullying)
        constituirá <span className="hz-key">Situación Tipo II o Tipo III</span>, activando la Ruta de
        Atención Integral y las denuncias legales ante la Policía de Infancia y Adolescencia o la
        Fiscalía.
      </p>

      <h4 className="hz-sub">Exoneración de responsabilidad institucional</h4>
      <p className="hz-p">
        La institución <span className="hz-key">no se hace responsable</span> por la pérdida, extravío,
        hurto o daño de teléfonos celulares ni dispositivos tecnológicos de valor traídos al plantel
        por iniciativa propia del estudiante o acudiente.
      </p>
    </>
  );
}
