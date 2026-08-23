(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // index.ts
  var index_exports = {};
  __export(index_exports, {
    default: () => index_default
  });
  var { findByProps } = vendetta.metro;
  var { FluxDispatcher } = vendetta.metro.common;
  var { before } = vendetta.patcher;
  var MessageActions = findByProps("sendMessage", "editMessage");
  var wordMap = {
    mr: "mistuh",
    dog: "doggo",
    cat: "kitteh",
    hello: "henwo",
    hell: "heck",
    fuk: "fwik",
    shit: "shoot",
    friend: "fwend",
    stop: "stawp",
    god: "gosh",
    dick: "peepee",
    penis: "peepee",
    damn: "darn",
    bitch: "bich",
    cum: "milky",
    bullshit: "bullshoot",
    something: "sumthin",
    anyway: "anywayze",
    anyways: "anywayze",
    ok: "oki",
    okay: "okay dokay",
    car: "vroom",
    brother: "bwoddah",
    bro: "bwo"
  };
  var prefixes = [
    "OwO",
    "*nuzzles*",
    "*waises paw*",
    "*blushes*",
    "*giggles*",
    "hehe"
  ];
  var suffixes = [
    "(\uFF89\xB4 \u0437 `)\u30CE",
    "( \xB4 \u25BD ` ).\uFF61\uFF4F\u2661",
    "(\xB4,,\u2022\u03C9\u2022,,)\u2661",
    "(*\u2267\u25BD\u2266)",
    "( \uFF9F\u2200 \uFF9F)",
    "( \u30FB \u032B\u30FB)",
    "( \u2022\u0301 .\u032B \u2022\u0300 )",
    "(\u25B0\u02D8v\u02D8\u25B0)",
    "(\u30FB\u03C9\u30FB)",
    "\u273E(\u301C \u260C\u03C9\u260C)\u301C\u273E",
    "(\u15D2\u15E8\u15D5)",
    "(\u30FB`\u03C9\xB4\u30FB)",
    ":3",
    ">:3",
    "hehe",
    "xox",
    ">3<",
    "UwU",
    "*gwomps*",
    "\xF2w\xF3",
    "\xF9w\xFA",
    ";w;",
    "U~U",
    "(\u25CF\xB4\u03C9\uFF40\u25CF)",
    "(UwU)",
    "(>///<)",
    "\u2727(/\u25BD\uFF3C*)",
    "( \u0E51>\u03C9<\u0E51 )",
    "(\u3063\u02D8\u03C9\u02D8\u03C2)",
    "OwO"
  ];
  var questionEnds = [" nya?", " wuh?", "?? >w<", "?? *tilts head*", " :3?"];
  var protectedFaces = [
    "owo",
    "uwu",
    "\xF2w\xF3",
    "\xF9w\xFA",
    ":3",
    ">:3",
    "u~u",
    "xox",
    ">3<",
    "qwq",
    "(uwu)"
  ];
  function generateKeysmash() {
    const chars = "asdfghjklqwertyuiopzxcvbnm";
    let smash = "";
    let lastChar = "";
    for (let i = 0; i < Math.floor(Math.random() * 10) + 8; i++) {
      let char;
      do {
        char = chars[Math.floor(Math.random() * chars.length)];
      } while (char === lastChar);
      smash += char;
      lastChar = char;
    }
    return smash;
  }
  function processTextSegment(text) {
    if (!text) return text;
    const trimmedText = text.trim();
    if (trimmedText.startsWith("http://") || trimmedText.startsWith("https://") || /^<@[!&]?\d+>$/.test(trimmedText) || // Matches user/role mentions like <@123456>
    /^<#\d+>$/.test(trimmedText)) {
      return text;
    }
    let addedPrefix = false;
    let addedSuffix = false;
    if (Math.random() < 0.08) {
      text = `${prefixes[Math.floor(Math.random() * prefixes.length)]} ${text}`;
      addedPrefix = true;
    }
    if (Math.random() < 0.15) {
      const pickedSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
      text = `${text} ${pickedSuffix}`;
      addedSuffix = true;
    }
    const hasPunctuation = /[?!]/.test(text);
    if (!addedPrefix && !addedSuffix && !hasPunctuation && Math.random() < 0.1) {
      const isAsteriskStyle = Math.random() < 0.5;
      text = `${text} __RAWR_PROTECTED_${isAsteriskStyle ? "ASTERISK" : "PLAIN"}__`;
    }
    const words = text.split(" ");
    const isAllCaps = text === text.toUpperCase() && /[A-Z]/.test(text);
    const processedWords = words.map((word) => {
      if (!word) return word;
      if (word.startsWith("http://") || word.startsWith("https://") || word.startsWith("<@") || word.startsWith("<#")) return word;
      if (word.startsWith("__RAWR_PROTECTED_")) return word;
      const cleanCheck = word.toLowerCase().trim();
      if (protectedFaces.includes(cleanCheck) || /^[:;>=\-~()\[\]{}*^._+wWoOxX03qQ]+$/.test(word) && !/[a-zA-Z]{4,}/.test(word)) {
        return word;
      }
      let stutterPrefix = "";
      const stutterClean = word.replace(/^[*(\[~]+/, "");
      if (Math.random() < 0.2 && stutterClean.length >= 2 && /^[a-zA-Z]/.test(stutterClean)) {
        let firstChar = word.match(/[a-zA-Z]/)?.[0] || "";
        if (firstChar === "r" || firstChar === "l") firstChar = "w";
        if (firstChar === "R" || firstChar === "L") firstChar = "W";
        stutterPrefix = `${firstChar}-`;
      }
      const cleanWord = word.toLowerCase().replace(/[^a-z]/g, "");
      if (wordMap[cleanWord]) {
        const mapped = wordMap[cleanWord];
        word = word.replace(new RegExp(cleanWord, "i"), word === word.toUpperCase() ? mapped.toUpperCase() : mapped);
      }
      const hiMatch = word.match(/^([*(\[~]*)(hi+)([*(\[~]*)$/i);
      if (hiMatch) {
        const leadingPunct = hiMatch[1];
        const hiText = hiMatch[2];
        const trailingPunct = hiMatch[3];
        const isWordCaps = hiText === hiText.toUpperCase();
        const base = isWordCaps ? "HAI" : "hai";
        const extraIs = hiText.length - 1;
        const repeatedIs = isWordCaps ? "I".repeat(extraIs) : "i".repeat(extraIs);
        const exclamationCount = Math.min(extraIs + 1, 4);
        const exclamationTrain = "!".repeat(exclamationCount);
        word = `${leadingPunct}${base}${repeatedIs}~${exclamationTrain}${trailingPunct}`;
      } else {
        if (cleanWord.length === 1 && (cleanWord === "r" || cleanWord === "l")) {
        } else {
          word = word.replace(/what's/gi, "wat's").replace(/whats/gi, "waatts").replace(/what/gi, "waattt?").replace(/over/g, "ovah").replace(/Over/g, "Ovah").replace(/OVER/g, "OVAH").replace(/love/g, "wuv").replace(/Love/g, "Wuv").replace(/LOVE/g, "WUV").replace(/loving/g, "wuving").replace(/Loving/g, "Wuving").replace(/LOVING/g, "WUVING").replace(/fuck/gi, "fwick").replace(/FUCK/gi, "FWICK").replace(/ing\b/gi, (match) => {
            const isIngCaps = match === match.toUpperCase();
            if (Math.random() < 0.5) {
              return isIngCaps ? "IN'" : "in'";
            }
            return match;
          }).replace(
            /\b(?=.*[aeiou])(?=[a-vx-z])[a-z]{4,}y\b/gi,
            (match) => `${match} ${match.charCodeAt(0) < 97 ? "W" : "w"}${match.match(/.[aeiouy].*/i)?.[0]?.slice(1) || "y"}`
          ).replace(/(?:r|l)/g, "w").replace(/(?:R|L)/g, "W").replace(/no/g, "nyo").replace(/No/g, "Nyo").replace(/NO/g, "NYO").replace(/ni/g, "nyi").replace(/Ni/g, "Nyi").replace(/NI/g, "NYI").replace(/nu/g, "nyu").replace(/Nu/g, "Nyu").replace(/NU/g, "NYU").replace(/ne/g, "nye").replace(/Ne/g, "Nye").replace(/NE/g, "NYE").replace(/na(?![a-zA-Z!])/g, "nya~").replace(/Na(?![a-zA-Z!])/g, "Nya~~").replace(/NA(?![a-zA-Z!])/g, "NYA~!!").replace(/na/g, "nya").replace(/Na/g, "Nya").replace(/NA/g, "NYA");
        }
      }
      if (stutterPrefix) {
        const firstChar = word.match(/[a-zA-Z]/)?.[0] || "";
        const insertionIndex = word.indexOf(firstChar);
        word = word.slice(0, insertionIndex) + stutterPrefix + word.slice(insertionIndex);
      }
      return word;
    });
    let result = processedWords.join(" ");
    result = result.replace(/[?!]+/g, (match) => {
      const hasExclaim = match.includes("!");
      const hasQuestion = match.includes("?");
      if (hasExclaim && hasQuestion) {
        const randomFace = suffixes[Math.floor(Math.random() * suffixes.length)];
        const randomQ = questionEnds[Math.floor(Math.random() * questionEnds.length)];
        return `~! ${randomFace} ${randomQ}`;
      } else if (hasExclaim) {
        const randomFace = suffixes[Math.floor(Math.random() * suffixes.length)];
        return `~${match} ${randomFace}`;
      } else {
        if (Math.random() < 0.6) {
          return questionEnds[Math.floor(Math.random() * questionEnds.length)];
        }
        return match;
      }
    });
    if (isAllCaps && Math.random() < 0.4) result += generateKeysmash().toUpperCase();
    result = result.replace(/__RAWR_PROTECTED_ASTERISK__/g, isAllCaps ? "*RAWR*" : "*rawr*").replace(/__RAWR_PROTECTED_PLAIN__/g, isAllCaps ? "RAWR" : "rawr");
    return result;
  }
  function owoify(text) {
    if (!text) return text;
    const parts = text.split(/(?<!https?:)\/\//i);
    const processedParts = parts.map((part, index) => {
      if (index % 2 !== 0) {
        return `//${part}//`;
      }
      return processTextSegment(part);
    });
    const finalOutput = processedParts.join("");
    return finalOutput.replace(/\/\/\/\//g, "//");
  }
  function receiveMessagePatch(data) {
    if (data?.message?.content) {
      data.message.content = owoify(data.message.content);
    }
  }
  var unpatchSendMessage;
  function onLoad() {
    if (MessageActions) {
      unpatchSendMessage = before("sendMessage", MessageActions, (args) => {
        const messagePayload = args[1];
        if (messagePayload && typeof messagePayload === "object" && messagePayload.content) {
          messagePayload.content = owoify(messagePayload.content);
        }
      });
    }
    FluxDispatcher.subscribe("MESSAGE_CREATE", receiveMessagePatch);
  }
  function onUnload() {
    unpatchSendMessage?.();
    FluxDispatcher.unsubscribe("MESSAGE_CREATE", receiveMessagePatch);
  }
  var index_default = { onLoad, onUnload };
  return __toCommonJS(index_exports);
})();
