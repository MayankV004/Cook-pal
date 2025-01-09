import React from "react";

function Why() {
  return (
    <>
      <section>
        <div className="py-10 flex flex-col gap-10 ">
          <header className="border-t border-[#509E2F] pt-10">
            <h1 className="text-5xl text-[#509E2F] ">Why choose Coolpal?</h1>
          </header>
          <ul className="list-disc px-5 leading-8 text-xl">
            <li>Easy navigation with intuitive design</li>
            <li>Recipes for all skill levels</li>
            <li>Regular updates with seasonal and trending dishes</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Why;
