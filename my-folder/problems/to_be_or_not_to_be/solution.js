function expect(val) {
  return {
    toBe(expected) {
      if (val === expected) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe(unexpected) {
      if (val !== unexpected) {
        return true;
      } else {
        throw new Error("Equal");
      }
    }
  };
}