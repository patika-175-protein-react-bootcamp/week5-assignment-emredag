import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import DarkIcon from "../constants/icons/darkIcon";
import LightIcon from "../constants/icons/lightIcon";
import "../styles/content.css";

export default function Content({ colorState, setColor }) {
  // *********** Yup Validation ***********
  const validation = Yup.object({
    name: Yup.string(),
    surName: Yup.string(),
    email: Yup.string()
      .email("Geçerli bir mail adresi giriniz.")
      .required("Eposta alanı zorunludur."),

    username: Yup.string().required("Kullanıcı adı boş bırakılamaz."),
    password: Yup.string().required("Şifre alanı boş bırakılamaz."),
    confirmPassword: Yup.string()
      .required("Şifrenizi tekrar giriniz.")
      .oneOf([Yup.ref("password")], "Şifreler aynı değil."),
    agree: Yup.boolean().oneOf([true], "Sözleşmeyi kabul etmelisin."),
  });
  // **************************************

  return (
    <div
      className={colorState == true ? "darkBackground rightSide" : "rightSide"}
    >
      <div
        className="themeIcon"
        onClick={() => {
          setColor(!colorState);
        }}
      >
        {colorState == true ? <LightIcon /> : <DarkIcon />}
      </div>
      <div className="rightContainer">
        <div
          className={
            colorState == true ? "darkThemeColor rightTitle" : "rightTitle"
          }
        >
          <h3>Kayıt</h3>
          <div
            className={colorState == true ? "darkStick stick" : "stick"}
          ></div>
        </div>
        <div className="registerForm">
          {" "}
          <Formik
            initialValues={{
              name: "",
              surName: "",
              email: "",
              username: "",
              password: "",
              confirmPassword: "",
              agree: false,
            }}
            validationSchema={validation}
            onSubmit={(values, { resetForm, setSubmitting }) => {
              console.log(values);
              setTimeout(() => {
                resetForm();
              }, 1000);
            }}
          >
            {({
              values,
              errors,
              handleChange,
              handleSubmit,
              dirty,
              isSubmitting,
              touched,
            }) => (
              // *********** Form ***********
              <form className="form" onSubmit={handleSubmit}>
                <div className="names ">
                  <div className="nameInput">
                    <label
                      className={
                        colorState == true
                          ? "darkThemeColor inputTitle"
                          : "inputTitle"
                      }
                      htmlFor="name"
                    >
                      İSİM
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="İsmini gir"
                      className="allInput"
                      value={values.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="surNameInput ">
                    <label
                      className={
                        colorState == true
                          ? "darkThemeColor inputTitle"
                          : "inputTitle"
                      }
                      htmlFor="surName"
                    >
                      SOYİSİM
                    </label>
                    <input
                      id="surName"
                      name="surName"
                      type="text"
                      placeholder="Soyismini gir"
                      className="allInput"
                      value={values.surName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="emailInput inputContainers">
                  <label
                    className={
                      colorState == true
                        ? "darkThemeColor inputTitle"
                        : "inputTitle"
                    }
                    htmlFor="email"
                  >
                    E-POSTA <span className="required">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="E-posta adresini gir"
                    className="allInput"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="errorMsg">{errors.email}</div>
                  )}
                </div>

                <div className="emailInput inputContainers">
                  <label
                    className={
                      colorState == true
                        ? "darkThemeColor inputTitle"
                        : "inputTitle"
                    }
                    htmlFor="username"
                  >
                    KULLANICI ADI <span className="required">*</span>
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Kullanıcı adını gir"
                    className="allInput"
                    value={values.username}
                    onChange={handleChange}
                  />
                  {errors.username && (
                    <div className="errorMsg">{errors.username}</div>
                  )}
                </div>

                <div className="passwordInput inputContainers">
                  <label
                    className={
                      colorState == true
                        ? "darkThemeColor inputTitle"
                        : "inputTitle"
                    }
                    htmlFor="password"
                  >
                    ŞİFRE <span className="required">*</span>
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Şifreni gir"
                    className="allInput"
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <div className="errorMsg">{errors.password}</div>
                  )}
                </div>

                <div className="confirmPasswordInput inputContainers">
                  <label
                    className={
                      colorState == true
                        ? "darkThemeColor inputTitle"
                        : "inputTitle"
                    }
                    htmlFor="confirmPassword"
                  >
                    ŞİFRENİ TEKRAR GİR <span className="required">*</span>
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Şifreni doğrula"
                    className="allInput"
                    value={values.confirmPassword}
                    onChange={handleChange}
                  />
                  {errors.confirmPassword && (
                    <div className="errorMsg">{errors.confirmPassword}</div>
                  )}
                </div>

                <div className="checkBox inputContainers">
                  <input
                    id="agree"
                    name="agree"
                    type="checkbox"
                    value={values.agree}
                    onChange={handleChange}
                  />
                  <label htmlFor="agree" className="checkLabel">
                    Sözleşmeyi kabul ediyorum
                  </label>
                  {errors.agree && (
                    <div className="errorMsg">{errors.agree}</div>
                  )}
                </div>

                <div className="submitButtonContainer inputContainers">
                  <button
                    type="submit"
                    className={
                      colorState == true
                        ? "darkSubmitColor submitBtn"
                        : "submitBtn"
                    }
                    disabled={!dirty || isSubmitting}
                  >
                    KAYIT OL
                  </button>
                </div>
              </form>
              // ****************************
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
