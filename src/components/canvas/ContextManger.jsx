// ContextManager.js
class ContextManager {
    constructor() {
      this.contexts = [];
    }
  
    addContext(gl) {
      this.contexts.push(gl);
      if (this.contexts.length > 10) {
        this.disposeOldestContext();
      }
    }
  
    disposeOldestContext() {
      const oldestContext = this.contexts.shift();
      oldestContext.dispose();
      oldestContext.getContext().forceContextLoss();
    }
  }
  
  const contextManager = new ContextManager();
  export default contextManager;
  