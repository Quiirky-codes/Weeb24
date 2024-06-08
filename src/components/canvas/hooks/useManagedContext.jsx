// useManagedContext.js
import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import contextManager from "../ContextManger";

const useManagedContext = () => {
  const { gl } = useThree();

  useEffect(() => {
    contextManager.addContext(gl);

    return () => {
      gl.dispose();
      gl.getContext().forceContextLoss();
    };
  }, [gl]);
};

export default useManagedContext;

