(function () {
  "use strict";

  const route = (location.hash || location.href).toLowerCase();

  const blockedRoutes = [
    "dashboard",
    "settings",
    "configuration",
    "administration",
    "userpage",
    "wizard",
    "login",
    "server",
    "selectserver",
  ];

  if (blockedRoutes.some((r) => route.includes(r))) return;

  /* =========================
       STUDIOS (UNCHANGED)
    ========================= */

  const STUDIOS = [
    {
      name: "Apple TV+",
      tag: "Apple TV",
      providerId: 350,
      logo: "https://image.tmdb.org/t/p/original/mcbz1LgtErU9p4UdbZ0rG6RTWHX.svg",
    },
    {
      name: "Prime Video",
      tag: "Amazon Prime Video",
      providerId: 9,
      logo: "https://image.tmdb.org/t/p/original/pvske1MyAoymrs5bguRfVqYiM9a.svg",
    },
    {
      name: "Netflix",
      tag: "Netflix",
      providerId: 8,
      logo: "https://image.tmdb.org/t/p/original/pbpMk2JmcoNnQwx5JGpXngfoWtp.svg",
    },
    {
      name: "Hulu",
      tag: "Hulu",
      providerId: 15,
      logo: "https://image.tmdb.org/t/p/original/bxBlRPEPpMVDc4jMhSrTf2339DW.svg",
    },
    {
      name: "Max",
      tag: "HBO Max Amazon Channel",
      providerId: 1825,
      logo: "https://image.tmdb.org/t/p/original/embS4GPK7c8pjbuY2O2irV5rYch.svg",
    },
    {
      name: "Disney Plus",
      tag: "Disney Plus",
      providerId: 337,
      logo: "https://image.tmdb.org/t/p/original/97yvRBw1GzX7fXprcF80er19ot.svg",
    },
    {
      name: "Paramount Plus",
      tag: "Paramount Plus Premium",
      providerId: 2303,
      logo: "https://image.tmdb.org/t/p/original/fts6X10Jn4QT0X6ac3udKEn2tJA.svg",
    },
    {
      name: "Peacock",
      tag: "Peacock Premium",
      providerId: 386,
      logo: "https://image.tmdb.org/t/p/original/2aGrp1xw3qhwCYvNGAJZPdjfeeX.svg",
    },
    {
      name: "Crunchyroll",
      tag: "Crunchyroll",
      providerId: 283,
      logo: "https://image.tmdb.org/t/p/original/fzN5Jok5Ig1eJ7gyNGoMhnLSCfh.svg",
    },
    {
      name: "AMC Plus",
      tag: "AMC Plus Apple TV Channel ",
      providerId: 1854,
      logo: "https://image.tmdb.org/t/p/original/oTQdXIqM9iewlN4MC2nhKB0gHw.svg",
    },
    {
      name: "Starz",
      tag: "Starz Apple TV Channel",
      providerId: 1855,
      logo: "https://image.tmdb.org/t/p/original/1C5EVCWyQD798CE1DFfcm6oAbxP.svg",
    },
    {
      name: "MGM Plus",
      tag: "MGM+ Amazon Channel",
      providerId: 583,
      logo: "https://image.tmdb.org/t/p/original/efu1Cqc63XrPBoreYnf2mn0Nizj.svg",
    },
    {
      name: "YouTube",
      tag: "YouTube",
      providerId: 192,
      logo: "https://image.tmdb.org/t/p/original/pTnn5JwWr4p3pG8H6VrpiQo7Vs0.svg",
    },
    {
      name: "Tubi",
      tag: "Tubi TV",
      providerId: 73,
      logo: "https://image.tmdb.org/t/p/original/zLYr7OPvpskMA4S79E3vlCi71iC.svg",
    },
    {
      name: "The Roku Channel",
      tag: "The Roku Channel",
      providerId: 207,
      logo: "https://image.tmdb.org/t/p/original/wQzSN83BnWVgO7xEh0SeTVqtrFv.svg",
    },
    {
      name: "Shudder",
      tag: "Shudder",
      providerId: 99,
      logo: "https://image.tmdb.org/t/p/original/vEtdiYRPRbDCp1Tcn3BEPF1Ni76.svg",
    },
    {
      name: "Mubi",
      tag: "MUBI",
      providerId: 11,
      logo: "https://image.tmdb.org/t/p/original/x570VpH2C9EKDf1riP83rYc5dnL.svg",
    },
    {
      name: "Criterion Channel",
      tag: "Criterion Channel",
      providerId: 258,
      logo: "https://image.tmdb.org/t/p/original/yhrtzYd43pFIhRq0ruO8umJPuyn.svg",
    },
    {
      name: "HBO",
      tag: "HBO,Home Box Office",
      networkId: 49,
      logo: "https://image.tmdb.org/t/p/original/tuomPhY2UtuPTqqFnKMVHvSb724.svg",
    },
    {
      name: "Netflix",
      tag: "Netflix",
      networkId: 213,
      logo: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg",
    },
    {
      name: "AMC",
      tag: "AMC,AMC Plus,AMC+",
      networkId: 174,
      logo: "https://image.tmdb.org/t/p/original/pmvRmATOCaDykE6JrVoeYxlFHw3.svg",
    },
    {
      name: "BBC One",
      tag: "BBC One,BBC Studios,BBC",
      networkId: 4,
      logo: "https://image.tmdb.org/t/p/original/uJjcCg3O4DMEjM0xtno9OWFciRP.svg",
    },
    {
      name: "BBC Two",
      tag: "BBC Two,BBC Studios,BBC",
      networkId: 332,
      logo: "https://image.tmdb.org/t/p/original/7HVPn1p2w1nC5oRKBehXVHpss7e.svg",
    },
    {
      name: "FX",
      tag: "FX,FXX,FX Productions",
      networkId: 88,
      logo: "https://image.tmdb.org/t/p/original/aexGjtcs42DgRtZh7zOxayiry4J.svg",
    },
    {
      name: "Showtime",
      tag: "Showtime",
      networkId: 67,
      logo: "https://image.tmdb.org/t/p/original/Allse9kbjiP6ExaQrnSpIhkurEi.svg",
    },
    {
      name: "Starz",
      tag: "Starz",
      networkId: 318,
      logo: "https://image.tmdb.org/t/p/original/qx3Y9LCaK4mq1ykFuDIfjshlo3U.svg",
    },
    {
      name: "PBS",
      tag: "PBS,Public Broadcasting Service",
      networkId: 14,
      logo: "https://image.tmdb.org/t/p/original/dr7UHl5ENaNiSca0tIcak3NneWu.svg",
    },
    {
      name: "Apple TV+",
      tag: "Apple TV+,Apple TV Plus,Apple Originals",
      networkId: 2552,
      logo: "https://image.tmdb.org/t/p/original/bngHRFi794mnMq34gfVcm9nDxN1.svg",
    },
    {
      name: "Disney+",
      tag: "Disney+,Disney Plus",
      networkId: 2739,
      logo: "https://image.tmdb.org/t/p/original/1edZOYAfoyZyZ3rklNSiUpXX30Q.svg",
    },
    {
      name: "Paramount+",
      tag: "Paramount+,Paramount Plus",
      networkId: 4330,
      logo: "https://image.tmdb.org/t/p/original/fi83B1oztoS47xxcemFdPMhIzK.svg",
    },
    {
      name: "Peacock",
      tag: "Peacock",
      networkId: 3353,
      logo: "https://image.tmdb.org/t/p/original/gIAcGTjKKr0KOHL5s4O36roJ8p7.svg",
    },
  ];

  function injectCSS() {
    if (document.getElementById("jfcr-css")) return;

    const s = document.createElement("style");
    s.id = "jfcr-css";

    s.textContent = `
#custom-rows-wrapper{margin-bottom:20px}
.srow-section{margin:.8em 0 .2em;padding:0 2.5%;width:100%}
.srow-scroll{display:flex;gap:10px;width:100%;overflow-x:auto;overflow-y:hidden;padding-bottom:10px;scroll-snap-type:x proximity;-webkit-overflow-scrolling:touch}
.srow-scroll > .card{margin:0!important;padding:0!important}

.srow-card{flex:0 0 clamp(190px,15.5vw,290px);min-width:190px;scroll-snap-align:start}
.srow-card .cardScalable{position:relative}
.srow-card .cardImageContainer{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}
.srow-card-logo{height:52px;max-width:72%;object-fit:contain;pointer-events:none}
.srow-card-logo.srow-invert{filter:brightness(0) invert(1);height:64px;max-width:80%}
@media (max-width:600px){.srow-card{flex-basis:48vw;min-width:155px}.srow-card-logo{height:42px}.srow-card-logo.srow-invert{height:54px}}
`;

    document.head.appendChild(s);
  }

  function parseTags(tag) {
    return tag
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
  }

  function gc() {
    try {
      const c = JSON.parse(
        localStorage.getItem("jellyfin_credentials") || "{}",
      );
      const sv = (c.Servers || [])[0] || {};
      return {
        token: sv.AccessToken,
        userId: sv.UserId,
        serverId: sv.Id || "",
        base: (sv.ManualAddress || sv.LocalAddress || location.origin).replace(
          /\/+$/,
          "",
        ),
      };
    } catch {
      return {};
    }
  }

  async function countByTag(tag) {
    const { token, userId, base } = gc();
    if (!token || !userId) return 0;
    const tags = parseTags(tag);
    let url = `${base}/Users/${userId}/Items?IncludeItemTypes=Movie,Series&Recursive=true&Limit=0`;
    tags.forEach((t) => {
      url += `&Studios=${encodeURIComponent(t)}`;
    });
    try {
      const r = await fetch(url, {
        headers: { Authorization: `MediaBrowser Token="${token}"` },
      });
      const j = await r.json();
      return j.TotalRecordCount || 0;
    } catch {
      return 0;
    }
  }

  async function resolveStudioId(tagString) {
    const { token, userId, base } = gc();
    if (!token || !userId) return null;
    for (const tag of parseTags(tagString)) {
      try {
        const r = await fetch(
          `${base}/Studios?searchTerm=${encodeURIComponent(tag)}&userId=${userId}&Limit=1`,
          { headers: { Authorization: `MediaBrowser Token="${token}"` } },
        );
        const j = await r.json();
        const id = j.Items?.[0]?.Id;
        if (id) return id;
      } catch {}
    }
    return null;
  }

  async function openProviderLibrary(studio) {
    const { serverId } = gc();
    const id = await resolveStudioId(studio.tag);
    if (!id) return;

    if (parseTags(studio.tag).length > 1) {
      const tags = parseTags(studio.tag);
      // Intercept fetch: when the native list page queries Items with
      // StudioIds=<singleId>, replace with Studios=tag1&Studios=tag2&…
      // so ALL matching content from every tag appears on the page.
      const origFetch = window.fetch;
      let active = true;

      window.fetch = function (input, init) {
        if (active && typeof input === "string") {
          try {
            const url = new URL(input, location.origin);
            if (
              url.pathname.endsWith("/Items") &&
              url.searchParams.has("StudioIds")
            ) {
              url.searchParams.delete("StudioIds");
              tags.forEach((t) => url.searchParams.append("Studios", t));
              input = url.toString();
            }
          } catch {}
        }
        return origFetch.call(this, input, init);
      };

      // Navigate FIRST so the hash is already list.html before rAF checks
      location.hash = `#/list.html?studioId=${id}&serverId=${serverId}`;

      const cleanup = () => {
        active = false;
        window.fetch = origFetch;
        window.removeEventListener("hashchange", cleanup);
        window.removeEventListener("popstate", cleanup);
      };
      setTimeout(() => {
        window.addEventListener("hashchange", cleanup);
        window.addEventListener("popstate", cleanup);
      }, 0);

      return;
    }

    location.hash = `#/list.html?studioId=${id}&serverId=${serverId}`;
  }

  async function buildStudioSection() {
    const section = document.createElement("div");
    section.className = "srow-section";

    const scroll = document.createElement("div");
    scroll.className = "srow-scroll";

    const counts = await Promise.all(STUDIOS.map((s) => countByTag(s.tag)));

    STUDIOS.forEach((studio, i) => {
      if (counts[i] === 0) return;

      const card = document.createElement("button");
      card.type = "button";
      card.className = "card overflowBackdropCard card-hoverable srow-card";

      const cardBox = document.createElement("div");
      cardBox.className = "cardBox";

      const cardScalable = document.createElement("div");
      cardScalable.className = "cardScalable";

      // Sets 16:9 aspect ratio the same way Jellyfin library cards do
      const cardPadder = document.createElement("div");
      cardPadder.className = "cardPadder cardPadder-overflowBackdrop";

      const cardImgContainer = document.createElement("div");
      cardImgContainer.className = "cardImageContainer coveredImage";
      cardImgContainer.style.background = studio.gradient;

      const img = new Image();
      img.src = studio.logo;
      img.className = "srow-card-logo";
      if (studio.invert) img.classList.add("srow-invert");

      cardImgContainer.appendChild(img);
      cardScalable.appendChild(cardPadder);
      cardScalable.appendChild(cardImgContainer);
      cardBox.appendChild(cardScalable);
      card.appendChild(cardBox);
      card.onclick = () => openProviderLibrary(studio);
      scroll.appendChild(card);
    });

    if (!scroll.children.length) return null;

    section.appendChild(scroll);
    return section;
  }

  let injecting = false;
  async function injectUI() {
    if (injecting || document.getElementById("custom-rows-wrapper")) return;
    injecting = true;
    try {
      const anchor =
        document.querySelector("iframe.spotlightiframe") ||
        document.querySelector(".spotlightiframe") ||
        document.querySelector(".section0") ||
        document.querySelector(".homeSection:first-child");

      if (!anchor?.parentElement) return;

      injectCSS();

      const section = await buildStudioSection();
      if (!section) return;

      const wrapper = document.createElement("div");
      wrapper.id = "custom-rows-wrapper";
      wrapper.appendChild(section);

      anchor.parentElement.insertBefore(wrapper, anchor.nextSibling);
    } finally {
      injecting = false;
    }
  }

  const observer = new MutationObserver(() => {
    const hash = window.location.hash || window.location.pathname;

    if (
      hash === "" ||
      hash === "/" ||
      hash.includes("home.html") ||
      hash === "#/home"
    ) {
      injectUI();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // On any navigation: tear down the wrapper so cards are always fresh on return.
  // This also clears stale hover/focus state that persists when Jellyfin keeps the home DOM alive.
  window.addEventListener("hashchange", () => {
    document.getElementById("custom-rows-wrapper")?.remove();
    injecting = false;
  });

  setTimeout(injectUI, 1000);
})();
