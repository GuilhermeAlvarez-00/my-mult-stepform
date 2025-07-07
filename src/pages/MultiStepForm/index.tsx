import type { IStepItem } from "../../components/StepItem";
import { Steps } from "../../components/Steps";

const steps: Omit<IStepItem, "active">[] = [
  {
    indicator: "STEP 1",
    label: "YOUR INFO",
    stepKey: <span>1</span>,
  },
  {
    indicator: "STEP 2",
    label: "SELECT PLAN",
    stepKey: <span>2</span>,
  },
  {
    indicator: "STEP 3",
    label: "ADD-ONS",
    stepKey: <span>3</span>,
  },
  {
    indicator: "STEP 4",
    label: "SUMMARY",
    stepKey: <span>4</span>,
  },
];

export const MultiStepForm = () => {
  return (
    <main className="bg-white w-10/12 lg:w-[1024px] h-[568px] rounded-xl overflow-hidden md:p-3">
      <section className="w-full h-full grid grid-rows-[1fr_2fr] md:grid-rows-none md:grid-cols-[30%_1fr]">
        <Steps steps={steps?.map((item) => ({ ...item, active: false }))} />
      </section>
    </main>
  );
};
