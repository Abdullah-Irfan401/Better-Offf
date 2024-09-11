import ExploreButton from "../components/ExploreButton";
import Styles from "./FirstSection.module.css";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, Draggable);

function FirstSection() {
  const move1 = useRef();
  const move2 = useRef();
  const move3 = useRef();
  const move4 = useRef();
  const move5 = useRef();

  const subscribe = useRef();
  const Subscribe = useRef();

  useGSAP(() => {
    gsap.to(move1.current, {
      transform: "translateX(-100%)",
      repeat: -1,
      duration: 20,
      ease: "none",
    });
  });
  useGSAP(() => {
    gsap.to(move2.current, {
      transform: "translateX(-100%)",
      repeat: -1,
      duration: 20,
      ease: "none",
    });
  });

  useGSAP(() => {
    gsap.to(move3.current, {
      transform: "translateX(-100%)",
      repeat: -1,
      duration: 20,
      ease: "none",
      // ease: "inOut",
    });
  });
  useGSAP(() => {
    gsap.to(move4.current, {
      transform: "translateX(-100%)",
      repeat: -1,
      duration: 20,
      ease: "none",
      // ease: "inOut",
    });
  });
  useGSAP(() => {
    gsap.to(move5.current, {
      transform: "translateX(-100%)",
      repeat: -1,
      duration: 20,
      ease: "none",
      // ease: "inOut",
    });
  });

  useGSAP(() => {
    gsap.to(Subscribe.current, {
      scale: 1.8,
      scrollTrigger: {
        trigger: Subscribe.current,
        scroller: "body",
        start: "top 450rem",
        end: "450rem",
        scrub: true,
        markers: true,
      },
    });
    Draggable.create(Subscribe.current, {
      type: "x",
      // bounds: Subscribe.current,
      inertia: true,
    });
  });

  return (
    <>
      <div className="flex items-stretch jutify-between pl-[20px]">
        <div className="flex flex-col">
          <span>dasdasdasdssdsadsad</span>
          <button>dasdsa</button>
        </div>
        <span className="text-3xl font-semibold ">doaskdosadomdsaom</span>
      </div>

      <div className={Styles.main}>
        <div className={Styles.text}>
          <div className={Styles.paragragh}>
            <p>
              Pick a plan, submit a job request,
              <br /> and your project will kickoff within <br /> 24 hours.
            </p>
            <br />
            <ExploreButton />
          </div>
          <div className={Styles.heading}>
            <h1>
              Premium quality creative at lean rates <br />
              for growing businesses. Packaged as <br />
              subscriptions or bundled projects.
            </h1>
          </div>
        </div>
        <div className={Styles.subscribe} ref={Subscribe}>
          <div className={Styles.move} ref={move1}>
            <h1 ref={subscribe}>SUBSCRIBE </h1>
            <img
              src="https://www.datocms-assets.com/106915/1717687183-betteroffstudio_work-loop_11.jpg?auto=format%2Ccompress&fit=max&h=800&w=800"
              alt=""
            />
          </div>
          <div className={Styles.move} ref={move2}>
            <h1 ref={subscribe}>SUBSCRIBE </h1>
            <img
              src="https://www.datocms-assets.com/106915/1717687183-betteroffstudio_work-loop_11.jpg?auto=format%2Ccompress&fit=max&h=800&w=800"
              alt=""
            />
          </div>
          <div className={Styles.move} ref={move3}>
            <h1 ref={subscribe}>SUBSCRIBE </h1>
            <img
              src="https://www.datocms-assets.com/106915/1717687183-betteroffstudio_work-loop_11.jpg?auto=format%2Ccompress&fit=max&h=800&w=800"
              alt=""
            />
          </div>
          <div className={Styles.move} ref={move4}>
            <h1 ref={subscribe}>SUBSCRIBE </h1>
            <img
              src="https://www.datocms-assets.com/106915/1717687183-betteroffstudio_work-loop_11.jpg?auto=format%2Ccompress&fit=max&h=800&w=800"
              alt=""
            />
          </div>
          <div className={Styles.move} ref={move5}>
            <h1 ref={subscribe}>SUBSCRIBE </h1>
            <img
              src="https://www.datocms-assets.com/106915/1717687183-betteroffstudio_work-loop_11.jpg?auto=format%2Ccompress&fit=max&h=800&w=800"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstSection;
