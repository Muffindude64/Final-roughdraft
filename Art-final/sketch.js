var canvas = document.getElementById("renderCanvas");

var startRenderLoop = function (engine, canvas) {
    engine.runRenderLoop(function () {
        if (sceneToRender && sceneToRender.activeCamera) {
            sceneToRender.render();
        }
    });
}

var engine = null;
var scene = null;
var sceneToRender = null;
var createDefaultEngine = function() { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true,  disableWebGL2Support: false}); };
var createScene = function () {
   
    var scene = new BABYLON.Scene(engine);

    // Need help setting the camera to look striaght foward from this positon, along with help making the camera animate to circle the 3d model
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 15, -15), scene);

    // This targets the camera to scene origin
    // need help here to mamke the camera default to pointing directly at the body
    camera.setTarget(BABYLON.Vector3.Zero());

  
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    light.intensity = 0.8;


// Havent finished coloring the model yet but besides that the model itself is almost done
   var person = placeObject('./', 'character_model.obj',
new BABYLON.Vector3(0, 2, 1), scene, 1,
new BABYLON.Vector3(0, Math.PI, 0));


placeObject('person');

//need help both putting my 2d images into a 3d space and making them animate to move offscreen




    var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 10, height: 6}, scene);

    return scene;
};
        window.initFunction = async function() {
            
            
            var asyncEngineCreation = async function() {
                try {
                return createDefaultEngine();
                } catch(e) {
                console.log("the available createEngine function failed. Creating the default engine instead");
                return createDefaultEngine();
                }
            }

            window.engine = await asyncEngineCreation();
if (!engine) throw 'engine should not be null.';
startRenderLoop(engine, canvas);
window.scene = createScene();};
initFunction().then(() => {sceneToRender = scene                    
});

// Resize
window.addEventListener("resize", function () {
    engine.resize();
});