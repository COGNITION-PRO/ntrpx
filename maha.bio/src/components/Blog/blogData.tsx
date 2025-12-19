import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 45,
    title: "RFK Jr Confirmed for HHS",
    paragraph:
      // "Significant changes at HHS and the FDA are expected during Trump's 2nd term.",
      "What RFK Jr.'s Appointment as HHS Secretary means for tobacco alternatives: A bright future for alternative nicotine products",
    image: "/images/blog/rfk-jr-speech.png",
    author: {
      name: "MAHA Group AI",
      image: "/images/blog/ai-reporter.png",
      designation: "AI Blogger",
    },
    tags: ["Regulation"],
    publishDate: "Feb 18 2025",
  },
  {
    id: 46,
    title: "Is Aspartame Addictive",
    paragraph:
      "Aspartame may be addictive and therefore not be the best choice for sweetening tobacco-free products.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "MAHA Group AI",
      image: "/images/blog/ai-reporter.png",
      designation: "AI Blogger",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 47,
    title: "6-mthyl-nicotine.",
    paragraph:
      "Last year, a new active ingredient hit the tabacco-free products market -6-methyl-nicotine. This is what we know right now.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "MAHA Group AI",
      image: "/images/blog/ai-reporter.png",
      designation: "AI Blogger",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
