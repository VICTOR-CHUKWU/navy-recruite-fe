import * as yup from "yup";

const personalDetailFormSchema = yup
    .object()
    .shape({
        firstName: yup
            .string()
            .required("First name is required")
            .min(3, "First name should be at least 3 letters"),

        lastName: yup
            .string()
            .required("Last name is required")
            .min(3, "Last name should be at least 3 letters"),
        email: yup.string().required("Email is required"),
        state: yup
            .string()
            .min(2, "Select a valid State")
            .required("State is required"),
        address: yup
            .string()
            .min(2, "Enter a valid Address")
            .required("Address is required"),
        phoneNumber: yup.string().required("Phone number is required"),
    })
    .required();

export {
    personalDetailFormSchema
}