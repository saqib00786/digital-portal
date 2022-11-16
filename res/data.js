import {
  AJKPSC_LOGO,
  BENAZIR_INCOME_LOGO,
  BISE_RWP_LOGO,
  BPSC_LOGO,
  CSS_LOGO,
  DHL_LOGO,
  ECAT_LOGO,
  EDUCATION_LOGO,
  EHSAAS_PROGRAM_LOGO,
  EROZGAR_LOGO,
  E_LEARN_LOGO,
  FBISE_LOGO,
  FPSC_LOGO,
  GAT_LOGO,
  HEC_LOGO,
  KAMYAB_JAWAN_LOGO,
  KPPSC_LOGO,
  LEOPARDS_LOGO,
  MDCAT_LOGO,
  NTS_LOGO,
  PAKISTAN_CITIZEN_PORTAL_LOGO,
  PAKISTAN_POST_LOGO,
  PPSC_LOGO,
  PTCL_LOGO,
  ROSHAN_DIGITAL_LOGO,
  SPSC_LOGO,
  SUI_GAS_LOGO,
  TCS_LOGO,
  WAPDA_LOGO,
  EDU_BG,
  DEF_BG,
  GOVT_BG,
  JOBS_BG,
  UTIL_BG,
  DELV_BG,
  GOVIN_BG,
  K_ELECTRIC_LOGO,
  CHARJI_LOGO,
  IESCO_LOGO,
  LESCO_LOGO,
  FESCO_LOGO,
  GEPCO_LOGO,
  HESCO_LOGO,
  PESCO_LOGO,
  QESCO_LOGO,
  TESCO_LOGO,
  MEPCO_LOGO,
  SEPCO_LOGO
} from "../res/drawables";

//MAIN SCREEN DATA
export const data = [
  {
    source: "Education",
    screen: "General",
    imgbg: EDU_BG,
  },
  {
    source: "Defence",
    screen: "DropDownDefence",
    imgbg: DEF_BG,
  },
  {
    source: "GOVT. SECTOR",
    screen: "DropDownGovtSec",
    imgbg: GOVT_BG,
  },
  {
    source: "Job",
    screen: "General",
    imgbg: JOBS_BG,
  },
  {
    source: "Utility Services",
    screen: "General",
    imgbg: UTIL_BG,
  },

  {
    source: "Delivery Services",
    screen: "General",
    imgbg: DELV_BG,
  },
  {
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
    services: "PTCL",
    img: PTCL_LOGO,
    uri: "https://dbill.ptcl.net.pk/PTCLSearchInvoice.aspx?linkId=5015",
  },
  {
    services: "EVO Charji",
    img: CHARJI_LOGO,
    uri: "https://dbill.ptcl.net.pk/PTCLSearchInvoiceEVO.aspx?linkId=5016",
  },
  {
    services: "IESCO",
    img: IESCO_LOGO,
    uri: "https://bill.pitc.com.pk/iescobill",
  },
  {
    services: "LESCO",
    img: LESCO_LOGO,
    uri: "http://www.lesco.gov.pk/modules/customerbill/checkbill.asp",
  },
  {
    services: "FESCO",
    img: FESCO_LOGO,
    uri: "https://bill.pitc.com.pk/fescobill",
  },
  {
    services: "GEPCO",
    img: GEPCO_LOGO,
    uri: "http://www.gepco.com.pk/GEPCOBill.aspx",
  },
  {
    services: "MEPCO",
    img: MEPCO_LOGO,
    uri: "https://bill.pitc.com.pk/mepcobill",
  },
  {
    services: "SEPCO",
    img: SEPCO_LOGO,
    uri: "https://bill.pitc.com.pk/sepcobill",
  },
  {
    services: "HESCO",
    img: HESCO_LOGO,
    uri: "https://bill.pitc.com.pk/hescobill",
  },
  {
    services: "PESCO",
    img: PESCO_LOGO,
    uri: "https://bill.pitc.com.pk/pescobill ",
  },
  {
    services: "QESCO",
    img: QESCO_LOGO,
    uri: "http://bill.pitc.com.pk/qescobill/",
  },
  {
    services: "TESCO",
    img: TESCO_LOGO,
    uri: "https://bill.pitc.com.pk/tescobill",
  },
  {
    services: "K-ELECTRIC",
    img: K_ELECTRIC_LOGO,
    uri: "https://iescobill.pk/electricity-bill/",
  },
  {
    services: "SNGPL",
    img: SUI_GAS_LOGO,
    uri: "https://www.sngpl.com.pk/login.jsp?mdids=85",
  },
  {
    services: "SSGC",
    img: PTCL_LOGO,
    uri: "https://viewbill.ssgc.com.pk/web/",
  },
  {
    services: "FSD WASA",
    img: PTCL_LOGO,
    uri: "http://wasafaisalabad.gop.pk/Home/Bill",
  },
  {
    services: "RWP WASA",
    img: PTCL_LOGO,
    uri: "https://wasarwp.punjab.gov.pk/Onlinebill",
  },
  {
    services: "LHR WASA",
    img: PTCL_LOGO,
    uri: "https://duplicatebill.wasalhr.punjab.gov.pk/",
  },
  {
    services: "PEW WASA",
    img: PTCL_LOGO,
    uri: "http://web.urbanunit.gov.pk/wssp_online_bill_generator/",
  },
  {
    services: "KHI WASA",
    img: PTCL_LOGO,
    uri: "https://www.kwsb.gos.pk/online-duplicate-retail-bill/",
  },
  {
    services: "NAYATEL",
    img: PTCL_LOGO,
    uri: "https://customer.nayatel.com/AlfalahBank/index_new.php",
  },
  {
    services: "Storm Fiber",
    img: WAPDA_LOGO,
    uri: "https://my.stormfiber.com/signin.php",
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
];

//JOB SCREEN DATA
export const jobData = [
  {
    services: "FPSC",
    img: FPSC_LOGO,
    uri: "https://www.fpsc.gov.pk/",
  },
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
