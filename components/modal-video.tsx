"use client";

import { useState, useRef } from "react";


export default function ModalVideo({
}: o) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <></>
)}