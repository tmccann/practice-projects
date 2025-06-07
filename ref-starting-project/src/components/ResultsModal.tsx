import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  targetTime: number;
  timeRemaining: number;
  onReset: () => void;
};

const ResultsModal = forwardRef(
  ({ targetTime, timeRemaining, onReset }: ModalProps, ref) => {
    const dialog = useRef<HTMLDialogElement>(null);

    const userLost = timeRemaining <= 0;
    const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2);
    const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);
    const modalRoot = document.getElementById("modal");
    if (!modalRoot) return null;

    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current?.showModal();
        },
      };
    });
    return createPortal(
      <dialog ref={dialog} onClose={onReset} className="result-modal">
        {userLost && <h2>You Lost!</h2>}
        {!userLost && <h2>Your Score: {score}</h2>}
        <p>
          The target time was{" "}
          <strong>
            {targetTime} second {targetTime > 1 ? "s" : ""}
          </strong>
        </p>
        <p>
          <strong> {formattedTimeRemaining} seconds remaining</strong>
        </p>
        <form method="dialog" onSubmit={onReset}>
          <button>Close</button>
        </form>
      </dialog>,
      modalRoot
    );
  }
);

export default ResultsModal;
