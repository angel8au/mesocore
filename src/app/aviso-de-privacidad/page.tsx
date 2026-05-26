import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Footer } from "@/components/sections/Footer";
import { contactEmail } from "@/content/landing";

export const metadata: Metadata = {
  title: "Aviso de privacidad | MESOCORE",
  description: "Aviso de privacidad del sitio web MESOCORE.",
};

export default function PrivacyNoticePage() {
  return (
    <div className="flex min-h-screen flex-col bg-mesocore-background">
      <header className="border-b border-mesocore-gray-100 py-8">
        <Container>
          <Link href="/" className="inline-block">
            <Logo variant="primary" />
          </Link>
        </Container>
      </header>

      <main className="flex-1 py-12 md:py-16">
        <Container>
          <h1 className="text-title-2 text-mesocore-gray-900">AVISO DE PRIVACIDAD</h1>

          <div className="mt-6 max-w-3xl space-y-6 text-base leading-relaxed font-light text-mesocore-gray-500">
            <p>
              En cumplimiento con la{" "}
              <strong className="font-semibold text-mesocore-gray-900">
                Ley Federal de Protección de Datos Personales en Posesión de los Particulares
                (LFPDPPP)
              </strong>{" "}
              y su Reglamento, se pone a disposición el presente Aviso de Privacidad para
              informar los términos y condiciones bajo los cuales se tratarán los datos
              personales recabados a través de este sitio web.
            </p>

            <section>
              <h2 className="text-title-3 text-mesocore-gray-900">
                1. Identidad y Domicilio del Responsable
              </h2>
              <div className="mt-3 space-y-3">
                <p>
                  El responsable del tratamiento de sus datos personales es{" "}
                  <strong className="font-semibold text-mesocore-gray-900">
                    COMERCIALIZADORA MARTIMO S.A. DE C.V.
                  </strong>{" "}
                  (en adelante, "El Responsable"), con domicilio ubicado en:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong className="font-semibold text-mesocore-gray-900">
                      Domicilio:
                    </strong>{" "}
                    Av. 595 N.32 Oficina 3, Despacho C, Colonia San Juan de Aragón III
                    Sección, Alcaldía Gustavo A. Madero, Ciudad de México, México.
                  </li>
                  <li>
                    <strong className="font-semibold text-mesocore-gray-900">
                      Correo electrónico de contacto:
                    </strong>{" "}
                    {contactEmail}
                  </li>
                </ul>
              </div>
            </section>

            <hr className="border-mesocore-gray-100" />

            <section>
              <h2 className="text-title-3 text-mesocore-gray-900">
                2. Datos Personales que se Recabarán
              </h2>
              <div className="mt-3 space-y-3">
                <p>
                  Para cumplir con las finalidades descritas en este documento, El Responsable
                  recabará los siguientes datos personales de identificación y contacto de
                  forma directa cuando usted los proporciona en nuestro formulario:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Correo electrónico.</li>
                </ul>
                <p className="italic">
                  Nota: Este sitio web no recaba ni trata datos personales sensibles (como
                  origen racial, estado de salud presente o futuro, creencias religiosas,
                  filosóficas o morales, afiliación sindical, opiniones políticas o
                  preferencia sexual).
                </p>
              </div>
            </section>

            <hr className="border-mesocore-gray-100" />

            <section>
              <h2 className="text-title-3 text-mesocore-gray-900">
                3. Finalidades del Tratamiento de los Datos
              </h2>
              <div className="mt-3 space-y-3">
                <p>
                  Los datos personales recabados serán utilizados para las siguientes{" "}
                  <strong className="font-semibold text-mesocore-gray-900">
                    finalidades primarias
                  </strong>
                  , las cuales son necesarias para el servicio o interacción que solicita:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Gestionar su registro y solicitud de información en nuestra plataforma.</li>
                  <li>
                    Asignarle un distribuidor autorizado o agente comercial para coordinar su
                    proceso de compra o información técnica del producto.
                  </li>
                  <li>
                    Establecer comunicación directa para dar seguimiento a sus dudas,
                    comentarios o solicitudes de soporte técnico y comercial.
                  </li>
                </ul>

                <h3 className="text-sm font-semibold tracking-[0.18em] uppercase text-mesocore-gray-900">
                  Finalidades Secundarias (Opcionales)
                </h3>
                <p>
                  De manera adicional, utilizaremos su información para las siguientes
                  finalidades secundarias que no son estrictamente necesarias para el
                  servicio solicitado, pero que nos permiten brindarle una mejor atención:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Envío de boletines informativos, actualizaciones del producto, contenido
                    técnico y promociones comerciales relacionadas con nuestra marca.
                  </li>
                </ul>
                <p>
                  Si usted <strong className="font-semibold text-mesocore-gray-900">no desea</strong>{" "}
                  que sus datos personales sean tratados para estas finalidades secundarias,
                  puede manifestar su negativa enviando un correo electrónico a{" "}
                  <strong className="font-semibold text-mesocore-gray-900">
                    {contactEmail}
                  </strong>{" "}
                  indicando en el asunto: <em>"Negativa Tratamiento Secundario"</em>.
                </p>
              </div>
            </section>

            <hr className="border-mesocore-gray-100" />

            <section>
              <h2 className="text-title-3 text-mesocore-gray-900">
                4. Limitación del Uso o Divulgación de Datos
              </h2>
              <p className="mt-3">
                Usted puede limitar el uso o divulgación de sus datos personales enviando
                una solicitud por escrito al correo electrónico{" "}
                <strong className="font-semibold text-mesocore-gray-900">
                  {contactEmail}
                </strong>
                . Asimismo, para dejar de recibir correos electrónicos publicitarios o
                boletines informativos, cada mensaje enviado contará con un enlace automático
                o mecanismo para revocar su suscripción de forma inmediata.
              </p>
            </section>

            <hr className="border-mesocore-gray-100" />

            <section>
              <h2 className="text-title-3 text-mesocore-gray-900">
                5. Medios para Ejercer los Derechos ARCO
              </h2>
              <div className="mt-3 space-y-3">
                <p>
                  Usted tiene derecho a conocer qué datos personales tenemos de usted, para
                  qué los utilizamos y las condiciones del uso que les damos ({" "}
                  <strong className="font-semibold text-mesocore-gray-900">Acceso</strong>). Asimismo,
                  es su derecho solicitar la corrección de su información personal en caso de
                  que esté desactualizada, sea inexacta o incompleta ({" "}
                  <strong className="font-semibold text-mesocore-gray-900">Rectificación</strong>);
                  que la eliminemos de nuestros registros o bases de datos cuando considere
                  que la misma no está siendo utilizada adecuadamente ({" "}
                  <strong className="font-semibold text-mesocore-gray-900">Cancelación</strong>);
                  así como oponerse al uso de sus datos personales para fines específicos ({" "}
                  <strong className="font-semibold text-mesocore-gray-900">Oposición</strong>). Estos
                  derechos se conocen como{" "}
                  <strong className="font-semibold text-mesocore-gray-900">Derechos ARCO</strong>.
                </p>
                <p>
                  Para el ejercicio de cualquiera de los Derechos ARCO, usted deberá
                  presentar la solicitud respectiva a través del correo electrónico:{" "}
                  <strong className="font-semibold text-mesocore-gray-900">
                    {contactEmail}
                  </strong>
                  .
                </p>
                <p>La solicitud deberá contener y acompañar lo siguiente:</p>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    El nombre del titular y domicilio u otro medio para comunicarle la
                    respuesta a su solicitud.
                  </li>
                  <li>
                    Los documentos que acrediten la identidad o, en su caso, la representación
                    legal del titular.
                  </li>
                  <li>
                    La descripción clara y precisa de los datos personales respecto de los que
                    se busca ejercer alguno de los derechos antes mencionados.
                  </li>
                  <li>
                    Cualquier otro elemento o documento que facilite la localización de los
                    datos personales.
                  </li>
                </ol>
                <p>
                  El Responsable responderá en un plazo máximo de 20 (veinte) días hábiles
                  contados desde la fecha de recepción de la solicitud, informándole la
                  determinación adoptada a través del medio de contacto proporcionado.
                </p>
              </div>
            </section>

            <hr className="border-mesocore-gray-100" />

            <section>
              <h2 className="text-title-3 text-mesocore-gray-900">
                6. Transferencia de Datos Personales
              </h2>
              <p className="mt-3">
                El Responsable le informa que sus datos personales de contacto podrán ser
                compartidos con nuestros <strong className="font-semibold text-mesocore-gray-900">distribuidores autorizados y socios comerciales</strong> con la
                única finalidad de dar cumplimiento a las finalidades primarias de este aviso
                (asignarle un distribuidor cercano, coordinar su compra y brindarle atención
                comercial directa).
              </p>
              <p className="mt-3">
                Fuera de estos casos y de las excepciones previstas en el artículo 37 de la
                LFPDPPP, no realizaremos transferencias de sus datos personales a terceros
                sin su consentimiento expreso.
              </p>
            </section>

            <hr className="border-mesocore-gray-100" />

            <section>
              <h2 className="text-title-3 text-mesocore-gray-900">
                7. Uso de Cookies y Tecnologías de Rastreo
              </h2>
              <p className="mt-3">
                Le informamos que en nuestra página de internet utilizamos cookies y otras
                tecnologías a través de las cuales es posible monitorear su comportamiento
                como usuario de internet, con el objetivo de brindarle un mejor servicio y
                experiencia de usuario al navegar en nuestra página.
              </p>
              <p className="mt-3">
                Los datos que se obtienen de estas tecnologías de análisis son principalmente
                estadísticos, anónimos y no permiten la identificación directa del usuario.
                Usted puede deshabilitar el uso de cookies en cualquier momento configurando
                las opciones de privacidad de su navegador web.
              </p>
            </section>

            <hr className="border-mesocore-gray-100" />

            <section>
              <h2 className="text-title-3 text-mesocore-gray-900">
                8. Cambios al Aviso de Privacidad
              </h2>
              <p className="mt-3">
                El presente aviso de privacidad puede sufrir modificaciones, cambios o
                actualizaciones derivadas de nuevos requerimientos legales, de nuestras
                propias necesidades por los productos o servicios que ofrecemos, o de
                nuestras prácticas de privacidad.
              </p>
              <p className="mt-3">
                Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir
                este aviso de privacidad a través de la publicación de la versión actualizada
                directamente en este sitio web.
              </p>
              <p className="mt-3">
                <strong className="font-semibold text-mesocore-gray-900">Última actualización:</strong> Mayo de 2026.
              </p>
            </section>
          </div>

          <p className="mt-12">
            <Link
              href="/"
              className="text-sm text-primary underline-offset-4 hover:underline"
            >
              Volver al inicio
            </Link>
          </p>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
