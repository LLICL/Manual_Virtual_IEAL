import Home from './Home';
import Cap1 from './Cap1';
import Cap2 from './Cap2';
import Cap3 from './Cap3';
import Cap3Estudiante from './Cap3Estudiante';
import Cap3Personero from './Cap3Personero';
import Cap3Docente from './Cap3Docente';
import Cap3Acudiente from './Cap3Acudiente';
import Cap3Egresado from './Cap3Egresado';
import Cap11 from './Cap11';
import Cap4 from './Cap4';
import Cap4Higiene from './Cap4Higiene';
import Cap4Presentacion from './Cap4Presentacion';
import Cap5 from './Cap5';
import Cap8 from './Cap8';
import Cap8Horarios from './Cap8Horarios';
import Cap8Retardos from './Cap8Retardos';
import Cap8Inasistencias from './Cap8Inasistencias';
import Cap8Permisos from './Cap8Permisos';
import Cap9 from './Cap9';
import Cap9Derechos from './Cap9Derechos';
import Cap9Estimulos from './Cap9Estimulos';
import Cap10 from './Cap10';
import Cap10Academicos from './Cap10Academicos';
import Cap10Convivencia from './Cap10Convivencia';
import Cap10Bienes from './Cap10Bienes';
import Cap10Institucional from './Cap10Institucional';
import CapReg from './CapReg';
import CapRegCelulares from './CapRegCelulares';
import CapRegVapeadores from './CapRegVapeadores';
import CapRegIntangibilidad from './CapRegIntangibilidad';
import CapRegAcoso from './CapRegAcoso';
import CapRegServicioSocial from './CapRegServicioSocial';
import CapRegDecomiso from './CapRegDecomiso';
import CapRegAlianza from './CapRegAlianza';
import Cap12 from './Cap12';
import Cap15 from './Cap15';
import Cap16 from './Cap16';
import Cap17 from './Cap17';
import Cap18 from './Cap18';
import Cap19 from './Cap19';
import Cap20 from './Cap20';
import Cap21 from './Cap21';
import Cap22 from './Cap22';
import Cap23 from './Cap23';
import Cap24 from './Cap24';
import Cap25 from './Cap25';
import Cap26 from './Cap26';
import Cap27 from './Cap27';
import Cap28 from './Cap28';
import Cap29 from './Cap29';
import Cap30 from './Cap30';
import Cap31 from './Cap31';
import Cap32 from './Cap32';
import Cap33 from './Cap33';
import Cap34 from './Cap34';
import Cap35 from './Cap35';
import Cap36 from './Cap36';
import Cap37 from './Cap37';
import Cap38 from './Cap38';
import Cap39 from './Cap39';
import Cap40 from './Cap40';
import Cap41 from './Cap41';
import Cap42 from './Cap42';
import Cap43 from './Cap43';
import Cap44 from './Cap44';
import Cap45 from './Cap45';
import Cap46 from './Cap46';
import Cap47 from './Cap47';
import Cap48 from './Cap48';
import Cap49 from './Cap49';
import Cap50 from './Cap50';
import Cap51 from './Cap51';
import Cap52 from './Cap52';
import Cap53 from './Cap53';
import Cap54 from './Cap54';
import Cap55 from './Cap55';
import CapResena from './CapResena';
import CapHorizonte from './CapHorizonte';
import CapHorizontePrincipios from './CapHorizontePrincipios';
import CapHorizonteValores from './CapHorizonteValores';
import CapHorizonteEtico from './CapHorizonteEtico';
import CapOrganigrama from './CapOrganigrama';
import CapGobierno from './CapGobierno';
import CapGobiernoRector from './CapGobiernoRector';
import CapGobiernoDirectivo from './CapGobiernoDirectivo';
import CapGobiernoAcademico from './CapGobiernoAcademico';
import CapEstamentos from './CapEstamentos';
import CapEstamentosConsejoEstudiantes from './CapEstamentosConsejoEstudiantes';
import CapEstamentosPersonero from './CapEstamentosPersonero';
import CapEstamentosContralor from './CapEstamentosContralor';
import CapEstamentosCes from './CapEstamentosCes';
import CapEstamentosComisiones from './CapEstamentosComisiones';
import CapEstamentosConsejoPadres from './CapEstamentosConsejoPadres';
import CapEstamentosAsociacionPadres from './CapEstamentosAsociacionPadres';
import CapEstamentosExalumnos from './CapEstamentosExalumnos';

