import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader 
      speed={2}
      width={400}
      height={500}
      viewBox="0 0 400 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#bdbcbc"
      {...props}
    >
      <rect x="56" y="103" rx="5" ry="5" width="270" height="36" /> 
      <rect x="110" y="157" rx="5" ry="5" width="160" height="18" /> 
      <rect x="5" y="16" rx="5" ry="5" width="380" height="72" />
    </ContentLoader>
  )

export default MyLoader