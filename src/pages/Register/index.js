import { useState } from "react";
import { LayoutComponent, Steps } from "../../components";
import * as Step from "./Steps";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [values, setValues] = useState([]);
  const [color, setColor] = useState("");

  function addDataLocalStorage() {
    const datas = JSON.stringify(values);
    localStorage.setItem("datas", datas);
  }

  const renderStep = {
    0: <Step.ProfileData values={values} setValues={setValues} />,
    1: <Step.Cause values={values} setValues={setValues} setColor={setColor} />,
    2: <Step.BankData />,
    3: <Step.Photos />,
    4: <Step.SocialNetworks />,
  };

  return (
    <LayoutComponent dontShowSearch>
      <Steps
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        addDataLocalStorage={addDataLocalStorage}
        colorButtom={color}
      >
        {renderStep[currentStep]}
      </Steps>
    </LayoutComponent>
  );
};

export default Register;
