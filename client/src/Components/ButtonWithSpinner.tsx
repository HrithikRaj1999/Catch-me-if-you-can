import Spinner from "./Spinner";
import { ButtonWithSpinnerProps } from "../util/types";
import { cn } from "../util/MergeClass";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";

const ButtonWithSpinner = ({
  onClick,
  type = "button",
  className,
  spinnerClassName,
  w,
  h,
  children,
  ...rest
}: ButtonWithSpinnerProps) => {
  const [isSpinning, setSpinning] = useState(false);

  const handleClickCallback = useCallback(async () => {
    if (onClick) {
      try {
        setSpinning(true);
        await onClick();
      } catch (error: any) {
        toast.error(error);
      } finally {
        setSpinning(false);
      }
    }
  }, [onClick]);
  return (
    <div
      className={cn(
        "flex  disabled:bg-blue-200 min-w-20 justify-center items-center",
        className
      )}
    >
      <button
        className="flex flex-row  justify-center items-center gap-x-1 px-1 "
        {...{ onClick: handleClickCallback, ...rest }}
      >
        {isSpinning ? <Spinner {...{ w, h, spinnerClassName }} /> : children}
      </button>
    </div>
  );
};

export default ButtonWithSpinner;
