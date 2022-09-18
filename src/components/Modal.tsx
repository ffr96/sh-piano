import { getMediaWidth } from '@/utils/functions';
import { Modal as MantineModal, ModalProps } from '@mantine/core';
import haloBg from '@/assets/halo-of-the-sun.webp';

import './modal.css';

export const Modal = ({
  transparent,
  ...props
}: ModalProps & { transparent?: boolean }) => {
  const isWide = getMediaWidth();
  return (
    <MantineModal
      centered
      withCloseButton={false}
      opened={props.opened}
      onClose={props.onClose}
      size={isWide ? 1050 : 400}
      styles={{
        modal: {
          backgroundColor: transparent ? 'transparent' : 'lightgrey',
        },
      }}
    >
      <div className='content'>
        {props.children}
        {transparent == undefined && (
          <img
            loading='eager'
            src={haloBg}
            alt='Halo of the sun logo'
            width={'35%'}
            height={'35%'}
            style={{ opacity: 0.4 }}
          />
        )}
      </div>
    </MantineModal>
  );
};
