import Image from "next/image";
import CloseIcon from "public/icons/customModal/closeIcon.svg";

type ModalProps = {
  show: boolean;
  close: any;
  children: any;
  heading?: string;
  modalMarginTop?: string;
  padding?: string;
  removeCloseIcon?: boolean;
  externalStyle?: string;
  canExit?: boolean;
};

const CustomModal = ({
  show,
  close,
  children,
  heading,
  modalMarginTop,
  padding,
  removeCloseIcon,
  externalStyle,
  canExit = true,
}: ModalProps) => {
  return (
    <div
      className={`fixed bottom-0 left-0 top-0 flex h-[100vh] w-full items-center justify-center transition-all ease-in-out ${
        show ? "visible z-50 opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        className={`absolute -z-10 h-full w-full bg-black bg-opacity-60 backdrop-blur-sm backdrop-opacity-0 transition-all ${
          show && "backdrop-opacity-100"
        }`}
        onClick={canExit && close}
      />

      <div
        className={`${modalMarginTop ? modalMarginTop : "md:my-[100px]"} ${externalStyle} ${
          padding ? padding : "p-6 md:p-[30px] md:pl-[50px]"
        } mount h-auto w-auto overflow-auto rounded-xl  bg-background md:max-h-[80vh] md:max-w-[1140px] md:rounded-[20px]`}
      >
        <div className="flex justify-between">
          <div>
            {heading && <div className="font-heading text-vdao-dark pt-5 text-[26px] font-medium md:text-3xl">{heading}</div>}
          </div>

          {!removeCloseIcon && canExit && (
            <Image
              src={CloseIcon}
              alt="close"
              className="float-right cursor-pointer duration-300 hover:rotate-[90deg] hover:scale-110"
              onClick={() => {
                close();
              }}
            />
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
