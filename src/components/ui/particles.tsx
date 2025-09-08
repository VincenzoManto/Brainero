import styled from "./particles.module.css";

export function Particles({className = ""}: {className?: string}) {
  return (
    <div className={className}>
    <div className={styled.wrap}>
      {new Array(100).fill(0).map((_, i) => (
        <div key={i} className={styled.c}></div>
      ))}
    </div>
    </div>
  );
}
