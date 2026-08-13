"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Product, Service, PortfolioProject } from "@/types";

type ModalState =
  | { type: "product"; data: Product }
  | { type: "service"; data: Service }
  | { type: "project"; data: PortfolioProject }
  | null;

interface ModalContextValue {
  modal: ModalState;
  openProductModal: (product: Product) => void;
  openServiceModal: (service: Service) => void;
  openProjectModal: (project: PortfolioProject) => void;
  closeModal: () => void;
  prefillOrderProduct: string | null;
  setPrefillOrderProduct: (name: string | null) => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ModalState>(null);
  const [prefillOrderProduct, setPrefillOrderProduct] = useState<string | null>(null);

  const openProductModal = (product: Product) => setModal({ type: "product", data: product });
  const openServiceModal = (service: Service) => setModal({ type: "service", data: service });
  const openProjectModal = (project: PortfolioProject) => setModal({ type: "project", data: project });
  const closeModal = () => setModal(null);

  return (
    <ModalContext.Provider
      value={{
        modal,
        openProductModal,
        openServiceModal,
        openProjectModal,
        closeModal,
        prefillOrderProduct,
        setPrefillOrderProduct,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within a ModalProvider");
  return ctx;
}
