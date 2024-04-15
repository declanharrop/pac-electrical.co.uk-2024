import { useContext } from 'react';
import { MenuContext } from '../../Context/MenuContext';

export default function ModalButton({
  buttonTitle = 'Open Modal',
  id = 'hello',
}) {
  const { toggleModal } = useContext(MenuContext);

  return (
    <div className="modal-button">
      <button type="button" onClick={() => toggleModal(id)}>
        {buttonTitle}
      </button>
    </div>
  );
}
