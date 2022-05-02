var canvas = document.getElementById("renderCanvas");

var startRenderLoop = function (engine, canvas) {
    engine.runRenderLoop(function () {
        if (sceneToRender && sceneToRender.activeCamera) {
            sceneToRender.render();
        }
    });
}

let animation1
let animation2
let animation3

var engine = null;
var scene = null;
var sceneToRender = null;
var createDefaultEngine = function() { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true,  disableWebGL2Support: false}); };
var createScene = function () {
   
    var scene = new BABYLON.Scene(engine);

    // Need help setting the camera to look striaght foward from this positon, along with help making the camera animate to circle the 3d model
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(-0.5, 3, -20), scene);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

// camera movement

    // var campos = new BABYLON.Vector3(0, 0, 0);
    // var camrot = new BABYLON.Vector3(0, 10, 0);
    // var anims = animate([{ obj: camera, prop: 'position', val: campos, dims:['x', 'y', 'z']}, 
    //     { obj: camera, prop: 'rotation', val: camrot, dims:['x', 'y', 'z']}], scene);

    // This targets the camera to scene origin
    // need help here to mamke the camera default to pointing directly at the body
    // camera.setTarget(BABYLON.Vector3.Zero());

  
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    light.intensity = 0.8;



placeGlb('./', 'character_model_final.glb', scene);



//need help both putting my 2d images into a 3d space and making them animate to move offscreen


var mat1 = new BABYLON.StandardMaterial("");
    mat1.diffuseTexture = new BABYLON.Texture("IMG-5810.jpg");

    var f1 = new BABYLON.Vector4(0,0, 1, 1); // front image = half the whole image along the width 

    var plane1 = BABYLON.MeshBuilder.CreatePlane("plane1", {frontUVs: f1, sideOrientation: BABYLON.Mesh.DOUBLESIDE, size: 15, width: 15, height: 15});
    plane1.material = mat1;


    plane1.position.y = 2;
    plane1.position.x = -1;
    plane1.position.z = -2.2;


var mat2 = new BABYLON.StandardMaterial("");
    mat2.diffuseTexture = new BABYLON.Texture("IMG-5812.jpg");

    var f2 = new BABYLON.Vector4(0,0, 1, 1); // front image = half the whole image along the width 

    var plane2 = BABYLON.MeshBuilder.CreatePlane("plane2", {frontUVs: f2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, size: 15, width: 15, height: 15});
    plane2.material = mat2;


    plane2.position.y = 2;
    plane2.position.x = -1;
    plane2.position.z = -2.1;

var mat3 = new BABYLON.StandardMaterial("");
    mat3.diffuseTexture = new BABYLON.Texture("IMG-5814.jpg");

    var f3 = new BABYLON.Vector4(0,0, 1, 1); // front image = half the whole image along the width 

    var plane3 = BABYLON.MeshBuilder.CreatePlane("plane3", {frontUVs: f3, sideOrientation: BABYLON.Mesh.DOUBLESIDE, size: 15, width: 15, height: 15});
    plane3.material = mat3;


    plane3.position.y = 2;
    plane3.position.x = -1;
    plane3.position.z = -2;





    var move_plane1 = {obj: plane1, prop: 'position', val: new BABYLON.Vector3(-5, 2, -2.2), dims: ['x', 'y', 'z']};
    var move_plane2 = {obj: plane2, prop: 'position', val: new BABYLON.Vector3(5, 2, -2.1), dims: ['x', 'y', 'z']};
    var move_plane3 = {obj: plane3, prop: 'position', val: new BABYLON.Vector3(-5, 2, -2), dims: ['x', 'y', 'z']};



var anim1 = document.getElementById('renderCanvas').addEventListener('click', 
        function(){
            animate(animation1, scene, 1);
        });

var anim2 = document.getElementById('renderCanvas').addEventListener('click', 
        function(){
            animate(animation2, scene, 1);
        });

var anim3 = document.getElementById('renderCanvas').addEventListener('click', 
        function(){
            animate(animation3, scene, 1);
        });



    //  var  animation1 = [];
    // animation1.push(move_plane1);

    // var  animation2 = [];
    // animation2.push(move_plane2);

    // var  animation3 = [];
    // animation3.push(move_plane3);

if (plane1.position.x = -1) { 
    var  animation1 = [];
    animation1.push(move_plane1)}

else if (plane1.position.x < -5) {
    let (move_plane1 = move_plane2)};

// else if (plane2.position.x = 5) {
//     var  animation3 = [];
//     animation3.push(move_plane3)};

 // if (plane1.position.x = -1) then {anim1 = anim1}
 //    else if 
 //        (plane1.position.x = -5) then {anim1 = anim2}
 //    else if 
 //        (plane2.position.x = 5) then {anim1 = anim2}

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

function placeGlb(folder, file,  scene){
    let load = BABYLON.SceneLoader.ImportMesh(
        null,
         folder,
        file,
        scene,
        function (meshes) {
           for (const mesh of meshes) {
         
            if(wrap_color){
                var mat = new BABYLON.StandardMaterial("material", scene);
                mat.diffuseColor = wrap_color;
                mesh.material = mat;
            }
       
           }


    });

}