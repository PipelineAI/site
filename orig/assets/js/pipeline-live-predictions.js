if ( $( "#prediction-stream-a" ).length ) {
  var ws = new WebSocket("ws://predict-tensorflow-mnist-a.community.pipeline.ai:5959/ws/kafka/predictions");
  ws.onmessage = function(event) {
  //        console.log(event);
    eventJson = JSON.parse(event.data)
  //        console.log(document.getElementsByName("prediction-samples"))
    var prediction = '<p/>Date: ' + new Date() + '<p/><b>Prediction: ' + eventJson.outputs + '</b><br/><br/>Image: ' + eventJson.inputs + '<p/><hr/>';
    $('#prediction-stream-a').html(prediction)
  }
}

if ( $( "#prediction-stream-b" ).length ) {
  var ws = new WebSocket("ws://predict-tensorflow-mnist-b.community.pipeline.ai:5959/ws/kafka/predictions");
  ws.onmessage = function(event) {
  //        console.log(event);
    eventJson = JSON.parse(event.data)
  //        console.log(document.getElementsByName("prediction-samples"))
    var prediction = '<p/>Date: ' + new Date() + '<p/><b>Prediction: ' + eventJson.outputs + '</b><br/><br/>Image: ' + eventJson.inputs + '<p/><hr/>';
    $('#prediction-stream-b').html(prediction)
  }
}

if ( $( "#prediction-stream-c" ).length ) {
  var ws = new WebSocket("ws://predict-tensorflow-mnist-c.community.pipeline.ai:5959/ws/kafka/predictions");
  ws.onmessage = function(event) {
  //        console.log(event);
    eventJson = JSON.parse(event.data)
  //        console.log(document.getElementsByName("prediction-samples"))
    var prediction = '<p/>Date: ' + new Date() + '<p/><b>Prediction: ' + eventJson.outputs + '</b><br/><br/>Image: ' + eventJson.inputs + '<p/><hr/>';
    $('#prediction-stream-c').html(prediction)
  }
}