import { useState } from "react";
import * as S from "./styles";
import { steps } from "../../mocks/stepsData";
import Button from "../Button";
import * as I from "../../assets/img";

// import StepWizard from "react-step-wizard";// <StepWizard></StepWizard>

const Steps = ({ profile, cause, bank, photo, networks, bgColor }) => {
  const [currentStep, setCurrentStep] = useState(0);

  function handleNextStep() {
    setCurrentStep((prevState) => prevState + 1);
  }
  return (
    <S.Container>
      <S.ContainerButton>
        {steps.map((step, index, array) => {
          const isActive = index === currentStep;
          const source = isActive ? I.ok : I.x;
          const isLast = array.length - 1 === index;

          return (
            <>
              <S.Step>
                <S.Img src={source} alt="step" />
              </S.Step>
              {!isLast && <S.Hr />}
            </>
          );
        })}
      </S.ContainerButton>
      <S.ContainerText>
        <S.Text>Dados do Perfil</S.Text>
        <S.Text>Causas</S.Text>
        <S.Text>Dados Bancários</S.Text>
        <S.Text>Fotos</S.Text>
        <S.Text>Redes Sociais</S.Text>
      </S.ContainerText>

      <S.ContainerStep>
        {steps[currentStep].id === "Perfil" && (
          <S.ContentStep>{profile}</S.ContentStep>
        )}
        {steps[currentStep].id === "Causas" && (
          <S.ContentStep>{cause}</S.ContentStep>
        )}
        {steps[currentStep].id === "Dados Bancários" && (
          <S.ContentStep>{bank}</S.ContentStep>
        )}
        {steps[currentStep].id === "Fotos" && (
          <S.ContentStep>{photo}</S.ContentStep>
        )}
        {steps[currentStep].id === "Redes Sociais" && (
          <S.ContentStep>{networks}</S.ContentStep>
        )}
      </S.ContainerStep>
      <Button
        onClick={handleNextStep}
        width="229px"
        height="38px"
        backgroundColor={bgColor}
      >
        PRÓXIMO
      </Button>
    </S.Container>
  );
};

export default Steps;
