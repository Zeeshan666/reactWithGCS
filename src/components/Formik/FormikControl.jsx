import React from "react";

import Input from "../InputTypes/Input";
import Select from "../InputTypes/Select";
import TextArea from "../InputTypes/TextArea";
import DatePicker from "../InputTypes/DatePicker";
import CheckBox from "../InputTypes/CheckBox";
import Radio from "../InputTypes/Radio";


function FormikControl(props) {

    const { control, ...rest } = props; // control => decide which input type to use in the form ; rest => rest of the props i.e name, id etc

    switch (control) {
        case "input":
            return <Input {...rest} />;
        case "select":
            return <Select {...rest} />;
        case "textarea":
            return <TextArea {...rest} />;
        case "date":
            return <DatePicker {...rest} />;
        case "checkbox":
            return <CheckBox {...rest} />;
        case "radio":
            return <Radio {...rest} />;
        default:
            return null;
    }
}

export default FormikControl;