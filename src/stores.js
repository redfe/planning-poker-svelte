import { writable } from "svelte/store";
import { v4 as uuidv4 } from "uuid";

export const estimates = createEstimates();
let socket;
loadScript(
  "https://simple-websocket-server.herokuapp.com/socket.io/socket.io.js",
  () => {
    socket = setupWebsocket(getSetupedRoomId());
    socket.on("do event", (event) => {
      const subscriber = eventSubscribers[event.type];
      if (subscriber) {
        subscriber(event);
      }
    });
  }
);

const eventSubscribers = {
  append: (event) => {
    estimates._append(event.name, event.point);
  },
  remove: (event) => {
    estimates._remove(event.name);
  },
  clear: (event) => {
    estimates._clear();
  },
};

function loadScript(src, callback) {
  let head = document.getElementsByTagName("head")[0];
  let script = document.createElement("script");
  script.src = src;
  head.appendChild(script);
  let done = false;
  script.onload = script.onreadystatechange = () => {
    if (!done) {
      done = true;
      callback();
      script.onload = script.onreadystatechange = null;
      if (head && script.parentNode) {
        head.removeChild(script);
      }
    }
  };
}

function getSetupedRoomId() {
  const search = window.location.search;
  let roomId;
  if (!search) {
    const uuid = uuidv4();
    window.location.hash = uuid;
    window.history.replaceState("", "", "?" + uuid);
    roomId = uuid;
  } else {
    roomId = search.substring(1);
  }
  return roomId;
}

function createEstimates() {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    append: (name, point) => {
      socket.emit("do event", {
        type: "append",
        name: name,
        point: point,
      });
    },
    _append: (name, point) => {
      update((estimates) => {
        let newEstimates = new Array();
        let exist = false;
        for (const estimate of estimates) {
          newEstimates.push(estimate);
          if (estimate.name === name) {
            exist = true;
            estimate.point = point;
          }
        }
        if (!exist) {
          newEstimates.push({ name: name, point: point });
        }
        return newEstimates;
      });
    },
    remove: (name) => {
      socket.emit("do event", {
        type: "remove",
        name: name,
        point: point,
      });
    },
    _remove: (name) => {
      update((estimates) => {
        let newEstimates = [];
        for (const estimate of estimates) {
          if (estimate.name !== name) {
            newEstimates.push(estimate);
          }
        }
        return newEstimates;
      });
    },
    clear: () => {
      socket.emit("do event", {
        type: "clear",
      });
    },
    _clear: () => {
      update((estimates) => []);
    },
  };
}

function setupWebsocket(roomId) {
  return window.io(
    "https://simple-websocket-server.herokuapp.com/?roomId=" + roomId
  );
}
