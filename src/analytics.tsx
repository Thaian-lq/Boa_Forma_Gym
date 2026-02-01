import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = 'G-98YR89QYHJ'; 

export const initGA = () => {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    ReactGA.initialize(GA_MEASUREMENT_ID);
    console.log('Google Analytics inicializado');
  }
};

export const logPageView = (path: string) => {
  if (typeof window !== 'undefined') {
    ReactGA.send({ hitType: "pageview", page: path });
  }
};

export const logEvent = (category: string, action: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined') {
    ReactGA.event({
      category,
      action,
      label,
      value
    });
  }
};

export const logPlanClick = (planName: string) => {
  logEvent('Plans', 'Click', `Plano: ${planName}`);
};

export const logPartnerClick = (partnerName: string) => {
  logEvent('Partners', 'Click', `Parceiro: ${partnerName}`);
};

export const logWhatsAppClick = (source: string) => {
  logEvent('WhatsApp', 'Click', `Origem: ${source}`);
};

export const logNavigationClick = (menuItem: string) => {
  logEvent('Navigation', 'Click', `Menu: ${menuItem}`);
};

// export const logFormSubmit = (formName: string) => {
//   ReactGA.event({
//     category: 'Form',
//     action: 'Submit',
//     label: formName
//   });
// };