import { useState, useEffect } from "react";
import { LayoutComponent, Steps } from "../../components";
import * as Step from "./Steps";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [values, setValues] = useState([]);
  const [niche, setNiche] = useState("");

  function addDataLocalStorage() {
    const datas = JSON.stringify(values);
    localStorage.setItem("datas", datas);
  }

  function getDatasLocalStorage() {
    const datas = JSON.parse(localStorage.getItem("datas"));
    setValues(datas || []);
    setNiche(datas?.nicho || "");
  }

  useEffect(() => {
    getDatasLocalStorage();
  }, []);

  const renderStep = {
    0: <Step.ProfileData values={values} setValues={setValues} />,
    1: <Step.Cause values={values} setValues={setValues} setNiche={setNiche} />,
    2: <Step.BankData values={values} setValues={setValues} />,
    3: <Step.Photos values={values} setValues={setValues} />,
    4: <Step.SocialNetworks />,
  };

  return (
    <LayoutComponent dontShowSearch>
      <Steps
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        addDataLocalStorage={addDataLocalStorage}
        niche={niche}
      >
        {renderStep[currentStep]}
      </Steps>
    </LayoutComponent>
  );
};

export default Register;
