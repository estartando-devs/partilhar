import { useState, useEffect } from "react";
import { LayoutComponent, Steps } from "../../components";
import * as Step from "./Steps";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [values, setValues] = useState([]);
  const [niche, setNiche] = useState("");
  const [errorText, setErrorText] = useState("");

  function addDataLocalStorage() {
    const datas = JSON.stringify(values);
    localStorage.setItem("datas", datas);
  }

  function getDatasLocalStorage() {
    const datas = JSON.parse(localStorage.getItem("datas"));
    setValues(datas || []);
    setNiche(datas?.nicho || "");
  }

  useEffect(async () => {
    getDatasLocalStorage();
    const user = JSON.parse(localStorage.getItem("user"));
    if (user)
      setValues((prev) => ({
        ...prev,
        email: user.email,
        isGoogleUser: user.isGoogleUser,
        userId: user.id,
      }));
  }, []);

  const renderStep = {
    0: Step.ProfileData,
    1: Step.Cause,
    2: Step.BankData,
    3: Step.Photos,
    4: Step.SocialNetworks,
  };

  const StepElement = renderStep[currentStep];

  return (
    <LayoutComponent dontShowSearch>
      <Steps
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        addDataLocalStorage={addDataLocalStorage}
        niche={niche}
        values={values}
        setErrorText={setErrorText}
      >
        <StepElement
          values={values}
          setValues={setValues}
          setNiche={setNiche}
          errorText={errorText}
        />
      </Steps>
    </LayoutComponent>
  );
};

export default Register;
