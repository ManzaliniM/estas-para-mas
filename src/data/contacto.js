// src/data/contacto.js
// ÚNICA fuente de verdad del contacto de WhatsApp del sitio.
// Si el número o el mensaje cambian, editar SOLO acá: todos los
// componentes (Hero, Header, Footer, Contacto, Actividades, Sponsors)
// importan estas constantes y quedan sincronizados.
//
// Nota: el mensaje va URL-encoded (los espacios son %20, los acentos
// aparecen como códigos %C3%A1, etc.) porque va pegado al link de
// https://wa.me/ — así lo formatea WhatsApp.
export const WA_NUMBER = "5492494377348";

// Mensaje genérico del sitio (va URL-encoded para el link de wa.me).
export const WA_MSG =
    "Hola%20Mariano%2C%20vi%20la%20p%C3%A1gina%20web%20de%20Est%C3%A1s%20Para%20M%C3%A1s%20y%20quiero%20empezar%20a%20entrenar.%20%C2%BFC%C3%B3mo%20hago%3F";

// Mensaje especial del CTA "¿Querés compartir tu experiencia?" (testimonios).
// Va en texto normal: el componente que lo usa lo codifica con
// encodeURIComponent al armar el link, así no hay que encodear a mano.
// El remitente llena la historia suya después de los dos puntos.
export const WA_MSG_TESTIMONIOS =
    "Hola Mariano, quiero compartir mi experiencia entrenando con Estás Para Más. Acá va mi historia: ";
