Dropzone.autoDiscover = false;

if ( $( "#dropzone-a" ).length ) {
    var dropzoneA = new Dropzone("#dropzone-a", { url: "http://localhost:9877/api/v1/model/deploy/tensorflow/mnist/a",
                                                  timeout: 120000,
                                                  paramName: "file",
                                                  createImageThumbnails: true,
                                                  clickable: true,
                                                  ignoreHiddenFiles: false,
                                                  //acceptedFiles: ".tar.gz",                                                 
                                                  dictDefaultMessage: "Drop model here!"
                                                  //accept: function(file, done) {
                                                  //   if (file.name.endsWith(".tar.gz")) {
                                                  //       done();
                                                  //   } else {
                                                  //       done("Filename must end with '.tar.gz'.");
                                                  //   }
                                                  //}
                                                });
}

if ( $( "#dropzone-b" ).length ) {
    var dropzoneA = new Dropzone("#dropzone-b", { url: "http://localhost:9877/api/v1/model/deploy/tensorflow/mnist/b",
                                                  timeout: 120000,
                                                  paramName: "file",
                                                  createImageThumbnails: true,
                                                  clickable: true,
                                                  ignoreHiddenFiles: false,
                                                  //acceptedFiles: ".tar.gz",                                                 
                                                  dictDefaultMessage: "Drop model here!"
                                                  //accept: function(file, done) {
                                                  //   if (file.name.endsWith(".tar.gz")) {
                                                  //       done();
                                                  //   } else {
                                                  //       done("Filename must end with '.tar.gz'.");
                                                  //   }
                                                  //}
                                                });
}

if ( $( "#dropzone-c" ).length ) {
    var dropzoneA = new Dropzone("#dropzone-c", { url: "http://localhost:9877/api/v1/model/deploy/tensorflow/mnist/c",
                                                  timeout: 120000,
                                                  paramName: "file",
                                                  createImageThumbnails: true,
                                                  clickable: true,
                                                  ignoreHiddenFiles: false,
                                                  //acceptedFiles: ".tar.gz",                                                 
                                                  dictDefaultMessage: "Drop model here!"
                                                  //accept: function(file, done) {
                                                  //   if (file.name.endsWith(".tar.gz")) {
                                                  //       done();
                                                  //   } else {
                                                  //       done("Filename must end with '.tar.gz'.");
                                                  //   }
                                                  //}
                                                });
}