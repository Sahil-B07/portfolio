import { useEffect } from 'react'

const Cursor = () => {
    if (typeof window !== "undefined") {
        const blob = document.getElementById("blob");
    
        useEffect(() => {
          window.onpointermove = (event) => {
            const { clientX, clientY } = event;
            blob?.animate(
              {
                left: `${clientX}px`,
                top: `${clientY}px`,
              },
              { duration: 20000, fill: "forwards" }
            );
          };
        }, []);
      }
}

export default Cursor