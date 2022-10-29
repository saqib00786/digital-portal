import {
  AJKPSC_LOGO,
  BENAZIR_INCOME_LOGO,
  BISE_RWP_LOGO,
  BPSC_LOGO,
  CSS_LOGO,
  DEFENCE_LOGO,
  DELIVERY_SERVICES_LOGO,
  DHL_LOGO,
  DRIVING_LOGO,
  ECAT_LOGO,
  EDUCATION_LOGO,
  EHSAAS_PROGRAM_LOGO,
  EROZGAR_LOGO,
  E_LEARN_LOGO,
  FBISE_LOGO,
  FPSC_LOGO,
  GAT_LOGO,
  GOVERNMENT_INITIATIVES_LOGO,
  HEC_LOGO,
  JOB_LOGO,
  KAMYAB_JAWAN_LOGO,
  KPPSC_LOGO,
  LEOPARDS_LOGO,
  MDCAT_LOGO,
  MOD_LOGO,
  NTS_LOGO,
  PAKISTAN_CITIZEN_PORTAL_LOGO,
  PAKISTAN_POST_LOGO,
  PPSC_LOGO,
  PTCL_LOGO,
  ROSHAN_DIGITAL_LOGO,
  SPSC_LOGO,
  SUI_GAS_LOGO,
  TCS_LOGO,
  UTILITY_SERVICES_LOGO,
  WAPDA_LOGO,
  EDU_BG,
  DEF_BG,
  GOVT_BG,
  JOBS_BG,
  UTIL_BG,
  DELV_BG,
  GOVIN_BG,
} from "../res/drawables";

//MAIN SCREEN DATA
export const data = [
  {
    services: "EDUCATION",
    img: EDUCATION_LOGO,
    source: "Education",
    screen: "General",
    imgbg: EDU_BG,
  },
  {
    services: "DEFENCE",
    img: DEFENCE_LOGO,
    source: "Defence",
    screen: "DropDownDefence",
    imgbg: DEF_BG,
  },
  {
    services: "GOVT. SECTOR",
    img: MOD_LOGO,
    source: "GOVT. SECTOR",
    screen: "DropDownGovtSec",
    imgbg: GOVT_BG,
  },
  {
    services: "JOBS",
    img: JOB_LOGO,
    source: "Job",
    screen: "General",
    imgbg: JOBS_BG,
  },
  {
    services: "UTILITY SERVICES",
    img: UTILITY_SERVICES_LOGO,
    source: "Utility Services",
    screen: "General",
    imgbg: UTIL_BG,
  },

  {
    services: "DELIVERY SERVICES",
    img: DELIVERY_SERVICES_LOGO,
    source: "Delivery Services",
    screen: "General",
    imgbg: DELV_BG,
  },
  {
    services: "GOVT INITIATIVES",
    img: GOVERNMENT_INITIATIVES_LOGO,
    source: "Govt. Initiatives",
    screen: "General",
    imgbg: GOVIN_BG,
  },
];

//GOVERNMENT INITIATIVES SERVICES SCREEN DATA
export const govtInitiativesData = [
  {
    services: "EHSAAS PROGRAM",
    img: EHSAAS_PROGRAM_LOGO,
    uri: "https://ehsaasprogramme.pk/",
  },
  {
    services: "KAMYAB JAWAN",
    img: KAMYAB_JAWAN_LOGO,
    uri: "https://pmyp.gov.pk/#",
  },
  {
    services: "ROSHAN DIGITAL ACCOUNT",
    img: ROSHAN_DIGITAL_LOGO,
    uri: "https://www.sbp.org.pk/rda/index.html",
  },
  {
    services: "PAKISTAN CITIZEN PORTAL",
    img: PAKISTAN_CITIZEN_PORTAL_LOGO,
    uri: "https://citizenportal.gov.pk/",
  },
  {
    services: "E-ROZGAR",
    img: EROZGAR_LOGO,
    uri: "https://www.erozgaar.pitb.gov.pk/",
  },
  {
    services: "BENAZIR INCOME SUPPORT PROGRAM",
    img: BENAZIR_INCOME_LOGO,
    uri: "https://www.bisp.gov.pk/",
  },
  {
    services: "E-LEARN",
    img: E_LEARN_LOGO,
    uri: "https://www.elearn.gov.pk/",
  },
];

//UTILITY SERVICES SCREEN DATA
export const utilityServicesData = [
  {
    services: "SNGPL",
    img: SUI_GAS_LOGO,
    uri: "https://suigasbill.pk/",
  },
  {
    services: "WAPDA",
    img: WAPDA_LOGO,
    uri: "www.wapda.gov.pk",
  },
  {
    services: "K-ELECTRIC",
    img: EDUCATION_LOGO,
    uri: "https://iescobill.pk/electricity-bill/",
  },
  {
    services: "PTCL BILL",
    img: PTCL_LOGO,
    uri: "https://ptcl.com.pk/",
  },
];

