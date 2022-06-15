import * as THREE from "three";

declare const THREEx: any;

export class AR {
  constructor(){
    this.init();
  }

  clock:THREE.Clock;
  scene:THREE.Scene;
  camera:THREE.Camera;

  renderer: THREE.WebGLRenderer;
  arToolkitContext: any; // THREEx.ArToolkitContext
  arToolkitSource: any; // THREEx.ArToolkitSource
  mixer: THREE.AnimationMixer;

  totalTime:number;

  init() {
    // clockの初期化
    this.clock = new THREE.Clock();

    // sceneの初期化
    this.scene = new THREE.Scene();

    // vameraを初期化し、sceneにcameraを追加
    this.camera = new THREE.Camera();
    this.scene.add(this.camera);

    this.totalTime = 0;

    // レンダーの設定
    this.renderer = new THREE.WebGLRenderer({
      antialias : true,
      alpha: true
    });
    this.renderer.setClearColor(new THREE.Color('lightgrey'), 0)
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.domElement.style.position = 'absolute';
    this.renderer.domElement.style.top = '0px';
    this.renderer.domElement.style.left = '0px';

    document.body.appendChild(this.renderer.domElement);

    // ARを利用するためのカメラのプロファイルを読み込み
    this.arToolkitContext = new THREEx.ArToolkitContext({
      cameraParametersUrl: '/media-exp-ts/camera_para.dat',
      // detectionMode: 'mono'
    }),

    this.arToolkitContext.init(() => {
      // 射影行列をコピー
      this.camera.projectionMatrix.copy(this.arToolkitContext.getProjectionMatrix());
    });

    // リサイズを行う関数
    let me = this;
    function handleResize() {
      me.arToolkitSource.onResize();
      me.arToolkitSource.copySizeTo(me.renderer.domElement);

      if ( me.arToolkitContext.arController !== null ) {
        me.arToolkitSource.copySizeTo(me.arToolkitContext.arController.canvas)	
      }	
    }

    // webカメラの選択
    this.arToolkitSource = new THREEx.ArToolkitSource({
      sourceType : 'webcam',
      /* 'webcam'(ウェブカメラ), 'image'(画像), 'video'(動画) */
    })

    // 初期化により、ArToolkitSourceオブジェクト(ウェブカメラ)が描画される。
    this.arToolkitSource.init(() => {
      let count:number = 0;
      const interval = setInterval(() =>{
        if( ++count > 10 ) clearInterval(interval);
        handleResize();
      }, 700)
    });

    // ウィンドウのサイズが変わったとき、リサイズを自動で行う
    window.addEventListener('resize', () => {
      handleResize();
    });

    const markerRoot = new THREE.Group;
    this.scene.add(markerRoot);

    // ARマーカーに関する設定を行う
    const arMarkerControls = new THREEx.ArMarkerControls(this.arToolkitContext, markerRoot, {
      type: 'pattern',
      patternUrl: '/media-exp-ts/3Dmarker/hiro.patt',
      changeMatrixMode: 'modelViewMatrix',
    });

    // 立方体オブジェクトの表示
    let geometry1	= new THREE.BoxBufferGeometry(1,1,1);
    let material1	= new THREE.MeshNormalMaterial({
      transparent: false,
      opacity: 0.5,
    });

    let cubeMesh = new THREE.Mesh(geometry1, material1);
    cubeMesh.position.y = 0.5;

    markerRoot.add(cubeMesh);

    this.animate();
  }

  update() {
    if (this.arToolkitSource.ready) {
      this.arToolkitContext.update(this.arToolkitSource.domElement);
    }
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  // 画面更新関数(animate)を描画タイミングごとに呼び出し
  animate() {
    requestAnimationFrame(this.animate.bind(this));
    let deltaTime = this.clock.getDelta();
    this.totalTime += deltaTime;
    this.update();
    this.render();
  }
}
