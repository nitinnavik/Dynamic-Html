document.addEventListener("DOMContentLoaded", function () {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = {};
    const formFields = document.querySelectorAll("#form-container input");
    formFields.forEach((field) => {
      formData[field.name] = field.value;
    });
  }
  const form = document.getElementById("my-form");
  form.addEventListener("submit", handleSubmit);

  function addFormField(id, name, cName, type) {
    console.log(id, name, cName, type);
    const container = document.getElementById("form-container");
    const label = document.createElement(type === "string" ? "label" : "");
    label.textContent = name;
    const field = document.createElement(type === "string" ? "input" : "");
    field.name = name;
    field.type = type;
    field.id = id;
    if (type === "string") {
      field.className = "input-textbox-nitin";
    } else if (type === "select") {
      field.className = "select-nitin";
    }

    console.log(field);
    container.appendChild(label);
    container.appendChild(field);
  }

  let apiObj = {
    applicationId: "4b826ab7-eb58-4af7-892a-faa20bda648a",
    forms: {
      paymentForm: [
        {
          collectionId: "31b76ec5-c3a5-4245-9a88-fbf6189fa94f",
          dataUnits: {
            payAmount: {
              dataUnitCode: "c37b7b34-754e-48f8-9968-a2ebbc438d0f",
              dataUnitName: "payAmount",
              dataUnitType: "string",
              dataUnitLabel: "pay amount",
              dataUnitValue: "100",
              dataUnitAttribute: null,
              dataUnitError: null,
              coreValidationMatrixList: [
                {
                  id: 59,
                  dataUnitCode: "payAmount",
                  validationCode: "numeric",
                },
                {
                  id: 60,
                  dataUnitCode: "payAmount",
                  validationCode: "notnull",
                },
              ],
            },

            invoiceNumber: {
              dataUnitCode: "ad88d979-4f85-4bad-b135-0615c433d200",
              dataUnitName: "invoiceNumber",
              dataUnitType: "string",
              dataUnitLabel: "Invoice Number",
              dataUnitValue: "001",
              dataUnitAttribute: null,
              dataUnitError: null,
              coreValidationMatrixList: [
                {
                  id: 50,
                  dataUnitCode: "invoiceNumber",
                  validationCode: "alphanumeric",
                },
                {
                  id: 51,
                  dataUnitCode: "invoiceNumber",
                  validationCode: "notnull",
                },
              ],
            },
          },
        },
      ],
    },
  };
  if (apiObj) {
    if (apiObj?.forms) {
      if (apiObj?.forms?.paymentForm) {
        if (apiObj?.forms?.paymentForm[0]) {
          if (apiObj?.forms?.paymentForm[0]?.dataUnits) {
            console.log(apiObj?.forms?.paymentForm[0]?.dataUnits);
            let index = 0;
            for (const [key, value] of Object.entries(
              apiObj?.forms?.paymentForm[0]?.dataUnits
            )) {
              index = index + 1;
              console.log("value", JSON.stringify(value));
              addFormField(
                value?.dataUnitCode,
                value?.dataUnitLabel,
                value?.dataUnitName,
                value?.dataUnitType //id,name,classname,type
              );
            }
          }
        }
      }
    }
  }
});



