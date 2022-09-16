import { Modal } from '@/components/Modal';
import { tips } from '@/utils/constants';

import useGeneralStore from '@/state/store';
import Spoilers from '@/components/Spoilers';

const TipsModal = () => {
  const lang = useGeneralStore((state) => state.lang);
  const tipView = useGeneralStore((state) => state.tipView);
  const openTip = useGeneralStore((state) => state.openTip);

  const handleClose = () => {
    openTip(false);
  };
  return (
    <Modal opened={tipView} onClose={handleClose}>
      <h1 style={{ textAlign: 'center' }}>{tips[lang].title}</h1>
      {tips[lang].warning}
      <h2>
        <Spoilers tips={tips[lang].content} />
      </h2>
    </Modal>
  );
};

export default TipsModal;
