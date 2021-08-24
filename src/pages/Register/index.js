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
      >
        <StepElement
          values={values}
          setValues={setValues}
          setNiche={setNiche}
        />
      </Steps>
    </LayoutComponent>
  );
};

export default Register;
