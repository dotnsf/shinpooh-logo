function shinpooh_logo( element_id, transparent ){
  $('#' + element_id ).html( '<canvas width="660" height="360" id="mycanvas"></canvas>' );

  var canvas = document.getElementById( 'mycanvas' );
  if( !canvas || !canvas.getContext ){
    return false;
  }
  var ctx = canvas.getContext( '2d' );
  ctx.globalCompositeOperation = 'source-over';

  //. 全体を塗りつぶし
  ctx.beginPath();
  ctx.fillStyle = "rgb( 0, 200, 0 )";
  ctx.fillRect( 0, 0, canvas.width, canvas.height );
  ctx.stroke();

  //. 共通属性
  ctx.lineWidth = 1;
  ctx.lineCap = 'round';

  //. 「森」の上の木を一画目の左上から時計回り
  ctx.beginPath();
  ctx.moveTo( 0, 59 );
  ctx.lineTo( 119, 59 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 119, 59 );
  ctx.lineTo( 119, 0 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 119, 0 );
  ctx.lineTo( 240, 0 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 240, 0 );
  ctx.lineTo( 240, 59 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 240, 59 );
  ctx.lineTo( 359, 59 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 359, 59 );
  ctx.lineTo( 359, 119 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 359, 119 );
  ctx.lineTo( 299, 119 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 299, 120 );
  ctx.lineTo( 359, 120 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 359, 120 );
  ctx.lineTo( 359, 179 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 359, 179 );
  ctx.lineTo( 240, 179 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 240, 179 );
  ctx.lineTo( 240, 120 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 239, 120 );
  ctx.lineTo( 239, 179 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 239, 179 );
  ctx.lineTo( 120, 179 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 120, 179 );
  ctx.lineTo( 120, 120 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 119, 120 );
  ctx.lineTo( 119, 179 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 119, 179 );
  ctx.lineTo( 0, 179 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 0, 179 );
  ctx.lineTo( 0, 120 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 0, 120 );
  ctx.lineTo( 60, 120 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 60, 119 );
  ctx.lineTo( 0, 119 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 0, 119 );
  ctx.lineTo( 0, 59 );
  ctx.strokeStyle = 'white';
  ctx.stroke();


  //. 「森」の左の木を一画目の左上から時計回り
  ctx.beginPath();
  ctx.moveTo( 0, 239 );
  ctx.lineTo( 59, 239 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 59, 239 );
  ctx.lineTo( 59, 180 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 59, 180 );
  ctx.lineTo( 120, 180 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 120, 180 );
  ctx.lineTo( 120, 239 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 120, 239 );
  ctx.lineTo( 179, 239 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 179, 239 );
  ctx.lineTo( 179, 299 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 179, 299 );
  ctx.lineTo( 149, 299 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 149, 300 );
  ctx.lineTo( 179, 300 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 179, 300 );
  ctx.lineTo( 179, 359 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 179, 359 );
  ctx.lineTo( 120, 359 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 120, 359 );
  ctx.lineTo( 120, 300 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 119, 300 );
  ctx.lineTo( 119, 359 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 119, 359 );
  ctx.lineTo( 60, 359 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 60, 359 );
  ctx.lineTo( 60, 300 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 59, 300 );
  ctx.lineTo( 59, 359 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 59, 359 );
  ctx.lineTo( 0, 359 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 0, 359 );
  ctx.lineTo( 0, 300 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 0, 300 );
  ctx.lineTo( 30, 300 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 30, 299 );
  ctx.lineTo( 0, 299 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 0, 299 );
  ctx.lineTo( 0, 239 );
  ctx.strokeStyle = 'white';
  ctx.stroke();


  //. 「森」の右の木を一画目の左上から時計回り
  ctx.beginPath();
  ctx.moveTo( 180, 239 );
  ctx.lineTo( 239, 239 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 239, 239 );
  ctx.lineTo( 239, 180 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 239, 180 );
  ctx.lineTo( 300, 180 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 300, 180 );
  ctx.lineTo( 300, 239 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 300, 239 );
  ctx.lineTo( 359, 239 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 359, 239 );
  ctx.lineTo( 359, 299 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 359, 299 );
  ctx.lineTo( 329, 299 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 329, 300 );
  ctx.lineTo( 359, 300 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 359, 300 );
  ctx.lineTo( 359, 359 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 359, 359 );
  ctx.lineTo( 300, 359 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 300, 359 );
  ctx.lineTo( 300, 300 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 299, 300 );
  ctx.lineTo( 299, 359 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 299, 359 );
  ctx.lineTo( 240, 359 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 240, 359 );
  ctx.lineTo( 240, 300 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 239, 300 );
  ctx.lineTo( 239, 359 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 239, 359 );
  ctx.lineTo( 180, 359 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 180, 359 );
  ctx.lineTo( 180, 300 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 180, 300 );
  ctx.lineTo( 210, 300 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 210, 299 );
  ctx.lineTo( 180, 299 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 180, 299 );
  ctx.lineTo( 180, 239 );
  ctx.strokeStyle = 'white';
  ctx.stroke();


  //. 「封」の左上の土の左上から時計回り
  ctx.beginPath();
  ctx.moveTo( 360, 59 );
  ctx.lineTo( 419, 59 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 419, 59 );
  ctx.lineTo( 419, 0 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 419, 0 );
  ctx.lineTo( 480, 0 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 480, 0 );
  ctx.lineTo( 480, 59 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 480, 59 );
  ctx.lineTo( 539, 59 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 539, 59 );
  ctx.lineTo( 539, 119 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 539, 119 );
  ctx.lineTo( 480, 119 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 480, 120 );
  ctx.lineTo( 539, 120 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 539, 120 );
  ctx.lineTo( 539, 179 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 539, 179 );
  ctx.lineTo( 360, 179 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 360, 179 );
  ctx.lineTo( 360, 120 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 360, 120 );
  ctx.lineTo( 420, 120 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 420, 119 );
  ctx.lineTo( 360, 119 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 360, 119 );
  ctx.lineTo( 360, 59 );
  ctx.strokeStyle = 'white';
  ctx.stroke();


  //. 「封」の左下の土の左上から時計回り
  ctx.beginPath();
  ctx.moveTo( 360, 239 );
  ctx.lineTo( 419, 239 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 419, 239 );
  ctx.lineTo( 419, 180 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 419, 180 );
  ctx.lineTo( 480, 180 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 480, 180 );
  ctx.lineTo( 480, 239 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 480, 239 );
  ctx.lineTo( 539, 239 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 539, 239 );
  ctx.lineTo( 539, 299 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 539, 299 );
  ctx.lineTo( 480, 299 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 480, 300 );
  ctx.lineTo( 539, 300 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 539, 300 );
  ctx.lineTo( 539, 359 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 539, 359 );
  ctx.lineTo( 360, 359 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 360, 359 );
  ctx.lineTo( 360, 300 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 360, 300 );
  ctx.lineTo( 420, 300 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 420, 299 );
  ctx.lineTo( 360, 299 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 360, 299 );
  ctx.lineTo( 360, 239 );
  ctx.strokeStyle = 'white';
  ctx.stroke();


  //. 「封」の右の寸の左上から時計回り
  ctx.beginPath();
  ctx.moveTo( 540, 59 );
  ctx.lineTo( 599, 59 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 599, 59 );
  ctx.lineTo( 599, 0 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 599, 0 );
  ctx.lineTo( 659, 0 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 659, 0 );
  ctx.lineTo( 659, 359 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  /*
  ctx.beginPath();
  ctx.moveTo( 660, 59 );
  ctx.lineTo( 720, 59 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 720, 59 );
  ctx.lineTo( 720, 119 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 720, 119 );
  ctx.lineTo( 660, 119 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 660, 119 );
  ctx.lineTo( 660, 359 );
  ctx.strokeStyle = 'black';
  ctx.stroke();
  */

  ctx.beginPath();
  ctx.moveTo( 659, 359 );
  ctx.lineTo( 540, 359 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 540, 359 );
  ctx.lineTo( 540, 299 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 540, 299 );
  ctx.lineTo( 600, 299 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 600, 299 );
  ctx.lineTo( 600, 119 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 600, 119 );
  ctx.lineTo( 540, 119 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 540, 119 );
  ctx.lineTo( 540, 59 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  //. 「寸」の点を左上から
  ctx.beginPath();
  ctx.moveTo( 540, 180 );
  ctx.lineTo( 599, 180 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 599, 180 );
  ctx.lineTo( 599, 240 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 599, 240 );
  ctx.lineTo( 540, 240 );
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo( 540, 240 );
  ctx.lineTo( 540, 180 );
  ctx.strokeStyle = 'white';
  ctx.stroke();

  if( transparent ){
    //ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'rgba( 255, 255, 255, 0.5 )';

    ctx.beginPath();
    ctx.fillRect( 0, 0, 120, 60 );
    ctx.stroke();

    ctx.beginPath();
    ctx.fillRect( 240, 0, 180, 60 );
    ctx.stroke();

    ctx.beginPath();
    ctx.fillRect( 480, 0, 120, 60 );
    ctx.stroke();

    ctx.beginPath();
    ctx.fillRect( 660, 0, 60, 60 );
    ctx.stroke();

    ctx.beginPath();
    ctx.fillRect( 0, 180, 60, 60 );
    ctx.stroke();

    ctx.beginPath();
    ctx.fillRect( 120, 180, 120, 60 );
    ctx.stroke();

    ctx.beginPath();
    ctx.fillRect( 300, 180, 120, 60 );
    ctx.stroke();

    ctx.beginPath();
    ctx.fillRect( 480, 180, 60, 60 );
    ctx.stroke();

    ctx.beginPath();
    ctx.fillRect( 540, 120, 60, 60 );
    ctx.stroke();

    ctx.beginPath();
    ctx.fillRect( 540, 240, 60, 60 );
    ctx.stroke();

    ctx.beginPath();
    ctx.fillRect( 660, 120, 60, 240 );
    ctx.stroke();
    console.log( 1 );
  }

  //. スクロール禁止
  var movefun = function( event ){
    event.preventDefault();
  }
  window.addEventListener( 'touchmove', movefun, { passive: false } );
}

function save(){
  var canvas = document.getElementById( 'mycanvas' );
  if( !canvas || !canvas.getContext ){
    return false;
  }
  var ctx = canvas.getContext( '2d' );

  //. 画像データ
  var png = canvas.toDataURL( 'image/png' );
  png = png.replace( /^.*,/, '' );

  //. バイナリ変換
  var bin = atob( png );
  var buffer = new Uint8Array( bin.length );
  for( var i = 0; i < bin.length; i ++ ){
    buffer[i] = bin.charCodeAt( i );
  }
  var blob = new Blob( [buffer.buffer], {
    type: 'image/png'
  });

  //. フォームにして送信
  console.log( 'Sending data... : ' + blob.size );
  var formData = new FormData();
  formData.append( 'image', blob );    //. <form enctype='multipart/formdata'><input name='image' type='file'/> ...
  formData.append( 'title', title );
  if( o_id ){
    formData.append( '_id', o_id );
  }
  $.ajax({
    type: 'POST',
    url: '/image',
    data: formData,
    contentType: false,
    processData: false,
    success: function( data, dataType ){
      console.log( data );

      var id = data.id;
      location.href = './doodle/' + id;
      //location.href = '/';
    },
    error: function( jqXHR, textStatus, errorThrown ){
      console.log( textStatus + ': ' + errorThrown );
    }
  });

  //. copy to clipboard
  try{
    navigator.clipboard.write([
      new ClipboardItem({
        'image/png': blob
      })
    ]);
  }catch( err ){
    console.log( err );
  }
}
