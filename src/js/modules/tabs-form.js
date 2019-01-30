export const tabsForm = () => {
  const buttons = document.querySelector(".tab");

  if (buttons) {
    buttons.addEventListener("click", e => {
      switch (e.target.textContent) {
        case "Persona Jurídica":
          openForm(e, "persona");
          break;
        case "Empresa":
          openForm(e, "empresa");
          break;
        default:
          break;
      }
    });
  }

  function openForm(evt, formName) {
    const formEmpresa = document.getElementById("empresa");
    const formPersona = document.getElementById("persona");

    if (formName === "empresa" && formEmpresa.classList.contains("hide")) {
      formEmpresa.classList.remove("hide");
      formEmpresa.classList.add("show");
      formPersona.classList.add("hide");
    }

    if (formName === "persona" && formPersona.classList.contains("hide")) {
      formPersona.classList.remove("hide");
      formPersona.classList.add("show");
      formEmpresa.classList.add("hide");
    }
  }
};