//DEFENCE SCREEN DATA
export const defenceDataPAF = [
  {
    value: "Officer",
    key: "https://joinpaf.gov.pk/career/officers",
  },
  { value: "Airman", key: "https://joinpaf.gov.pk/career/airmen" },
  { value: "Civilians", key: "https://joinpaf.gov.pk/career/civilians" },
];
export const defenceDataARMY = [
  {
    value: "Medical Cadet",
    key: "https://www.joinpakarmy.gov.pk/",
  },
  {
    value: "Lady Cadet",
    key: "https://www.joinpakarmy.gov.pk/",
  },
  {
    value: "Direct Short Service Comission",
    key: "https://www.joinpakarmy.gov.pk/",
  },
  {
    value: "Junior Commissioned officer",
    key: "https://www.joinpakarmy.gov.pk/",
  },
  {
    value: "Nursing",
    key: "https://www.joinpakarmy.gov.pk/",
  },
  {
    value: "PMA LC ",
    key: "https://www.joinpakarmy.gov.pk/",
  },
];
export const defenceDataNAVY = [
  {
    value: "Permanent Commission",
    key: "https://www.joinpaknavy.gov.pk/pncadet",
  },
  {
    value: "Short Service Commission",
    key: "https://joinpaknavy.gov.pk/#",
  },
  { value: "Sailor", key: "https://joinpaknavy.gov.pk/#" },
];
export const defenceDataPOLICE = [
  {
    value: "Punjab Police",
    key: "https://punjabpolice.gov.pk/",
  },
  { value: "KPK Police", key: "https://kppolice.gov.pk/" },
  { value: "Sindh Police", key: "https://sindhpolice.gov.pk/" },
  { value: "Balochistan Police", key: "https://www.balochistanpolice.gov.pk/" },
  { value: "ISB Police", key: "https://islamabadpolice.gov.pk/" },
];
export const defenceDataMOD = [
  {
    value: "MOD",
    key: "https://www.mod.gov.pk/",
  },
];
//EDUCATION SCREEN DATA
export const educationData = [
  {
    services: "PPSC",
    img: PPSC_LOGO,
    uri: "https://ppsc.gop.pk/",
  },
  {
    services: "SPSC",
    img: SPSC_LOGO,
    uri: "https://www.spsc.gov.pk/",
  },
  {
    services: "KPPSC",
    img: KPPSC_LOGO,
    uri: "https://www.kppsc.gov.pk/",
  },
  {
    services: "BPSC",
    img: BPSC_LOGO,
    uri: "http://bpsc.gob.pk/",
  },
  {
    services: "AJKPSC",
    img: AJKPSC_LOGO,
    uri: " (http://www.ajkpsc.gov.pk/home/default.asp",
  },
  {
    services: "BISE_RWP",
    img: BISE_RWP_LOGO,
    uri: "https://www.biserawalpindi.edu.pk/",
  },
  {
    services: "FBISE",
    img: FBISE_LOGO,
    uri: "https://fbise.edu.pk/",
  },
  {
    services: "HEC",
    img: HEC_LOGO,
    uri: "https://www.hec.gov.pk/",
  },
  {
    services: "CSS",
    img: CSS_LOGO,
    uri: "https://www.fpsc.gov.pk/exams/css",
  },
  {
    services: "GAT",
    img: GAT_LOGO,
    uri: "https://www.nts.org.pk/new/GAT-G.php",
  },
  {
    services: "NTS",
    img: NTS_LOGO,
    uri: "https://www.nts.org.pk/new/",
  },
  {
    services: "MDCAT",
    img: MDCAT_LOGO,
    uri: "https://www.pmc.gov.pk/ ",
  },
  {
    services: "ECAT",
    img: ECAT_LOGO,
    uri: "https://admission.uet.edu.pk/Modules/EntryTest/Default.aspx",
  },
];

//JOB SCREEN DATA
export const jobData = [
  {
    services: "PPSC",
    img: PPSC_LOGO,
    uri: "https://ppsc.gop.pk/",
  },
  {
    services: "FPSC",
    img: FPSC_LOGO,
    uri: "https://www.fpsc.gov.pk/",
  },
];

//DELIVERY SERVICES SCREEN DATA
export const deliveryServicesData = [
  {
    services: "PAKISTAN POST",
    img: PAKISTAN_POST_LOGO,
    uri: "https://www.pakpost.gov.pk/",
  },
  {
    services: "TCS",
    img: TCS_LOGO,
    uri: "https://www.tcsexpress.com/",
  },
  {
    services: "LEOPARD",
    img: LEOPARDS_LOGO,
    uri: "https://www.leopardscourier.com/",
  },
  {
    services: "DHL",
    img: DHL_LOGO,
    uri: "https://www.dhl.com/pk-en/home.html?locale=true",
  },
];

//GOVT. SEC SCREEN DATA
export const govtSecDriving = [
  {
    value: "Punjab",
    key: "https://dlims.punjab.gov.pk/",
  },
  {
    value: "KPK",
    key: "https://www.dlimskpk-gov.com/",
  },
  { value: "SINDH", key: "https://dls.gos.pk/" },
  { value: "Balochistan", key: "https://www.dlims-balochistan.org/" },
];
export const govtSecExciseTaxation = [
  {
    value: "Punjab",
    key: "https://excise.punjab.gov.pk/",
  },
  {
    value: "KPK",
    key: "https://excise_taxation.kp.gov.pk/",
  },
  {
    value: "Sindh",
    key: "https://excise.gos.pk/",
  },
  {
    value: "Balochistan",
    key: "https://balochistan.gov.pk/departments/excise-and-taxation/",
  },
  {
    value: "AJK",
    key: "https://www.jkexcise.in/",
  },
  {
    value: "GB",
    key: "http://gbexcise.gov.pk/ ",
  },
];
export const govtSecNadra = [
  {
    value: "Nadra",
    key: "https://www.nadra.gov.pk/",
  },
];
export const govtSecPassport = [
  {
    value: "Passport",
    key: "https://dgip.gov.pk/home/",
  },
];
export const govtSecVisa = [
  {
    value: "Pakistan Visa Application",
    key: "https://visa.nadra.gov.pk/",
  },
];
export const govtSecMOFA = [
  {
    value: "MOFA",
    key: "https://mofa.gov.pk/",
  },
];
export const govtSecFBR = [
  {
    value: "FBR",
    key: "https://www.fbr.gov.pk/",
  },
];
export const govtSecCustom = [
  {
    value: "Custom",
    key: "https://pakcustoms.org/#",
  },
];
