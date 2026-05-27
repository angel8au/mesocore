/** Correo de contacto único — actualizar aquí para todo el sitio */
export const contactEmail = "soporte@mesocore.mx";

export const landing = {
  contactEmail,
  hero: {
    modelImage: "/images/hero-model-v5.png",
    label: "FORMULACIONES EUROPEAS",
    title: "Mesoterapia avanzada con precisión científica",
    subtitle:
      "Formulaciones para mesoterapia avanzada desarrolladas para actuar con precisión y enfoque científico, con el objetivo de lograr beneficios notorios y específicos.",
    cta: "MÁS INFORMACIÓN",
    emailPlaceholder: "Tu correo electrónico",
    successMessage: "Gracias. Pronto nos pondremos en contacto contigo.",
  },
  product: {
    name: "EnzyCore 1500",
    metaLine: "COLAGENASA. HIALURONIDASA. LIPASA - VIAL 10 ML",
    body:
      "Complejo enzimático diseñado para protocolos de aplicación específica. Una combinación orientada a intervenir la grasa localizada, facilitando tratamientos más dirigidos y controlados.",
    enzymeAction: {
      trigger: "Acción enzimática aplicada",
      intro:
        "Las enzimas actúan como catalizadores biológicos específicos en la zona de aplicación. En conjunto, esta formulación permite:",
      bullets: [
        {
          icon: "/images/icons/icon1.png",
          iconAlt: "Icono actuar sobre tejido graso localizado",
          text: "Actuar sobre el tejido graso localizado.",
        },
        {
          icon: "/images/icons/icon2.png",
          iconAlt: "Icono facilitar la intervención en zonas específicas",
          text: "Facilitar la intervención en zonas específicas.",
        },
        {
          icon: "/images/icons/icon3.png",
          iconAlt: "Icono integrarse en protocolos de mesoterapia",
          text: "Integrarse de forma eficiente en protocolos de mesoterapia.",
        },
      ],
      closing: "Todo bajo un enfoque técnico y profesional",
    },
  },
  /** Iconos para sección futura de ventajas competitivas */
  competitiveAdvantages: [
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
          "Diseñado exclusivamente para actuar de forma directa sobre zonas específicas.",
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
  responsibility: {
    title: "Estética + responsabilidad técnica",
    intro: "Nuestro compromiso es con:",
    commitments: [
      { icon: "quality" as const, text: "La calidad y los resultados." },
      {
        icon: "shield" as const,
        text: "El uso responsable dentro de protocolos profesionales.",
      },
      {
        icon: "precision" as const,
        text: "El compromiso con la precisión en cada formulación.",
      },
    ],
    modelImage: "/images/model-v3.png",
  },
  finalCta: {
    title: "La evolución de la mesoterapia hacia la precisión",
    subtitle:
      "Para información sobre formulaciones, distribución autorizada o integración en tu protocolo, escríbenos. Un asesor te responderá personalmente.",
    cta: "Contactar por correo",
  },
  footer: {
    copyright: "© 2026 MESOCORE. Todos los derechos reservados.",
    legal: "Uso exclusivo profesional.",
    termsLabel: "Aviso de privacidad",
    termsHref: "/aviso-de-privacidad",
  },
  metadata: {
    title: "MESOCORE | Estética aplicada con inteligencia",
    description:
      "Mesoterapia de precisión con formulaciones de origen europeo. EnzyCore 1500 y soluciones profesionales MESOCORE.",
  },
} as const;
