import { configure, defineRule } from "vee-validate";
import { email as EmailVerification, required, min } from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";

defineRule("required", required);

defineRule("passwordConfirm", (value, [target]) => {
  return value === target || "Las contraseñas no coinciden";
});

defineRule("min", min);

defineRule("email", EmailVerification);

configure({
  validateOnInput: true,
  bails: false,
  generateMessage: localize({
    en: {
      messages: {
        required: "Este campo es obligatorio",
        email: "Por favor, introduce un email válido",
        password: "La contraseña debe tener al menos 6 caracteres",
        min: "Este campo debe tener al menos 6 caracteres",
        passwordConfirm: "Las contraseñas no coinciden",
      },
    },
  }),
});
