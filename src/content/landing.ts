export const landing = {
  hero: {
    title: "Estética aplicada con inteligencia",
    subtitle:
      "Adquiere tecnología avanzada para la eliminación de grasa localizada. Déjanos tu correo para asignarte un distribuidor autorizado y coordinar tu compra.",
    cta: "MÁS INFORMACIÓN",
    emailPlaceholder: "Tu correo electrónico",
    successMessage: "Gracias. Pronto nos pondremos en contacto contigo.",
  },
  product: {
    name: "EnzyCore 1500",
    description:
      "Fórmula lipolítica y reafirmante de alta concentración enzimática. Indicada para tratamientos de remodelación corporal y facial con enfoque técnico y resultados progresivos.",
    features: [
      {
        id: "adiposa",
        line1: "Designación",
        line2: "Adiposa",
        image: "/images/icons/designacion-adiposa.png",
        imageAlt: "Icono designación adiposa",
      },
      {
        id: "focalizar",
        line1: "Focalizar el",
        line2: "tratamiento",
        image: "/images/icons/focalizar-tratamiento.png",
        imageAlt: "Icono focalizar el tratamiento",
      },
      {
        id: "protocolos",
        line1: "Optimizar",
        line2: "protocolos",
        image: "/images/icons/optimizar-protocolos.png",
        imageAlt: "Icono optimizar protocolos",
      },
    ],
    footnote:
      "*Desarrollado bajo un estricto criterio técnico y de alta especialización",
  },
  technical: {
    title: "Acciones específicas con enfoque técnico",
    subtitle:
      "Cada activo está seleccionado por su mecanismo de acción documentado y su integración en protocolos profesionales.",
    quote:
      "Esto no es estética superficial. Es una herramienta técnica aplicada con criterio profesional.",
  },
  origin: {
    label: "CRITERIO CLÍNICO",
    title: "Formulación de origen europeo",
    descriptionBefore:
      "Nuestros productos se desarrollan bajo estándares que priorizan la precisión en cada activo, ofreciendo la máxima confiabilidad en entornos clínicos. Guiados por el ",
    descriptionBold: "rigor y el criterio técnico",
    descriptionAfter:
      ", respondemos a las exigencias de la estética profesional donde la calidad es un principio absoluto.",
  },
  values: {
    title: "Una propuesta enfocada en precisión",
    subtitle:
      "Desarrollamos soluciones diseñadas específicamente para optimizar la práctica clínica, garantizando seguridad y consistencia en cada aplicación.",
    items: [
      {
        id: "localized",
        title: "Aplicación localizada",
        description:
          "Diseñado exclusivamente para actuar de forma directa sobre zonas críticas específicas.",
        icon: "localized" as const,
      },
      {
        id: "protocols",
        title: "Integración en protocolos",
        description:
          "Compatible y eficiente al combinarse con esquemas avanzados de mesoterapia.",
        icon: "protocols" as const,
      },
      {
        id: "formulation",
        title: "Formulación avanzada",
        description:
          "Activos de alta pureza que garantizan una acción predecible y controlada.",
        icon: "pipette" as const,
      },
      {
        id: "professional",
        title: "Uso profesional exclusivo",
        description:
          "Reservado para profesionales certificados en entornos de cabina y clínica estética.",
        icon: "professional" as const,
      },
    ],
  },
  finalCta: {
    title: "La evolución de la mesoterapia hacia la precisión",
    subtitle:
      "Descubre cómo MESOCORE puede integrarse en tu protocolo. Déjanos tu contacto y un asesor te responderá.",
  },
  footer: {
    copyright: "© 2026 MESOCORE. Todos los derechos reservados.",
    legal: "Uso exclusivo profesional.",
    termsLabel: "Términos y condiciones",
    termsHref: "/terminos-y-condiciones",
  },
  metadata: {
    title: "MESOCORE | Estética aplicada con inteligencia",
    description:
      "Mesoterapia de precisión con formulaciones de origen europeo. EnzyCore 1500 y soluciones profesionales MESOCORE.",
  },
} as const;
