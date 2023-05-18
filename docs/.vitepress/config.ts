import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Body Scroll Lock",
  locales: {
    root: {
      label: "English",
      lang: "en-US",
      description: "Modern body scroll locking library",
      themeConfig: {
        nav: [
          { text: "Get Started", link: "/get-started/" },
          { text: "API", link: "/api/" },
        ],
        socialLinks: [
          {
            icon: "github",
            link: "https://github.com/blro0319/body-scroll-lock",
          },
        ],
      },
    },
    ko: {
      label: "한국어",
      lang: "ko-KR",
      description: "전역 스크롤를 막는 현대적인 라이브러리",
      themeConfig: {
        nav: [
          { text: "시작하기", link: "/ko/get-started/" },
          { text: "API", link: "/ko/api/" },
        ],
        socialLinks: [
          {
            icon: "github",
            link: "https://github.com/blro0319/body-scroll-lock",
          },
        ],
      },
    },
  },
});
