import React, { useEffect } from "react";
// import Link from 'next/link'
// import Layout from "components/Layout";
// import CMS from 'components/cms'

const PageAdmin = () => {
  useEffect(() => {
    console.log("process.env.", process.env);
    import("src/components/cms");
  }, []);

  return (
    <>
      {/* <CMS /> */}
      {/* <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script> */}
    </>
  );
};

export default PageAdmin;
