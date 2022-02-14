import { m } from "framer-motion";

export default function BaseLayout({ children }) {
  return (
    <m.main
      initial={{ opacity: 0, x: -200, y: 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: 0, y: -100 }}
      transition={{ type: "linear" }}
    >
      {children}
    </m.main>
  );
}
