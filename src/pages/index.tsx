import { FormEventHandler, useEffect, useState } from "react";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { useRouter } from "next/router";
import localFont from "next/font/local";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { toast } from "sonner";
import Image from "next/image";

import { db } from "@/config/firebase";
import Modal from "@/components/Modal";

const googleMedium = localFont({
  src: "../../public/fonts/Google-Sans-Medium.ttf",
  display: "swap",
  weight: "600",
  // variable: "--font-google-bold",
});

export default function Home() {
  const { push } = useRouter();

  const [warnModal, setWarnModal] = useState(false);

  useEffect(() => {
    if (navigator.userAgent.match(/FBAN|FBAV/i)) {
      setWarnModal(true);
    }
  }, []);

  return (
    <section className="min-h-screen pt-10 lg:pt-20 relative font-google-reg bg-black flex justify-center items-center">
      <Modal
        title="In-app browser detected"
        description="To avoid running into issues, we recommend opening the certificate generator in an external browser."
        isOpen={warnModal}
        handleConfirm={{
          text: "Understood",
          fn: () => setWarnModal(false),
        }}
        onClose={() => null}
      />

      <Image
        height={2552}
        width={1436}
        src={"/images/main-bg.png"}
        alt="Background image"
        className="absolute top-0 left-0 z-0 object-cover w-full h-full"
      />

      <div className="glassmorph bottom-12 border-2 rounded-[3rem] border-white/25 max-w-screen-sm z-30 relative p-12 mx-auto inline-block">
        <Button
          type="button"
          className={`rounded-full text-white ${googleMedium.className}`}
          onClick={() => push("/portal")}
        >
          Enter Portal
        </Button>
      </div>
      {/* <Footer /> */}
    </section>
  );
}
