'use client';
import React from 'react';
import CompanyForm from '@/src/app/components/company-form';

import Modal, { ModalProps } from '@/src/app/components/modal';

export default function CompanyFormModal({ onClose, ...rest }: ModalProps) {
  return (
    <Modal {...rest} onClose={onClose}>
      <CompanyForm onSubmit={() => onClose()} />
    </Modal>
  );
}