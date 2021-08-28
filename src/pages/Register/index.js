import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { LayoutComponent, Steps } from "../../components";
import * as Step from "./Steps";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [values, setValues] = useState([]);
  const [niche, setNiche] = useState("");

  const history = useHistory();

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
    const haveOng = JSON.parse(localStorage.getItem("userOng"));
    if (haveOng) history.push("/perfil");
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
