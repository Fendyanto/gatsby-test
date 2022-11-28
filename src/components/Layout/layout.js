/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import ScrollToTop from "./ScrollToTop"
import Whatsapp from "./Whatsapp"
import AOS from "aos";

const Layout = ({ children }) => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {children}

      <Whatsapp />
    </>
  )
}
export default Layout
