/* eslint-disable */
import { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";

import { steps } from "../../mocks/stepsData";
import { filters } from "../../mocks/filterData";
import { registerOng } from "../../services/ongs.service";
import { registerWithEmailAndPassword } from "../../services/auth.service";

import Tag from "../Tag";
import Loading from "../Loading";
import Theme from "../../styles/theme";

import * as S from "./styles";
import * as I from "../../assets/img";

const Steps = ({
  children,
  currentStep,
  setCurrentStep,
  addDataLocalStorage,
  niche,
  values,
  setErrorText,
}) => {
  const isLastStep = steps.length - 1 === currentStep;
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  async function handleNextStep() {
    addDataLocalStorage();
    if (currentStep === 0 && !values.userId) {
      try {
        setLoading(true);
        const { email, password } = values;
        const response = await registerWithEmailAndPassword({
          email,
          password,
        });
        const { user } = response;
        const newValues = { ...values, userId: user.id };
        localStorage.setItem("datas", JSON.stringify(newValues));
        setLoading(false);
        setCurrentStep((prevState) => prevState + 1);
        setErrorText("");
      } catch (err) {
        setLoading(false);
        setErrorText(err.message);
      }
      return;
    }
    if (currentStep === 4) {
      try {
        setLoading(true);
        const response = await registerOng(values);
        setLoading(false);
        localStorage.setItem("datas", JSON.stringify({}));
        history.push("/perfil", { response });
      } catch (err) {
        setLoading(false);
      }
      return;
    }
    setCurrentStep((prevState) => prevState + 1);
  }

  const findCause = niche && filters.find((filter) => filter.niche === niche);

  return (
    <S.Container>
      {niche && (
        <S.TagContainer>
          <Tag
            bgColor={findCause.bgColor}
            niche={findCause.title}
            icon={findCause.icon}
          />
        </S.TagContainer>
      )}
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
                  addDataLocalStorage();
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

      {loading ? (
        <S.ContainerLoading>
          <Loading />
        </S.ContainerLoading>
      ) : (
        <S.ContainerStep>{children}</S.ContainerStep>
      )}

      <S.Button
        onClick={handleNextStep}
        width="229px"
        height="38px"
        bgColor={findCause.bgColor}
      >
        {isLastStep ? "CONCLUIR" : "PRÓXIMO"}
      </S.Button>
    </S.Container>
  );
};

export default Steps;
