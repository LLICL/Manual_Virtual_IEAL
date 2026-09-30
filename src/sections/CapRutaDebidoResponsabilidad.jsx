const RESPONSABILIDAD = [
  {
    term: 'Menores de catorce (14) años',
    text: 'Exentos de responsabilidad penal; operan exclusivamente medidas de protección y restablecimiento de derechos ante el ICBF y Comisarías de Familia. Los daños ocasionados son asumidos civil, económica y solidariamente por sus padres, madres o acudientes, por el deber de custodia.',
  },
  {
    term: 'De catorce (14) a dieciocho (18) años',
    text: 'Asumen responsabilidad penal bajo el Sistema de Responsabilidad Penal para Adolescentes (SRPA), con remisión inmediata a la Fiscalía General de la Nación. Sus padres responden patrimonialmente como terceros civilmente responsables.',
  },
];

export default function CapRutaDebidoResponsabilidad() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.2.6.6
        </span>
        <h2 className="section-title">
          Responsabilidad patrimonial y modelos virtuales
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.2.6.6
        </span>
        <h3 className="hz-head-title">
          Responsabilidad patrimonial y modelos virtuales
        </h3>
      </div>

      <h4 className="hz-sub">Responsabilidad patrimonial según la edad</h4>
      <ul className="hz-list">
        {RESPONSABILIDAD.map((r) => (
          <li key={r.term}>
            <span className="hz-term">{r.term}:</span> {r.text}
          </li>
        ))}
      </ul>

      <h4 className="hz-sub">Vigencia en modelos educativos flexibles o virtuales</h4>
      <p className="hz-p">
        Los deberes y pautas de convivencia aplican con{' '}
        <span className="hz-key">idéntica obligatoriedad</span> en las modalidades presencial,
        semipresencial, flexible, virtual o telemática. El uso de plataformas digitales o la
        instrucción desescolarizada <span className="hz-key">no atenúa ni exonera</span> de los deberes
        contractuales, y las conductas lesivas a través de redes sociales, canales telemáticos o
        entornos virtuales se sancionan con el mismo rigor que las faltas cometidas físicamente en el
        campus.
      </p>
    </>
  );
}