const movies = [
  {
    id: 1,
    name: "백두산",
    rating: 7,
    thumbnail:
      "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20191219_263%2F15767415637757HPgg_JPEG%2Fmovie_image.jpg",
    description:
      "백두산 폭발을 막기 위한 정부와 전문가들의 치열한 사투를 그린 영화.",
    genre: ["Action", "Drama", "Thriller"],
    video: "https://www.youtube.com/watch?v=vBvt8GP53qA",
  },
  {
    id: 2,
    name: "히트맨",
    rating: 7,
    thumbnail:
      "https://i.namu.wiki/i/UWB9Y-f-dgcoMa_Q-ukZuuMwGHrB5t6knrhKJJ06s1aJ82-uCipnFDOHKC0_dIHZK1B1XtwK2f_eFrtRW6Ddai9gN-1S_XewIKakwk-ZjAz1rkFHVgLTLiH5wej0P9-6WBjjn1VDionZ2j_-cjon1A.webp",
    description:
      "코미디와 액션이 결합된 범죄 액션 영화. 은퇴한 히트맨이 다시 사건에 휘말린다.",
    genre: ["Action", "Comedy", "Crime"],
    video: "https://www.youtube.com/watch?v=leuyKmG1ziI",
  },
  {
    id: 3,
    name: "남산의 부장들",
    rating: 9,
    thumbnail:
      "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20200103_41%2F1578032244761ejKMX_JPEG%2Fmovie_image.jpg",
    description: "1970년대 대한민국의 정치적 음모와 배신을 그린 정치 스릴러.",
    genre: ["Drama", "Thriller", "History"],
    video: "https://www.youtube.com/watch?v=vqi9oKz1GOM",
  },
  {
    id: 4,
    name: "겨울왕국2",
    rating: 7,
    thumbnail:
      "https://i.namu.wiki/i/w8iFjZc_eAh55wxOkZ8_kAKmw8dZttMMmWI10aw7Wlzq7W4qZD-fRnOfJC3AseaboiuIFQGOGDydR5MG-_nSeQ2WowyUsSqdwze72gjhbKV-hZY317j5_QNWQcSRFAnHHh602ma1A5n1p5p-ZVC6yQ.webp",
    description:
      "겨울왕국의 속편으로, 엘사와 안나는 새로운 모험을 떠나게 된다.",
    genre: ["Animation", "Adventure", "Fantasy"],
    video: "https://www.youtube.com/watch?v=eSEs4B4H-EA",
  },
  {
    id: 5,
    name: "어벤져스: 엔드게임",
    rating: 8.5,
    thumbnail:
      "https://i.namu.wiki/i/tmZWENK0mp43JBqh62-XjprtXSA2z4cZSKYSZms85IAPy7xTa8T2WFIPnvPzyJIxtiiLSnqsmna53nlv2pLOS6GXPcRM_Y6ugJFTxXuxJ0cG5Fpdazuee7NP0QP_eohfXSArDbr2TTXSZ2GgBMJo7A.webp",
    description: "어벤져스가 우주를 구하기 위한 마지막 전투를 벌인다.",
    genre: ["Action", "Adventure", "Sci-Fi"],
    video: "https://www.youtube.com/watch?v=Ko2NWhXI9e8",
  },
  {
    id: 6,
    name: "기생충",
    rating: 8.6,
    thumbnail:
      "https://i.namu.wiki/i/h7sboPWIb55pK6_x0GySQrqQcivcMRzqq7zP-_a-oBSpXznLeTZKxzU1eiO93-EmT50jzuuVjINWORIMLy3hrTw--cOSB9MZTyEhqrt_xSMMtg88BBL7r-RMTCcbWY7mdkGW6oSoA0Onoy2qj0xDrQ.webp",
    description: "부유한 가정과 가난한 가정의 계층 갈등을 그린 블랙 코미디.",
    genre: ["Drama", "Thriller", "Comedy"],
    video: "https://www.youtube.com/watch?v=5xH0HfJHsaY",
  },
  {
    id: 7,
    name: "원피스: 스탬피드",
    rating: 7.8,
    thumbnail:
      "https://i.namu.wiki/i/5oCKAMiOBlBkq77_AxyKhEw6CmBMMYVVND-FBS4LFCHCLAty03BxeObeim2uRI4galjtDneZKdvifw979JU_pSMEzgj3OsEVaQ6MQO4ujEnPoRVOwUebn9JkzrNnuWfXCPfm_V_dqQYvjqp-a9-L7Q.webp",
    description: "원피스의 대규모 해적들이 모여 대결을 벌이는 애니메이션 영화.",
    genre: ["Animation", "Action", "Adventure"],
    video: "https://www.youtube.com/watch?v=S8_YwFLCh4U",
  },
  {
    id: 8,
    name: "타이타닉",
    rating: 7.8,
    thumbnail:
      "https://i.namu.wiki/i/HoDCGsVQxKSmUij7vdgd9g9pyyyU-RejFY80Z6pB6hwWTMR8efN5s69jSZWw1EBFXD--IK8TpiRZcP056Ts6hz2H7OMAo0PZusahA-ENTxKnD3rjdt98drr7O8-3-pG_Nkcc3ch5cunvUBgydHYVBw.webp",
    description: "1912년 타이타닉 호의 침몰 사건을 배경으로 한 로맨스 영화.",
    genre: ["Drama", "Romance", "History"],
    video: "https://www.youtube.com/watch?v=F_KNku_Xu-0",
  },
  {
    id: 9,
    name: "킹스맨: 시크릿 에이전트",
    rating: 7.7,
    thumbnail:
      "https://i.namu.wiki/i/L1WKb-fbIVvtObG9dtZARsiNrXXsjpo0o9ki8jB1DVhuTRJM6SdRPijMSAGzuAqpWv-kJNfOnBi3cfnoWVx28UWB3ZtJhg2Ic9xUlqFt8ETtR7OEw_U0lrPtj9eYxmEJH0qig_XsjMTJNFOE9lxZcQ.webp",
    description: "영국의 비밀 요원이 되어가는 청년의 성장 이야기.",
    genre: ["Action", "Adventure", "Comedy"],
    video: "https://www.youtube.com/watch?v=SW6EKneLyCI",
  },
  {
    id: 10,
    name: "아드 아스트라",
    rating: 6.5,
    thumbnail:
      "https://i.namu.wiki/i/lJBsHqv7TUVauz6EaD9od-gcYPZVMEpTFcLj9aFrYvWutqMscK5XZj0RSd90bSm9RHseF-dtfARe2OTRJxCKw-awyRsk4Is9z3wd0i70XBoDK49K8ABfk4ge_Oz-cyV3IKMpWGoFnHORnXKe2sfqtQ.webp",
    description:
      "우주를 배경으로 한 아버지를 찾는 우주비행사의 이야기를 그린 영화.",
    genre: ["Sci-Fi", "Drama", "Thriller"],
    video: "https://www.youtube.com/watch?v=P6AaSMfXHbA",
  },
  {
    id: 11,
    name: "매트릭스",
    rating: 8.7,
    thumbnail:
      "https://i.namu.wiki/i/hN0uORNEGitbdTekBX78hwUgjDPSq7e9RpxjVj1cQYeE2NghA6-SrFFkH5OuEzNsSAF3ZYEf0Rv83JDZF2NkJqiwiBlU9SiKTMwQxtapXzeVISjbF8jQ8TxOHMuRYRPLpce_UlSpcz0R7n11JnMmeQ.webp",
    description:
      "가상 현실과 현실을 구분할 수 없는 세계에서의 인류의 운명을 그린 영화.",
    genre: ["Sci-Fi", "Action", "Thriller"],
    video: "https://www.youtube.com/watch?v=C3HMidalbko",
  },
  {
    id: 12,
    name: "타이거킹",
    rating: 8.1,
    thumbnail:
      "https://i.namu.wiki/i/0M_B4Sn9sGlnP9ksKTyS3XPxEiySqt7I5x8o94sCDwKdFoGHDP1TZESrQu4kiWLgPahJsXdVrGbn4kOJ2xKHc8u8RQ2fecHPlclPF2HOnu1vy88HMtU8W16yvS76r23RpyFW2TOJMLY-KwMYRhnV4w.webp",
    description:
      "실제 사건을 바탕으로 한 다큐 드라마. 사육사의 비밀과 범죄를 다룬다.",
    genre: ["Documentary", "Crime", "Drama"],
    video: "https://www.youtube.com/watch?v=acTdxsoa428",
  },
  {
    id: 13,
    name: "20세기소녀",
    rating: 7.6,
    thumbnail:
      "https://i.namu.wiki/i/UDC9zIGD4ubgnX_IYSEm4TGaaWjBvxNLRG4qayy9jrc8r3YVQFLag10DV_4--z_CDEH6rEm4fHhB3BmmV0dRdpBy50mNBjrzcUj_3oTXJs1Ufmd_o5UOftKulg1TAUapYTj03YZXYyrKOLsP_dPAbg.webp",
    description:
      "어느 겨울 도착한 비디오 테이프에 담긴 1999년의 기억, 17세 소녀 '보라'가 절친 '연두'의 첫사랑을 이루어주기 위해 사랑의 큐피트를 자처하며 벌어지는 첫사랑 관찰 로맨스",
    genre: ["Drama", "Coming-of-Age"],
    video: "https://www.youtube.com/watch?v=2JomSAO_TGos",
  },
  {
    id: 14,
    name: "다크 나이트",
    rating: 9,
    thumbnail:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2Fdata31%2F2008%2F5%2F13%2F224%2F%25B4%25D9%25C5%25A9%25B3%25AA%25C0%25CC%25C6%25AE1_qaz9949.jpg",
    description: "배트맨과 조커의 치열한 대결을 그린 슈퍼히어로 영화.",
    genre: ["Action", "Drama", "Crime"],
    video: "https://www.youtube.com/watch?v=k6Bg9FROE4o",
  },
  {
    id: 15,
    name: "원더 우먼",
    rating: 7.4,
    thumbnail:
      "https://i.namu.wiki/i/OChkRhA74OzbfXiLSICSj5cIu1vqaHf-b5Hi9ni_6z0-zywNgp8T86B9kxoGFq0Yze3x1tLHOZV29AH4uQ13N5cH9MM9NL8JMddxka4fglGt62xP9_HwEr2AW2TiD60S3aFVqga_sNUrUH-6p0h2qg.webp",
    description:
      "고대 전설에 나오는 여성 전사의 이야기를 다룬 슈퍼히어로 영화.",
    genre: ["Action", "Adventure", "Fantasy"],
    video: "https://www.youtube.com/watch?v=grVWk-ajOwY",
  },
  {
    id: 16,
    name: "기억의 밤",
    rating: 7.5,
    thumbnail:
      "https://i.namu.wiki/i/VesmuHyreyTNvWMTaIjJEqoGUiv54I5tdQI2TaccqLV46Nt-JSkAXi33KHsGoKuyMSwmKeeqF9Xe3wrNcIgEfTiqEjgLRX5pVLnORaZ_F25kSg02GdTXcM2jBZOHuxnB9sRsRzqTLAXPy3SS3tDnmA.webp",
    description: "기억을 잃어버린 남자의 과거를 추적하는 스릴러.",
    genre: ["Thriller", "Mystery", "Drama"],
    video: "https://www.youtube.com/watch?v=Fvv89erjnzA",
  },
  {
    id: 17,
    name: "아가씨",
    rating: 8.1,
    thumbnail:
      "https://i.namu.wiki/i/Rfw0VahinhGKHVnz9P1ZwghcJqffovlrhlQwj_XlTp2mBX8VgwwGz0EJCUJh4fLjvVlJrEvd9m7AyE417qWz40fCnJLZIZFVudg0wOVqW7YjMN8pYVeykwadpU8yegjwlbc2L2jIUTdsqXZUGz2bVg.webp",
    description:
      "1920년대 한국을 배경으로 한 고전적인 스릴러와 로맨스를 그린 영화.",
    genre: ["Drama", "Thriller", "Romance"],
    video: "https://www.youtube.com/watch?v=xnDjDxeh998",
  },

  {
    id: 19,
    name: "반지의 제왕: 반지원정대",
    rating: 8.8,
    thumbnail:
      "https://i.namu.wiki/i/yu76P3B3VLgzkUQr0_UD4NCB827HFrNfM0jrbeOuObWUDmDIeGoxSKUIapUKLNUfwjnbgpKkHYN2wTgUyC6-sU0xwxsC1gHltZ2swoL1jzM6pZXI-y8fJBuh5QVkkGt1dRQuSTIRy36fTTFtnKN8kw.webp",
    description: "반지를 파괴하기 위한 여행을 떠나는 영웅들의 이야기.",
    genre: ["Action", "Adventure", "Fantasy"],
    video: "https://www.youtube.com/watch?v=iByssURPjmE",
  },
  {
    id: 20,
    name: "인셉션",
    rating: 8.8,
    thumbnail:
      "https://i.namu.wiki/i/zUS9X9ZY6R7KLjqQymhtTvOrpFFSFkQLUbxpdGP4ybzvb0kyuzJp9RiLnJnRjseSmNjIYbmL9u4xALPK514QBpkfPk6ejis-axWhLYyjFXp-JKq5_s75kYql8o3GtokEVS8B8BO1tZ1edVrLmPJnzw.webp",
    description:
      "꿈을 통해 사람의 의식을 조종하는 첩보 요원의 이야기를 다룬 영화.",
    genre: ["Sci-Fi", "Action", "Thriller"],
    video: "https://www.youtube.com/watch?v=1FdB6LPSMkI",
  },
  {
    id: 21,
    name: "미나리",
    rating: 8.0,
    thumbnail:
      "https://i.namu.wiki/i/iql9gLXN28ZvoknbyntsKoFukPThw0j5YnsgT7HJuCh9dDQYZOJYV6y4_0y_n2NssPCYbo6jMfQmMEBboluoBth8_v57riOGQp_UM7ODoum5GrZwW0YpYBmn1JC5e4wAGPNWTINpqzIFVxSIMczyuA.webp",
    description:
      "미국에서 새로운 삶을 시작한 한국 이민자의 이야기를 그린 드라마.",
    genre: ["Drama", "Family", "Biography"],
    video: "https://www.youtube.com/watch?v=KQ0gFidlro8",
  },
  {
    id: 22,
    name: "언차티드",
    rating: 6.8,
    thumbnail:
      "https://i.namu.wiki/i/PCxm7cVn_Vob39zNZqi2V-YNT1d25-cUvelrYtfdZ0SbRJkozd8Nvs9RzNWj0XsumCv40C1Xn1MTE7dTRfqoU0tgkAW7umDDdLGtbj9ogFBgzFT3KmrJtWDyP3UL4jm7cspj4ABte9WPVMTiNUoBYw.webp",
    description: "탐험가가 되어 보물을 찾는 모험을 그린 영화.",
    genre: ["Action", "Adventure", "Thriller"],
    video: "https://www.youtube.com/watch?v=LgPj-TaHZWw",
  },
  {
    id: 23,
    name: "월-E",
    rating: 8.0,
    thumbnail:
      "https://i.namu.wiki/i/2ABNmRMOr16UAppcPAbXYrtYdbS5swSWDK56Q0HJQRfwjb-gXw-DmyvFlKgYaDa5UFlmS0RJLPPkFtvS78gg3iFEbp9JNkZOZQBGJHariPrCtbWcGI2rN-yJNgo3uAXyZj0atDQrABSlCwTM2J_tdA.webp",
    description:
      "쓰레기만 남은 지구에서 살아가는 로봇의 이야기를 그린 애니메이션.",
    genre: ["Animation", "Sci-Fi", "Family"],
    video: "https://www.youtube.com/watch?v=CZ1CATNbXg0",
  },
  {
    id: 24,
    name: "하늘의 푸르름을 아는 사람은",
    rating: 7.2,
    thumbnail:
      "https://i.namu.wiki/i/lf7iBvVJgpC2Kkbck3Eu_qZc08_NblHFWy6tNNoP9BAofg3vnU8S9dWAuJLlVAipFS4vjYSRn2x3fI6bKPrHPX5RtfeVvDSJUe0kZXaHM3y0hWSt58Sn-3svK3-JSQQPkdaCWN-vF_y2528NLYoGdw.webp",
    description: "우정과 사랑을 그린 일본 애니메이션.",
    genre: ["Animation", "Romance", "Drama"],
    video: "https://www.youtube.com/watch?v=J4flcFjC0_o",
  },
  {
    id: 25,
    name: "패왕별희",
    rating: 8.0,
    thumbnail:
      "https://i.namu.wiki/i/Bbg33BHo47Wgz4oLTspL_6UUY7Nnor5ZdiTn1HvGtbrRmxv4H2IlmXKU3N0LbnrSivVvAixCWuABcNw92u-oLnsIjvCOAtndQd8qGLcHXgMfCcV2mUgSij4T4KCMa7AN7gas7NXOnbA1_Ya1EOzSuQ.webp",
    description: "중국 전통 연극 배우들의 사랑과 배신을 그린 역사적인 드라마.",
    genre: ["Drama", "Romance", "History"],
    video: "https://www.youtube.com/watch?v=BFheUkT41Lc",
  },
  {
    id: 26,
    name: "소셜 네트워크",
    rating: 7.8,
    thumbnail:
      "https://i.namu.wiki/i/YHoWlPheIJFiIshSCXFC-nceXqDzi86vekHAomI75o72aM_O0YMkA4a9YWFFAE-DyMPjkcKLwCBlnFXFHT5CXtztI--Dpnpc7J1cEAn2w-Ldjr6Hck9q9HrB6EywezK95pJ-H8zR-3zqX2q7wb6xdg.webp",
    description:
      "페이스북 창립과 그로 인한 법적 싸움을 그린 실화 바탕의 드라마.",
    genre: ["Drama", "Biography"],
    video: "https://www.youtube.com/watch?v=lB95KLmpLR4",
  },

  {
    id: 28,
    name: "스타워즈: 깨어난 포스",
    rating: 7.9,
    thumbnail:
      "https://i.namu.wiki/i/bl0DFsoAVDCNV5vNUUpqd1Nd21RRhHubJkxol6clEFEpKUsmzwlatLYSkyPE0UkGhPsjY9P48Jrr1mFiRgu_zasegme93WDbazGHqKHyjsOJa8SJXLCTdoMa7WCPf7QlmAHvZGEAQIsBu0kgV091fA.webp",
    description: "스타워즈 시리즈의 새로운 장을 여는 영화.",
    genre: ["Sci-Fi", "Action", "Adventure"],
    video: "https://www.youtube.com/watch?v=G7VijpXyAXI",
  },
];

export default movies;
