import React from "react"
import { DocsThemeConfig } from "nextra-theme-docs"
import MyProjects from "./components/MyProjects"

const logo = (
  <span style={{ fontSize: 20, fontWeight: 700 }}>
    IOPaint
    <style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      span:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
    `}</style>
  </span>
)

const gitRepo = "https://github.com/Sanster/IOPaint"

const config: DocsThemeConfig = {
  logo,
  logoLink: gitRepo,
  project: {
    link: gitRepo,
  },
  docsRepositoryBase: "https://github.com/Sanster/IOPaint-docs",
  sidebar: {
    defaultMenuCollapseLevel: 0,
  },
  toc: {
    extraContent: <MyProjects />,
  },
  footer: {
    component: <></>,
    text: "",
  },
  primaryHue: 48,
  darkMode: true,
  nextThemes: {
    defaultTheme: "dark",
  },
  chat: {
    link: "https://Ko-fi.com/Z8Z1CZJGY",
    icon: (
      <img
        style={{ height: 32 }}
        src="https://storage.ko-fi.com/cdn/brandasset/kofi_button_dark.png"
      />
    ),
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="IOPaint" />
      <meta
        property="og:description"
        content="Image Inpainting Tool Powered SOTA AI Model"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="https://iopaint.com/" />
      <meta property="twitter:url" content="https://iopaint.com/" />
      <meta name="twitter:title" content="IOPaint" />
      <meta
        name="twitter:description"
        content="Image Inpainting Tool Powered SOTA AI Model"
      />
      <meta
        name="twitter:image"
        content="https://raw.githubusercontent.com/Sanster/iopaint-docs/main/public/app.png"
      />
      <script
        defer
        src="/stats/script.js"
        data-website-id="756bf011-2d5c-4d85-afae-3e4dae7e8bc2"
      ></script>
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: "%s – IOPaint",
    }
  },
}

export default config
