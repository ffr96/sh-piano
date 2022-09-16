import { Modal } from '@/components/Modal';
import useGeneralStore from '@/state/store';

const WinModal = () => {
  const win = useGeneralStore((state) => state.won);
  const closeWin = useGeneralStore((state) => state.closeWin);
  return (
    <Modal opened={win} onClose={closeWin}>
      🙌🙌🙌🙌🙌🙌
    </Modal>
  );
};

export default WinModal;
