document.addEventListener("DOMContentLoaded", function () {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = {};
    const formFields = document.querySelectorAll("#form-container input");
    formFields.forEach((field) => {
      formData[field.name] = field.value;
    });
    console.log(formData);
  }
  const form = document.getElementById("my-form");
  form.addEventListener("submit", handleSubmit);

  function addFormField(id, name, type, dataType, attributes = {}) {
    const container = document.getElementById("form-container");
    const field = document.createElement(type);
    field.name = name;
    field.type = type;
    field.id = id;
    console.log("type", type);
    if (type === "input") {
      field.className = "input-textbox-nitin";
    } else if (type === "select") {
      field.className = "select-nitin";
    }
    for (const [key, value] of Object.entries(attributes)) {
      field.setAttribute(key, value);
      console.log(key, value);
    }
    console.log(container);
    container.appendChild(field);
  }
  //addFormField is a function which takes 3 arguments name , type , extra attributes.
  addFormField(1, "name", "input", "text", {
    required: true,
    placeholder: "Enter your name",
  });
  addFormField(2, "email", "select", "email", {
    required: true,
    placeholder: "Enter your email",
  });
  addFormField(3, "age", "radio-btn", "number", {
    min: 18,
    max: 99,
    placeholder: "Enter your age",
  });
});
