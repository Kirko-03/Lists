const style = require("./MyModal.module.css");

type MyModalType = {
  children: any;
  active: boolean;
  setActive: (active: boolean) => void;
};

export const MyModal: React.FC<MyModalType> = ({
  children,
  active,
  setActive,
}) => {
    const activeModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
        setActive(!active)
    }
  return (
    <div onClick={activeModal}  className={style.modal}>
      <div  onClick={event=>event.stopPropagation()}className={style.modalItems}>{children}</div>
    </div>
  );
};
