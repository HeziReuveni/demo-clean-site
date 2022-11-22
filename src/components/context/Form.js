import React, { useContext } from "react";
import { UserContext } from "./context";
import { FiX } from "react-icons/fi";
import {
  ContainerForm,
  FormStyle,
  Textarea,
  InputForm,
  Label,
  ButtonForm,
} from "./styels";

const Form = ({ openForm, setOpenForm }) => {
  const { state, setState, setOpenButton } = useContext(UserContext);

  const onChangeInput = (e, field) => {
    setState((prevState) => {
      let cloneState = { ...prevState };
      cloneState[field] = e.target.value;
      return cloneState;
    });
  };

  const HandleClick = () => {
    setOpenButton(true);
    setOpenForm(!openForm);
  };

  return (
    <div>
      <ContainerForm>
        <FormStyle>
          <div
            style={{
              height: "3vh",

              width: "100%",
            }}
          >
            <FiX
              onClick={() => setOpenForm(false)}
              color="aliceblue"
              style={{
                cursor: "pointer",
              }}
            />
          </div>
          <Label>שם העסק</Label>
          <InputForm
            type="text"
            dir="rtl"
            placeholder="הזן את שם העסק"
            maxLength={20}
            onChange={(e) => onChangeInput(e, "title")}
          />

          <Label>אודות</Label>
          <Textarea
            type="text"
            dir="rtl"
            maxLength={800}
            placeholder="ספרו על עצמכם, על העסק שלכם. מומלץ לרשום על וותק החברה במידה וישנו, המלצות מלקוחות, ואת האהבה שלכם למקצוע ולעסק "
            onChange={(e) => onChangeInput(e, "about")}
          />
          <Label>שירותים</Label>
          <Textarea
            type="text"
            dir="rtl"
            maxLength={800}
            placeholder="רשמו כאן את השירותים שלכם בחברה, ועל הצוות המקצועי שלכם"
            onChange={(e) => onChangeInput(e, "services")}
          />
          <Label>יצירת קשר</Label>
          <InputForm
            type="text"
            dir="rtl"
            value={state["contact"]}
            onChange={(e) => onChangeInput(e, "email")}
            placeholder="כתובת המייל של העסק"
          />
          <InputForm
            type="text"
            dir="rtl"
            value={state["contact"]}
            onChange={(e) => onChangeInput(e, "whatsapp")}
            placeholder="מספר הוואטצפ של העסק "
          />
          <InputForm
            type="text"
            dir="rtl"
            value={state["contact"]}
            onChange={(e) => onChangeInput(e, "facebookSrc")}
            placeholder="קישור לפייסבוק של העסק"
          />
          <ButtonForm onClick={HandleClick}>הצג</ButtonForm>
        </FormStyle>
      </ContainerForm>
    </div>
  );
};

export default Form;
