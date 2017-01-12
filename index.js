var dragDrop = require('drag-drop')

dragDrop('#drop', function(files) {
    console.log(JSON.stringify(files))
});