import { useState } from "react";
import { Steps } from "../../components";
import * as Step from "./Steps";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const renderStep = {
    0: <Step.ProfileData />,
    1: <Step.Cause />,
    2: <Step.BankData />,
    3: <Step.Photos />,
    4: <Step.SocialNetworks />,
  };

  return (
    <>
      <Steps currentStep={currentStep} setCurrentStep={setCurrentStep}>
        {renderStep[currentStep]}
      </Steps>
    </>
  );
};

export default Register;
