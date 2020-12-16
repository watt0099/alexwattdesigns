// Script stops video from playing when modal is closed

  $("#demo").on('hidden.bs.modal', function (e) {
    $("#demo iframe").attr("src", $("#demo iframe").attr("src"));
  });

  $("#fall").on('hidden.bs.modal', function (e) {
    $("#fall iframe").attr("src", $("#fall iframe").attr("src"));
  });

  $("#grade").on('hidden.bs.modal', function (e) {
    $("#grade iframe").attr("src", $("#grade iframe").attr("src"));
  });

  $("#truffles").on('hidden.bs.modal', function (e) {
    $("#truffles iframe").attr("src", $("#truffles iframe").attr("src"));
  });