const sections = {
  'cap-home': Home,
  'cap-1': Cap1,
  'cap-resena': CapResena,
  'cap-2': Cap2,
  'cap-3': Cap3,
  'cap-3-estudiante': Cap3Estudiante,
  'cap-3-personero': Cap3Personero,
  'cap-3-docente': Cap3Docente,
  'cap-3-acudiente': Cap3Acudiente,
  'cap-3-egresado': Cap3Egresado,
  'cap-11': Cap11,
  'cap-4': Cap4,
  'cap-4-higiene': Cap4Higiene,
  'cap-4-presentacion': Cap4Presentacion,
  'cap-5': Cap5,
  'cap-8': Cap8,
  'cap-8-horarios': Cap8Horarios,
  'cap-8-retardos': Cap8Retardos,
  'cap-8-inasistencias': Cap8Inasistencias,
  'cap-8-permisos': Cap8Permisos,
  'cap-9': Cap9,
  'cap-9-derechos': Cap9Derechos,
  'cap-9-estimulos': Cap9Estimulos,
  'cap-10': Cap10,
  'cap-10-academicos': Cap10Academicos,
  'cap-10-convivencia': Cap10Convivencia,
  'cap-10-bienes': Cap10Bienes,
  'cap-10-institucional': Cap10Institucional,
  'cap-reg': CapReg,
  'cap-reg-celulares': CapRegCelulares,
  'cap-reg-vapeadores': CapRegVapeadores,
  'cap-reg-intangibilidad': CapRegIntangibilidad,
  'cap-reg-acoso': CapRegAcoso,
  'cap-reg-servicio-social': CapRegServicioSocial,
  'cap-reg-decomiso': CapRegDecomiso,
  'cap-reg-alianza': CapRegAlianza,
  'cap-12': Cap12,
  'cap-15': Cap15,
  'cap-16': Cap16,
  'cap-17': Cap17,
  'cap-18': Cap18,
  'cap-19': Cap19,
  'cap-20': Cap20,
  'cap-21': Cap21,
  'cap-22': Cap22,
  'cap-23': Cap23,
  'cap-24': Cap24,
  'cap-25': Cap25,
  'cap-26': Cap26,
  'cap-27': Cap27,
  'cap-28': Cap28,
  'cap-29': Cap29,
  'cap-30': Cap30,
  'cap-31': Cap31,
  'cap-32': Cap32,
  'cap-33': Cap33,
  'cap-34': Cap34,
  'cap-35': Cap35,
  'cap-36': Cap36,
  'cap-37': Cap37,
  'cap-38': Cap38,
  'cap-39': Cap39,
  'cap-40': Cap40,
  'cap-41': Cap41,
  'cap-42': Cap42,
  'cap-43': Cap43,
  'cap-44': Cap44,
  'cap-45': Cap45,
  'cap-46': Cap46,
  'cap-47': Cap47,
  'cap-48': Cap48,
  'cap-49': Cap49,
  'cap-50': Cap50,
  'cap-51': Cap51,
  'cap-52': Cap52,
  'cap-53': Cap53,
  'cap-54': Cap54,
  'cap-55': Cap55,
  'cap-resena': CapResena,
  'cap-horizonte': CapHorizonte,
  'cap-horizonte-principios': CapHorizontePrincipios,
  'cap-horizonte-valores': CapHorizonteValores,
  'cap-horizonte-etico': CapHorizonteEtico,
  'cap-organigrama': CapOrganigrama,
  'cap-gobierno': CapGobierno,
  'cap-gobierno-rector': CapGobiernoRector,
  'cap-gobierno-directivo': CapGobiernoDirectivo,
  'cap-gobierno-academico': CapGobiernoAcademico,
  'cap-estamentos': CapEstamentos,
  'cap-estamentos-consejo-estudiantes': CapEstamentosConsejoEstudiantes,
  'cap-estamentos-personero': CapEstamentosPersonero,
  'cap-estamentos-contralor': CapEstamentosContralor,
  'cap-estamentos-ces': CapEstamentosCes,
  'cap-estamentos-comisiones': CapEstamentosComisiones,
  'cap-estamentos-consejo-padres': CapEstamentosConsejoPadres,
  'cap-estamentos-asociacion-padres': CapEstamentosAsociacionPadres,
  'cap-estamentos-exalumnos': CapEstamentosExalumnos,
};

export default sections;
