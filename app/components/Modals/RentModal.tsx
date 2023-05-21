"use client"

import React from "react";
import Modal from "./Modal";
import useRentModal from "@/app/hooks/useRentModal";

const RentModal = () => {
  const rentModal = useRentModal();
  return (
    <Modal
      title="Airbnb your home"
      onClose={rentModal.onClose}
      isOpen={rentModal.isOpen}
      onSubmit={rentModal.onClose}
      actionLabel="Submit"
    />
  );
};

export default RentModal;
