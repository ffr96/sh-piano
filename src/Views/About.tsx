import { Modal } from '@/components/Modal';
import useGeneralStore from '@/state/store';
import { about } from '@/utils/constants';

const AboutModal = () => {
  const lang = useGeneralStore((state) => state.lang);
  const aboutView = useGeneralStore((state) => state.aboutView);
  const openAbout = useGeneralStore((state) => state.openAbout);

  const handleClose = () => {
    openAbout(false);
  };
  return (
    <Modal opened={aboutView} onClose={handleClose}>
      <h1 style={{ textAlign: 'center' }}>{about[lang].title}</h1>
      <h2>{about[lang].content}</h2>
    </Modal>
  );
};

export default AboutModal;
