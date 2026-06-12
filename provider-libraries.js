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
      tag: "Apple TV,Apple TV+,Apple Originals,Apple Studios LLC",
      gradient: "linear-gradient(135deg,#1a1a2e 0%,#0a0a0a 100%)",
      logo: "https://image.tmdb.org/t/p/w780_filter(duotone,ffffff,bababa)/4KAy34EHvRM25Ih8wb82AuGU7zJ.png",
    },
    {
      name: "Prime Video",
      tag: "Amazon Prime Video,Prime Video,Amazon MGM Studios,Amazon Studios,MGM,Metro-Goldwyn-Mayer",
      gradient: "linear-gradient(135deg,#0d1b2a 0%,#010409 100%)",
      logo: "https://image.tmdb.org/t/p/w780_filter(duotone,ffffff,bababa)/ifhbNuuVnlwYy5oXA5VIb2YR8AZ.png",
    },
    {
      name: "Netflix",
      tag: "Netflix",
      gradient: "linear-gradient(135deg,#260a0a 0%,#190000 100%)",
      logo: "https://image.tmdb.org/t/p/w780_filter(duotone,ffffff,bababa)/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
    },
    {
      name: "Hulu",
      tag: "Hulu",
      gradient: "linear-gradient(135deg,#0f2e1d 0%,#07150d 100%)",
      logo: "https://image.tmdb.org/t/p/w780_filter(duotone,ffffff,bababa)/pqUTCleNUiTLAVlelGxUgWn1ELh.png",
    },
    {
      name: "HBO Max",
      tag: "HBO Max,Max,HBO,Home Box Office,Warner Bros. Discovery",
      gradient: "linear-gradient(135deg,#1a0a2e 0%,#0d0018 100%)",
      logo: "https://image.tmdb.org/t/p/w500_filter(duotone,ffffff,bababa)/nmU0UMDJB3dRRQSTUqawzF2Od1a.png",
    },
    {
      name: "Disney+",
      tag: "Disney Plus,Disney+,Disney,Walt Disney Pictures,Walt Disney Studios",
      gradient: "linear-gradient(135deg,#0c1b3a 0%,#050d1a 100%)",
      logo: "https://lumiere-a.akamaihd.net/v1/images/a8e5567d1658de062d95d079ebf536b0_4096x2309_6dedcc02.png",
      invert: true,
    },
    {
      name: "Pixar",
      tag: "Pixar,Pixar Animation Studios",
      gradient: "linear-gradient(135deg,#0a1525 0%,#0d2540 50%,#0a0a12 100%)",
      logo: "https://image.tmdb.org/t/p/w780_filter(duotone,ffffff,bababa)/1TjvGVDMYsj6JBxOAkUHpPEwLf7.png",
    },
    {
      name: "Paramount+",
      tag: "Paramount Plus,Paramount+,Paramount Pictures,Paramount Television Studios,CBS Studios,Showtime",
      gradient: "linear-gradient(135deg,#062a5f 0%,#020817 100%)",
      logo: "",
    },
    {
      name: "Peacock",
      tag: "Peacock,NBCUniversal,NBC,Universal Television,Universal Pictures",
      gradient: "linear-gradient(135deg,#221044 0%,#080510 100%)",
      logo: "",
    },
    {
      name: "Crunchyroll",
      tag: "Crunchyroll,Funimation,Aniplex,Toho Animation,MAPPA,Wit Studio,Ufotable,Bones",
      gradient: "linear-gradient(135deg,#3a1d00 0%,#120800 100%)",
      logo: "",
    },
    {
      name: "AMC+",
      tag: "AMC,AMC Plus,AMC+,AMC Studios,BBC America,IFC,SundanceTV,Shudder",
      gradient: "linear-gradient(135deg,#241909 0%,#090604 100%)",
      logo: "",
    },
    {
      name: "Starz",
      tag: "Starz,Lionsgate,Lionsgate Television,Starz Originals",
      gradient: "linear-gradient(135deg,#111111 0%,#000000 100%)",
      logo: "",
    },
    {
      name: "MGM+",
      tag: "MGM Plus,MGM+,Epix,Metro-Goldwyn-Mayer,MGM Television",
      gradient: "linear-gradient(135deg,#33220a 0%,#0d0801 100%)",
      logo: "",
    },
    {
      name: "FX",
      tag: "FX,FXX,FX Productions,FX Networks",
      gradient: "linear-gradient(135deg,#171717 0%,#020202 100%)",
      logo: "",
    },
    {
      name: "BBC",
      tag: "BBC,BBC One,BBC Two,BBC Studios,BBC iPlayer",
      gradient: "linear-gradient(135deg,#101820 0%,#02060a 100%)",
      logo: "",
    },
    {
      name: "ITV",
      tag: "ITV,ITV Studios,ITVX",
      gradient: "linear-gradient(135deg,#1a1f3a 0%,#050711 100%)",
      logo: "",
    },
    {
      name: "Channel 4",
      tag: "Channel 4,Film4,E4,All 4",
      gradient: "linear-gradient(135deg,#143a2a 0%,#04110b 100%)",
      logo: "",
    },
    {
      name: "Sky",
      tag: "Sky,Sky Studios,Sky Atlantic,Sky Cinema,Now TV,NOW",
      gradient: "linear-gradient(135deg,#0a1a3a 0%,#050711 100%)",
      logo: "",
    },
    {
      name: "Canal+",
      tag: "Canal+,Canal Plus,StudioCanal",
      gradient: "linear-gradient(135deg,#151515 0%,#000000 100%)",
      logo: "",
    },
    {
      name: "A24",
      tag: "A24",
      gradient: "linear-gradient(135deg,#202020 0%,#030303 100%)",
      logo: "",
    },
    {
      name: "Warner Bros.",
      tag: "Warner Bros.,Warner Bros. Pictures,Warner Bros. Television,Warner Bros. Animation,New Line Cinema,DC Studios,DC Entertainment",
      gradient: "linear-gradient(135deg,#061832 0%,#02050c 100%)",
      logo: "",
    },
    {
      name: "Universal",
      tag: "Universal Pictures,Universal Television,DreamWorks,DreamWorks Animation,Focus Features,Illumination",
      gradient: "linear-gradient(135deg,#071d3d 0%,#020915 100%)",
      logo: "",
    },
    {
      name: "Sony",
      tag: "Sony Pictures,Sony Pictures Television,Columbia Pictures,TriStar Pictures,Screen Gems,Crunchyroll",
      gradient: "linear-gradient(135deg,#101010 0%,#050505 100%)",
      logo: "",
    },
    {
      name: "20th Century",
      tag: "20th Century Studios,20th Century Fox,Fox Searchlight,Searchlight Pictures",
      gradient: "linear-gradient(135deg,#332108 0%,#080501 100%)",
      logo: "",
    },
    {
      name: "Marvel",
      tag: "Marvel,Marvel Studios,Marvel Entertainment",
      gradient: "linear-gradient(135deg,#300606 0%,#100000 100%)",
      logo: "",
    },
    {
      name: "Lucasfilm",
      tag: "Lucasfilm,Lucasfilm Ltd.,Star Wars",
      gradient: "linear-gradient(135deg,#2a2108 0%,#080601 100%)",
      logo: "",
    },
    {
      name: "National Geographic",
      tag: "National Geographic,National Geographic Documentary Films,Nat Geo",
      gradient: "linear-gradient(135deg,#302300 0%,#090700 100%)",
      logo: "",
    },
    {
      name: "Discovery",
      tag: "Discovery,Discovery Channel,Discovery+,TLC,Animal Planet,Science Channel",
      gradient: "linear-gradient(135deg,#082036 0%,#020812 100%)",
      logo: "",
    },
    {
      name: "History",
      tag: "History,History Channel,A&E,A+E Studios",
      gradient: "linear-gradient(135deg,#2a1606 0%,#090401 100%)",
      logo: "",
    },
    {
      name: "PBS",
      tag: "PBS,Public Broadcasting Service,Masterpiece",
      gradient: "linear-gradient(135deg,#10203a 0%,#030711 100%)",
      logo: "",
    },
    {
      name: "YouTube",
      tag: "YouTube,YouTube Premium,YouTube Originals",
      gradient: "linear-gradient(135deg,#300606 0%,#0f0000 100%)",
      logo: "",
    },
    {
      name: "Tubi",
      tag: "Tubi,Tubi Originals",
      gradient: "linear-gradient(135deg,#271042 0%,#07030d 100%)",
      logo: "",
    },
    {
      name: "The Roku Channel",
      tag: "Roku,Roku Channel,The Roku Channel,Roku Originals",
      gradient: "linear-gradient(135deg,#2d1248 0%,#08020f 100%)",
      logo: "",
    },
    {
      name: "Freevee",
      tag: "Freevee,IMDb TV,Amazon Freevee",
      gradient: "linear-gradient(135deg,#12324a 0%,#030b12 100%)",
      logo: "",
    },
    {
      name: "Shudder",
      tag: "Shudder",
      gradient: "linear-gradient(135deg,#201010 0%,#050202 100%)",
      logo: "",
    },
    {
      name: "Mubi",
      tag: "Mubi",
      gradient: "linear-gradient(135deg,#261b12 0%,#080503 100%)",
      logo: "",
    },
    {
      name: "Criterion",
      tag: "Criterion,The Criterion Collection,Janus Films",
      gradient: "linear-gradient(135deg,#222222 0%,#050505 100%)",
      logo: "",
    },
    {
      name: "Anime",
      tag: "Toei Animation,Studio Ghibli,Madhouse,Kyoto Animation,MAPPA,Wit Studio,Ufotable,Bones,Production I.G,Trigger,CloverWorks,A-1 Pictures",
      gradient: "linear-gradient(135deg,#251236 0%,#090312 100%)",
      logo: "",
    },
  ];

  function injectCSS() {
    if (document.getElementById("jfcr-css")) return;

    const s = document.createElement("style");
    s.id = "jfcr-css";

    s.textContent = `
#custom-rows-wrapper{margin-bottom:20px}
.srow-section{margin:.8em 0 .2em;padding:0 2.5%;width:100%}
.srow-scroll{display:flex;gap:3px;width:100%}
.srow-scroll > .card{margin:0!important;padding:0!important}

.srow-card{flex:1 1 0;min-width:0;max-width:14vw}
.srow-card .cardScalable{position:relative}
.srow-card .cardImageContainer{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}
.srow-card-logo{height:38px;max-width:65%;object-fit:contain;pointer-events:none}
.srow-card-logo.srow-invert{filter:brightness(0) invert(1);height:52px;max-width:75%}
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
