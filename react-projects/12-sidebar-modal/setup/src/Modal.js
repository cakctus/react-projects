import React from "react"
import { FaTimes } from "react-icons/fa"
import { useGlobalContext } from "./context"
const Modal = ({ close }) => {
  const { modal, closeModal } = useGlobalContext()

  // modal-overlay show-modal
  return (
    <div
      className={` ${modal ? "modal-overlay show-modal" : "modal-overlay"}`}
      onClick={() => close()}
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <h3>content</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Modal
