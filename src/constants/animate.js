const pathAni = {
  hidden: { pathLength: 0 },
  visible: { pathLength: 1 },
};
const fadeAni = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1 },
};
const typinAni = {
  hidden: { width:0 },
  visible: { width:'auto' }
}

export { pathAni, fadeAni, typinAni };
