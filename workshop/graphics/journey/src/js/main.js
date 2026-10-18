/*
    Each scene keeps its own HTML, CSS, and animation timeline.

    The journey director knows only which scene comes next and how long
    the current scene should remain before advancing.
*/
const scenes = [
    {
        src: "../../ancient-gate/src/index.html?v=alien-journey-1",
        title: "Ancient Gate",
        duration: 34000
    },
    {
        src: "../../where-am-i/src/index.html",
        title: "Where Am I?",
        duration: 10000
    },
    {
        src: "../../solar-system/src/index.html",
        title: "Solar System",
        duration: 20000
    },
    {
        src: "../../earth-heart/src/index.html",
        title: "Earth Heart",
        duration: null
    }
];

const sceneFrame = document.querySelector(".journey-scene");

let currentSceneIndex = 0;
let sceneTimer;

/*
    Each iframe load starts the timer belonging to the newly loaded scene.

    A null duration means the final scene remains visible indefinitely.
*/
function scheduleNextScene() {
    window.clearTimeout(sceneTimer);

    const currentScene = scenes[currentSceneIndex];

    if (currentScene.duration === null) {
        return;
    }

    sceneTimer = window.setTimeout(() => {
        currentSceneIndex += 1;

        const nextScene = scenes[currentSceneIndex];

        sceneFrame.src = nextScene.src;
        sceneFrame.title = nextScene.title;
    }, currentScene.duration);
}

sceneFrame.addEventListener("load", scheduleNextScene);
