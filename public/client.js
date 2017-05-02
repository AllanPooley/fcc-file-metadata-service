var $fileInput = $('.file-input')
var $fileUploadLabel = $('.file-label');
var $fileSubmitBtn = $('.file-submit');

$fileInput.on('change', function() {
    var fileName = '';
    
    if (this.files && this.files.length > 1) {
        fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
    } else {
        fileName = this.value.split('\\').pop();
    }
    
    if (fileName) {
        $fileUploadLabel.text(fileName);
    } else {
        $fileUploadLabel.text('Choose a file');
    }
});

$fileSubmitBtn.on('click', function() {
    if ($fileInput.files) {
        
        var totalFileSize = 0;
        
        for (var i = 0; i <= $fileInput.files.length; i++)
            {
                var currFileSize = $fileInput.files.item(i).size;
                totalFileSize = totalFileSize + currFileSize;
            }
        
        var data = {
            fileSize: totalFileSize
        }
        
        $http.post('/feel', data);
            
    }
});