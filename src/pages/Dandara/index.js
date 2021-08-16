import { useState } from "react";
import { Steps } from "../../components";

const Dandara = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <>
      <Steps currentStep={currentStep} setCurrentStep={setCurrentStep}>
        <div>oi</div>
      </Steps>
    </>
  );
};

export default Dandara;
