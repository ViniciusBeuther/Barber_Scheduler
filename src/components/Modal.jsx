import { Alert } from "@material-tailwind/react";

const Modal = ({ isModalOpen, closeModal, message }) => {
  return (
    <section>
      {isModalOpen && (
        <article className="fixed left-0 top-0 z-10 flex h-full w-full items-start justify-center bg-black bg-opacity-40 p-6">
          <Alert
            open={isModalOpen}
            onClose={() => closeModal(false)}
            animate={{
              mount: { y: 0 },
              unmount: { y: 100 },
            }}
            className="w-60 bg-customOrange-500"
          >
            {message}
          </Alert>
        </article>
      )}
    </section>
  );
};
export default Modal;
