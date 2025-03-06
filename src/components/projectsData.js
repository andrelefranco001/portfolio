import pd01 from "../../src/assets/pd01.webp";
import pd02 from "../../src/assets/pd01_2.webp";
import pd03 from "../../src/assets/pd01_3.webp";

import pdbanner02 from "../../src/assets/pdbanner02.webp";
import pdbanner01 from "../../src/assets/pdbanner01.webp";

import sd_1 from "../../src/assets/sd_1.webp";
import sd_2 from "../../src/assets/sd_2.webp";
import sd_3 from "../../src/assets/sd_3.webp";

import longframe_1 from "../../src/assets/longframe_1.webp";
import longframe_2 from "../../src/assets/longframe_2.webp";

import kino_title from "../../src/assets/kino_title.webp";
import kino_detail_1 from "../../src/assets/kino_detail_1.webp";
import kino_detail_2 from "../../src/assets/kino_detail_2.webp";
import kino_detail_3 from "../../src/assets/kino_detail_3.webp";
import kino_phone_1 from "../../src/assets/kino_phone_1.webp";
import kino_phone_2 from "../../src/assets/kino_phone_2.webp";
import kino_phone_3 from "../../src/assets/kino_phone_3.webp";
import kino_long_1 from "../../src/assets/kino_long_1.webp";
import kino_long_2 from "../../src/assets/kino_long_2.webp";

import poem_title from "../../src/assets/poem_title.webp";
import poem_detail_1 from "../../src/assets/poem_detail_1.webp";
import poem_detail_2 from "../../src/assets/poem_detail_2.webp";
import poem_phone_1 from "../../src/assets/poem_phone_1.webp";
import poem_phone_2 from "../../src/assets/poem_phone_2.webp";
import poem_phone_3 from "../../src/assets/poem_phone_3.webp";
import poem_long_1 from "../../src/assets/poem_long_1.webp";
import poem_long_2 from "../../src/assets/poem_long_2.webp";
const projectsData = [
  {
    id: "barryandbrothers",
    title: "Barry & Brothers: A Legacy Woven in Tradition",
    description: `Barry & Brothers is a fashion eCommerce platform rooted in heritage and craftsmanship. Inspired by the legacy of a historic London tailor shop, the brand blends timeless elegance with artisanal expertise, offering garments that carry both history and modern refinement.

More than just clothing, each piece tells a story — from luxurious cashmere sweaters to impeccably tailored coats, every thread reflects dedication to quality and the pursuit of understated luxury. Barry & Brothers is for those who appreciate tradition reimagined for the present.

With a seamless digital shopping experience and a commitment to lasting craftsmanship, Barry & Brothers invites you to wear history — to embrace garments designed not just for seasons, but for generations to come.`,
    bannerImages: [pdbanner02, pdbanner01],
    carousels: [
      {
        id: 1,
        images: [pd01, pd02, pd03],
      },
      {
        id: 2,
        images: [sd_1, sd_2, sd_3],
      },
    ],
    extraImages: [[longframe_1, longframe_2]],
  },
  {
    id: "kinoestreaming",
    title: "Kino E - Streaming Platform",
    description: `Kino E is a streaming platform that celebrates the diversity of cinema, blending independent gems, cult classics, and handpicked commercial films that have left a cultural mark. Our mission is to curate films that matter — stories that move beyond trends and algorithms to offer a richer, more meaningful viewing experience.

Every week, Kino E brings a new themed collection, connecting films through creative ideas, visual styles, or cultural relevance. Whether it’s bold experimental works, iconic blockbusters, or emerging voices from around the world, we believe great cinema comes in many forms — and all of them deserve a place here.

At Kino E, we invite you to watch differently. To slow down, to explore, and to discover films that might just become your next obsession. Because we believe that cinema is more than just entertainment — it’s a journey, a conversation, and a reflection of the world we live in.`,
    bannerImages: [kino_title],
    carousels: [
      {
        id: 1,
        images: [kino_detail_1, kino_detail_2, kino_detail_3],
      },
      {
        id: 2,
        images: [kino_phone_1, kino_phone_2, kino_phone_3],
      },
    ],
    extraImages: [[kino_long_1, kino_long_2]],
  },
  {
    id: "thepoemmind",
    title: "The Poem Mind: A Journey Through Words",
    description: `The Poem Mind was created to give poetry a space where it can unfold naturally, without interruption or predefined order. Instead of searching for poems, you let them find you. Each time you enter, a vertical scroll of words awaits, blending poets from different eras, styles, and languages.

This is not an archive, nor a traditional literary site. It’s a flowing stream — a space where literature becomes fluid, where poems from the past and present coexist and expand endlessly. Every visit is different, every scroll a new discovery.`,

    bannerImages: [poem_title],
    carousels: [
      {
        id: 1,
        images: [poem_detail_1, poem_detail_2],
      },
      {
        id: 2,
        images: [poem_phone_1, poem_phone_2, poem_phone_3],
      },
    ],
    extraImages: [[poem_long_1, poem_long_2]],
  },
];

export default projectsData;
