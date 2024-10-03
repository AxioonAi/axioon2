import { motion, useAnimation } from "framer-motion";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import { useState } from "react";

export function Messages() {
  const messages = [
    {
      message:
        "“Usar a plataforma da Axioon revolucionou a forma como lidamos com nossos casos e processo, é incrível ter todos os dados de uma empresa centralizado em um único local.”",
      author: "Carlos Alberto",
      company: "M2S Advocacia",
    },
    // {
    //   message:
    //     "“Usar a plataforma da Axioon revolucionou a forma como lidamos com nossos casos e processo, é incrível ter todos os dados de uma empresa centralizado em um único local.”",
    //   author: "Carlos Alberto",
    //   company: "M2S Advocacia",
    // },
    // {
    //   message:
    //     "“Usar a plataforma da Axioon revolucionou a forma como lidamos com nossos casos e processo, é incrível ter todos os dados de uma empresa centralizado em um único local.”",
    //   author: "Carlos Alberto",
    //   company: "M2S Advocacia",
    // },
  ];

  // const [step, setStep] = useState(0);

  const control = useAnimation();

  // function handleNext() {
  //   control.start({ opacity: [0], transition: { duration: 0.5 } });

  //   setTimeout(() => {
  //     control.start({ opacity: [1], transition: { duration: 1 } });
  //     if (step === messages.length - 1) {
  //       return setStep(0);
  //     }
  //     setStep((state) => state + 1);
  //   }, 300);
  // }

  // function handlePrevious() {
  //   control.start({ opacity: [0], transition: { duration: 0.5 } });
  //   setTimeout(() => {
  //     control.start({ opacity: [1], transition: { duration: 0.5 } });
  //     if (step === 0) {
  //       return setStep(messages.length - 1);
  //     }
  //     setStep((state) => state - 1);
  //   }, 300);
  // }

  return (
    <div>
      <div className="Container absolute bottom-12 left-[5%] m-auto w-[90%] rounded-xl border bg-gradient-to-b from-[rgba(255,255,255,0.3)] to-[rgba(255,255,255,0)] p-12 text-justify text-white backdrop-blur-sm lg:text-lg">
        <motion.div initial={{ opacity: 1 }} animate={control}>
          <p>{messages[0].message}</p>
        </motion.div>
        <div className="AuthorAndArrows flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <motion.div initial={{ opacity: 1 }} animate={control}>
            <div className="Author flex flex-col">
              <strong className="text-2xl">{messages[0].author}</strong>
              <span className="text-sm">{messages[0].company}</span>
            </div>
          </motion.div>
          {/* <div className="Arrows flex gap-4 text-white">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white transition duration-200 hover:cursor-pointer hover:bg-[rgba(0,0,0,0.3)]"
              onClick={handlePrevious}
            >
              <ArrowLeft />
            </div>
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white transition duration-200 hover:cursor-pointer hover:bg-[rgba(0,0,0,0.3)]"
              onClick={handleNext}
            >
              <ArrowRight />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
