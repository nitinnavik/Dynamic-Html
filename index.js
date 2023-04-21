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
            customerName: {
              dataUnitCode: "bb64fec4-6113-444a-b7f3-95b8f3298167",
              dataUnitName: "customerName",
              dataUnitType: "string",
              dataUnitLabel: "customer name",
              dataUnitValue: "navin ogale",
              dataUnitAttribute: null,
              dataUnitError: null,
              coreValidationMatrixList: [
                {
                  id: 46,
                  dataUnitCode: "customerName",
                  validationCode: "alphabet",
                },
                {
                  id: 47,
                  dataUnitCode: "customerName",
                  validationCode: "notnull",
                },
              ],
            },
            email: {
              dataUnitCode: "e384290f-7606-44dd-837d-eb893e7dfa15",
              dataUnitName: "email",
              dataUnitType: "string",
              dataUnitLabel: "email",
              dataUnitValue: "navin.ogale@gmail.com",
              dataUnitAttribute: null,
              dataUnitError: null,
              coreValidationMatrixList: [
                {
                  id: 54,
                  dataUnitCode: "email",
                  validationCode: "email",
                },
                {
                  id: 55,
                  dataUnitCode: "email",
                  validationCode: "notnull",
                },
              ],
            },
            invoiceAmount: {
              dataUnitCode: "1d0ca365-d8a6-48b1-a1c0-dfd1bfc41c05",
              dataUnitName: "invoiceAmount",
              dataUnitType: "string",
              dataUnitLabel: "Invoice Amount",
              dataUnitValue: "100",
              dataUnitAttribute: null,
              dataUnitError: null,
              coreValidationMatrixList: [
                {
                  id: 52,
                  dataUnitCode: "invoiceAmount",
                  validationCode: "numeric",
                },
                {
                  id: 53,
                  dataUnitCode: "invoiceAmount",
                  validationCode: "notnull",
                },
              ],
            },
            nilkamalSapCustomerCode: {
              dataUnitCode: "a6804cb5-7684-4ed8-92ac-1e5d0fa1fea6",
              dataUnitName: "nilkamalSapCustomerCode",
              dataUnitType: "string",
              dataUnitLabel: "Nilkamal SAP Customer Code",
              dataUnitValue: "cust01",
              dataUnitAttribute: null,
              dataUnitError: null,
              coreValidationMatrixList: [
                {
                  id: 48,
                  dataUnitCode: "nilkamalSapCustomerCode",
                  validationCode: "alphanumeric",
                },
                {
                  id: 49,
                  dataUnitCode: "nilkamalSapCustomerCode",
                  validationCode: "notnull",
                },
              ],
            },
            mobileNumber: {
              dataUnitCode: "2bfbdc56-722d-4da7-ab15-ee0e5698e752",
              dataUnitName: "mobileNumber",
              dataUnitType: "string",
              dataUnitLabel: "mobile number",
              dataUnitValue: "8087792116",
              dataUnitAttribute: null,
              dataUnitError: null,
              coreValidationMatrixList: [
                {
                  id: 56,
                  dataUnitCode: "mobileNumber",
                  validationCode: "numeric",
                },
                {
                  id: 57,
                  dataUnitCode: "mobileNumber",
                  validationCode: "10_digit",
                },
                {
                  id: 58,
                  dataUnitCode: "mobileNumber",
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



