(function() {

  window.samples.lighted_spinning_textured_cube = {

    initialize: function(canvas) {
      var scene = new THREE.Scene();

      var camera = new THREE.PerspectiveCamera( 30, sample_defaults.width / sample_defaults.height, 1, 1000 );
      camera.position.set(0, 3, 7);
      camera.lookAt( new THREE.Vector3(0,0,0));

      var texture = THREE.ImageUtils.loadTexture('images/checker_large.gif', {}, function() {
        animate();
      });

      var scale = 2.5;
      var geometry = new THREE.CubeGeometry( scale, scale, scale );
      var material = new THREE.MeshPhongMaterial( { map: texture, antialias: true } );

      var mesh = new THREE.Mesh( geometry, material );
      scene.add( mesh );

      var directionalLight = new THREE.DirectionalLight ( 0xffffffff );
      directionalLight.position.set( 0, 3, 7);
      scene.add( directionalLight );

      var renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
      renderer.setSize( sample_defaults.width, sample_defaults.height );

      var instance = { active: false };
      function animate() {
        requestAnimationFrame( animate, canvas );
        if(!instance.active || sample_defaults.paused) return;

        mesh.rotation.y += 0.008;

        renderer.render( scene, camera );
      }

      return instance;
    }
  };
})();
