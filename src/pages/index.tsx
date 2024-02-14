import { FormEventHandler, useEffect, useState } from "react";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { useRouter } from "next/router";
import localFont from "next/font/local";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { toast } from "sonner";

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

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (navigator.userAgent.match(/FBAN|FBAV/i)) {
      setWarnModal(true);
    }
  }, []);

  const handleLocate: FormEventHandler = async (e) => {
    e.preventDefault();

    const q = query(
      collection(db, "certificates/hacking-ai/for"),
      where("email", "==", email),
      limit(1)
    );

    try {
      setLoading(true);
      const querySnapshot = await getDocs(q);
      let message = "⚠️ No certificate found";

      querySnapshot.forEach((doc) => {
        if (doc.data().email) {
          push(`/cert/${doc.id}`);
          message = "✅ Certificate found!";
          return;
        }
      });

      toast(message);
      setLoading(false);
    } catch (err: any) {
      toast.error(err.message);
      setLoading(false);
    }
  };

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

      <div className="glassmorph border z-30 relative px-7 mx-auto inline-block">
        <form
          onSubmit={handleLocate}
          className="flex flex-col gap-2 py-5  w-full sm:max-w-[400px] max-w-[350px] text-black"
        >
          <Input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="rounded-full pl-5 py-3"
          />
          <Button
            type="submit"
            disabled={loading}
            className={`bg-green-500 rounded-full text-white ${googleMedium.className}`}
          >
            Claim Certificate
          </Button>
        </form>
      </div>
      {/* <Footer /> */}
    </section>
  );
}
