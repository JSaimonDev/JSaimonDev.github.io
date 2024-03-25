import * as CookieConsent from "vanilla-cookieconsent";

CookieConsent.run({
  guiOptions: {
    consentModal: {
      layout: "bar inline",
      position: "bottom",
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: "box",
      position: "right",
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    analytics: {},
  },
  language: {
    default: "es",
    translations: {
      es: {
        consentModal: {
          title: "Funded Cookies",
          description:
            "Para poder monitorizar el rendimiento de la web, utilizamos cookies de Google Analytics, y es necesario que nos des tu consentimiento. Si no te sientes cómodo con esto, también puedes rechazarlas y seguir usando la web sin problema",
          acceptAllBtn: "Aceptar todo",
          acceptNecessaryBtn: "Rechazar todo",
          showPreferencesBtn: "Gestionar preferencias",
          footer:
            '<a href="#link">Política de privacidad</a>\n<a href="#link">Términos y condiciones</a>',
        },
        preferencesModal: {
          title: "Preferencias de Consentimiento",
          acceptAllBtn: "Aceptar todo",
          acceptNecessaryBtn: "Rechazar todo",
          savePreferencesBtn: "Guardar preferencias",
          closeIconLabel: "Cerrar modal",
          serviceCounterLabel: "Servicios",
          sections: [
            {
              title: "Uso de Cookies",
              description:
                "Elige para qué categoría de cookies das tu permiso para alojar en tu navegador",
            },
            {
              title: "Cookies Analíticas",
              description:
                "Gracias a estas cookies podemos monitorizar el rendimiento de la web para seguir mejorando en el futuro.",
              linkedCategory: "analytics",
            },
          ],
        },
      },
    },
  },
});
