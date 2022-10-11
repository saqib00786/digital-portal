import {
  AIRFORCE_LOGO,
  ARMY_LOGO,
  BILL_LOGO,
  COURIER_LOGO,
  DRIVING_LOGO,
  EDUCATION_LOGO,
  FORCES_LOGO,
  FPSC_LOGO,
  HEC_LOGO,
  HELPLINE_LOGO,
  JOB_LOGO,
  NADRA_LOGO,
  NAVY_LOGO,
  PPSC_LOGO,
  PTCL_LOGO,
  SUI_GAS_LOGO,
  VISA_LOGO,
} from "../res/drawables";

//MAIN SCREEN DATA
export const data = [
  {
    services: "FORCES",
    img: FORCES_LOGO,
    source: "Forces",
  },
  {
    services: "EDUCATION",
    img: EDUCATION_LOGO,
    source: "Education",
  },
  {
    services: "BILL",
    img: BILL_LOGO,
    source: "Bill",
  },

  {
    services: "JOBS",
    img: JOB_LOGO,
    source: "Job",
  },

  {
    services: "DRIVING",
    img: DRIVING_LOGO,
    source: "",
  },
  {
    services: "COURIER",
    img: COURIER_LOGO,
    source: "",
  },
  {
    services: "VISA",
    img: VISA_LOGO,
    source: "",
  },
  {
    services: "NADRA",
    img: NADRA_LOGO,
    source: "",
  },
  {
    services: "HELPLINE",
    img: HELPLINE_LOGO,
    source: "",
  },
];

//BILL SCREEN DATA
export const billData = [
  {
    services: "SUI GAS BILL CHECK",
    img: SUI_GAS_LOGO,
    uri: "https://suigasbill.pk/",
  },
  {
    services: "ELECTRICITY BILL CHECK",
    img: EDUCATION_LOGO,
    uri: "https://iescobill.pk/electricity-bill/",
  },
  {
    services: "PTCL BILL",
    img: PTCL_LOGO,
    uri: "https://ptcl.com.pk/",
  },
];

//FORCES SCREEN DATA
export const forcesData = [
  {
    services: "Pakistan Army",
    img: ARMY_LOGO,
    uri: "https://pakistanarmy.gov.pk/",
  },
  {
    services: "Pakistan Airforce",
    img: AIRFORCE_LOGO,
    uri: "https://paf.gov.pk/",
  },
  {
    services: "Pakistan Navy",
    img: NAVY_LOGO,
    uri: "https://www.paknavy.gov.pk/",
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
    services: "FPSC",
    img: FPSC_LOGO,
    uri: "https://www.fpsc.gov.pk/",
  },
  {
    services: "HEC",
    img: HEC_LOGO,
    uri: "https://www.hec.gov.pk/",
  },
];
