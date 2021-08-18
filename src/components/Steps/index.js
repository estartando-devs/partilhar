import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import * as S from "./styles";
import { steps } from "../../mocks/stepsData";
import Button from "../Button";
import * as I from "../../assets/img";
import Theme from "../../styles/theme";

const Steps = ({
  children,
  currentStep,
  setCurrentStep,
  setDatasLocalStorage,
}) => {
  const isLastStep = steps.length - 1 === currentStep;

  const history = useHistory();
  function handleNextStep() {
    setDatasLocalStorage();
    if (currentStep === 4) {
      history.push("/perfil");
      return;
    }
    setCurrentStep((prevState) => prevState + 1);
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
              <S.Step
                bgColor={color}
                onClick={() => {
                  setCurrentStep(index);
                  setDatasLocalStorage();
                }}
              >
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

      <S.ContainerStep>{children}</S.ContainerStep>

      <Button
        onClick={handleNextStep}
        backgroundColor={Theme.palette.primary}
        color={Theme.palette.text.light.primary}
        width="229px"
        height="38px"
      >
        {isLastStep ? "CONCLUIR" : "PRÓXIMO"}
      </Button>
    </S.Container>
  );
};

export default Steps;
