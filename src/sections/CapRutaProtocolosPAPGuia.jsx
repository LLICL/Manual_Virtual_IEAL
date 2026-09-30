const HACER = [
  'Controle sus impulsos, acalle la voz interna y busque un espacio tranquilo y confidencial.',
  'Escuche activamente hasta que la persona exprese lo que desea decir; emplee un tono de voz pausado y suave.',
  'Brinde apoyo emocional y valide las emociones sin descalificarlas ("entiendo que te sientas así").',
  'Mantenga un contacto visual respetuoso y recuerde al educando que se encuentra en un espacio seguro.',
  'Si la persona está muy alterada, guíela en ejercicios de respiración consciente (tres respiraciones profundas).',
  'Enfoque la conversación en las fortalezas, habilidades y recursos positivos de la persona.',
];

const NOHACER = [
  'NO interrumpa ni apresure a la persona mientras relata lo que siente.',
  'NO dé consejos personales simplistas ni frases contundentes ("todo va a estar bien", "tienes que ser fuerte").',
  'NO juzgue, regañe, culpe ni cuestione lo que la persona hizo o dejó de hacer.',
  'NO cuente historias de su vida personal para intentar tranquilizar al estudiante.',
  'NO prometa cosas inviables ni deje solo a un menor de edad en estado de crisis.',
];

export default function CapRutaProtocolosPAPGuia() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.3.7.5
        </span>
        <h2 className="section-title">
          Qué hacer y qué no hacer en crisis
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.3.7.5
        </span>
        <h3 className="hz-head-title">
          Guía práctica de "qué hacer" y "qué no hacer" en la entrevista en crisis y primeros auxilios
          psicológicos
        </h3>
      </div>

      <p className="hz-p">
        Todo docente o directivo que atienda una situación de crisis emocional o vulneración aplicará
        las siguientes pautas de conducta:
      </p>

      <h4 className="hz-sub">Qué HACER</h4>
      <ol className="hz-ol">
        {HACER.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ol>

      <h4 className="hz-sub">Qué NO HACER</h4>
      <ul className="hz-list">
        {NOHACER.map((n, i) => (
          <li key={i}>
            <span className="hz-key">{n}</span>
          </li>
        ))}
      </ul>

      <h4 className="hz-sub">Cuidado y autocuidado docente</h4>
      <p className="hz-p">
        La aplicación de los PAP requiere disposición afectiva, serenidad y equilibrio emocional por
        parte del servidor educativo.{' '}
        <span className="hz-key">Ningún docente podrá ser obligado a asumir la intervención directa</span>{' '}
        si manifiesta o reconoce en sí mismo una afectación emocional, sobrecarga de estrés, duelo o
        falta de preparación en ese momento. En tales circunstancias, activará la{' '}
        <span className="hz-key">remisión prioritaria e inmediata</span> al docente Orientador Escolar,
        asegurando que el educando permanezca acompañado por un adulto escolar hasta que la dependencia
        especializada asuma la contención.
      </p>
    </>
  );
}