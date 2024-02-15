import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import localFont from "next/font/local";
import Button from "@/components/Button";
import Image from "next/image";

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
    <section className="min-h-screen pt-10 lg:pt-20 relative font-google-reg bg-black grid place-items-center">
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

      <div className="relative z-10">
        <Image
          height={300}
          width={300}
          src={"/images/devcon-logo-round.png"}
          alt="Devcon logo"
          className="z-20 "
        />
        <Button
          type="button"
          className={`mt-10 w-3/4 mx-auto  rounded-full text-white ${googleMedium.className}`}
          onClick={() => push("/portal")}
        >
          Enter Portal
        </Button>
      </div>
      <Image
        height={100}
        width={200}
        src={"/images/sponsors.png"}
        alt="sponsor logos"
        className="z-20 absolute mx-auto bottom-10 "
      />
    </section>
  );
}
