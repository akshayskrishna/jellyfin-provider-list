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

  function tmdbDuotoneUrl(url) {
    if (!url || !url.includes("image.tmdb.org/t/p/")) return url;
    return url.replace(
      /\/t\/p\/[^/]+\//,
      "/t/p/w780_filter(duotone,ffffff,bababa)/",
    );
  }

  if (blockedRoutes.some((r) => route.includes(r))) return;

  /* =========================
         STUDIOS (UNCHANGED)
      ========================= */

  const STUDIOS = [
    {
      name: "Apple TV+",
      tag: "Apple TV",
      providerId: 350,
      logo: "https://image.tmdb.org/t/p/w500/mcbz1LgtErU9p4UdbZ0rG6RTWHX.jpg",
    },
    {
      name: "Prime Video",
      tag: "Amazon Prime Video",
      providerId: 9,
      logo: "https://image.tmdb.org/t/p/w500/pvske1MyAoymrs5bguRfVqYiM9a.jpg",
    },
    {
      name: "Netflix",
      tag: "Netflix",
      providerId: 8,
      logo: "https://image.tmdb.org/t/p/w500/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg",
    },
    {
      name: "Hulu",
      tag: "Hulu",
      providerId: 15,
      logo: "https://image.tmdb.org/t/p/w500/bxBlRPEPpMVDc4jMhSrTf2339DW.jpg",
    },
    {
      name: "Max",
      tag: "HBO Max Amazon Channel",
      providerId: 1825,
      logo: "https://image.tmdb.org/t/p/w500/embS4GPK7c8pjbuY2O2irV5rYch.jpg",
    },
    {
      name: "Disney Plus",
      tag: "Disney Plus",
      providerId: 337,
      logo: "https://image.tmdb.org/t/p/w500/97yvRBw1GzX7fXprcF80er19ot.jpg",
    },
    {
      name: "Paramount Plus",
      tag: "Paramount Plus Premium",
      providerId: 2303,
      logo: "https://image.tmdb.org/t/p/w500/fts6X10Jn4QT0X6ac3udKEn2tJA.jpg",
    },
    {
      name: "Peacock",
      tag: "Peacock Premium",
      providerId: 386,
      logo: "https://image.tmdb.org/t/p/w500/2aGrp1xw3qhwCYvNGAJZPdjfeeX.jpg",
    },
    {
      name: "Crunchyroll",
      tag: "Crunchyroll",
      providerId: 283,
      logo: "https://image.tmdb.org/t/p/w500/fzN5Jok5Ig1eJ7gyNGoMhnLSCfh.jpg",
    },
    {
      name: "AMC Plus",
      tag: "AMC Plus Apple TV Channel ",
      providerId: 1854,
      logo: "https://image.tmdb.org/t/p/w500/oTQdXIqM9iewlN4MC2nhKB0gHw.jpg",
    },
    {
      name: "Starz",
      tag: "Starz Apple TV Channel",
      providerId: 1855,
      logo: "https://image.tmdb.org/t/p/w500/1C5EVCWyQD798CE1DFfcm6oAbxP.jpg",
    },
    {
      name: "MGM Plus",
      tag: "MGM+ Amazon Channel",
      providerId: 583,
      logo: "https://image.tmdb.org/t/p/w500/efu1Cqc63XrPBoreYnf2mn0Nizj.jpg",
    },
    {
      name: "YouTube",
      tag: "YouTube",
      providerId: 192,
      logo: "https://image.tmdb.org/t/p/w500/pTnn5JwWr4p3pG8H6VrpiQo7Vs0.jpg",
    },
    {
      name: "Tubi",
      tag: "Tubi TV",
      providerId: 73,
      logo: "https://image.tmdb.org/t/p/w500/zLYr7OPvpskMA4S79E3vlCi71iC.jpg",
    },
    {
      name: "The Roku Channel",
      tag: "The Roku Channel",
      providerId: 207,
      logo: "https://image.tmdb.org/t/p/w500/wQzSN83BnWVgO7xEh0SeTVqtrFv.jpg",
    },
    {
      name: "Shudder",
      tag: "Shudder",
      providerId: 99,
      logo: "https://image.tmdb.org/t/p/w500/vEtdiYRPRbDCp1Tcn3BEPF1Ni76.jpg",
    },
    {
      name: "Mubi",
      tag: "MUBI",
      providerId: 11,
      logo: "https://image.tmdb.org/t/p/w500/x570VpH2C9EKDf1riP83rYc5dnL.jpg",
    },
    {
      name: "Criterion Channel",
      tag: "Criterion Channel",
      providerId: 258,
      logo: "https://image.tmdb.org/t/p/w500/yhrtzYd43pFIhRq0ruO8umJPuyn.jpg",
    },
  ];

  function injectCSS() {
    if (document.getElementById("jfcr-css")) return;

    const s = document.createElement("style");
    s.id = "jfcr-css";

    s.textContent = `
#custom-rows-wrapper{margin-bottom:20px}
.srow-section{margin:.8em 0 .2em;padding:0 2.5%;width:100%}
.srow-scroll{display:flex;gap:8px;width:100%;overflow-x:auto;overflow-y:hidden;padding-bottom:8px;scroll-snap-type:x proximity;-webkit-overflow-scrolling:touch}
.srow-scroll > .card{margin:0!important;padding:0!important}

.srow-card{flex:0 0 clamp(150px,16vw,240px);min-width:150px;scroll-snap-align:start}
.srow-card .cardScalable{position:relative}
.srow-card .cardImageContainer{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}
.srow-card-logo{height:38px;max-width:65%;object-fit:contain;pointer-events:none}
.srow-card-logo.srow-invert{filter:brightness(0) invert(1);height:52px;max-width:75%}
@media (max-width:600px){.srow-card{flex-basis:42vw;min-width:140px}}
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
      img.src = tmdbDuotoneUrl(studio.logo);
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
