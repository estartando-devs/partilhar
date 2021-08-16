import { Fragment, useState } from "react";
import * as S from "./styles";
import { steps } from "../../mocks/stepsData";
import Button from "../Button";
import * as I from "../../assets/img";
import Theme from "../../styles/theme";

// import StepWizard from "react-step-wizard";// <StepWizard></StepWizard>

const Steps = ({ profile, cause, bank, photo, networks, bgColor }) => {
  const [currentStep, setCurrentStep] = useState(0);

  function handleNextStep() {
    setCurrentStep((prevState) => prevState + 1);
  }
  function handlePreviousStep() {
    setCurrentStep((prevState) => prevState - 1);
  }

  return (
    <S.Container>
      <S.ContainerButton>
        {steps.map((step, index, array) => {
          const isActive = index <= currentStep;
          const source = isActive ? I.ok : I.x;
          const color = isActive
            ? Theme.palette.step.primary
            : Theme.palette.step.secondary;
          const isLast = array.length - 1 === index;

          const colorHr =
            index < currentStep
              ? Theme.palette.step.primary
              : Theme.palette.step.secondary;

          return (
            <Fragment key={step.value}>
              <S.Step bgColor={color}>
                <S.Img src={source} alt="step" />
              </S.Step>
              {!isLast && <S.Hr bgColor={colorHr} />}
            </Fragment>
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

      <S.Teste>
        <Button
          onClick={handlePreviousStep}
          backgroundColor={bgColor}
          width="100px"
          height="30px"
        >
          ANTERIOR
        </Button>
        <Button
          onClick={handleNextStep}
          backgroundColor={bgColor}
          width="100px"
          height="30px"
        >
          PRÓXIMO
        </Button>
      </S.Teste>
    </S.Container>
  );
};

export default Steps;
