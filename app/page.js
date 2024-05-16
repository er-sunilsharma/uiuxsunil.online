import { ProjectPortfolio } from "@/comps/common";

export default function Home() {
  return (
    <>
      <div className="w-full bg-white pb-8 md:pb-20 pt-4 md:pt-0">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-left pt-3 md:pt-20 pb-7 md:pb-32 text-xl md:text-2xl font-light leading-8 md:leading-normal">
            UI/UX DESIGNER ︲UI DEVELOPER︲ PORTFOLIO ↓
          </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <ProjectPortfolio />
          </div>
        </div>
      </div>
    </>
  );
}
