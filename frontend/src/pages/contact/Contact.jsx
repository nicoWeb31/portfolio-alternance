import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../components/spinner/Spinner";
import Alert from "../../components/alert/Alert";
import { createMessage } from "../../redux/actions/massageAction";
import { Field, reduxForm, reset } from "redux-form";

import "./contact.style.scss";
import Reseau from "../../components/reseau/Reseau";
import BaniereContact from "../../components/banniereContact/BaniereContact";
import TitreSecondary from "../../components/titre/TitreSecondary";
//_________________________________render input______________________________________

const renderError = (meta) => {
    if (meta.error && meta.touched) {
        return <small className="errorMess">{meta.error}</small>;
    }
};

const renderInput = (formProps) => {
    return (
        <div className="form__group">
            <input
                {...formProps.input}
                autoComplete="off"
                className={`${
                    formProps.meta.touched
                        ? formProps.meta.error
                            ? "inpuTError"
                            : "inputOK"
                        : ""
                }  form__input `}
                placeholder={formProps.placeholder}
            />
            <label htmlFor="nom" className="form__label">
                {formProps.label}
            </label>
            {renderError(formProps.meta)}
        </div>
    );
};

const renderTextarea = (formProps) => {
    console.log(
        "🚀 ~ file: Contact.jsx ~ line 58 ~ renderTextarea ~ formProps",
        formProps.meta
    );
    return (
        <div className="form__group">
            <textarea
                name="message"
                {...formProps.input}
                autoComplete="off"
                value={formProps.input.value}
                onChange={formProps.input.onChange}
                id="message"
                cols="30"
                rows="10"
                className={`${
                    formProps.meta.touched
                        ? formProps.meta.error
                            ? "inpuTError"
                            : "inputOK"
                        : ""
                }  form__input `}
                placeholder="votre message..."
            ></textarea>
            <label htmlFor="massage" className="form__label">
                {formProps.label}
            </label>
            {renderError(formProps.meta)}
        </div>
    );
};

const Contact = ({ history, handleSubmit }) => {
    const [successMess, setSuccessMess] = useState(
        "Merci, votre message a été envoyé avec succès ! J'y répondrai dès que possible !"
    );

    const dispatch = useDispatch();

    const newMessage = useSelector((state) => state.messages);
    const { loading, success } = newMessage;

    // const form = useSelector((state) => state.form);

    useEffect(() => {
        if (success) {
            history.push("/contact");
        }
    }, [history, success]);

    //_________________________________fonction______________________________________
    const onHandleSubmit = (formValue) => {
        const data = {
            name: formValue.name,
            email: formValue.email,
            message: formValue.message,
        };
        dispatch(createMessage(data));
        dispatch(reset("messageForm"));
    };
    return (
        <div className="contact" id="hautPageContact">
            <TitreSecondary>vous pouvez me contacter</TitreSecondary>
            <BaniereContact message=" 06-63-32-38-36" />
            <div className="spin">
                {loading && <Spinner message="" />}
                {/* {error && <Alert variant="danger">{error}</Alert>} */}
                {success && <Alert variant="success">{successMess}</Alert>}
            </div>

            <div className="formulaire">
                <div className="formulaire__form" >
                    <h4>Laissez moi un message</h4>
                    <form
                        onSubmit={handleSubmit(onHandleSubmit)}
                        className="form"
                    >
                        <Field
                            name="name"
                            component={renderInput}
                            label="Votre nom !"
                            placeholder="votre nom..."
                        />

                        <Field
                            name="email"
                            component={renderInput}
                            label="Votre mail !"
                            placeholder="votre email..."
                        />

                        <Field
                            name="message"
                            component={renderTextarea}
                            label="Votre Message !"
                        />

                        <button className="btn-submit" type="submit">
                            <i className="fas fa-arrow-right"></i>
                            {"   "} envoyer
                        </button>
                    </form>
                </div>
            </div>
            <hr />

            <div>
                <Reseau />
            </div>
        </div>
    );
};

const validate = (formValues) => {
    const errors = {};
    if (!formValues.name) {
        //only ran if user did not enter a name
        errors.name = "vous devez entrer votre nom !";
    }

    if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            formValues.email
        ) !== true
    ) {
        errors.email = "votre adresse email a un problème !";
    }
    if (!formValues.email) {
        //only ran if user did not enter a name
        errors.email = "vous devez entrer votre mail !";
    }

    if (!formValues.message) {
        //only ran if user did not enter a name
        errors.message = "vous devez entrer un message !";
    }

    return errors;
};

export default reduxForm({
    form: "messageForm",
    validate,
})(Contact);
