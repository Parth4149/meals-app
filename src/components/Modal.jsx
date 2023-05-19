import { useGlobalContext } from "../Context";

const Modal = () => {
  const { setShowModal, selectedMeal } = useGlobalContext();
  const {
    strMealThumb: image,
    strMeal: title,
    strInstructions: text,
    strSource: source,
  } = selectedMeal;

  const closeModalOverlay = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setShowModal(false);
    }
  };
  return (
    <aside className="modal-overlay" onClick={closeModalOverlay}>
      <div className="modal-container">
        <img className="img modal-img" src={image} alt="" />
        <div className="modal-content">
          <h3>{title}</h3>
          <p>Cooking Instructions</p>
          <p>{text}</p>
          <a href={source} target="_blank">
            Original Source
          </a>
          <button
            onClick={() => setShowModal(false)}
            className="btn btn-hipster"
            type="button"
          >
            close
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
